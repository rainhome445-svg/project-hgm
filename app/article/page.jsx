import SlimHeader from '../../components/SlimHeader';

export default function ArticlePage() {
  return (
    <>
      <SlimHeader />
      <main className="max-w-[800px] mx-auto px-4 lg:px-0 py-12">
        {/* Article Header Metadata */}
        <header className="mb-10 text-center">
          <a href="/news" className="inline-block text-[10px] font-bold text-primary uppercase tracking-widest mb-4 hover:underline">Finansial &amp; Teknologi</a>
          <h1 className="text-4xl md:text-6xl font-bold serif leading-[1.1] tracking-tight mb-6">Masa Depan Keuangan Terdesentralisasi di Asia Tenggara</h1>
          <p className="text-lg md:text-xl text-gray-500 font-light leading-relaxed mb-8 max-w-2xl mx-auto">Sebuah tinjauan arsitektur sistem dan dampak regulasi terhadap adopsi blockchain lintas batas di era ekonomi digital yang bergerak cepat.</p>

          <div className="flex items-center justify-center gap-4 text-xs font-semibold text-gray-500 border-t border-b border-gray-100 py-4">
            <span className="flex items-center gap-2">
              <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=100&auto=format&fit=crop" className="w-6 h-6 rounded-full object-cover" alt="Avatar" />
              Arya Suhendra
            </span>
            <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
            <span>24 Oktober 2023</span>
            <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
            <span>Baca 8 Menit</span>
          </div>
        </header>

        {/* Featured Image */}
        <figure className="mb-12">
          <div className="overflow-hidden rounded-xl bg-gray-100 shadow-sm">
            <img src="https://images.unsplash.com/photo-1642104704074-907c0698cbd9?q=80&w=1600&auto=format&fit=crop" alt="Decentralized Finance Graphic" className="w-full h-[400px] md:h-[500px] object-cover hover:scale-[1.02] transition-transform duration-700 ease-out will-change-transform" />
          </div>
          <figcaption className="text-[10px] text-gray-400 font-semibold uppercase tracking-widest mt-3 text-center">Ilustrasi node jaringan terdesentralisasi (Foto: Harven Studio)</figcaption>
        </figure>

        {/* Article Body */}
        <article className="prose prose-lg prose-gray max-w-none text-gray-800 leading-[1.8]">
          <p className="drop-cap text-lg">Dalam dunia yang semakin terhubung, batasan geografis untuk transaksi finansial mulai memudar. Keuangan Terdesentralisasi (DeFi) bukan lagi sekadar eksperimen teknologi di pinggiran internet, melainkan sedang diintegrasikan ke dalam infrastruktur perbankan inti. Di Asia Tenggara, perubahan ini terjadi dengan kecepatan yang belum pernah terlihat sebelumnya, didorong oleh populasi *unbanked* yang besar dan penetrasi ponsel pintar yang masif.</p>

          <p className="text-lg mt-6">Analis pasar memprediksi bahwa dalam lima tahun ke depan, likuiditas lintas rantai (*cross-chain liquidity*) akan menjadi standar baru. Institusi finansial tradisional yang gagal mengadopsi protokol terbuka (*open protocols*) berisiko tertinggal oleh perusahaan *fintech* yang lebih gesit yang beroperasi dengan *overhead* nyaris nol berkat kontrak pintar (*smart contracts*).</p>

          <blockquote className="my-10 pl-6 border-l-4 border-primary bg-gray-50/50 py-4 pr-4 rounded-r-lg">
            <p className="text-2xl font-bold serif text-dark leading-snug italic m-0">"Inovasi sejati di era DeFi bukanlah tentang menciptakan uang baru, tetapi tentang merestrukturisasi arsitektur kepercayaan."</p>
          </blockquote>

          <h3 className="text-2xl font-bold serif text-dark mt-10 mb-4">Paradigma Keamanan Baru</h3>
          <p className="text-lg">Tentu saja, skalabilitas dan keamanan tetap menjadi perhatian utama. Insiden peretasan yang menargetkan *bridge* (jembatan antar jaringan) telah merugikan miliaran dolar tahun lalu. Namun, pengembangan sistem kriptografi *Zero-Knowledge Proofs* (ZKP) menawarkan solusi elegan: memvalidasi transaksi secara matematis tanpa mengungkapkan data yang mendasarinya.</p>

          <p className="text-lg mt-6">Pendekatan ini menjanjikan tingkat privasi tingkat institusional sambil tetap menjaga auditabilitas publik yang menjadi ciri khas blockchain terbuka. Ekosistem sedang mendewasa, dan regulasi perlahan mulai mengejar teknologi, bukan untuk mencekiknya, melainkan untuk memberikan pagar pembatas yang jelas.</p>
        </article>

        {/* Article Footer / Tags */}
        <div className="mt-12 pt-6 border-t border-gray-100 flex flex-wrap gap-2">
          <span className="px-3 py-1 bg-gray-100 text-gray-600 text-[10px] font-bold uppercase tracking-widest rounded-sm hover:bg-gray-200 cursor-pointer transition-colors">Blockchain</span>
          <span className="px-3 py-1 bg-gray-100 text-gray-600 text-[10px] font-bold uppercase tracking-widest rounded-sm hover:bg-gray-200 cursor-pointer transition-colors">Ekonomi Makro</span>
          <span className="px-3 py-1 bg-gray-100 text-gray-600 text-[10px] font-bold uppercase tracking-widest rounded-sm hover:bg-gray-200 cursor-pointer transition-colors">Asia Tenggara</span>
        </div>
      </main>

      {/* Footer Simple */}
      <footer className="border-t border-gray-100 py-10 mt-10">
        <div className="max-w-[800px] mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold tracking-tighter mb-4 serif uppercase">HARVEN</h2>
          <p className="text-[10px] text-gray-500 uppercase tracking-widest">© 2024 HARVEN MEDIA. ALL RIGHTS RESERVED.</p>
        </div>
      </footer>
    </>
  );
}
