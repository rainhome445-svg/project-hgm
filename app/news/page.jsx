import SlimHeader from '../../components/SlimHeader';
import Footer from '../../components/Footer';

export default function NewsPage() {
  return (
    <>
      <SlimHeader />
      <main className="max-w-[1200px] mx-auto px-4 lg:px-0 py-10">
        {/* Section Header */}
        <div className="mb-10 border-b border-black pb-4">
          <h2 className="text-4xl md:text-5xl font-bold serif tracking-tight">Kabar Terkini</h2>
          <p className="text-gray-500 mt-2 text-sm">Analisis tajam dan berita mendalam seputar teknologi dan finansial.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Content: Dense News Feed */}
          <div className="lg:col-span-8 space-y-8">

            {/* Featured News (Large) */}
            <article className="group cursor-pointer mb-12">
              <div className="overflow-hidden rounded-xl mb-4 bg-gray-100 relative">
                <img src="https://images.unsplash.com/photo-1639762681485-074b7f4ec651?q=80&w=1200&auto=format&fit=crop" alt="Web3 Innovation" className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-105 will-change-transform" />
                <div className="absolute top-4 left-4 bg-primary/90 backdrop-blur-sm text-white text-[10px] font-bold px-3 py-1 rounded-sm uppercase tracking-widest shadow-sm">Teknologi</div>
              </div>
              <h3 className="text-3xl font-bold serif leading-tight group-hover:text-primary transition-colors duration-300 mb-3">Ekspansi Web3: Bagaimana Institusi Finansial Mengadopsi Desentralisasi Skala Besar</h3>
              <p className="text-sm text-gray-600 leading-relaxed line-clamp-2 mb-3">Laporan terbaru menunjukkan lonjakan adopsi infrastruktur blockchain oleh bank sentral, menandai era baru dalam transparansi keuangan global.</p>
              <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Oleh Arya Suhendra • 2 Jam Lalu</div>
            </article>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-gray-100 pt-8">
              {/* Standard News Card */}
              <article className="group cursor-pointer">
                <div className="overflow-hidden rounded-lg mb-3 bg-gray-100">
                  <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop" alt="Data" className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105 will-change-transform" />
                </div>
                <span className="text-[10px] font-bold text-primary uppercase tracking-widest mb-1 block">Data Science</span>
                <h4 className="text-lg font-bold serif leading-snug group-hover:text-primary transition-colors duration-300 mb-2 line-clamp-2">Mengurai Algoritma Prediktif di Pasar Saham Asia</h4>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">4 Jam Lalu</p>
              </article>
              {/* Standard News Card */}
              <article className="group cursor-pointer">
                <div className="overflow-hidden rounded-lg mb-3 bg-gray-100">
                  <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop" alt="AI" className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105 will-change-transform" />
                </div>
                <span className="text-[10px] font-bold text-primary uppercase tracking-widest mb-1 block">Artificial Intelligence</span>
                <h4 className="text-lg font-bold serif leading-snug group-hover:text-primary transition-colors duration-300 mb-2 line-clamp-2">Regulasi AI Global Mulai Diterapkan Akhir Tahun Ini</h4>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">6 Jam Lalu</p>
              </article>
            </div>
          </div>

          {/* Right Sidebar: Sticky & Performant */}
          <aside className="lg:col-span-4 relative">
            <div className="sticky top-24 space-y-10">
              {/* Newsletter Widget (Dense & Elegant) */}
              <div className="bg-gray-50 border border-gray-100 p-6 rounded-xl">
                <h4 className="text-sm font-bold uppercase tracking-widest text-dark mb-2 border-b border-gray-200 pb-2">Harven Briefing</h4>
                <p className="text-xs text-gray-500 mb-4 leading-relaxed">Sintesis berita teknologi dan finansial paling krusial, langsung ke kotak masuk Anda setiap pagi.</p>
                <form className="flex flex-col gap-3">
                  <input type="email" placeholder="Alamat email Anda" className="w-full px-4 py-2 text-sm border border-gray-200 rounded-md focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300 bg-white" required />
                  <button type="submit" className="w-full bg-dark text-white text-xs font-bold uppercase tracking-widest py-3 rounded-md hover:bg-primary transition-colors duration-300 shadow-sm">Langganan</button>
                </form>
              </div>

              {/* Trending List */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-dark mb-4 border-b border-black pb-2">Terpopuler</h4>
                <ul className="space-y-4">
                  <li className="group cursor-pointer flex gap-4 items-start">
                    <span className="text-2xl font-black text-gray-200 group-hover:text-primary transition-colors duration-300">01</span>
                    <div>
                      <h5 className="text-sm font-bold serif leading-tight group-hover:text-primary transition-colors duration-300 line-clamp-2">Masa Depan Ethereum Setelah Pembaruan Jaringan Skala Besar</h5>
                    </div>
                  </li>
                  <li className="group cursor-pointer flex gap-4 items-start">
                    <span className="text-2xl font-black text-gray-200 group-hover:text-primary transition-colors duration-300">02</span>
                    <div>
                      <h5 className="text-sm font-bold serif leading-tight group-hover:text-primary transition-colors duration-300 line-clamp-2">Review Gadget: Kacamata AR Pertama untuk Pekerja Kantoran</h5>
                    </div>
                  </li>
                  <li className="group cursor-pointer flex gap-4 items-start">
                    <span className="text-2xl font-black text-gray-200 group-hover:text-primary transition-colors duration-300">03</span>
                    <div>
                      <h5 className="text-sm font-bold serif leading-tight group-hover:text-primary transition-colors duration-300 line-clamp-2">Krisis Semikonduktor: Dampak pada Industri Otomotif Asia</h5>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </main>
      <Footer />
    </>
  );
}
