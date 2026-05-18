export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: "Hukuk" | "Rehber" | "Gurbetçi" | "Finans" | "Hikaye";
  readMinutes: number;
  publishedAt: string; // ISO
  author: { name: string; role: string };
  cover: { gradient: string; emoji: string };
  body: string[]; // paragraphs (markdown-lite, single newlines = paragraph)
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "kiraci-kira-odemiyor-2026-yasal-yollar",
    title: "Kiracım Kirayı Ödemiyor: 2026’da İzlenmesi Gereken Yasal Yollar",
    excerpt:
      "İhtarname, icra takibi, tahliye davası — Türkiye’de kira ödemeyen kiracıyı çıkarmanın 2026 itibarıyla ortalama süresi 4-5 ay. Adım adım rehber.",
    category: "Hukuk",
    readMinutes: 7,
    publishedAt: "2026-04-22",
    author: { name: "Av. Selin Kara", role: "Kira Hukuku Uzmanı" },
    cover: { gradient: "from-rose-500 to-orange-500", emoji: "⚖️" },
    body: [
      "Kiracınız iki ay üst üste kira yatırmadı, telefonlarınıza bakmıyor. Birçok ev sahibi bu noktada panikleyip yanlış adımlar atar — örneğin doğrudan kilidi değiştirmek veya zorla eve girmek. Bunlar yasal olarak suç oluşturur ve sizi tazminat ödeyen taraf hâline getirebilir.",
      "Doğru yol Türk Borçlar Kanunu’nun 315. ve 352. maddelerinde tanımlanmıştır. Önce noter aracılığıyla en az 30 günlük ödeme süresi tanıyan bir ihtarname çekersiniz. Bu sürenin sonunda ödeme yapılmazsa iki seçeneğiniz vardır.",
      "İlk yol klasik tahliye davasıdır: aynı kira yılı içinde iki haklı ihtar çekildikten sonra Sulh Hukuk Mahkemesi’nde dava açılır. Sonuç tipik olarak 4-5 ayda alınır.",
      "İkinci ve daha hızlı yol icra dairesi üzerinden başlatılan tahliye talepli icra takibidir. Kiracıya 30 günlük ödeme emri gider; itiraz etmez veya ödemezse mahkeme ilk celsede tahliyeye karar verebilir.",
      "Kiram Güvende sistemini tercih eden ev sahipleri bu sürecin hiçbir adımıyla ilgilenmez. Kira sözleşmesi imzalandığı andan itibaren ödeme garantisi başlar; tahsilat ve tahliye süreçleri tamamen bizim ekibimizin sorumluluğundadır.",
    ],
  },
  {
    slug: "gurbetci-ev-sahibi-rehberi",
    title: "Yurt Dışından Türkiye’deki Evimi Nasıl Yönetirim?",
    excerpt:
      "Almanya’dan Alanya’ya, Hollanda’dan Trabzon’a — gurbetçi ev sahiplerinin uzaktan mülk yönetimi rehberi. Vekaletten kira tahsilatına 7 başlık.",
    category: "Gurbetçi",
    readMinutes: 6,
    publishedAt: "2026-03-15",
    author: { name: "Merve Aydın", role: "Müşteri Başarı Uzmanı" },
    cover: { gradient: "from-sky-500 to-indigo-600", emoji: "✈️" },
    body: [
      "Türkiye’de mülkü olup yurt dışında yaşayan herkesin ortak korkusu aynıdır: “Evime bir şey olursa nasıl müdahale ederim?” Geçtiğimiz yıl bir gurbetçi ailenin Alanya’daki dairesini iki yıl boyunca tanımadıkları bir kişinin işgal ettiği haber olmuştu. Bu yalnız bir vaka değil.",
      "İlk adım güvenilir bir genel vekalet vermektir. Konsoloslukta düzenlenen ve “gayrimenkul yönetimi, kira tahsili, dava açma” yetkilerini içeren vekalet olmadan uzaktan hiçbir hukuki işlem yapamazsınız.",
      "İkinci adım banka entegrasyonu. Türkiye’deki banka hesabınızın IBAN bilgisi kiracıya verilir ama kontrolü yalnızca size aittir. Otomatik kira tahsilatı, geç ödeme uyarıları ve aylık raporlama açtırın.",
      "Üçüncü adım mülk denetimidir. Yılda en az iki kez fiziki kontrol yapacak bir partner şart. Su, elektrik, doğalgaz abonelikleri sizin adınızda kalsın — kullanım anormallikleri (örneğin daire boş görünürken yüksek su tüketimi) işgal sinyali olabilir.",
      "Kiram Güvende’nin gurbetçi paketi tam olarak bu üç katmanı tek noktada toplar: e-imza ile sözleşme, otomatik tahsilat, çeyrek bazlı denetim raporu. Türkiye’ye ayak basmanıza gerek kalmıyor.",
    ],
  },
  {
    slug: "tadilat-soku-150-bin-tl-korunma-rehberi",
    title: "“Evde Bomba Patlamış Gibi”: Tadilat Şokundan Korunma Rehberi",
    excerpt:
      "150.000 TL tadilat masrafıyla baş başa kalan ev sahibinin Hürriyet’teki haberi viral oldu. Aynı kâbusu yaşamamak için 6 somut önlem.",
    category: "Rehber",
    readMinutes: 5,
    publishedAt: "2026-02-28",
    author: { name: "Burak Sezgin", role: "Mülk Ekspertiz Uzmanı" },
    cover: { gradient: "from-amber-500 to-red-500", emoji: "🔨" },
    body: [
      "“Evimden kiracının çıktığına sevindim, beş aylık kirayı da ödemeden anahtarı bırakıp kaçtı. Evde bomba patlamış gibi. Şu ana kadar tadilat masrafı 150.000 TL’yi geçti.” Bu sözleri okuyup içi sızlamayan ev sahibi yoktur. Üstelik bu izole bir vaka değil.",
      "Birinci önlem fotoğraflı teslim tutanağıdır. Kiracı eve girmeden önce her odanın 360 derece fotoğrafı çekilmeli, parke, duvar, beyaz eşya ve tesisat fotoğrafları imzalı tutanakla kayıt altına alınmalı.",
      "İkinci önlem depozito tutarının doğru belirlenmesi. Aylık kiranın 1 katı çoğu zaman yetersiz — özellikle eşyalı dairelerde 2-3 katı standart olmalı.",
      "Üçüncü önlem ek hasar teminatıdır. Bazı sigorta şirketleri “kiracı hasar sigortası” adı altında ürün sunuyor; primi ya ev sahibi ya da kiracı öder.",
      "Dördüncüsü düzenli ziyaret hakkı. Sözleşmeye yılda iki kez 24 saat önceden bildirilmek kaydıyla mülk denetimi maddesi koyun. Erken tespit edilen küçük hasarlar, çıkışta dev faturalara dönüşmez.",
      "Beşinci ve altıncı önlem profesyonel mülk yönetimi: çıkış ekspertizi ve teminat zinciri. Kiram Güvende sisteminde çıkışta tespit edilen kiracı kaynaklı her hasar — kiracıdan tahsil edilemese bile — ev sahibine ödenir.",
    ],
  },
  {
    slug: "kira-garantisi-nedir-avantaj-dezavantaj",
    title: "Kira Garantisi Nedir? Avantajları, Riskleri ve Doğru Şirketi Seçme Rehberi",
    excerpt:
      "Türkiye’de “kira garantisi” adı altında farklı modeller var. Komisyon oranları, ödeme disiplini ve şikayet sayıları üzerinden objektif bir karşılaştırma.",
    category: "Finans",
    readMinutes: 8,
    publishedAt: "2026-02-10",
    author: { name: "Ekonomi Ekibi", role: "Kiram Güvende" },
    cover: { gradient: "from-emerald-500 to-teal-600", emoji: "🛡️" },
    body: [
      "“Kira garantisi” terimi Türkiye pazarında üç farklı modeli kapsayacak şekilde kullanılıyor. Birincisi bankaların kredi limiti üzerinden ödeme garantisi (örnek: bazı kamu bankalarının ürünleri). İkincisi emlak ofislerinin “bizim kiracımız ödemezse biz öderiz” taahhüdü. Üçüncüsü, son yıllarda yaygınlaşan profesyonel mülk yönetimi platformları.",
      "İlk model kiracı tarafında kredi puanı şartı arar; ödenmeyen kira faiziyle birlikte kiracıya borç olur. Ev sahibi açısından ödeme garantili olsa da kiracı havuzu daralır.",
      "İkinci model şeffaflık eksikliği nedeniyle Şikayetvar gibi platformlarda en çok şikayet edilen yapıdır. Bir kullanıcının ifadesi: “Sözleşmeye göre kiramın her ayın 17’sinde ödenmesi gerekirken her ay WhatsApp üzerinden ısrar etmek zorunda kalıyorum.” Komisyon kesilir ama vaat tutulmaz.",
      "Üçüncü model — Kiram Güvende dahil — sözleşmeye bağlı, otomatik banka transferi ve dijital takip içerir. Gecikme tazminatı, şeffaf dashboard ve hukuki süreç dahil paket bekleyin.",
      "Doğru şirketi seçerken üç soru sorun: (1) Geciken ödemelerde size tazminat öder mi? (2) Hukuki süreç hizmet bedeline dahil mi? (3) Geçmiş şikayet sayısı ve çözüm oranı nedir? Cevaplar netleştikçe pazar da netleşir.",
    ],
  },
  {
    slug: "kira-sozlesmesi-yaparken-dikkat-edilecek-7-madde",
    title: "Kira Sözleşmesi İmzalarken Atlanan 7 Kritik Madde",
    excerpt:
      "Standart matbu kira sözleşmesi sizi korumaya yetmez. Avukatımızdan ev sahiplerinin %80’inin atladığı maddeler.",
    category: "Hukuk",
    readMinutes: 5,
    publishedAt: "2026-01-20",
    author: { name: "Av. Selin Kara", role: "Kira Hukuku Uzmanı" },
    cover: { gradient: "from-violet-500 to-purple-600", emoji: "📑" },
    body: [
      "Türkiye’deki kira uyuşmazlıklarının büyük çoğunluğu sözleşmedeki belirsizliklerden çıkar. Tüketici elektronik mağazasından alınan A4 matbu sözleşme çoğu durumda yetersizdir.",
      "Birinci madde: Ödeme günü ve gecikme faizi. Yasal faiz oranına atıf yerine sözleşmede somut bir gecikme bedeli (örneğin günlük %0.1) yazılmalı.",
      "İkinci madde: Depozito iadesi koşulları. Hangi durumda kesinti yapılır, ne kadar sürede iade edilir — yazılı olsun.",
      "Üçüncü madde: Bakım-onarım sorumlulukları. “Olağan kullanım hasarı” tanımı yapılmalı; aksi halde her şey ev sahibinin sırtında kalır.",
      "Dördüncü madde: Tahliye taahhütnamesi. Sözleşmeyle birlikte ayrı bir tahliye taahhütnamesi imzalanması tahliye süresini aylar değil günlere indirebilir.",
      "Beşinci madde: Mülk gösterme zorunluluğu. Satış ya da yeni kiracı arama dönemlerinde kiracının mülkü göstermek zorunda olduğu açıkça yazılmalı.",
      "Altıncı ve yedinci maddeler: Kefil ve elektronik tebligat adresi. İyi düzenlenmiş bir kefalet ile e-tebligat maddesi, hukuki sürecin başlangıç hızını üçe katlar.",
    ],
  },
  {
    slug: "emekli-ev-sahibi-pasif-gelir-stratejisi",
    title: "Emekli Maaşı Yetmiyor: Tek Daireyle Düzenli Pasif Gelir Stratejisi",
    excerpt:
      "Emekli olmuş, tek dairesini kiraya vermiş bir ev sahibinin yıllık net gelir planı. Sayılar, riskler ve garantili modelin getirisi.",
    category: "Finans",
    readMinutes: 6,
    publishedAt: "2025-12-12",
    author: { name: "Ekonomi Ekibi", role: "Kiram Güvende" },
    cover: { gradient: "from-cyan-500 to-blue-600", emoji: "💰" },
    body: [
      "Türkiye’de emekli ev sahiplerinin sıklıkla anlattığı bir senaryo var: tek dairesini kiraya vermiş, kira gelirini emekli maaşıyla birleştirip yaşıyor. Sorun şu — kiracı geç yatırdığında ya da hiç yatırmadığında bütçenin tamamı çöküyor.",
      "Bir vaka örneği: 20.000 TL aylık kirayla, 12 aylık sözleşme. Klasik modelde kiracının iki ay üst üste yatırmaması durumunda ev sahibi 40.000 TL açıkta kalır, ek olarak avukat ve dava masrafları için ~15.000 TL çıkar.",
      "Garantili modelde aynı 20.000 TL’den %8 hizmet bedeli kesilir; ev sahibi her ay net 18.400 TL alır. Yıllık net 220.800 TL, dalgalanmasız.",
      "Karşılaştırma basit: klasik modelde beklenen yıllık net (riskler dahil ortalama) ile garantili modeldeki sabit net arasındaki fark çoğu zaman komisyon oranını geçer.",
      "Düzenli gelir özellikle sabit gelirli emekliler için yalnızca matematik değil, psikolojik bir konfor meselesi. “Bu ay yatacak mı?” sorusuyla geçen 30 günün insana maliyeti, %8 komisyondan daha yüksektir.",
    ],
  },
];
