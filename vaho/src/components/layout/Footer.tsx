import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-charcoal text-ivory pt-20 pb-10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 hairline-border-b border-gray-600 pb-12">
        <div className="md:col-span-1">
          <Link href="/" className="font-serif text-3xl mb-4 block">VaHo</Link>
          <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
            Curated Cultural Commerce. <br />
            Mỗi món đồ là một câu chuyện. Trải nghiệm tinh hoa nghệ thuật và thủ công đương đại Việt Nam.
          </p>
        </div>
        <div>
          <h4 className="font-serif text-lg mb-4 text-white">Khám phá</h4>
          <ul className="space-y-3 text-sm text-gray-400">
            <li><Link href="/gifts" className="hover:text-white transition-colors">Quà tặng</Link></li>
            <li><Link href="/ceramics" className="hover:text-white transition-colors">Gốm sứ</Link></li>
            <li><Link href="/tickets" className="hover:text-white transition-colors">Sự kiện & Workshop</Link></li>
            <li><Link href="/journal" className="hover:text-white transition-colors">Editorial</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-serif text-lg mb-4 text-white">Hỗ trợ</h4>
          <ul className="space-y-3 text-sm text-gray-400">
            <li><Link href="/faq" className="hover:text-white transition-colors">Câu hỏi thường gặp</Link></li>
            <li><Link href="/shipping" className="hover:text-white transition-colors">Vận chuyển</Link></li>
            <li><Link href="/returns" className="hover:text-white transition-colors">Đổi trả</Link></li>
            <li><Link href="/contact" className="hover:text-white transition-colors">Liên hệ</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-serif text-lg mb-4 text-white">Trở thành Người bán</h4>
          <p className="text-sm text-gray-400 mb-4">Mở gian hàng và kể câu chuyện thương hiệu của bạn cùng những người có gu.</p>
          <Link href="/sell" className="inline-block border border-gray-500 text-white px-5 py-2.5 text-sm hover:bg-white hover:text-charcoal transition-colors">
            Đăng ký tham gia
          </Link>
        </div>
      </div>
      <div className="container mx-auto px-6 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
        <p>&copy; 2026 VaHo Commerce. Bản quyền thuộc về các nghệ nhân và nhà sáng tạo.</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <Link href="/privacy" className="hover:text-white">Chính sách bảo mật</Link>
          <Link href="/terms" className="hover:text-white">Điều khoản sử dụng</Link>
        </div>
      </div>
    </footer>
  );
}
