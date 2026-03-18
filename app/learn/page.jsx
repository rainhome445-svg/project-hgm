import SlimHeader from '../../components/SlimHeader';
import Footer from '../../components/Footer';

export default function LearnPage() {
  return (
    <>
      <SlimHeader />
      <main className="mx-auto w-full max-w-[1200px] flex-1 px-6 py-8">
        {/* Hero Section */}
        <section className="mb-12">
          <div className="relative h-80 w-full overflow-hidden rounded-xl bg-slate-900 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent z-10"></div>
            <img alt="Latar Belakang Hero" className="h-full w-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAO2Bj0RE4y5xi0uKP3SxE96_f56OT8lesWrALUHQCWicKSQiYEgErzYQ06Oyvo-SH0PkRAsRRxVVu6h83q01eN56b9qNgt7kXg35WB8F8Zdkyg4yGuR4pQm6VR4w2LzzX1Qj2ZqZp2bv2veaJxZckCZYNVUMYsqKjtlsCFAT9HXnSSk4Ghh36p2U_By9egZDOCH67f95WPB8B5mksFat6LkQBi3_VIsDtQv9iw5o7sSoDJr9AsLP0Gpe2rN_CbSUM5FdMwDs9zvRoQ" />
            <div className="absolute inset-0 z-20 flex flex-col justify-center px-12">
              <span className="mb-2 inline-block rounded-full bg-primary px-3 py-1 text-xs font-bold uppercase tracking-widest text-white font-sans">Pusat Pengetahuan</span>
              <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight font-display">Pelajari Segalanya <br />Tentang Teknologi</h1>
              <p className="mt-4 max-w-lg text-slate-200 font-sans">Pembahasan mendalam mengenai teknologi yang membentuk dunia kita, mulai dari infrastruktur blockchain hingga etika kecerdasan buatan.</p>
            </div>
          </div>
        </section>
        {/* Article Grid Section */}
        <section className="mb-20 space-y-12">
          {/* Row 1: Blockchain */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <span className="material-symbols-outlined text-primary">account_balance_wallet</span>
              <h2 className="text-2xl font-bold tracking-tight font-display">Rantai Blok (Blockchain)</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              <div className="group cursor-pointer">
                <div className="aspect-video mb-3 overflow-hidden rounded-lg bg-primary/5">
                  <img alt="Blockchain 1" className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDWEW0KZ84ojx0S8bIcLx1AdmxH9nwb8EfqWZEjRZPw_u0gZKPz1dIPWse7NPiWQqREfsCF4BZnWRATciUbWUa76tB_mYVlEI-jg0APqwNjKvIPY4-4EZfbBjlVqs6hNuteo7nWAr1BkRWbrFwVVs_0cg6Qa-AUeaXE_BQoetw4He26TTDYuA9bcYGSDx0Fo9XD1mSdcSwCAVFQfQ8jJ9S4ckAwyQ5EVe0NOGO9yIQbTyjgXoRej87GlPvpIStILEEx5RsquWc8veVG" />
                </div>
                <h3 className="text-sm font-semibold leading-snug group-hover:text-primary transition-colors font-sans">Evolusi Bukti Pasak (Proof of Stake)</h3>
              </div>
              <div className="group cursor-pointer">
                <div className="aspect-video mb-3 overflow-hidden rounded-lg bg-primary/5">
                  <img alt="Blockchain 2" className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDqz9MnlBc2yFApz-lMRghZ3o-gkdmjcB_2jA8KnFEieOz_QDhaBA24DBxgQ416TYwpKC1IR126ACtbPwfEb2C3UDnOeb5USBprJTcoy-VxJIGtrmcMb_ms6F2yoBy2d15I5PzMIkRsR7v4WteIWT-V2x2prPiMH0FiUD5mzKl7pbpw64QrFZlzQhkmuOul6Shy-Zr_BxsGOJS-FTN00pI1yBCOAPbUWLC6YdS56paMbkYg8fILIgxzVVgUSZiqoAYr8zn2CaIp7JZK" />
                </div>
                <h3 className="text-sm font-semibold leading-snug group-hover:text-primary transition-colors font-sans">Kontrak Pintar dalam Teknologi Hukum</h3>
              </div>
              <div className="group cursor-pointer">
                <div className="aspect-video mb-3 overflow-hidden rounded-lg bg-primary/5">
                  <img alt="Blockchain 3" className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCmL_lVsoJMphOVGuTeaKrbx1N-Fl5nA0KKwL56005DLO4Krj9x0AeMWTvccAq7Gpf4BNPYjBxqE-ILFNwMxT99abcAp68L7Wsp_RDLLrSDZIMUQEcTq0FA68TH_tgud4vARLpg8lhTcmX7MZmUKG_WrvhucXFq6f1rKiI4I6Ic4Dyqpdkfh4h92fzYnTUOuPXzjA98uUcnjxjCD3ntzo2uNIsLVn6A2Ms__0_JXK3wisVNs77PDks59a_zfGfVsDzZQSdPCjOwcJuh" />
                </div>
                <h3 className="text-sm font-semibold leading-snug group-hover:text-primary transition-colors font-sans">Solusi Skalabilitas Lapis 2</h3>
              </div>
              <div className="group cursor-pointer">
                <div className="aspect-video mb-3 overflow-hidden rounded-lg bg-primary/5">
                  <img alt="Blockchain 4" className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBPADNll_2QpW_32qegarCQBefcYaUyj_spM3qX8g0gAkdi6_dmBbdSl_ZiXpMKr6zaYyX9Q4cwJmbIh1Tgo47Sttf3isuQtNFfe_zScm2fGNA-0GrZbmf8g_LLaWl8mloCBgNC5kh_TQvlB3ly5k04V5bAGvigdtnKaz5fZPe-kgRX6RhgqdH6Yt5MpZKJ1ychF5WQPhu46A3v55C8-B48HrAvK-RnbwqZpotOFWIiOwGmMDmAZ_VvvB3lCdFayk1hCOR-jK2Mo20A" />
                </div>
                <h3 className="text-sm font-semibold leading-snug group-hover:text-primary transition-colors font-sans">Masa Depan DeFi 2.0</h3>
              </div>
              <div className="group cursor-pointer">
                <div className="aspect-video mb-3 overflow-hidden rounded-lg bg-primary/5">
                  <img alt="Blockchain 5" className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAViEUsnlYIvU91qHRp8CfiXBVnv8WALd674LQU89ySEVfKSAUhTgeXaO5qjZq4QThnEEWJI3wD1vqPW5nHbUL0E2pr01w1PcXYxapImBB7Png7AplPg6zOTYHaC7-ZOS5vph-BLNeVZbDzWVIIBjOVK-kWrCGW6HhD7GdYE1Auvwow_8Q58BHAC-aehnn05XmTJmzWR863tgDHa7i6MQuzWwG2MEB1ce9fGyNPUTHbhhInPa-dyfsg5HJJ1lH2P7M29Q8P0K0-nxXt" />
                </div>
                <h3 className="text-sm font-semibold leading-snug group-hover:text-primary transition-colors font-sans">Praktik Terbaik Keamanan Dompet Digital</h3>
              </div>
            </div>
          </div>
          {/* Row 2: AI */}
          <div>
            <div className="flex items-center gap-2 mb-6 border-t border-gray-100 pt-8">
              <span className="material-symbols-outlined text-primary">psychology</span>
              <h2 className="text-2xl font-bold tracking-tight font-display">Kecerdasan Buatan</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              <div className="group cursor-pointer">
                <div className="aspect-video mb-3 overflow-hidden rounded-lg bg-primary/5">
                  <img alt="AI 1" className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDCVUpEEUMSwfguUWnp6Nvk0-hf4j4CG1XOmmnMAav-knMT90fnEE1hMOC-hGNuMgtkELquH81M67jqOwz0x7e6lnoJL8yIZBeQSv7MLFAm_lZGpewKFuMWCuAITIEn7I2e4Kc8n6ZyNvEECysDLKLLaDXmRFO0PgpArH3kasl7b89sLT1c-4N97mVm80SBRFlxLXh65Rdjs0yFQiPq2sIBkDnfxP19Y9YJ-oyn-RofG53Z9xkkIUA7OxWYnkMEBon3N-hcAZQkx2uX" />
                </div>
                <h3 className="text-sm font-semibold leading-snug group-hover:text-primary transition-colors font-sans">Batasan Model Bahasa Besar</h3>
              </div>
              <div className="group cursor-pointer">
                <div className="aspect-video mb-3 overflow-hidden rounded-lg bg-primary/5">
                  <img alt="AI 2" className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD8x0PSz6GPocmfSUD7eFkcKsnk4RdqpeQ6JZR3mgOusEXwCQnI77mBxEyGh21ltV5S5KJPJlFtZCw7xuTeG0U3vaWmLPgcnbi6Ufn8Iq-vEmknsElkap_72Uuv5-g2UUe6e3UIAwfogbYQB_KtXYzz3Ivpo9FEGSTv--BXVr7VjO3Cqh6p1FQk-lLtVl5FP2eR37TfxtlrewIfIN2VsNVc9mWbKSeq3H_lFUS59ovvRhtDRFun_YDXmrsbgRdXL0t2Wcg8MhSQVWHI" />
                </div>
                <h3 className="text-sm font-semibold leading-snug group-hover:text-primary transition-colors font-sans">Etika dalam Seni Generatif</h3>
              </div>
              <div className="group cursor-pointer">
                <div className="aspect-video mb-3 overflow-hidden rounded-lg bg-primary/5">
                  <img alt="AI 3" className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBkMcGD_YBwpOQMwG4NbqT9fTQFuw8CaG-8QqubFzECnrX9jAkqis6gCF8m0mHMz97tyu04SdEr_8fmntYEkBFeFyY_JXGaSOo9j8q_Si740jumxxeIwhaoZgeQRp5jh-64-cGISPJTmRmQ3KhykajeLuCzaWUrEmvzlKh69azHRJCK5Oddyme4yTCgGCZB3BjpeY4vBOLE_tLk0hZvEqillWqmic4aSgwPpuYomo04x3Wn4KEVassE83X5lH2B5IcfS5GpUFa-H8Hr" />
                </div>
                <h3 className="text-sm font-semibold leading-snug group-hover:text-primary transition-colors font-sans">AI dalam Kedokteran Diagnostik</h3>
              </div>
              <div className="group cursor-pointer">
                <div className="aspect-video mb-3 overflow-hidden rounded-lg bg-primary/5">
                  <img alt="AI 4" className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCTJF1OJukdTWyyYJ9e4KC4yjWTF45LSZ47WnuRnJ8r_t8bkq30uglNav7_slyn00mI1DoQu6PCt4gc9V9TqhZ4yd5tbL8EPvtgyLMhjvFrmnyIvo9or18bPBBgS5_EuEFPaLDW9OrTgYNe8IZYpgSYFs1oxum2XO7oCtkiN_bIZoXem9EbPvstzB5bs-WtPutKuJzV4wa_7gAuu-ddrbDRnfeEPPVC0BI8uL6j3-dNchjllqxqt0pbYQO42MUkB91M4Mp9bhPmWLRo" />
                </div>
                <h3 className="text-sm font-semibold leading-snug group-hover:text-primary transition-colors font-sans">Tren Arsitektur Neural</h3>
              </div>
              <div className="group cursor-pointer">
                <div className="aspect-video mb-3 overflow-hidden rounded-lg bg-primary/5">
                  <img alt="AI 5" className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBV_-YLLUKYM39Gn-keqiG-Rz99GQK0UwoWZn3WnXUWPtf1iscUEdNcaXhyoBY7nkBpxtE-CCt_yWnbk1CHLhza0opNinVqyghxxUAQBZzWRrM4vGxZn7WAWMv1_sbB3CqOoZX-tObBZWbEjE66wuOE3xh0qfSm09PWl4qPZBJWATvpfexr7UJBMIhGns_WxWdVDBtLB6RGnMpqtyn9pUkYRyBZovaAkEgU30uGKieBESpWaynTjBhmHr7o4CDeInJnOfnvFofHU0FW" />
                </div>
                <h3 className="text-sm font-semibold leading-snug group-hover:text-primary transition-colors font-sans">Terobosan Visi Komputer</h3>
              </div>
            </div>
          </div>
          {/* Row 3: Cybersecurity */}
          <div>
            <div className="flex items-center gap-2 mb-6 border-t border-gray-100 pt-8">
              <span className="material-symbols-outlined text-primary">security</span>
              <h2 className="text-2xl font-bold tracking-tight font-display">Keamanan Siber</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              <div className="group cursor-pointer">
                <div className="aspect-video mb-3 overflow-hidden rounded-lg bg-primary/5">
                  <img alt="Sec 1" className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2siPVk8U8qZc1q1qy2GCO5uD-OrC0sqMkDNWwE0yMQM6o1KN14Xxp3mYgD7QqrR4CGGaQy8n1Oaoq8SWuMvPxTFHzBzo5dGwm5lEA5JIlsv9y5WXbnOMsY2A63cFY2DViI9I8oVzckXmF1Yakuv-ii9MCbkivBkikg_VgvpOgqHYuFe2dfF0SCoj8hF71jotICHu8MIKillcug6PwJc_4UdO_BEQWaJoxsaOAHYniUbkRS-xdCPWe-UcQJHbZGhZAwnw1L-lFAcLW" />
                </div>
                <h3 className="text-sm font-semibold leading-snug group-hover:text-primary transition-colors font-sans">Arsitektur Zero Trust</h3>
              </div>
              <div className="group cursor-pointer">
                <div className="aspect-video mb-3 overflow-hidden rounded-lg bg-primary/5">
                  <img alt="Sec 2" className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFvcjzQ38xnrf71WIyGB0Qoj85PzCSrSkAp_FpZywl4gOKEDDU2zHZmc4H3PxUnMORFrTDwMMh_fsuqoluKBGrWSS3rfeyj19xGojLQ9mvsps4JDzo0JklAdStw-0uk7yFJLVN7_djuSGzfZc_uOqORQh1Su8_QIk7tCWtyRZqyhvL8STCmsw-5zdEp0WNUMCzoMlPdOEus86TKbpm_njITXKoCJwF-Pru7T_gQzgR1fT7OvSc4QzUomtdH3ozgRNVNb0J_zwTZwUK" />
                </div>
                <h3 className="text-sm font-semibold leading-snug group-hover:text-primary transition-colors font-sans">Pertahanan Ransomware 2024</h3>
              </div>
              <div className="group cursor-pointer">
                <div className="aspect-video mb-3 overflow-hidden rounded-lg bg-primary/5">
                  <img alt="Sec 3" className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3jFmJ6du3YcA28N5qaw3d21OdI-5EBsbQUhrd0y1pnrIJNiNfbpGPwJNpcuW2J0IG177a_kNIVk10g6xVREmcvHSdp_z1B1v8wJWFTTZUy4UlRcrrsapclov6pji8C7_QVIpSfySvlmnf8UAw6jQGHtjj1zrtYBn6g8bygwtpV1Y30sWFMMIrsbaq88N4J5zScyU7j_avN7ZOWLQUJovnlyCPMB9zuR8ibEJUOjRLgAqx6ipaNvaPFXemV_C8oYGnq8lu-MP9EQJ_" />
                </div>
                <h3 className="text-sm font-semibold leading-snug group-hover:text-primary transition-colors font-sans">Kerentanan Autentikasi Biometrik</h3>
              </div>
              <div className="group cursor-pointer">
                <div className="aspect-video mb-3 overflow-hidden rounded-lg bg-primary/5">
                  <img alt="Sec 4" className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBIykg7YxR6gbIWnN3Mg4U1B52lsfOaURhywqaJPQPz_GIfv7BDPwOPgu1KtefhQQ4Jzl8Lck1KzWyRHfCrzR5c9-hrith75UxUftJDkntUo02E83ifMo-yfiR1EBrKL92Qno7_kr1B3FA0pqPvcZidgGR_wbg_g9aRu-qEWLD1XxS6aP2vVhdTk0xiMKWkDeY3hRhLRvAKjxGBfF6owjdagiIwTN1fVWbBQnCNp0-fEDlZQWOdpCqRiTasLxtytAzaUWHYmmQbes_Z" />
                </div>
                <h3 className="text-sm font-semibold leading-snug group-hover:text-primary transition-colors font-sans">Enkripsi Pasca-Kuantum</h3>
              </div>
              <div className="group cursor-pointer">
                <div className="aspect-video mb-3 overflow-hidden rounded-lg bg-primary/5">
                  <img alt="Sec 5" className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDN0872g1yR2BLO8aPchUOymuFPlDfeUN8GOKBA6qUkxyCYNN9RF-geemYdE1_fja45Sjn1WjPxvCWNns6LgC649hYBwSyrDGo8y3NRTNRJ3JHrv8IlGXnbMwM5Kmo724Akpuiu1mEKVjG_JVszy75ACB2vlgRb9jYgwJx1XwLFl3bXiegGxt_fKA3eyFRwH8AUogB7IRnNf9kDvmWNwyZwwX-Uob5fe0txpdbkUE_M_cX4kj0YGjVdOyuJCOFSgj6SwrCshn_gaUw" />
                </div>
                <h3 className="text-sm font-semibold leading-snug group-hover:text-primary transition-colors font-sans">Kerangka Kerja Keamanan Cloud</h3>
              </div>
            </div>
          </div>
        </section>
        {/* Full Article Section */}
        <section className="border-t border-gray-100 pt-16 max-w-4xl mx-auto">
          <article>
            <div className="mb-8">
              <span className="category-label mb-4 block">Pelajaran Pilihan</span>
              <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6 font-display">Revolusi Deep Learning: Bagaimana Jaringan Neural Meniru Otak Manusia</h2>
              <div className="flex items-center gap-4">
                <div className="size-12 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
                  <img alt="Penulis" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAdDeNSkEQWNrusGF4ehckDWsnV_tHsfg-3btjN6YuCeQgMMcDbN0c6NZiKktKnaZ4dXcnats-vkrrQnvs3PPQwnLltA7_0QUwKLhkm09bPB1j-1bIM1uy4tGxcBGa2huFwq7nxFX1shW2Jrxci6laMatliBYtxZR-wqbMns2y1msNs4GVDsC8EihSrXpRzgfDKFhG-SI8AJWFYnmLujFZff4NMaTUvPP5WNm--g_sAgiKepk09aCQtTalnTV8BvP1fLvi4AGLWApku" />
                </div>
                <div>
                  <p className="font-bold text-gray-900 dark:text-gray-100 font-sans">Elena van der Berg</p>
                  <p className="text-sm text-gray-500 font-sans">Analis Teknologi Senior • Bacaan 8 menit</p>
                </div>
              </div>
            </div>
            <div className="mb-10 aspect-[21/9] w-full overflow-hidden rounded-2xl shadow-xl">
              <img alt="Gambar Artikel Utama" className="h-full w-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBMGOtSj8R-du_-H_gf8ZGzG47ZPlAet4uxoJDpf9q4VOAQjAj7jjIPSiXVHDXpkJc3is6ZoqQrTXbCkuOXHdu2Pog4FMOWA4B4HdOhBHBrVsQRvjbtiPX7Y537KsSKcIggqhR5rElDURxZ6pCvOZl42cKFk9AwoaBF9NYGj-BGyktNJDZIji9ad1e0dPBcHh_puVomSiVJyJxC2ePhX5ooUXxFoFHzFAmZk1NCQq0Eso9Haj0mFhPq8l0Bnlq7pzysi-vTN0ba2Hg6" />
            </div>
            <div className="prose prose-slate dark:prose-invert lg:prose-lg max-w-none">
              <p className="text-xl leading-relaxed font-medium mb-6 text-gray-700 dark:text-gray-300 italic font-sans">"Kecerdasan Buatan bukan lagi sekadar tentang logika dan aturan; ini tentang pola yang tersembunyi di dalam data yang sangat banyak."</p>
              <p className="mb-6 font-sans">Pada inti AI modern terdapat deep learning, sebuah subbidang pembelajaran mesin yang terinspirasi oleh struktur dan fungsi otak manusia. Jaringan saraf buatan ini terdiri dari lapisan-lapisan node yang saling terhubung, atau 'neuron', yang memproses dan mentransmisikan informasi. Kata 'deep' dalam deep learning merujuk pada jumlah lapisan di mana data ditransformasikan.</p>
              <h3 className="text-2xl font-bold mb-4 font-display">Cara Kerja Pelatihan</h3>
              <p className="mb-6 font-sans">Melatih model deep learning melibatkan pemberian dataset besar dan memungkinkannya mengenali pola yang kompleks. Melalui proses yang disebut backpropagation, model menyesuaikan bobot internalnya untuk meminimalkan kesalahan. Hal ini memungkinkan sistem untuk melakukan tugas-tugas seperti pengenalan gambar, pemrosesan bahasa alami, dan pengambilan keputusan strategis dengan akurasi yang melampaui manusia.</p>
              <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg mb-6">
                <h4 className="font-bold text-primary mb-2 font-display">Poin Utama</h4>
                <p className="text-sm font-sans">Deep learning berkembang pesat dengan data dan daya komputasi. Semakin banyak data berkualitas yang disediakan, semakin tajam pemahaman model tersebut.</p>
              </div>
              <p className="mb-6 font-sans">Seiring langkah kita ke depan, ekosistem teknologi saat ini semakin fokus pada 'Explainable AI'—memastikan bahwa jaringan mendalam ini bukan hanya kotak hitam yang efektif, melainkan sistem yang keputusannya dapat diaudit dan dipahami oleh pengembang manusia serta pembuat kebijakan.</p>
            </div>
            <div className="mt-12 flex items-center justify-between border-y border-gray-100 py-6">
              <div className="flex gap-4">
                <button className="flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary hover:bg-primary/20 transition-colors font-sans"><span className="material-symbols-outlined text-sm">thumb_up</span> Membantu</button>
                <button className="flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary hover:bg-primary/20 transition-colors font-sans"><span className="material-symbols-outlined text-sm">bookmark</span> Simpan</button>
              </div>
              <div className="flex gap-2">
                <button className="p-2 text-gray-400 hover:text-primary transition-colors">
                  <span className="material-symbols-outlined">share</span>
                </button>
              </div>
            </div>
          </article>
        </section>
      </main>
      <Footer />
    </>
  );
}
