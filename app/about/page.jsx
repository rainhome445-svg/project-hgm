import SlimHeader from '../../components/SlimHeader';
import Footer from '../../components/Footer';

export default function AboutPage() {
  return (
    <>
      <SlimHeader />
      <main className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        {/* Company Section */}
        <section className="mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end border-b border-slate-200 pb-16">
            <div className="lg:col-span-8">
              <span className="text-primary font-bold uppercase tracking-widest text-xs mb-4 block">Keunggulan Editorial</span>
              <h2 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 text-gray-900 uppercase italic leading-none serif">
                Harven Media
              </h2>
              <p className="text-xl md:text-2xl leading-relaxed font-light text-gray-600 max-w-3xl">Pendekatan editorial premium terhadap media modern, teknologi, dan garis depan digital. Kami menyajikan pelaporan dengan akurasi tinggi dan analisis mendalam di persimpangan antara infrastruktur dan budaya.</p>
            </div>
            <div className="lg:col-span-4 hidden lg:block">
              <div className="aspect-square bg-slate-100 overflow-hidden rounded-xl border border-slate-200">
                <img alt="Arsitektur Harven" className="w-full h-full object-cover grayscale opacity-80" data-alt="Modern geometric skyscraper facade under clear sky" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAeEw8FQIU6JUJ5utwTv1-Odv2d1DDl0JCZT3wnCR8XXpfBLokEJvPAVW92OCcnf6z2tNMG_Bb_Vw_An4ZOCmFse3sOOabQsnndS1_laPXJ8RP_R_P5gOs8-k5dX0DrjJEUOozWAqGWXd84CFTbI7Hb1xLCK35pEWHtggaHlnaN8SPDsSfYQveqEN1LUuISymqOxq5TOkjCZ2cx7y2pV_0j9TS94u9t32phA0zuLOrAT6SamxJMbqMWEp29_nzMuWNdXPaJVv4pgmfD" />
              </div>
            </div>
          </div>
        </section>
        {/* Focus/Services Section */}
        <section className="mb-32">
          <h3 className="text-xs font-bold uppercase tracking-widest text-primary mb-12 border-l-4 border-primary pl-4">Disiplin Inti</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-slate-200">
            <div className="p-10 border-b md:border-b-0 md:border-r border-slate-200 hover:bg-slate-50 transition-colors">
              <span className="material-symbols-outlined text-4xl text-primary mb-6">terminal</span>
              <h4 className="text-xl font-bold mb-4 serif">Teknologi</h4>
              <p className="text-gray-600 leading-relaxed text-sm">Analisis sistem tingkat lanjut dan tinjauan arsitektur dari ekosistem perangkat lunak yang sedang berkembang dan paradigma perangkat keras.</p>
            </div>
            <div className="p-10 border-b md:border-b-0 md:border-r border-slate-200 hover:bg-slate-50 transition-colors">
              <span className="material-symbols-outlined text-4xl text-primary mb-6">account_balance_wallet</span>
              <h4 className="text-xl font-bold mb-4 serif">Blockchain</h4>
              <p className="text-gray-600 leading-relaxed text-sm">Riset buku besar terdistribusi yang berfokus pada efisiensi protokol, audit keamanan, dan model tata kelola terdesentralisasi.</p>
            </div>
            <div className="p-10 hover:bg-slate-50 transition-colors">
              <span className="material-symbols-outlined text-4xl text-primary mb-6">developer_mode_tv</span>
              <h4 className="text-xl font-bold mb-4 serif">Pengembangan</h4>
              <p className="text-gray-600 leading-relaxed text-sm">Strategi desain dan penerapan full-stack untuk platform digital skala besar dan infrastruktur berbasis data.</p>
            </div>
          </div>
        </section>
        {/* Founder Section */}
        <section className="mb-32">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-1/2 aspect-[4/5] bg-slate-200 rounded-xl overflow-hidden shadow-2xl relative">
              <img alt="Arya Suhendra" className="w-full h-full object-cover grayscale" data-alt="Professional portrait of Arya Suhendra in minimal setting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCeXDa5TR1VwO2u_boc355ZQ9I_zYu7wVzwlbUyAsqwMNkraMGINeQUL-Ql-KQCrf2JNE8sL6xi1GNqvDuBQj_59PX9TZ85gnf1iBufYJO3BOPT-xjDor0MJuIzNedAMa1fPOOJezCxHIZMbjso9DEhAylXrEldfIre2jBFocrUXI--efCUThheRUfuDJmAQ5x0uRB4vLF75_gLXEmMiqgHpCOhP9AXAtuAsY9eO92pZCTMoZSpKBXDMPnLFqRgXutLAOO67rKF-XVC" />
              <div className="absolute bottom-6 left-6 bg-primary text-white px-4 py-2 text-xs font-bold uppercase tracking-widest rounded">Pendiri</div>
            </div>
            <div className="w-full lg:w-1/2">
              <h3 className="text-5xl font-bold mb-6 tracking-tighter italic serif">Arya Suhendra</h3>
              <p className="text-gray-500 font-semibold mb-8 border-b border-slate-200 pb-4">Pengembang Full-Stack &amp; Analis Kripto</p>
              <div className="space-y-6 text-lg leading-relaxed text-gray-700">
                <p>Dengan pengalaman lebih dari satu dekade dalam menavigasi kompleksitas basis kode modern dan sistem keuangan terdesentralisasi, Arya Suhendra mendirikan Harven Media untuk menjembatani kesenjangan antara kedalaman teknis dan kejelasan editorial.</p>
                <p>Karier beliau mencakup rekayasa aplikasi perusahaan yang kuat hingga analisis on-chain forensik. Keahlian ganda ini memungkinkan Harven Media untuk mendekati berita tidak hanya sebagai pengamat, tetapi sebagai pembangun dari sistem yang kami kritik.</p>
              </div>
              <div className="mt-10 flex gap-4">
                <a className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-100 text-gray-600 hover:bg-primary hover:text-white transition-all" href="#">
                  <span className="material-symbols-outlined text-lg">share</span>
                </a>
                <a className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-100 text-gray-600 hover:bg-primary hover:text-white transition-all" href="#">
                  <span className="material-symbols-outlined text-lg">mail</span>
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* Vision & Mission Section */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 border-t-8 border-primary">
            <div className="bg-primary p-12 text-white">
              <h3 className="text-4xl font-bold uppercase italic mb-8 tracking-tighter serif">Visi Kami</h3>
              <p className="text-xl leading-snug font-medium">Menetapkan standar jurnalisme teknis dengan akurasi tinggi di era kompleksitas yang meningkat dan sintesis otomatis. Kami membayangkan dunia di mana setiap pergerakan digital dipahami melalui arsitekturnya, bukan sekadar hasilnya.</p>
            </div>
            <div className="bg-slate-900 p-12 text-white">
              <h3 className="text-4xl font-bold uppercase italic mb-8 tracking-tighter serif">Misi Kami</h3>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <span className="text-primary font-bold text-2xl serif">01</span>
                  <p className="text-slate-300"><strong className="text-white block">Rekayasa Presisi</strong> Memberikan wawasan yang berakar pada kode, data, dan infrastruktur yang dapat diverifikasi.</p>
                </li>
                <li className="flex gap-4">
                  <span className="text-primary font-bold text-2xl serif">02</span>
                  <p className="text-slate-300"><strong className="text-white block">Garis Depan Global</strong> Melacak migrasi nilai dan logika ke jaringan terdesentralisasi.</p>
                </li>
                <li className="flex gap-4">
                  <span className="text-primary font-bold text-2xl serif">03</span>
                  <p className="text-slate-300"><strong className="text-white block">Kedaulatan Digital</strong> Memperjuangkan transparansi dan ketahanan sistem informasi modern.</p>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
