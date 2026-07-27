export default function Footer() {
  return (
    <footer className="border-t border-line py-12">
      <div className="max-w-[1280px] mx-auto px-10 max-sm:px-6 flex justify-between items-start gap-6 flex-wrap max-sm:flex-col">
        <div className="flex items-center gap-2.5">
          <img src="/logo.png" alt="" width={28} height={28} className="size-7 object-contain" aria-hidden />
          <div>
            <p className="text-[15px] font-medium tracking-tight">Godspower Ufot</p>
            <p className="text-sm text-muted mt-1">Frontend Engineer &amp; Blockchain Developer</p>
          </div>
        </div>
        <div className="text-right max-sm:text-left text-sm text-muted">
          <span className="block">Built with React</span>
          <span className="block mt-1">© 2026</span>
        </div>
      </div>
    </footer>
  );
}
