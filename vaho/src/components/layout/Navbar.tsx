import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-do_paper/90 backdrop-blur-md hairline-border-b">
      <div className="container mx-auto px-6 h-18 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="font-serif text-2xl tracking-tight font-medium text-charcoal">VaHo</Link>
          <nav className="hidden md:flex gap-6 mt-1">
            <Link href="/shop" className="text-sm font-medium hover:text-cinnabar transition-colors">Tác phẩm</Link>
            <Link href="/workshops" className="text-sm font-medium hover:text-cinnabar transition-colors">Workshop & Trải nghiệm</Link>
            <Link href="/journal" className="text-sm font-medium hover:text-cinnabar transition-colors">Câu chuyện</Link>
          </nav>
        </div>

        <div className="flex items-center gap-6">
          <button className="text-sm font-medium hidden sm:block">Tìm kiếm</button>
          <button className="text-sm font-medium">Đăng nhập</button>
          <button className="text-sm font-medium bg-charcoal text-ivory px-4 py-2 hover:bg-black transition-colors">Giỏ hàng (0)</button>
        </div>
      </div>
    </header>
  );
}
