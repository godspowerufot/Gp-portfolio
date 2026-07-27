import { useEffect, useRef } from 'react';

const TRAIL = 6;

export default function CursorFollower() {
  const ringRef = useRef(null);
  const pathRef = useRef(null);
  const rafRef = useRef(0);
  const mouse = useRef({ x: -200, y: -200 });
  const pos = useRef({ x: -200, y: -200 });
  const trail = useRef(Array.from({ length: TRAIL }, () => ({ x: -200, y: -200 })));
  const visible = useRef(false);

  useEffect(() => {
    const finePointer = window.matchMedia('(pointer: fine)').matches;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!finePointer || reduced) return;

    document.documentElement.classList.add('has-cursor-follower');

    const onMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;

      if (!visible.current) {
        visible.current = true;
        pos.current.x = e.clientX;
        pos.current.y = e.clientY;
        trail.current = trail.current.map(() => ({ x: e.clientX, y: e.clientY }));
        if (ringRef.current) ringRef.current.style.opacity = '1';
        if (pathRef.current) pathRef.current.style.opacity = '0.9';
      }
    };

    const onLeave = () => {
      visible.current = false;
      if (ringRef.current) ringRef.current.style.opacity = '0';
      if (pathRef.current) pathRef.current.style.opacity = '0';
    };

    const tick = () => {
      pos.current.x += (mouse.current.x - pos.current.x) * 0.78;
      pos.current.y += (mouse.current.y - pos.current.y) * 0.78;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0) translate(-50%, -50%)`;
      }

      const points = trail.current;
      points[0].x += (mouse.current.x - points[0].x) * 0.9;
      points[0].y += (mouse.current.y - points[0].y) * 0.9;
      for (let i = 1; i < TRAIL; i++) {
        const ease = 0.7 - i * 0.05;
        points[i].x += (points[i - 1].x - points[i].x) * ease;
        points[i].y += (points[i - 1].y - points[i].y) * ease;
      }

      if (pathRef.current) {
        pathRef.current.setAttribute(
          'd',
          points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x.toFixed(1)} ${p.y.toFixed(1)}`).join(' ')
        );
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    document.addEventListener('mouseleave', onLeave);
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      document.documentElement.classList.remove('has-cursor-follower');
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseleave', onLeave);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-9999 max-md:hidden" aria-hidden>
      <svg className="absolute inset-0 w-full h-full overflow-visible">
        <path
          ref={pathRef}
          className="cursor-stroke"
          fill="none"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0"
          style={{ transition: 'opacity 0.15s ease' }}
        />
      </svg>

      <div
        ref={ringRef}
        className="absolute top-0 left-0 size-7 rounded-full border border-ink will-change-transform opacity-0"
        style={{ transition: 'opacity 0.15s ease' }}
      >
        <span className="absolute inset-1/2 size-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-ink" />
      </div>
    </div>
  );
}
