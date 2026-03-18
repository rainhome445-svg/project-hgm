import SlimHeader from '../../components/SlimHeader';
import Footer from '../../components/Footer';

export default function PeoplePage() {
  return (
    <>
      <SlimHeader />
      {/* Hero Section */}
      <section className="relative w-full h-[500px] overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCnzyhGP1CmEqRzd9_7WM4u3b8gUZhU8ZdcmCDqWEW7bssYGDqC2b7J3nKd7EFAe3pvoiXfPpxsV7VOpWUKLEzbH8WZFipw2WBfVr3gfv1JOfYd9nk51WXMn5GKahWVRmdhVZvK2lK-CkpMsItZv5bFxcAnmTGHQeUe7SUSRCySF9AAIcmA496pax-yCMskUpA9RvGbeaSOVp4jdXrda5Stb4uiC_KTnqQsT6couah1DqB551kNaCMzIn2Dum7zmg8cR_j63Lr_tC9w')" }}>
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-4 drop-shadow-lg serif">Tokoh Berpengaruh di Den Haag</h1>
          <p className="text-lg md:text-xl text-slate-200 max-w-2xl mb-8">Temui para pemimpin, visioner, dan pembawa perubahan yang membentuk masa depan kota perdamaian dan keadilan internasional.</p>
          <button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-xl font-bold transition-all transform hover:scale-105 uppercase text-sm tracking-widest">
            Jelajahi Profil
          </button>
        </div>
      </section>
      {/* Prominent Figures Grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold mb-8 border-l-4 border-primary pl-4 serif">Tokoh Terkemuka</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {/* Figure 1 */}
          <div className="group cursor-pointer">
            <div className="aspect-[3/4] rounded-xl overflow-hidden mb-3">
              <img alt="Jan van Zanen" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEovWwUuTAwX9Qg6HxM1MlTgmyYXG8yxZVBZsnOuK8HgBIJAcf9vcBdn4Y-dz5HlRgMBpn8wIl-NXbh4xkZQmvrFZcUiv1Pf0Hb-fT8iHJ8sJuWJ522flT2RUnW9kr-qx4YSS5SGGcD9wp1hPU03h5OCynIQ_qdcbfDZpwloeNmAeUCXBqgqpe_39Qh7jbh40RGVhOdmLe5uAP481-eQm2GSqr3ADadDWHBBeGoW5nSq0kvTGFPuQcHhgz65ljdwiOc3-q7gojmxr1" />
            </div>
            <h3 className="font-bold text-lg group-hover:text-primary transition-colors serif">Jan van Zanen</h3>
            <p className="text-sm text-slate-500 font-medium">Wali Kota Den Haag</p>
          </div>
          {/* Figure 2 */}
          <div className="group cursor-pointer">
            <div className="aspect-[3/4] rounded-xl overflow-hidden mb-3">
              <img alt="Saskia Bruines" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA7qtI0d5p5ZrgDk8Wz0H_F8LZUiI9n0vrYZui7nmJJPq13WYB_hsP8O5tfFE9NrSdHYwOEhqqMPDb5sqJyvBuXN86U7xeP-aH1ceAioXG6PFqTd4IRbs5SlILUTt9ENAg_4o0Ms95NowNNLooAzQynK_EljDQL4XNtymbLluSlLq3WsKmjbsZAkknLSxLk7PBxP55jaKUws7RRjWpP9lr4VmfLH8B0a07tNrnLLgzGEZueJdpnwZeu-U30zbGyP2mN2Wy266aWcPxA" />
            </div>
            <h3 className="font-bold text-lg group-hover:text-primary transition-colors serif">Saskia Bruines</h3>
            <p className="text-sm text-slate-500 font-medium">Wakil Wali Kota</p>
          </div>
          {/* Figure 3 */}
          <div className="group cursor-pointer">
            <div className="aspect-[3/4] rounded-xl overflow-hidden mb-3">
              <img alt="Robert van Asten" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAPDz5c8sEcntLDLUND_iTwyzf2L0l2RkQlUzNEJ_i0F3-zbQloWFa7gR6MM1fJD5903j8ZoeompNXANJzPkkX06bhWIuVKEiSJLBI4rVGavMiE0-6GSj-bTtADVKVZlpfbgBpUxZgO4AX57y_jJOymH0J4peb6zZVkNf5Yz-ze5_qKkOWVSFk_beD-U1hd9y_ntRcaXw3Y48j1DjddvWXgSK-68cTKg-_CsqihJBQBXcpWkMfHo3RDc8l1gOsiC6HKtIURe97U5CoK" />
            </div>
            <h3 className="font-bold text-lg group-hover:text-primary transition-colors serif">Robert van Asten</h3>
            <p className="text-sm text-slate-500 font-medium">Anggota Dewan Pembangunan Kota</p>
          </div>
          {/* Figure 4 */}
          <div className="group cursor-pointer">
            <div className="aspect-[3/4] rounded-xl overflow-hidden mb-3">
              <img alt="Anne Mulder" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAqNERtpK5E6QG0YC97cMWDNtT2xnZM6ihItpnGFtr3E1mUeHZ8qbV6QhFpR0V3KLidq-E8L1Rj2a6-qY3JB5lRnj5sGYw6ma9TkS7QftcRQEDi8rEs9iFhKVaIGgUV8PInLK5WGxo0kpwZ3_Y4J0xgMYNZZQOyHCZoJR3yVG8QecUgSSEi-NeZ_ANBgx2jLPY-_2Lml5Vung48DWraydPraM0kbhTRBbn-cz9ATYxS3Dfk6sJ4TziZgUlHzbtCHP0VJ_eWvOwapfF2" />
            </div>
            <h3 className="font-bold text-lg group-hover:text-primary transition-colors serif">Anne Mulder</h3>
            <p className="text-sm text-slate-500 font-medium">Anggota Dewan Keuangan</p>
          </div>
          {/* Figure 5 */}
          <div className="group cursor-pointer">
            <div className="aspect-[3/4] rounded-xl overflow-hidden mb-3">
              <img alt="Kavita Parbhudayal" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAgbNyh6qTgpitZWKyit-xrNXmJpzFkdPypagqxfQw30BiyNJ8qvEwQSOrWKKUqWXJ3ZzXUIlxaGxWrSOnQUDEHU6TVkZiiJJScR82IQdIOeGFE4AlzZhk-qYvT66cXCOV51UgqG8Q-ltP6jac2lod8IqLDdPIFNRCnIbb9G4UIAKvf8POhdkFi7sTwcpYig0s3ho2P-kzyPop4aKfMhtXHvevqJ-3vbV_htg54i_1EYYLO2QSUUgdSGofHEo3padBLQhtUP4tem7gL" />
            </div>
            <h3 className="font-bold text-lg group-hover:text-primary transition-colors serif">Kavita Parbhudayal</h3>
            <p className="text-sm text-slate-500 font-medium">Anggota Dewan Kesehatan</p>
          </div>
          {/* Figure 6 */}
          <div className="group cursor-pointer">
            <div className="aspect-[3/4] rounded-xl overflow-hidden mb-3">
              <img alt="Hilbert Bredemeijer" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDcguxJW5A8eszq2mU8-KXtxd8thwGS3-F0piPniI4TvOBG42nRUVR6QwxLb67S1m2nMOXaXWe2caqcNvG0oQ6-OZYR7ToEiQz2B8Pw1q0FDGKnJawYzTkTjHTMHl6RJqb86YiEwbd1HwmjytnKqNEzAZgXxlbHMyEw2QQqoCRvRug5aiRvAv3YHU3tfSiN9ue93tgNO3-53isbhRaP-67gxTB9_Y_siSaXY1-j2k8J_p94CqdVF1BjByD5VmelJZXYu3x5MyOLDJcT" />
            </div>
            <h3 className="font-bold text-lg group-hover:text-primary transition-colors serif">Hilbert Bredemeijer</h3>
            <p className="text-sm text-slate-500 font-medium">Anggota Dewan Pendidikan</p>
          </div>
          {/* Figure 7 */}
          <div className="group cursor-pointer">
            <div className="aspect-[3/4] rounded-xl overflow-hidden mb-3">
              <img alt="Martijn Balster" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMo2VOmwNnUVqpU1Z9cvLmvAN1sRX6vj4QSBR0zEjmwFPqoYiS4J6mPogtRTNHxbrBupVUwgLgdLL82Y35nD-qCKDXpIEraZ7si-3P1Ast7zFG6UnvVc7lgmb0GyLlpfizqgKp3BkJFCPnZ09SZAHO5OZRRltDrhId1KZY8U8liSIJBfSDX3NgfoU5FD0Q3i9QDCPrPk0x3qcMRnrahd8q0eWemeCaA08sl2N9hTnsJ86kD_JZyW4Y9g_gfjymU3D6FbCrwalWvRV1" />
            </div>
            <h3 className="font-bold text-lg group-hover:text-primary transition-colors serif">Martijn Balster</h3>
            <p className="text-sm text-slate-500 font-medium">Anggota Dewan Perumahan</p>
          </div>
          {/* Figure 8 */}
          <div className="group cursor-pointer">
            <div className="aspect-[3/4] rounded-xl overflow-hidden mb-3">
              <img alt="Mariëlle Vavier" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwYr684-aEB0HcfJ8rBi1l5R4Zke8CsjF4eAaGSzROvDppz-0T_ma1KUSwccgHJzWV_AjRSYTTABOEjr5TIerVAcNvbup-koRwecqXSoJEaxYxiz8nuousxECg0Jxoq_kZEAtONBJYmtAuaiLrml6gQqO18zj5ZRABgV_Wzdxq5UTkJwjDHp932oc-dyL80naV8em0nvbJ8GT1VhVPPPIWBPR7ouC4fjvg_Za9Ly_Tz7mxwDS1oVSsONkqbTxKc4tMwK7zimBs60tI" />
            </div>
            <h3 className="font-bold text-lg group-hover:text-primary transition-colors serif">Mariëlle Vavier</h3>
            <p className="text-sm text-slate-500 font-medium">Anggota Dewan Urusan Internasional</p>
          </div>
          {/* Figure 9 */}
          <div className="group cursor-pointer">
            <div className="aspect-[3/4] rounded-xl overflow-hidden mb-3">
              <img alt="Arjen Kapteijns" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-GCfqyHHkp8AUboCYUyKDZu-hEKidHCorIifOzI5FtAsAowyzEbj_fAa6PiYOiuo2ALR6cuQfPHkO-YUiHIXl9FlVe6rBbSZA7RYS_dllWY3ezIv7WQgb-zJdUFHzd_Hzi1iiTzi7lTBxCDrO-kTRG2HcLowhGDFiRGTfnKoAaSPaELMleZqd28tOlodHnXDDZ3H20_3O-bjEvcLiKnoYvqhMXAvaCwxGFJUt5f937RQhZVGXyfn33W2f1R7c_ahPvJDC5rGBWvWb" />
            </div>
            <h3 className="font-bold text-lg group-hover:text-primary transition-colors serif">Arjen Kapteijns</h3>
            <p className="text-sm text-slate-500 font-medium">Anggota Dewan Keberlanjutan</p>
          </div>
          {/* Figure 10 */}
          <div className="group cursor-pointer">
            <div className="aspect-[3/4] rounded-xl overflow-hidden mb-3">
              <img alt="Chris van der Helm" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBhcw-34J6qPbgwBRocnO_sPLKkAydkv8z4bO0lzqkuCiWNak6im_LQP0jPTWMZBvHxcdrJa7hvTXe_gPUr0UnQd-w9bb4FIQneCsXcTAFNiI8phYveY7RqpoOI-NwbHPesq_rZOUSXqRmfGN7AGWa6Fz8N6LOEPCT2pw7zmgwY_Y0j8zsHO9KoU1CcC8JnZZDfufYkh2PIB6e4yipeYYZ9kAtPFem22YFA8fTV8ZwUQ7s8sWqU8zRfoZmzhHqNMPGypn8ecBNxEEEU" />
            </div>
            <h3 className="font-bold text-lg group-hover:text-primary transition-colors serif">Chris van der Helm</h3>
            <p className="text-sm text-slate-500 font-medium">Anggota Dewan Kota</p>
          </div>
        </div>
        <div className="mt-12 flex justify-center">
          <button className="flex items-center gap-2 px-8 py-4 bg-slate-100 hover:bg-primary hover:text-white rounded-xl font-bold transition-all uppercase text-xs tracking-widest">
            <span>Lebih Banyak</span>
            <span className="material-symbols-outlined">expand_more</span>
          </button>
        </div>
      </main>
      {/* About Company Section */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center serif">Tentang HARVEN</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {/* Item 1 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary mb-4">
                <span className="material-symbols-outlined">flag</span>
              </div>
              <h4 className="font-bold text-sm mb-1 uppercase tracking-wider serif">Misi</h4>
              <p className="text-xs text-slate-500">Kebenaran &amp; Keadilan</p>
            </div>
            {/* Item 2 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary mb-4">
                <span className="material-symbols-outlined">visibility</span>
              </div>
              <h4 className="font-bold text-sm mb-1 uppercase tracking-wider serif">Visi</h4>
              <p className="text-xs text-slate-500">Masyarakat Berinformasi</p>
            </div>
            {/* Item 3 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary mb-4">
                <span className="material-symbols-outlined">history</span>
              </div>
              <h4 className="font-bold text-sm mb-1 uppercase tracking-wider serif">Sejarah</h4>
              <p className="text-xs text-slate-500">Sejak 1922</p>
            </div>
            {/* Item 4 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary mb-4">
                <span className="material-symbols-outlined">groups</span>
              </div>
              <h4 className="font-bold text-sm mb-1 uppercase tracking-wider serif">Tim</h4>
              <p className="text-xs text-slate-500">50+ Jurnalis</p>
            </div>
            {/* Item 5 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary mb-4">
                <span className="material-symbols-outlined">diamond</span>
              </div>
              <h4 className="font-bold text-sm mb-1 uppercase tracking-wider serif">Nilai</h4>
              <p className="text-xs text-slate-500">Integritas &amp; Kehormatan</p>
            </div>
            {/* Item 6 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary mb-4">
                <span className="material-symbols-outlined">language</span>
              </div>
              <h4 className="font-bold text-sm mb-1 uppercase tracking-wider serif">Jangkauan</h4>
              <p className="text-xs text-slate-500">10 Juta Pembaca</p>
            </div>
            {/* Item 7 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary mb-4">
                <span className="material-symbols-outlined">stars</span>
              </div>
              <h4 className="font-bold text-sm mb-1 uppercase tracking-wider serif">Penghargaan</h4>
              <p className="text-xs text-slate-500">5 Entri Pulitzer</p>
            </div>
            {/* Item 8 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary mb-4">
                <span className="material-symbols-outlined">eco</span>
              </div>
              <h4 className="font-bold text-sm mb-1 uppercase tracking-wider serif">Lingkungan</h4>
              <p className="text-xs text-slate-500">Cetak Ramah Lingkungan</p>
            </div>
            {/* Item 9 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary mb-4">
                <span className="material-symbols-outlined">public</span>
              </div>
              <h4 className="font-bold text-sm mb-1 uppercase tracking-wider serif">Komunitas</h4>
              <p className="text-xs text-slate-500">Keterlibatan Lokal</p>
            </div>
            {/* Item 10 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary mb-4">
                <span className="material-symbols-outlined">shield</span>
              </div>
              <h4 className="font-bold text-sm mb-1 uppercase tracking-wider serif">Independen</h4>
              <p className="text-xs text-slate-500">Liputan Non-partisan</p>
            </div>
          </div>
        </div>
      </section>
      {/* Random Articles Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl font-bold mb-8 flex items-center gap-2 serif"><span className="material-symbols-outlined text-primary">auto_stories</span> Topik Terkini</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {/* Article 1 */}
          <article className="flex flex-col gap-2">
            <div className="aspect-video rounded-lg overflow-hidden">
              <img alt="Security" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD16l1nOrdjCiswlSlcvBqYnyw8M-syQHazyN3EJBCks-3_2zcpOoOTLqRTcB186jOPLupnu4qOz_BnT6GinzbBk-mpOJ62Ex8wNIm4UBsp3Tc_p3A8M577DPB9W2Jv1dFHUaI541qP82_wSpPKUSdnIRKPXvVvApTuGwIFL3UrsnfaI98HfC-KOUA6jDeMXJ0PpXWKowJww1MrQ5HnsY0x716RU_k306BXrrqz9UYMMJGRSOrUpu_nw05jJPxGswgVcYgs8CJXLt--" />
            </div>
            <h4 className="font-bold text-sm leading-snug line-clamp-2 serif">Pusat Keamanan Siber Baru Den Haag Dibuka</h4>
            <p className="text-xs text-slate-500 line-clamp-2">Memperluas peran kota sebagai pemimpin teknologi di kawasan ini.</p>
          </article>
          {/* Article 2 */}
          <article className="flex flex-col gap-2">
            <div className="aspect-video rounded-lg overflow-hidden">
              <img alt="Architecture" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDTFDI5BmswBNa3Ghc2d6q4DbOnXqmXkVMphZKRJ3wNunGES29Tyjwc9xAr2pKFioxDPbCjiZW53Yn5xTr63NaSmocuYxYxK3-ll0yuDgzWUziQAz-V_q0w2cjjtsojkogJs5gEegq7mF20ABeIglvKCYP-sM_SJWqh1LHerJhs5SmjAbhjYCGUwH9grdSe5vCathKEwhtxEL3G0sDmqNEaifyffV_F44N8pHVt6jnp0iUOO6Wcv7Lg-URKSD0JAGXMEVV5O0AYPUUr" />
            </div>
            <h4 className="font-bold text-sm leading-snug line-clamp-2 serif">Inisiatif Ruang Terbuka Hijau Mencapai Tonggak Sejarah</h4>
            <p className="text-xs text-slate-500 line-clamp-2">Dewan kota menyetujui tiga proyek taman kota baru.</p>
          </article>
          {/* Article 3 */}
          <article className="flex flex-col gap-2">
            <div className="aspect-video rounded-lg overflow-hidden">
              <img alt="Education" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAi1L-O5GFlSEnMh07xVc7bVxn_WIKMHUm3ArnTBkbkNyX_fdZKoOa7jQJb9o_n5SV1KBOPRXBsflnv0k7b-_gkmiu9ZMhV3z6OiHQXmrEtjmjKaZR1AXuzYZZUT7SeLoQrX2og6odeoYgvSpX-_a7-LBpJCjpxklagI9u0ElBxIrSpVfebaigg19IygVPFLlfFOXickA2Srh08AKTi8v5f3jXGsbhM-oGUaCvUkc4nFIslNbbVv3e89tte5R6uUZf10tFdqTRFjMC1" />
            </div>
            <h4 className="font-bold text-sm leading-snug line-clamp-2 serif">Inovasi di Sekolah-Sekolah Lokal</h4>
            <p className="text-xs text-slate-500 line-clamp-2">Bagaimana digitalisasi mengubah pendidikan di kota ini.</p>
          </article>
          {/* Article 4 */}
          <article className="flex flex-col gap-2">
            <div className="aspect-video rounded-lg overflow-hidden">
              <img alt="Revitalization" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCu_SnU13RoUXF5GnMcF_6UKQj7RF6HSBXtwgBchzPJL_9DWTzqkgddFXP-aD8oBORSKdnPt_Dri2bFY_GHo9vMBtP3tCOoRi3tPAvkjwuygJmOAaXzDbyHBZ35IV9aXb6IXhcXHXcnT1evvV4c58XlOAr63ScuGeIVHdfPw2dQ6grVarec4z7SFiD9FVKiO5dQMvp-ORh1JKT7HYIgc2YkFfeLtzIxxA2aPp9Ak8pgQFbjVX8a4ErdpTvmPBOeMmtwpBlGirPEtxMW" />
            </div>
            <h4 className="font-bold text-sm leading-snug line-clamp-2 serif">Rencana Revitalisasi Dermaga Scheveningen</h4>
            <p className="text-xs text-slate-500 line-clamp-2">Landmark bersejarah bersiap untuk perombakan desain.</p>
          </article>
          {/* Article 5 */}
          <article className="flex flex-col gap-2">
            <div className="aspect-video rounded-lg overflow-hidden">
              <img alt="Art" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD1uQ2Gz9oKIdJpPUPx8RSfxRSyE9yr98_1i20EbxxODa7kVCBgpAwuYQ104EfkBTiJJ6VacJ5Cmd3m9FboISN8Rch0dKCtckiI5fLcJBYg945IiHgdJT3GayJwDjbiLfkIV5EVOaepoQsCitvePr0JukCBtVuO7T_ODrrJ6fMwQN_8BmVGX2cW3rH5u2t0LuXr7poGl97061Ing8Xc2hRZXUY6nawhnJwA6g4BumVSABQEPZJtuEG6J334yUaaDlm4oAtO849etA_0" />
            </div>
            <h4 className="font-bold text-sm leading-snug line-clamp-2 serif">Pameran Seni Kembali ke Den Haag</h4>
            <p className="text-xs text-slate-500 line-clamp-2">Seniman lokal memamerkan karya mereka di Grote Kerk.</p>
          </article>
        </div>
      </section>
      <Footer />
    </>
  );
}
