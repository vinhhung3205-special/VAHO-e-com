import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';

// Mock fetching listing data
const getListing = (id: string) => ({
  id,
  title: "Bình Rót Cà Phê 'Hạt Sương'",
  brand: "Gốm Hiên",
  brandId: "gom-hien",
  price: 850000,
  images: [
    "https://images.unsplash.com/photo-1576717585968-8ea8166b8908?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=1600&auto=format&fit=crop"
  ],
  type: "PHYSICAL",
  story: `Lấy cảm hứng từ những giọt sương đọng trên lá sen vào buổi sớm tại Làng cổ Bát Tràng, 
          chiếc bình rót 'Hạt Sương' mang trong mình vẻ đẹp của sự tĩnh lặng. 
          Khác với những sản phẩm công nghiệp, mỗi chiếc bình được vuốt hoàn toàn bằng tay, 
          tráng một lớp men tro trấu tự nhiên mỏng nhẹ, giữ nguyên độ nhám mộc mạc của cốt đất.`,
  details: {
    material: "Đất sét đen Bát Tràng, Men tro cổ",
    technique: "Vuốt tay thủ công",
    origin: "Bát Tràng, Hà Nội",
    dimensions: "Cao 15cm x Rộng 8cm"
  }
});

export default function ListingDetailPage({ params }: { params: { id: string } }) {
  const listing = getListing(params.id);

  return (
    <>
      <Navbar />
      <main className="flex-1 bg-white">
        <div className="container mx-auto px-6 py-12 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* IMAGE GALLERY */}
          <div className="space-y-6">
            {listing.images.map((img, index) => (
              <div key={index} className="w-full bg-do_paper cursor-zoom-in">
                <img src={img} alt={`${listing.title} - ảnh ${index+1}`} className="w-full h-auto object-cover" />
              </div>
            ))}
          </div>

          {/* PRODUCT INFO */}
          <div className="sticky top-28 h-auto self-start">
            <Link href={`/store/${listing.brandId}`} className="text-gray-500 font-medium text-sm hover:text-cinnabar transition-colors flex items-center gap-2 mb-4">
              <span>Thương hiệu</span>
              <span className="w-4 h-[1px] bg-gray-400"></span>
              <span className="text-charcoal uppercase tracking-wider">{listing.brand}</span>
            </Link>
            
            <h1 className="font-serif text-4xl mb-6 text-charcoal leading-tight">
              {listing.title}
            </h1>
            
            <p className="text-2xl font-light text-gray-800 mb-10">
              {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(listing.price)}
            </p>

            <button className="w-full bg-charcoal text-ivory py-4 text-sm font-semibold tracking-wider hover:bg-black transition-colors mb-4">
              Thêm vào giỏ
            </button>

            {/* ARTISANAL STORY */}
            <div className="mt-16 hairline-border-t pt-10">
              <h3 className="font-serif text-xl mb-4 text-charcoal">Câu chuyện tác phẩm</h3>
              <p className="text-gray-600 leading-relaxed font-light mb-8">
                {listing.story}
              </p>
              
              <h3 className="font-serif text-xl mb-4 text-charcoal flex items-center gap-4">
                Thông tin chi tiết
                <span className="flex-1 hairline-border-t mt-1"></span>
              </h3>
              <ul className="space-y-4 text-sm text-gray-600 font-light">
                <li className="flex justify-between">
                  <span className="text-gray-400">Chất liệu</span>
                  <span className="text-right">{listing.details.material}</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-400">Kỹ thuật</span>
                  <span className="text-right">{listing.details.technique}</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-400">Kích thước</span>
                  <span className="text-right">{listing.details.dimensions}</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-400">Xuất xứ</span>
                  <span className="text-right">{listing.details.origin}</span>
                </li>
              </ul>
            </div>
            
            <div className="mt-12 hairline-border-t pt-8">
               <div className="bg-do_paper p-6 flex flex-col items-center text-center">
                  <img src="https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=200&auto=format&fit=crop" alt={listing.brand} className="w-16 h-16 rounded-full object-cover mb-4" />
                  <h4 className="font-serif text-lg mb-2">Được tạo ra bởi {listing.brand}</h4>
                  <p className="text-xs text-gray-500 mb-4 max-w-xs">Gốm Hiên là xưởng gốm thủ công nhỏ tại ven sông Hồng, chuyên tâm vào việc khôi phục màu men cổ.</p>
                  <Link href={`/store/${listing.brandId}`} className="text-xs font-bold uppercase tracking-widest text-charcoal font-medium border-b border-charcoal pb-1 hover:text-cinnabar transition-colors">Ghé thăm gian hàng</Link>
               </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
