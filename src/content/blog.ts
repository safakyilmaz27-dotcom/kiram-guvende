export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category:
    | "Hukuk"
    | "Rehber"
    | "Gurbetçi"
    | "Finans"
    | "Hikaye"
    | "Kiracı Rehberi"
    | "Piyasa";
  readMinutes: number;
  publishedAt: string; // ISO
  updatedAt?: string; // ISO — içerik güncellendiğinde; Article dateModified olarak basılır
  author: { name: string; role: string };
  cover: { gradient: string; emoji: string };
  body: string[]; // paragraphs (markdown-lite, single newlines = paragraph)
  faq?: { question: string; answer: string }[]; // varsa sayfaya FAQPage JSON-LD basılır
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
    slug: "kiraci-seciminde-yapilan-7-hata-ve-cozumleri",
    title: "Kiracı Seçiminde Yapılan 7 Hata ve Çözümleri",
    excerpt:
      "Yanlış kiracı seçimi, aylarca süren tahliye davalarının ve onarım faturalarının en büyük sebebidir. Ev sahiplerinin en sık düştüğü 7 tuzak ve her birinin somut çözümü.",
    category: "Rehber",
    readMinutes: 7,
    publishedAt: "2026-05-05",
    author: { name: "Merve Aydın", role: "Müşteri Başarı Uzmanı" },
    cover: { gradient: "from-fuchsia-500 to-pink-600", emoji: "🔎" },
    body: [
      "Bir kira ilişkisinin kaderi büyük ölçüde sözleşmenin imzalandığı gün değil, kiracı adayıyla yapılan ilk görüşmede belirlenir. Aşağıdaki yedi hata, ev sahiplerinin daha sonra mahkeme koridorlarında karşılaştığı sorunların çekirdeğini oluşturuyor.",
      "Birinci hata: “İlk gelen, iyi gelen” yaklaşımı. Daire boş kalmasın diye ilk başvurana kapıyı açmak, aylık kira kaybını birkaç haftada telafi eder gibi görünür; ancak yanlış kiracı 6-12 ay boyunca hem geliri hem mülkü riske atar. Çözüm: en az 3-5 aday görüşmeden sözleşme imzalamamak.",
      "İkinci hata: Gelir belgesi istememek. “Tanıdık tavsiyesiyle geldi” diyerek SGK dökümü ya da maaş bordrosu sormamak en sık görülen zaaftır. Çözüm: aylık net gelirin kiranın en az 3 katı olmasını şart koşmak ve bunu son üç aylık SGK hizmet dökümüyle teyit etmek.",
      "Üçüncü hata: Referans kontrolünü atlamak. Bir önceki ev sahibini aramamak, ödeme disiplini ve mülk bakımı hakkındaki en güçlü veri kaynağını kaybetmek demektir. Çözüm: son iki ev sahibine ulaşıp “Yeniden kiraya verir miydiniz?” sorusunu sormak.",
      "Dördüncü hata: Kefil yerine “sözlü garanti”. Sözleşmeye kefil yazılmadan, kefilin kimlik fotokopisi ve imza beyannamesi alınmadan başlatılan kira ilişkilerinde tahsilat süresi ortalama iki katına çıkar. Çözüm: müteselsil kefil ve noter onaylı imza beyannamesi.",
      "Beşinci hata: İcra ve dava sorgusu yapmamak. Adli sicil değil, açık icra dosyası sorgusu kritik. Çözüm: e-Devlet üzerinden kira ödememe kaynaklı icra dosyası geçmişini sorgulamak; geçmişi olan adaylarda en az iki kira tutarında ek teminat istemek.",
      "Altıncı hata: Sosyal medya doğrulamasını ihmal etmek. Aday hakkında temel bir LinkedIn ve sosyal medya kontrolü, beyan edilen iş ve şehirle tutarsızlıkları ortaya çıkarabilir. Çözüm: işveren, pozisyon ve görev yeri en az iki kaynaktan teyit edilmeli.",
      "Yedinci hata: Süreci tek başına yönetmek. Duygusal sempati profesyonel değerlendirmenin önüne geçer; özellikle ilk kez kiraya veren ev sahiplerinde bu risk çok yüksektir. Çözüm: Kiram Güvende’de tüm bu adımlar bağımsız ekipler tarafından yapılır — gelir, SGK, referans, icra ve kefil kontrolü standart paketin parçasıdır ve onay verilmeyen aday sözleşme aşamasına geçirilmez.",
    ],
  },
  {
    slug: "yurt-disindan-mulk-yonetimi-pratik-rehber",
    title: "Yurt Dışından Türkiye’deki Mülkünüzü Yönetmek: Pratik Rehber",
    excerpt:
      "Avrupa’dan, Körfez’den ya da ABD’den Türkiye’deki dairenizi yönetmek için gereken vekalet, banka, tahsilat ve denetim altyapısı — adım adım.",
    category: "Gurbetçi",
    readMinutes: 7,
    publishedAt: "2026-04-08",
    author: { name: "Merve Aydın", role: "Müşteri Başarı Uzmanı" },
    cover: { gradient: "from-blue-600 to-cyan-500", emoji: "🌍" },
    body: [
      "Yurt dışında yaşayan ev sahipleri için Türkiye’deki bir dairenin yönetimi yalnızca kira tahsilatı değildir; vekalet, vergi, abonelik, denetim ve hukuki süreçlerin tek bir zincirde işlemesidir. Bu rehber, sıfırdan uzaktan yönetim altyapısı kurmak isteyenler için pratik bir yol haritasıdır.",
      "Adım 1 — Genel vekalet. Bulunduğunuz ülkedeki Türkiye konsolosluğunda “gayrimenkul yönetimi, kira tahsili, ihtarname keşidesi, icra takibi ve tahliye davası açma” yetkilerini içeren kapsamlı bir vekalet düzenletin. Bu vekalet, uzaktan yapılacak her hukuki işlemin temelidir.",
      "Adım 2 — Banka ve potansiyel vergi mukimliği. Türkiye’de bir vadesiz mevduat hesabı, kira ödemelerinin tek toplandığı kasa olmalı. IBAN kiracıya verilir ama hesabın internet bankacılığı, kart ve yetki erişimi yalnızca sizde kalır. Yıllık kira beyanı için yurt dışında yaşıyor olmanız beyan zorunluluğunuzu ortadan kaldırmaz — bir mali müşavirle yıllık kontrol planlayın.",
      "Adım 3 — Abonelikler. Su, elektrik ve doğalgaz aboneliklerini mümkün olduğunda kiracı adına devredin; mümkün değilse kullanım raporlarını aylık takip edin. Daire boş görünürken yüksek tüketim, izinsiz işgalin en erken sinyalidir.",
      "Adım 4 — Fiziki denetim. Yılda en az iki kez, mümkünse her çeyrek mülkün fotoğraflı denetimi yapılmalı. Aile bireyleri uygun değilse, mülk yönetimi sağlayan kurumsal bir partnerle çalışın; tutanak ve fotoğraf imzalı olarak arşivlenmeli.",
      "Adım 5 — Hukuki erken uyarı. Aidat, vergi bildirimi, ortak alan tebligatları gibi belgelerin elinize geçmesi için Türkiye’de bir tebligat adresi ve düzenli posta kontrolü şart. Aksi halde sizin habersiz olduğunuz bir süreç tahliye ya da haciz aşamasına gelebilir.",
      "Adım 6 — Otomatikleştirme. Yukarıdaki adımları manuel yürütmek mümkündür ama tek bir aksamada zincirin tamamı kopar. Kiram Güvende’nin gurbetçi paketi vekalet, IBAN, tahsilat, çeyrek denetim ve hukuki süreçleri tek panelde toplar; aylık raporlar e-posta ve uygulamadan iletilir, ödemeniz takvim günü değişmeden hesabınıza geçer.",
      "Sonuç: yurt dışından mülk yönetimi “güvenilir bir akraba” modeliyle değil, kurumsal bir zincirle sürdürülebilir. Kurulan altyapı, sizin Türkiye’ye uçmak zorunda kaldığınız acil durum sayısını sıfıra indirir.",
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
  {
    slug: "kira-garantisi-hangi-bankalarda-var",
    title: "Kira Garantisi Hangi Bankalarda Var? Banka Ürünü ile Mülk Yönetimi Farkı",
    excerpt:
      "“Kiram güvende sistemi hangi bankalarda var?” sorusunun kısa cevabı: aradığınız şey büyük ihtimalle bir banka ürünü değil. Banka kaynaklı kira güvencesi ile mülk yönetimi platformları arasındaki farkı adım adım açıklıyoruz.",
    category: "Finans",
    readMinutes: 6,
    publishedAt: "2026-08-04",
    author: { name: "Ekonomi Ekibi", role: "Kiram Güvende" },
    cover: { gradient: "from-violet-500 to-blue-600", emoji: "🏦" },
    body: [
      "Arama motorlarında en sık karşımıza çıkan sorulardan biri şu: **“Kiram güvende sistemi hangi bankalarda var?”** Bu soruyu soranların bir kısmı bankalarının kira ile ilgili bir ürününü arıyor, bir kısmı ise bizi — yani Kiram Güvende adlı mülk yönetimi platformunu. İkisi aynı şey değil, o yüzden en baştan netleştirelim.",
      "## Önce kısa cevap",
      "**Kiram Güvende bir banka ürünü değildir.** Herhangi bir bankanın iştiraki, acentesi veya temsilcisi değiliz. Bağımsız bir mülk yönetimi şirketiyiz: ev sahibiyle doğrudan sözleşme yapar, kiracıyı biz bulur, kirayı biz tahsil eder ve kiracı ödesin ödemesin ev sahibine her ay ödemeyi biz yaparız.",
      "Bankaların kendi adlarıyla sundukları kira/kefalet/teminat ürünleri varsa, bunların koşulları o bankaya aittir ve zaman içinde değişebilir. Bir bankanın ürününü araştırıyorsanız doğru kaynak o bankanın kendi müşteri hizmetleri veya şubesidir — biz o ürünler hakkında bilgi veremeyiz.",
      "## Peki neden karışıyor?",
      "Türkiye'de “kira garantisi” başlığı altında birbirinden çok farklı üç model pazarlanıyor ve hepsi benzer kelimelerle anlatıldığı için kafa karışıyor:",
      "1. **Banka kaynaklı teminat/kefalet ürünleri.** Genellikle kiracının ödeme yükümlülüğü için bir teminat mekanizması kurar. Bankanın kredi değerlendirme kriterlerine tabidir; ürünün varlığı, kapsamı ve fiyatı bankadan bankaya değişir.\n2. **Emlak ofisi taahhütleri.** “Bizim bulduğumuz kiracı ödemezse biz öderiz” şeklinde sözlü ya da basit yazılı taahhütler. Arkasında kurumsal bir yapı ve sözleşmesel yaptırım olup olmadığı vakadan vakaya değişir.\n3. **Mülk yönetimi platformları.** Kiram Güvende bu üçüncü gruptadır. Burada bir sigorta poliçesi ya da banka teminatı satın almazsınız; mülkünüzün yönetimini komple devredersiniz.",
      "## Somut fark ne?",
      "Banka ürünlerinde ilişki genellikle **kiracı ile banka** arasında kurulur ve devreye giren şey bir ödeme güvencesidir. Kiracıyı siz bulursunuz, sözleşmeyi siz yaparsınız, tahsilatı siz takip edersiniz; sorun çıkarsa güvence mekanizması işletilir.",
      "Mülk yönetiminde ise ilişki **ev sahibi ile platform** arasındadır ve devreye giren şey ödemeden çok daha fazlasıdır:",
      "- Kiracı bulma ve gelir/SGK/referans kontrolü\n- Sözleşme hazırlığı ve imza süreci\n- Aylık tahsilat ve ev sahibine sabit tarihli ödeme\n- Kiracı ödemediğinde ihtarname, icra ve tahliye süreçlerinin yürütülmesi\n- Çıkışta mülk ekspertizi ve kiracı kaynaklı hasarların karşılanması",
      "Yani banka ürünü tek bir riski (ödeme) adresler; mülk yönetimi ev sahibinin işini adresler. Hangisinin size uygun olduğu, mülkünüzle ne kadar ilgilenmek istediğinize bağlıdır.",
      "## Karar verirken sorulacak 5 soru",
      "Hangi modeli seçerseniz seçin, sözleşmeyi imzalamadan önce şu beş sorunun yazılı cevabını isteyin:",
      "1. Ödeme hangi takvim gününde ve hangi koşulda yapılır? Gecikme halinde ne olur?\n2. Kiracı ödemezse tahsilat ve tahliye masrafları kime aittir?\n3. Hizmet bedeli/komisyon oranı nedir, üstüne eklenen başka kalem var mı?\n4. Boş kalan aylarda ödeme devam eder mi, devam ederse kaç ay?\n5. Kiracı kaynaklı hasarın üst sınırı nedir, ekspertiz nasıl yapılır?",
      "Bu soruların cevabını sözleşme metninde göremiyorsanız, karşınızdaki ister banka ister platform olsun, imzalamayın.",
      "## Kiram Güvende'nin modeli",
      "Bizde işleyiş şöyle: mülkünüz için ücretsiz ekspertiz yapılır, size sabit bir aylık net rakam teklif edilir. Kabul ederseniz sözleşme imzalanır ve ödeme takvimi o gün başlar. Kiracıyı biz buluruz, kirayı biz tahsil ederiz, kiracı ödemezse hukuki süreci biz yürütürüz — sizin ödemeniz her ay aynı tarihte hesabınıza geçer. Hizmet bedeli %8'dir ve üzerine gizli kalem eklenmez.",
      "Bankanızın bir kira ürünü olup olmadığını merak ediyorsanız o bankaya sormanız gerekir. Ama “kiramı garanti altına almak ve mülkle hiç uğraşmamak” istiyorsanız, aradığınız şey bir banka ürünü değil — mülk yönetimidir.",
    ],
    faq: [
      {
        question: "Kiram Güvende hangi bankaya ait?",
        answer:
          "Kiram Güvende herhangi bir bankaya ait değildir. Bağımsız bir mülk yönetimi şirketiyiz; ev sahibiyle doğrudan sözleşme yapar, kiracıyı buluruz ve kiracı ödesin ödemesin ev sahibine her ay ödeme yaparız.",
      },
      {
        question: "Kira garantisi almak için banka müşterisi olmak gerekir mi?",
        answer:
          "Kiram Güvende ile çalışmak için belirli bir bankanın müşterisi olmanız gerekmez. Ödemeler, adınıza kayıtlı herhangi bir Türkiye bankası hesabına yapılabilir.",
      },
      {
        question: "Banka kaynaklı kira teminatı ile mülk yönetimi arasındaki fark nedir?",
        answer:
          "Banka ürünleri genellikle yalnızca ödeme riskini adresler; kiracı bulma, sözleşme, tahsilat takibi ve tahliye süreci ev sahibinde kalır. Mülk yönetiminde bu süreçlerin tamamı platform tarafından yürütülür ve ev sahibi her ay sabit tarihli net ödeme alır.",
      },
      {
        question: "Kiracı kirayı ödemezse ne oluyor?",
        answer:
          "Ev sahibinin ödemesi etkilenmez; sözleşmede belirlenen tarihte yapılır. İhtarname, icra takibi ve tahliye davası dahil tüm tahsilat süreci Kiram Güvende tarafından yürütülür ve masrafları ev sahibine yansıtılmaz.",
      },
      {
        question: "Hizmet bedeli ne kadar?",
        answer:
          "Hizmet bedeli aylık kira üzerinden %8'dir. Ekspertiz, kiracı bulma, sözleşme ve hukuki süreçler bu orana dahildir; ayrıca ücret alınmaz.",
      },
    ],
  },
  {
    slug: "kiralik-daire-ararken-dikkat-edilmesi-gerekenler",
    title: "Kiralık Daire Ararken Nelere Dikkat Etmeli? Sahadan 14 Madde",
    excerpt:
      "Kiralık daire ararken bütçeden sözleşmeye, aidattan dolandırıcılığa 14 başlık. Ev bakarken sorulacak sorular ve imza öncesi kontrol listesi.",
    category: "Kiracı Rehberi",
    readMinutes: 9,
    publishedAt: "2026-09-08",
    author: { name: "Burak Sezgin", role: "Mülk Ekspertiz Uzmanı" },
    cover: { gradient: "from-teal-500 to-emerald-600", emoji: "🔑" },
    body: [
      "Geçen ay Onikişubat'ta bir daireye ekspertize gittim. Kiracı iki ay önce taşınmış, şimdiden çıkmak istiyor. Sebep? Evi akşam saat altıda görmüş, çok sessiz bulmuş, hemen kaporayı vermiş. Meğer üst kattaki komşunun üç çocuğu varmış ve o gün hepsi anneannedeymiş.",
      "İki ay sonra ödediği bedel: yeni bir depozito, nakliye parası, bir yıllık sözleşmeden çıkma pazarlığı.",
      "Ev bakmak yorucu bir iş. On tane daire gezdikten sonra hepsi birbirine karışır, insan \"tamam, bu iş olsun bitsin\" moduna girer. İşte hatalar tam o anda yapılır. Bu yazıyı, sahada gördüğümüz o hataların üzerine yazdım.",
      "## Önce bütçeyi doğru kur",
      "En yaygın hata kirayı tek başına hesaplamak.",
      "Türkiye genelinde 100 metrekarelik bir dairenin ortalama kirası 2026'nın ilk çeyreğinde 24 bin lira civarındaydı. İstanbul'da bu rakam 40 bini aştı. Ama sizin ödeyeceğiniz aylık tutar bu değil.",
      "Gerçek maliyet şu şekilde çıkıyor:",
      "- Kira\n- Aidat (sitelerde 2.000-6.000 TL bandında, havuzlu-güvenlikli sitelerde daha fazla)\n- Elektrik, su, doğalgaz\n- İnternet\n- Bazı binalarda ısınma payı ayrı",
      "Aidatı sormadan ev tutan çok kişi gördüm. 25 bin liraya evi tuttuğunu sanıp aslında 30 bin liralık yüke girenler var. Görüşmede ilk sorduğunuz üç sorudan biri aidat olsun ve \"ortalama ne kadar\" değil, \"son üç ayın makbuzunu görebilir miyim\" diye sorun.",
      "Kabaca bir denge: kira + aidat + faturalar, hane gelirinizin yüzde 40'ını geçiyorsa o ev sizi yorar. Yüzde 50'yi geçiyorsa bir yıl sonra zam gelince zorlanırsınız.",
      "## Evi ne zaman gezmeli",
      "Bunu ev sahiplerine de söylüyoruz, kiracılara da: **aynı evi iki farklı saatte görün.**",
      "- **Hafta içi akşam 18.00-20.00 arası:** komşu gürültüsü, otopark doluluğu, sokağın gerçek hâli\n- **Gündüz, mümkünse öğleden önce:** doğal ışık, rutubet, manzara",
      "Bir de mümkünse yağmurlu bir günde. Rutubet ve su sızıntısı kuru havada saklanabilir, yağmurda saklanamaz.",
      "## Evin içinde bakılacaklar",
      "Gezerken telefonla fotoğraf çekin, sonra karşılaştırırsınız. Şu noktalara özellikle bakın:",
      "**Duvar dipleri ve tavan köşeleri.** Küf, kabarma, taze boya lekesi. Bir odanın tek duvarı yeni boyanmışsa orada bir şey vardı demektir. Çekinmeden sorun.",
      "**Banyo ve mutfak.** Musluğu açın, basıncı görün. Sifonu çekin. Lavabo altındaki dolabı açıp bakın — sızıntı en çok orada saklanır.",
      "**Pencereler.** Açıp kapatın. PVC mi, ahşap mı, çift cam mı? Isıtma faturanızın yarısı buradan belli olur.",
      "**Elektrik.** Priz sayısını sayın. Eski binalarda oda başına iki priz normaldi, bugün yetmiyor.",
      "**Kombi.** Markası, yaşı, son bakım tarihi. Kombi ev sahibinin sorumluluğundadır ama kışın ortasında bozulduğunda dört gün üşüyen siz olursunuz.",
      "**Depolama.** Vestiyer, kiler, balkon dolabı. Küçük evlerde bu iş ciddi.",
      "**Su tesisatı yaşı.** 25 yaşın üstündeki binalarda galvaniz boru hâlâ olabiliyor. Musluktan ilk akan su sarımsıysa gösterge budur.",
      "## Binaya ve çevreye bakılacaklar",
      "Daireyi beğenip binayı gözden kaçırmak klasik hata.",
      "Yapı yılını mutlaka öğrenin. 1999 öncesi yapılar farklı deprem yönetmeliğine tabi. Kahramanmaraş'ta yaşayan hiç kimseye bunun ne demek olduğunu anlatmak zorunda değilim. Binanın kentsel dönüşüm sürecinde olup olmadığını da sorun — bir yıl oturup sonra tahliye edilmek istemezsiniz.",
      "Asansör var mı, çalışıyor mu, bakım etiketi güncel mi? Otopark kapalı mı, açık mı, daire başına kaç araç hakkı var?",
      "Sonra sokağa çıkın ve yürüyün. En yakın market, eczane, durak nerede? Akşam sokak aydınlatması nasıl? Okula veya işe gerçek gidiş süresini haritadan değil, mümkünse bizzat deneyerek ölçün. Haritanın 20 dakika dediği yol trafik saatinde 45 dakika olabiliyor.",
      "## Ev sahibine sorulacak sorular",
      "Bazı sorular sıkıcı görünür ama sormayanların hepsi sonradan pişman oluyor:",
      "1. Tapuda kim görünüyor, sözleşmeyi imzalayacak kişi mi?\n2. Evi neden kiraya veriyorsunuz, önceki kiracı neden çıktı?\n3. Aidat ne kadar, neleri kapsıyor?\n4. Boya ve küçük tamiratlar kime ait?\n5. Sözleşme kaç yıllık, artış nasıl yapılacak?\n6. Depozito kaç kira, çıkışta hangi şartlarda iade ediliyor?\n7. Evcil hayvan / misafir / iş yapma konusunda kısıtlama var mı?\n8. Faturaların hepsi kapalı mı, borç var mı?",
      "Son madde önemli. Devraldığınız evde ödenmemiş su borcu varsa abonelik açtırmakta zorlanırsınız.",
      "## Sözleşme: kısa bölüm ama en pahalı bölüm",
      "İmza attıktan sonraki her tartışmanın cevabı bu kâğıtta. Türk Borçlar Kanunu kiracıyı ciddi ölçüde koruyor, ama korumanın işlemesi için sözleşmenin düzgün olması gerekiyor.",
      "Kontrol edin:",
      "- Kiralayanın adı ile tapudaki isim aynı mı\n- Kira bedeli hem rakam hem yazıyla yazılmış mı\n- Ödeme günü ve **banka hesabı** yazılı mı (elden ödeme yapmayın, açıklamaya \"2026 Eylül ayı kira bedeli\" yazın)\n- Artış oranı maddesi ne diyor\n- Demirbaş listesi ekli mi (buzdolabı, klima, kombi... hangisi evde kalıyor)\n- Depozito tutarı ve iade şartı yazılı mı",
      "Yasal artış tavanı TÜFE'nin 12 aylık ortalamasıdır ve her ay değişir. Eylül 2026'da yenilenen sözleşmelerde bu oran yüzde 31,79. Sözleşmede daha yüksek bir oran yazsa bile geçerli olmaz; kanun tavanı belirler. Daha düşük bir oran yazıyorsa o geçerli olur — yani düşük oranı yazdırabilirseniz kârdasınız.",
      "Depozito konusunda kanun net: konut kiralarında depozito **üç aylık kirayı geçemez.** Beş kira depozito isteyen bir ilan görürseniz o ilan zaten baştan hukuka aykırı iş yapıyor demektir.",
      "## Taşınmadan önce: giriş tutanağı",
      "Bu maddeyi kimse yapmıyor, sonra depozito kavgası çıkıyor.",
      "Eve girmeden önce her odanın fotoğrafını çekin. Çizik parke, çatlak fayans, lekeli duvar, çalışmayan priz — hepsini görüntüleyin. Elektrik, su, doğalgaz sayaçlarının o günkü değerlerini fotoğraflayın. Kısa bir liste yazıp iki taraf da imzalasın.",
      "Çıkarken \"bu çizik zaten vardı\" demenin tek yolu bu. Sözlü mutabakat mahkemede bir işe yaramıyor.",
      "## Dolandırıcılıktan korunma",
      "Kiralık ilanlarda en sık görülen üç tuzak:",
      "**Fiyatı piyasanın epey altında olan ilan.** Kadıköy'de 15 bin liraya üç artı bir yok. Yoksa yoktur.",
      "**Evi göstermeden kapora isteyen kişi.** \"Yurt dışındayım, anahtarı kargoyla göndereceğim\" cümlesini duyduğunuz an konuşma bitmiştir.",
      "**Tapu göstermeyen kiralayan.** Evi kiraya verenin mal sahibi olduğunu doğrulamadan hiçbir ödeme yapmayın. Aynı daireyi üç kişiye kiralayıp kaporaları toplayan vakalar her yıl haberlerde çıkıyor.",
      "Kural basit: **Evi gezmeden, kimliği ve tapuyu görmeden, banka kaydı bırakmadan tek kuruş ödeme yok.**",
      "## İtiraf: her ev mükemmel olmayacak",
      "Şunu da söyleyeyim, çünkü bu tür yazılar insanı fazla titiz yapıyor. Bütün maddelerden tam not alan ev yok. Bütçenizin içinde, işinize yakın, güvendiğiniz bir yapıda, kombisi çalışan bir daire bulduysanız parke çizikleri için pazarlığı uzatmayın. İyi ev kaçar; kusursuz ev zaten hiç gelmez.",
      "Önemli olan **kusuru bilerek** imza atmak. Bilmeden atılan imza pahalıya patlıyor.",
      "## Bu süreci nasıl kolaylaştırıyoruz",
      "Kiram Güvende'de yönetimini üstlendiğimiz dairelerde bu listenin yarısı zaten çözülmüş oluyor. Çünkü:",
      "- Daire bizim ekspertizimizden geçiyor, hasar tutanağı ilanla birlikte hazırlanıyor\n- Sözleşme standart ve avukat kontrolünden geçmiş\n- Kiralayan tarafta mal sahibinin tapusu doğrulanmış oluyor — sahte ilan riski ortadan kalkıyor\n- Arıza bildirimi ev sahibiyle pazarlık konusu değil, biz koordine ediyoruz",
      "Kiracı olarak da ev sahibi olarak da aynı şeyi istiyoruz aslında: taşındıktan sonra kimsenin kimseyi aramak zorunda kalmadığı bir yıl.",
      "**Kiralık daire arıyorsanız** şehir sayfalarımızdan güvenceli ilanlara bakabilirsiniz. **Evinizi kiraya vermek istiyorsanız** ücretsiz değerleme formunu doldurun, 48 saat içinde arayalım.",
    ],
    faq: [
      {
        question: "Kiralık daire için depozito kaç kira olmalı?",
        answer:
          "Türk Borçlar Kanunu'na göre konut kiralarında depozito en fazla üç aylık kira bedeli kadar olabilir. Uygulamada en yaygın olanı bir veya iki kiradır.",
      },
      {
        question: "Ev sahibi kirayı elden almak isterse ne yapmalıyım?",
        answer:
          "Elden ödeme yapmayın. Ödemenin banka üzerinden yapılması hem sizi hem ev sahibini korur. Zaten belirli tutarın üzerindeki kira ödemelerinin banka aracılığıyla yapılması zorunludur.",
      },
      {
        question: "Boya ve badana kimin sorumluluğunda?",
        answer:
          "Olağan kullanımdan kaynaklanan yıpranma ev sahibine aittir; kiracının verdiği hasar kiracıya. Sözleşmeye \"çıkarken boyalı teslim\" maddesi konulmuşsa o madde bağlayıcı olur, bu yüzden imzadan önce okuyun.",
      },
      {
        question: "Ev sahibi yıl ortasında kirayı artırabilir mi?",
        answer:
          "Hayır. Artış ancak kira yılı dolduğunda ve TÜFE'nin 12 aylık ortalamasını geçmeyecek şekilde yapılabilir.",
      },
      {
        question: "Kaç ev gezmek makul?",
        answer:
          "Sahada gördüğümüz ortalama 8-12 daire. Üç daireden sonra karar veren de var, otuz gezip hâlâ bulamayan da. Aramaya bütçeyi ve semti netleştirerek başlarsanız süre ciddi biçimde kısalıyor.",
      },
    ],
  },
  {
    slug: "turkiye-kira-fiyatlari-2026-sehir-sehir",
    title: "Türkiye'de Kira Fiyatları 2026: Şehir Şehir Ne Kadar, Nerede Ne Bulunur?",
    excerpt:
      "2026 kira fiyatları il il: İstanbul, Ankara, İzmir, Antalya, Gaziantep, Kahramanmaraş ve daha fazlası. TCMB ve piyasa verileriyle güncel ortalama kiralar.",
    category: "Piyasa",
    readMinutes: 8,
    publishedAt: "2026-09-10",
    updatedAt: "2026-09-05",
    author: { name: "Ekonomi Ekibi", role: "Kiram Güvende" },
    cover: { gradient: "from-indigo-500 to-sky-600", emoji: "📊" },
    body: [
      "\"Kira ne kadar?\" sorusunun tek bir cevabı yok. Aynı şehirde iki ilçe arasında iki kat fark olabiliyor, aynı ilçede iki sokak arasında yüzde otuz.",
      "Yine de bir başlangıç noktası lazım. Hem taşınmayı düşünen kiracı için, hem \"evimi kaça vereyim\" diye kafası karışan ev sahibi için. Aşağıdaki tabloları TCMB'nin Yeni Kiracı Kira Endeksi ve piyasa endekslerinin son verilerinden derledik.",
      "Şunu baştan söyleyelim: bu rakamlar **yeni kiralamaların** ortalaması. Beş yıldır aynı evde oturan birinin ödediği kira bunun çok altında olabilir. Türkiye'de kira piyasasının en tuhaf tarafı da bu zaten — aynı apartmanda, aynı büyüklükteki iki dairenin kirası ikiye katlanabiliyor.",
      "## Genel tablo: 2026'da nereye geldik",
      "2026'nın ilk çeyreğinde Türkiye genelinde 100 metrekarelik bir konutun ortalama kirası 24 bin liraya ulaştı. Metrekare başına ülke ortalaması 240 lira bandında.",
      "Daha ilginç olan şey artış hızındaki yavaşlama. Temmuz 2026 itibarıyla yeni kiracı kiralarındaki yıllık artış Türkiye genelinde yüzde 28,4 seviyesinde. Yani kiralar hâlâ artıyor ama artık enflasyonun üzerinde koşmuyor. Bir önceki iki yılın yüzde 50-60'lık artışlarından sonra bu, kiracı açısından nefes alınacak bir aralık.",
      "İzmir'de Temmuz ayında yeni kiracı kiraları aylık bazda yüzde 1,8 **geriledi.** Bunu son üç yıldır görmemiştik.",
      "## Büyükşehirler",
      "### İstanbul",
      "Türkiye'nin en pahalı kira piyasası, farkla. 100 metrekarelik bir dairenin ortalama kirası 40 bin lirayı geçti, metrekare birim fiyatı 370 lira bandında. Yıllık artış yüzde 32'yi buldu — yani İstanbul, ülke ortalamasının da dört puan üzerinde.",
      "Ortalama yanıltıcı olabilir. İlçe bazında tablo şöyle şekilleniyor:",
      "- **En pahalı kuşak:** Kadıköy, Beşiktaş, Sarıyer, Bakırköy\n- **Orta kuşak:** Zeytinburnu, Bahçelievler, Ataşehir, Maltepe\n- **Bütçe dostu:** Sultangazi, Esenyurt, Arnavutköy, Sancaktepe, Tuzla",
      "Son bir yılda en hızlı değer kazanan ilçeler Zeytinburnu, Bahçelievler ve Bakırköy oldu. Bunun sebebi büyük ölçüde kentsel dönüşüm: yıkılan bina sayısı arttıkça o mahalledeki kiralık arz düşüyor, fiyat yukarı gidiyor.",
      "**Pratik öneri:** İstanbul'da bütçeniz sıkışıksa metro hattını takip edin, ilçe adına değil. Metro durağına 10 dakika yürüme mesafesindeki bir Esenyurt dairesi, otobüse mahkûm bir Ataşehir dairesinden daha yaşanabilir olabiliyor.",
      "### Ankara",
      "Metrekare birim fiyatı 247 lira, 119 metrekarelik bir daire için ortalama 29 bin lira civarı. Yıllık artış yüzde 28,6 ile ülke ortalamasının hemen üstünde.",
      "Ankara'nın avantajı şu: metrekare geniş. Aynı paraya İstanbul'da 85 metrekare tutarken Ankara'da 120 metrekare tutuyorsunuz. Çankaya, Yenimahalle ve Etimesgut üçgeni memur ve öğrenci talebiyle sürekli hareketli. Kızılcahamam, Kalecik gibi çevre ilçelerde artış oranı yüksek görünse de mutlak rakamlar hâlâ düşük.",
      "### İzmir",
      "102 metrekarelik bir daire için ortalama 29 bin lira, metrekare 288 lira. Yıllık artış yüzde 26,3 ile üç büyükşehir içinde en yavaşı.",
      "İzmir'de asıl ayrışma sahil-iç ayrımında. Çeşme, Urla, Seferihisar, Güzelbahçe hattı pandemi sonrası \"şehirden kaçış\" dalgasıyla ciddi biçimde pahalandı ve hâlâ pahalı. Bornova ve Buca öğrenci yoğunluğu nedeniyle Eylül'de zirve yapıp Şubat'ta gevşiyor.",
      "## Turizm ve göç şehirleri",
      "**Muğla** ilginç bir vaka: İstanbul'dan sonra Türkiye'nin en pahalı kira piyasası. 100 metrekare için ortalama 33 bin lira. Bodrum, Fethiye ve Marmaris'te yıllık kira bulmak yazın neredeyse imkânsız çünkü ev sahipleri günlük kiralamaya geçiyor. Bu şehirlerde yıllık kontratla ev arayacaksanız Ekim-Kasım aylarını bekleyin, fiyatlar ciddi biçimde düşüyor.",
      "**Antalya** ortalama 25 bin lira bandında. Muratpaşa ve Konyaaltı sahil hattı pahalı, Kepez ve Döşemealtı belirgin biçimde uygun.",
      "**Çanakkale** listelerde beklenmedik biçimde üst sıralarda (24-25 bin bandı). Üniversite ve turizm baskısı birlikte çalışıyor.",
      "## Anadolu şehirleri: asıl fırsat burada",
      "Büyükşehir manşetleri her şeyi gölgeliyor ama Türkiye'nin kira hikâyesi Anadolu'da yaşanıyor.",
      "**Kahramanmaraş.** Deprem sonrası konut arzının yeniden kurulduğu bir şehir. Onikişubat ve Dulkadiroğlu'nda yeni tamamlanan bloklar piyasaya girdikçe fiyatlar 2024 zirvesinden geriledi. Şu an ülke ortalamasının altında, ama TOKİ teslimlerinin ritmine göre mahalle mahalle çok değişiyor. Kendi merkez ofisimiz burada olduğu için şunu net söyleyebiliyorum: aynı özellikteki iki daire arasında 8-10 bin lira fark görebiliyoruz, tek sebebi de binanın teslim yılı.",
      "**Gaziantep.** Sanayi istihdamı sürekli kiracı üretiyor. Şehitkâmil merkez ve Şahinbey arasında belirgin fiyat farkı var. Boş kalma süresi Türkiye ortalamasının altında — ev sahibi için iyi, kiracı için hızlı karar vermek gerektiği anlamına geliyor.",
      "**Bursa, Kocaeli, Konya, Kayseri.** Sanayi kuşağı. Kocaeli'de en düşük daire kiraları 15 bin liradan başlıyor. Bursa'da Nilüfer belirgin biçimde diğer ilçelerden pahalı.",
      "**Değer artışında öne çıkanlar:** Bingöl, Hakkari, Iğdır, Batman, Aksaray. Yüzde olarak Türkiye'yi domine ediyorlar, ama mutlak rakamlar düşük olduğu için yüzdeler yanıltıcı — 8 bin liralık kiranın 11 bin liraya çıkması yüzde 37 artış demek.",
      "**En yavaş artanlar:** Sinop, Şanlıurfa, Bilecik, Yozgat, Afyonkarahisar.",
      "## Kira artışı: bu yıl neyi ödeyeceksiniz",
      "Mevcut sözleşmeniz yenilenirken uygulanabilecek yasal tavan, TÜFE'nin 12 aylık ortalamasıdır. Eylül 2026'da yenilenen sözleşmeler için bu oran **yüzde 31,79.** Ağustos'ta yüzde 31,90'dı; oran her ay TÜİK verisiyle birlikte azar azar geriliyor.",
      "Basit hesap: 20.000 TL kira ödüyorsanız Eylül'de yenilenen sözleşmenizde yeni kira en fazla 26.358 TL olabilir.",
      "İki uyarı:",
      "Birincisi, kira artışında **yıllık enflasyon değil**, 12 aylık ortalama kullanılır. Haberlerde açıklanan \"yıllık TÜFE yüzde 31,51\" rakamı sizin zammınız değil. Karıştıran çok oluyor.",
      "İkincisi, sözleşmede TÜFE'den düşük bir oran yazıyorsa o geçerlidir. Yüksek yazıyorsa TÜFE tavan olarak uygulanır. Yani sözleşmeye \"yüzde 50 artış\" yazdırmak ev sahibine bir şey kazandırmaz.",
      "## Peki bu tablo nereye gidiyor",
      "Kimse kesin konuşamaz, biz de konuşmayacağız. Ama iki eğilim net görünüyor:",
      "Yeni kiracı kira artışı (yüzde 28 bandı) ile TÜİK'in gerçek kira endeksi arasındaki makas kapanıyor. Bu, mevcut kiracıların ödediği kiralarla piyasa kirasının birbirine yaklaştığı anlamına geliyor. Uzun vadede ev sahibi-kiracı gerilimini azaltan bir şey.",
      "İkincisi, arz tarafında yeni konut teslimleri hızlandıkça özellikle Anadolu şehirlerinde fiyat baskısı azalıyor. Kahramanmaraş bunun en görünür örneği.",
      "## Ev sahibiyseniz bu tabloya nasıl bakmalısınız",
      "Ortalamalar iyi bir referans ama kira gelirinizin kaderi ortalama değil, **boş kalan ay sayısı.** 30 bin liraya vereceğiniz eviniz iki ay boş kalırsa yıllık geliriniz 27 bin liraya çekilmiş demektir. 27 bine hızlı kiraladığınız senaryodan kötü.",
      "Bizim işimizin özü de burada: kira boş kalsa da, kiracı geç yatırsa da, hukuki süreç uzasa da ödeme her ayın 1'inde hesabınıza geçiyor. Mülkünüzün bulunduğu şehir için güncel piyasa değerlemesini ücretsiz çıkarıyoruz.",
      "---",
      "*Bu sayfa TÜİK enflasyon verisi açıklandığı gün ve TCMB endeksleri yenilendikçe güncellenmektedir. Son güncelleme: 5 Eylül 2026.*",
    ],
    faq: [
      {
        question: "Türkiye'de ortalama kira 2026'da ne kadar?",
        answer:
          "100 metrekarelik bir konut için ülke geneli ortalama 24 bin lira bandında. İstanbul'da 40 bin, Muğla'da 33 bin, İzmir'de 26-29 bin, Ankara'da 22-29 bin aralığında değişiyor.",
      },
      {
        question: "Eylül 2026 kira artış oranı yüzde kaç?",
        answer:
          "Yüzde 31,79. Bu oran, Ağustos 2026 TÜFE'sinin 12 aylık ortalamasıdır ve Eylül'de yenilenen konut ile çatılı iş yeri sözleşmeleri için yasal tavandır.",
      },
      {
        question: "En ucuz kiralık daire hangi şehirlerde?",
        answer:
          "Mutlak rakam olarak Sinop, Yozgat, Bilecik, Afyonkarahisar gibi illerle Doğu ve Güneydoğu'nun küçük ölçekli şehirleri en uygun bandı oluşturuyor.",
      },
      {
        question: "Kira fiyatları düşecek mi?",
        answer:
          "Nominal olarak düşüş beklenmiyor, ama artış hızı belirgin biçimde yavaşladı. İzmir gibi bazı şehirlerde aylık bazda gerileme görüldü. Reel olarak (enflasyondan arındırılmış) kiralar bazı dönemlerde geriliyor.",
      },
    ],
  },
  {
    slug: "emlakcisiz-kiralik-ev-kapora-dolandiriciligi",
    title: "Emlakçısız Kiralık Ev Tutmak: Komisyondan Kaçarken Kaporayı Kaptırmayın",
    excerpt:
      "Emlakçısız kiralık ev nasıl bulunur, komisyon kaç kira, sahte ilan ve kapora dolandırıcılığı nasıl anlaşılır? Ödeme yapmadan önceki 6 adımlık doğrulama.",
    category: "Kiracı Rehberi",
    readMinutes: 7,
    publishedAt: "2026-09-12",
    author: { name: "Av. Selin Kara", role: "Kira Hukuku Uzmanı" },
    cover: { gradient: "from-orange-500 to-rose-600", emoji: "🚨" },
    body: [
      "Bir kiralık daire için ödediğiniz komisyon, bugünün rakamlarıyla İstanbul'da kolaylıkla 40 bin lirayı buluyor. Depozito, ilk kira, nakliye, abonelik derken taşınma faturası 150 bini geçiyor.",
      "Bu yüzden insanların \"emlakçısız bulsam\" demesi son derece mantıklı. Ben de anlıyorum.",
      "Ama bu yazıyı yazma sebebim şu: emlakçıdan kaçmak isteyen insanların önemli bir kısmı, komisyondan kurtulayım derken kaporayı kaybediyor. Büromuza gelen kira uyuşmazlıklarının içinde en can sıkıcı olanı bu — çünkü mahkemede kazansanız bile parayı geri almanın yolu çoğu zaman yok, karşı taraf ortada yok.",
      "## Önce şu komisyon meselesi",
      "Yasal durum net: taşınmaz ticaretiyle uğraşan emlakçılar konut kiralamalarında **kira bedelinin bir aylığını geçmeyecek** şekilde hizmet bedeli alabilir ve bu bedeli taraflardan sadece birinden isteyebilir. Yani hem ev sahibinden hem kiracıdan ayrı ayrı bir kira almak mevzuata aykırı.",
      "İkinci nokta: emlakçı hizmet bedeli almışsa **fatura kesmek zorunda.** Elden alınan, faturasız komisyon usulsüzdür.",
      "Uygulamada çoğu emlakçı bunu bilerek zorluyor. Siz bilmediğiniz için ödüyorsunuz. En azından pazarlık masasına oturduğunuzda bu iki maddeyi bilerek oturun.",
      "Bir de şunu söyleyeyim, çünkü dürüst olmak lazım: iyi emlakçı gerçekten iş yapar. Portföyü vardır, mahalleyi bilir, ev sahibinin ciddi olup olmadığını anlar, sözleşmeyi düzgün yazar. Kötü emlakçı ise sadece kapıyı açıp size anahtar sallar ve bir maaşınızı alır. Sorun meslekte değil, ayrımın yapılamamasında.",
      "## Emlakçısız ev nerede bulunur",
      "Sahada işe yarayan yollar, etkililik sırasıyla:",
      "**Mahalleyi yürümek.** Kulağa eski usul geliyor ama hâlâ en verimlisi. Beğendiğiniz üç sokakta apartman girişlerine asılan \"kiralık\" kâğıtları çoğu zaman internete hiç düşmüyor. Apartman kapıcısı ve mahalle bakkalı, o mahallenin gerçek ilan panosudur.",
      "**Sosyal medya grupları.** Şehir ve mahalle bazlı Facebook grupları, üniversite şehirlerinde öğrenci toplulukları. Buradaki ilanların bir kısmı doğrudan ev sahibinden. Ama dolandırıcılığın da en yoğun olduğu kanal burası, dikkatli olun.",
      "**Tanıdık ağı.** Klişe ama veri de bunu söylüyor. İş yerinizde \"ev arıyorum\" cümlesini kurmak, on ilana bakmaktan daha çok işe yarıyor.",
      "**Site yönetimleri.** Büyük sitelerde yönetim, boşalan daireleri bilir. Yönetim ofisine uğrayıp bırakacağınız bir telefon numarası çoğu zaman iki hafta içinde dönüş getiriyor.",
      "**Güvenceli platformlar.** Bizim gibi mülk yönetimi yapan platformlarda kiracıdan komisyon alınmaz, çünkü gelir modeli ev sahibi tarafındadır. İlan yayınlanmadan önce daire ekspertizden geçmiş, tapu doğrulanmış olur.",
      "## Kapora dolandırıcılığı nasıl çalışıyor",
      "Kalıp hep aynı, sadece hikâye değişiyor.",
      "Piyasanın belirgin biçimde altında fiyatlı, güzel fotoğraflı bir ilan görürsünüz. Ararsınız, karşınızdaki kişi kibardır, acelesi vardır. Genelde şu cümlelerden biri geçer:",
      "- \"Yurt dışındayım, evi kardeşim gösterecek ama o da şehir dışına çıktı.\"\n- \"Çok talep var, kaporayı yatıran ilk kişiye vereceğim.\"\n- \"Anahtarı kargoyla göndereyim, beğenmezsen paranı iade ederim.\"\n- \"Sözleşmeyi imzalayıp size kargolayacağım, siz şimdi depozitoyu yollayın.\"",
      "Sonra bir IBAN gelir. Genellikle ilanı verenden farklı bir isme ait olur (\"hesabım bloke, eşimin hesabına yollayın\"). Para gider, numara kapanır.",
      "İkinci yaygın yöntem daha sinsi: **kiralık evi kiraya vermek.** Dolandırıcı bir evi kendisi kiralar, sonra o evi sahibiymiş gibi 15-20 kişiye gösterip herkesten depozito ve kapora toplar, ortadan kaybolur. Kurbanların hepsi aynı gün eve taşınmaya gelir ve olay kapı önünde ortaya çıkar. Bu vaka her yıl Türkiye'nin bir şehrinde tekrarlanıyor.",
      "Üçüncüsü: **gerçek olmayan ilan görselleri.** Fotoğraflar başka bir ilandan veya yurt dışı sitesinden alınmıştır. Görseli Google'da tersine arama yaparak kontrol edebilirsiniz, 30 saniye sürüyor.",
      "## Ödeme yapmadan önce yapılacak 6 kontrol",
      "Bunu bir kontrol listesi olarak telefonunuza kaydedin. Altı maddenin tamamından geçmeyen hiçbir daireye para vermeyin.",
      "**1. Evi bizzat gördünüz mü?**\nVideo turu yeterli değil. Video eski olabilir, başka daireye ait olabilir. Şehir dışındaysanız, güvendiğiniz birini gönderin ve o kişi eve girerken sizi canlı arasın.",
      "**2. Kiraya verenin kimliğini gördünüz mü?**\nKimlik fotoğrafını isteyin ve tapudaki isimle karşılaştırın.",
      "**3. Tapu kaydını doğruladınız mı?**\nE-Devlet üzerinden kendi tapu bilgilerinizi görebilirsiniz ama başkasının tapusunu göremezsiniz. Bu yüzden mal sahibinden tapu belgesini isteyin. Vermekten çekiniyorsa alarm zilidir. Mal sahibi değil de vekil ise **noter onaylı vekaletname** isteyin ve vekaletnamenin \"kiraya verme yetkisi\" içerdiğinden emin olun.",
      "**4. Ödemeyi mal sahibinin hesabına mı yapıyorsunuz?**\nIBAN'daki isim, sözleşmedeki kiraya veren ile aynı olmalı. Farklıysa ödeme yapmayın. \"Eşimin hesabı\" bahanesi, dolandırıcılık vakalarının ortak paydasıdır.",
      "**5. Elden ödeme yapmıyorsunuz, değil mi?**\nKapora dahil her ödeme banka üzerinden olsun. Açıklamaya ne için ödendiğini yazın: \"Atatürk Mah. X Apt. 5 no'lu daire kapora bedeli\". Bu açıklama, ileride iade davası açmanız gerekirse en güçlü deliliniz.",
      "**6. Kapora makbuzunu yazılı aldınız mı?**\nNe kadar, ne için, hangi tarihe kadar geçerli, sözleşme kurulmazsa iade koşulu ne? Tek sayfa yeter, ama yazılı olsun ve iki taraf imzalasın.",
      "Not: Kapora hukuken bağlayıcıdır. Vazgeçen taraf kiracıysa kapora yanabilir; vazgeçen ev sahibiyse genellikle iki katı iade edilmesi gerekir. Ama bunların hepsi **yazılı belge varsa** tartışılır. Yoksa tartışacak bir şey de yok.",
      "## Dolandırıldıysanız ne yapılır",
      "Zaman kritik.",
      "Önce bankanızı arayın ve işlemin iadesi için talepte bulunun. Havale/EFT çok yeni ise engellenme ihtimali var.",
      "Sonra karakola gidip şikâyette bulunun ve elinizdeki her şeyi verin: ilan ekran görüntüleri, mesajlaşmalar, arama kayıtları, dekont, IBAN, ilanın yayınlandığı platform. Suç duyurusu için avukat şart değil, ama tutar büyükse ve birden fazla mağdur varsa toplu şikâyet süreci hızlandırıyor.",
      "İlanın yayınlandığı platforma da bildirin. Aynı ilanın kaldırılması, sizden sonraki kişiyi kurtarır.",
      "Açıkça söyleyeyim: paranın geri gelme ihtimali düşük. Bu yüzden bu yazının değerli kısmı yukarıdaki altı maddelik liste, bu bölüm değil.",
      "## Bizim tarafımızdan bakınca",
      "Kiram Güvende olarak biz ev sahibi tarafında çalışıyoruz — kira garantisi veriyoruz, tahsilatı ve hukuki süreci üstleniyoruz. Ama bu modelin kiracıya yansıyan bir tarafı var ve bunu yeterince anlatmadığımızı düşünüyorum:",
      "Portföyümüzdeki her daire, ilan yayınlanmadan önce ekspertizden geçiyor. Tapu doğrulanıyor, hasar tutanağı tutuluyor, sözleşme avukat kontrolünden geçmiş standart metin oluyor. Ödemeler kurumsal hesap üzerinden yürüyor.",
      "Yani \"kiraya verenin gerçekten mal sahibi olup olmadığı\" sorusu bizim ilanlarımızda hiç sorulmuyor. Kiracıdan da komisyon almıyoruz.",
      "Türkiye'nin her ilinde portföyümüzü genişletiyoruz. Şehrinizdeki güvenceli ilanlara bakmak için ilgili şehir sayfasını ziyaret edin; evini kiraya vermek isteyen bir ev sahibiyseniz ücretsiz değerleme formunu doldurun.",
    ],
    faq: [
      {
        question: "Emlakçı komisyonu kaç kira olmalı?",
        answer:
          "Konut kiralamalarında hizmet bedeli, bir aylık kira bedelini geçemez ve taraflardan yalnızca birinden alınabilir. Alınan bedel için fatura düzenlenmesi zorunludur.",
      },
      {
        question: "Kapora verdim, vazgeçtim. Geri alabilir miyim?",
        answer:
          "Kaporanın niteliğine ve yazılı belgeye bağlı. Cayma parası olarak verilmişse ve vazgeçen sizseniz genellikle iade edilmez. Sözleşme ev sahibinin kusuruyla kurulmadıysa iade talep edebilirsiniz. Yazılı makbuz yoksa ispat çok zorlaşır.",
      },
      {
        question: "Evi görmeden kapora vermek güvenli mi?",
        answer:
          "Hayır. Dolandırıcılık vakalarının neredeyse tamamı bu noktada başlıyor. Şehir dışındaysanız güvendiğiniz birini gönderin veya kurumsal güvence sunan bir platform üzerinden ilerleyin.",
      },
      {
        question: "IBAN başka birinin adına, sorun olur mu?",
        answer:
          "Ödeme yapmayın. Sözleşmedeki kiraya veren ile hesap sahibi aynı kişi olmalı. Farklı isim, en güçlü uyarı işaretlerinden biridir.",
      },
      {
        question: "Emlakçısız kiralamada sözleşmeyi kim hazırlar?",
        answer:
          "Taraflar hazırlayabilir, matbu sözleşmeler de kullanılabilir. Ancak matbu metinler çoğu zaman eksiktir: demirbaş listesi, artış maddesi, depozito iade koşulu gibi kritik başlıklar yazılmaz. Bunları elle eklemekten çekinmeyin.",
      },
    ],
  },
  {
    slug: "kiraci-haklari-2026-zam-depozito-tahliye",
    title: "Kiracı Hakları 2026: Zam, Depozito ve Tahliye Konusunda Bilmeniz Gereken Her Şey",
    excerpt:
      "Eylül 2026 kira artış oranı yüzde 31,79. Depozito sınırı, tahliye şartları, 10 yıl kuralı ve ev sahibinin yapamayacakları — güncel kira hukuku rehberi.",
    category: "Hukuk",
    readMinutes: 8,
    publishedAt: "2026-09-15",
    updatedAt: "2026-09-05",
    author: { name: "Av. Selin Kara", role: "Kira Hukuku Uzmanı" },
    cover: { gradient: "from-slate-600 to-blue-700", emoji: "📜" },
    body: [
      "Her ayın 3'ünde telefonlarımız aynı soruyla çalıyor: \"Bu ay zam yüzde kaç?\"",
      "Cevap: **Eylül 2026'da yenilenen konut ve çatılı iş yeri sözleşmelerinde yasal artış tavanı yüzde 31,79.**",
      "Ama telefonun ucundaki sorunun ardında genelde başka bir sorun oluyor. Ev sahibi yüzde 60 istiyor. Ya da \"beğenmiyorsan çık\" diyor. Ya da depozito iade edilmiyor. Bu yazıyı, o soruların tamamını tek yerde toplamak için yazdım.",
      "Baştan söyleyeyim: Türkiye'de kira hukuku kiracıyı ciddi biçimde koruyor. Sorun genellikle kiracının haklarını bilmemesinden çıkıyor, hukukun yetersizliğinden değil.",
      "## 1. Kira artışı: rakamın kaynağı",
      "Türk Borçlar Kanunu'nun 344. maddesi diyor ki, yenilenen kira dönemlerinde uygulanacak artış, **bir önceki kira yılındaki TÜFE'nin on iki aylık ortalamalara göre değişim oranını** geçemez.",
      "İki nokta sürekli karıştırılıyor:",
      "**Yıllık enflasyon değil, 12 aylık ortalama kullanılır.** TÜİK 3 Eylül 2026'da Ağustos verilerini açıkladı: yıllık TÜFE yüzde 31,51, aylık yüzde 1,84. Ama kira artışında kullanılan rakam bunların hiçbiri değil, 12 aylık ortalama olan **yüzde 31,79.**",
      "**Yenileme ayından bir önceki ayın verisi esas alınır.** Yani Eylül'de yenilenen sözleşme için Ağustos verisi kullanılır.",
      "Hesap basit. 20.000 TL kira ödüyorsanız:\n> 20.000 × 31,79 / 100 = 6.358 TL artış → **yeni kira 26.358 TL**",
      "Karşılaştırma için: Ağustos'ta yenilenen sözleşmelerde oran yüzde 31,90'dı. Oran her ay bir miktar geriliyor, bu düşüş eğilimi bir süredir devam ediyor.",
      "### Sözleşmede farklı bir oran yazıyorsa",
      "- **TÜFE'den düşük oran yazıyorsa:** sözleşmedeki oran uygulanır. Kiracının lehinedir.\n- **TÜFE'den yüksek oran yazıyorsa:** TÜFE tavan olur, fazlası geçersizdir.\n- **Hiçbir oran yazmıyorsa:** yine TÜFE tavanını aşmamak üzere, hâkim hakkaniyete göre belirler.",
      "Yani \"sözleşmeye yüzde 50 yazdırdım\" diyen ev sahibi hukuken bir şey kazanmamıştır.",
      "### Ev sahibi yasal orandan fazlasını isterse",
      "Yapılacak şey şu: **yasal orandaki artışı hesaplayıp ödemeye devam edin ve ödemeyi banka üzerinden yapın.** Açıklamaya ilgili ayı yazın.",
      "Fazlasını ödemeyi reddetmeniz temerrüt sayılmaz, çünkü borcunuz olan tutarı ödemişsinizdir. Ev sahibi kabul etmiyorsa bankaya ödeyip dekontu saklamak sizi korur. Elden ödeme yapıp makbuz almamak ise sizi savunmasız bırakır.",
      "Ev sahibinin kira tespit davası açma hakkı vardır. Bu ayrı bir yoldur ve mahkeme karar verene kadar siz mevcut kirayı ödemeye devam edersiniz.",
      "### 5 yıl kuralı",
      "Beş yıldan uzun süredir devam eden kira ilişkilerinde ev sahibi, TÜFE sınırına bağlı kalmadan **kira tespit davası** açabilir. Mahkeme, emsal kiraları ve hakkaniyeti gözeterek yeni bedeli belirler. Bu, birçok kiracının bilmediği ve beşinci yılda sürprizle karşılaştığı bir madde.",
      "## 2. Depozito",
      "Kanun net: konut kiralarında depozito **üç aylık kira bedelini geçemez.**",
      "Depozitonun ne olduğu da önemli. Depozito peşin kira değildir. \"Son üç ayı depozitodan düşün\" demek, kural olarak ev sahibinin kabulüne bağlıdır — tek taraflı olarak yapamazsınız.",
      "Çıkışta depozito, evde olağan kullanım dışı hasar veya ödenmemiş borç yoksa iade edilir. Ana ihtilaf noktası da bu: \"olağan kullanım\" nedir?",
      "- Duvarda solmuş boya, parkede yürüme izi, mutfak dolabında normal aşınma → **olağan yıpranma, kiracıdan istenemez**\n- Kırık cam, delinmiş kapı, sökülmüş dolap, evcil hayvanın parçaladığı parke → **kiracının sorumluluğu**",
      "Bu tartışmayı kazanmanın tek yolu **giriş tutanağı**. Taşınırken her odanın fotoğrafını çekin, sayaç değerlerini görüntüleyin, kısa bir liste yapıp iki taraf imzalasın. Bu on dakikalık iş, ortalama bir depozito tutarını kurtarıyor.",
      "## 3. Ev sahibi hangi hâllerde tahliye isteyebilir",
      "Kiracı korkusunun kaynağı burada, o yüzden net yazıyorum. Ev sahibi keyfî olarak \"çık\" diyemez. Tahliye sadece kanunda sayılan sebeplerle mümkündür:",
      "**Kira ödenmemesi.** İki haklı ihtar çekilmesi ya da temerrüt nedeniyle dava yolu. Süreç ihtarname ile başlar.",
      "**Gereksinim (ihtiyaç).** Ev sahibi, kendisi, eşi, altsoyu, üstsoyu veya bakmakla yükümlü olduğu kişiler için konuta ihtiyaç duyuyorsa dava açabilir. Ancak bu ihtiyacın **gerçek, samimi ve zorunlu** olması gerekir. Tahliye edilen konut, haklı sebep olmaksızın **üç yıl** boyunca eski kiracıdan başkasına kiralanamaz. Aksi hâlde ev sahibi tazminat öder.",
      "**Yeniden inşa veya esaslı onarım.** Evde oturmayı imkânsız kılacak kapsamda tadilat gerekiyorsa.",
      "**Yeni malik.** Evi satın alan kişi, ihtiyaç sebebiyle, edinme tarihinden itibaren bir ay içinde yazılı bildirimde bulunmak koşuluyla altı ay sonra dava açabilir.",
      "**On yıllık uzama süresi.** Belirli süreli sözleşmelerde, sürenin bitiminden sonraki on yıllık uzama süresi dolduğunda ev sahibi, sebep göstermeksizin, üç ay önceden bildirmek şartıyla sözleşmeyi sona erdirebilir.",
      "**Kiracının başka konutunun bulunması.** Kiracının veya eşinin aynı ilçede oturmaya elverişli bir konutu varsa ve ev sahibi bunu sözleşme kurulurken bilmiyorsa.",
      "Bunların dışındaki her \"çık\" talebi, hukuken bir talepten ibarettir. Tahliye ancak mahkeme kararı ve icra yoluyla olur. Kilit değiştirmek, eşyayı sokağa çıkarmak, elektriği kesmek suçtur.",
      "## 4. Ev sahibinin yapamayacakları",
      "Kısa liste, ama pratikte en çok ihlal edilenler:",
      "- İzinsiz eve girmek (mülkiyet ona ait olsa da zilyetlik kiracıdadır)\n- Elektrik, su, doğalgazı kesmek veya kestirmek\n- Kilidi değiştirmek, eşyaya el koymak\n- Mahkeme kararı olmadan tahliye ettirmek\n- Depozitoyu sebepsiz alıkoymak\n- Yasal tavanın üzerinde zam dayatmak\n- Ödeme yapıldığı hâlde makbuz vermemek",
      "## 5. Kiracının yükümlülükleri de var",
      "Bu yazı kiracı hakları üzerine ama tek taraflı olmak istemiyorum, çünkü uyuşmazlıkların bir kısmında haklı taraf ev sahibi oluyor.",
      "Kiracı olarak:\n- Kirayı zamanında ödemek zorundasınız\n- Evi özenle kullanmak, komşulara saygı göstermek zorundasınız\n- Küçük bakım ve temizlik masrafları size aittir (musluk contası, ampul, tıkanan gider)\n- Yapısal onarımlar ev sahibine ait olsa da, arızayı **derhal bildirmekle** yükümlüsünüz. Bildirmediğiniz için büyüyen hasardan siz sorumlu olursunuz\n- Evi izinsiz alt kiraya veremezsiniz\n- Çıkarken sözleşme süresine uymalısınız; erken çıkışta, ev yeniden kiralanana kadar makul bir süre için kiradan sorumlu olabilirsiniz",
      "## 6. Anlaşmazlık çıkarsa yol haritası",
      "Kira uyuşmazlıklarında dava açmadan önce **arabuluculuk zorunlu.** Bu, 2023'ten beri geçerli ve pratikte epey işe yarıyor: dosyaların ciddi bir kısmı mahkemeye gitmeden çözülüyor.",
      "Sıra şöyle:\n1. Yazılı bildirim (ihtarname, tercihen noterden)\n2. Arabuluculuk başvurusu (adliyedeki arabuluculuk bürosuna)\n3. Anlaşma olmazsa Sulh Hukuk Mahkemesi'nde dava",
      "İhtiyaç nedeniyle tahliye davalarında ortalama süre bir yılı bulabiliyor. Kira ödememe kaynaklı icra takibi daha hızlı ama yine de dört-beş ay demek.",
      "## Ev sahibi tarafında ne oluyor",
      "Şunu da eklemek istiyorum, çünkü bu blogu okuyanların bir kısmı ev sahibi:",
      "Bu sürelerin uzunluğu, ev sahiplerinin kiracı seçiminde aşırı temkinli davranmasına yol açıyor. Bekâra vermeyen, öğrenciye vermeyen, çocuklu aileye vermeyen ilanların arkasında genelde kötü niyet değil, \"dört ay kira alamazsam ne yaparım\" korkusu var.",
      "Bizim modelimiz tam olarak bu korkuyu ortadan kaldırıyor. Kira, kiracı ödesin ödemesin her ayın 1'inde ev sahibinin hesabına geçiyor; hukuki süreci biz yürütüyoruz. Ev sahibi rahatladığı için kiracı seçimi de daha adil hâle geliyor. İki taraf da kazanıyor.",
      "Evinizi güvenceye almak istiyorsanız ücretsiz değerleme formunu doldurun. Kiralık daire arıyorsanız şehir sayfalarımızdaki güvenceli ilanlara göz atın.",
      "---",
      "*Bu içerik genel bilgilendirme amaçlıdır, hukuki görüş yerine geçmez. Somut uyuşmazlığınız için bir avukata danışın. Kira artış oranı her ay TÜİK verisiyle güncellenir; son güncelleme 5 Eylül 2026.*",
    ],
    faq: [
      {
        question: "Eylül 2026 kira zammı yüzde kaç?",
        answer:
          "Yüzde 31,79. Bu, Ağustos 2026 TÜFE'sinin 12 aylık ortalamalara göre değişim oranıdır ve Eylül'de yenilenen sözleşmelerde yasal üst sınırdır.",
      },
      {
        question: "Ev sahibi yasal orandan fazla zam isterse ne yapmalıyım?",
        answer:
          "Yasal orandaki tutarı hesaplayıp bankadan ödemeye devam edin, açıklamaya ilgili ayı yazın. Fazla tutarı ödemek zorunda değilsiniz. Ev sahibi isterse kira tespit davası açabilir.",
      },
      {
        question: "Depozito en fazla kaç kira olabilir?",
        answer:
          "Konut kiralarında üç aylık kira bedelini geçemez.",
      },
      {
        question: "Ev sahibi evi satarsa çıkmak zorunda mıyım?",
        answer:
          "Kural olarak hayır; sözleşme yeni malik için de bağlayıcıdır. Ancak yeni malik ihtiyaç sebebiyle, edinmeden itibaren bir ay içinde yazılı bildirimde bulunup altı ay sonra tahliye davası açabilir.",
      },
      {
        question: "10 yıl dolunca kiracı çıkarılabilir mi?",
        answer:
          "Belirli süreli sözleşmenin bitiminden sonraki on yıllık uzama süresi dolduğunda, ev sahibi sebep göstermeksizin, en az üç ay önce bildirimde bulunarak sözleşmeyi sona erdirebilir.",
      },
      {
        question: "Kira ödemesini elden yapabilir miyim?",
        answer:
          "Yapmayın. Belirli tutarın üzerindeki kira ödemelerinin banka veya PTT aracılığıyla yapılması zorunludur. Banka kaydı, uyuşmazlıkta en güçlü delilinizdir.",
      },
    ],
  },
  {
    slug: "baska-sehirden-uzaktan-kiralik-ev-tutmak",
    title: "Tayin Çıktı, Üniversite Kazandın: Başka Şehirden Uzaktan Ev Tutma Rehberi",
    excerpt:
      "Gitmeden ev tutmak zorunda mısınız? Uzaktan kiralık daire bulma, video tur, vekaletle sözleşme ve güvenli ödeme adımları. Tayin, öğrenci ve gurbetçi rehberi.",
    category: "Kiracı Rehberi",
    readMinutes: 7,
    publishedAt: "2026-09-18",
    author: { name: "Merve Aydın", role: "Müşteri Başarı Uzmanı" },
    cover: { gradient: "from-purple-500 to-indigo-600", emoji: "🚚" },
    body: [
      "Ağustos ve Eylül bizim en yoğun aylarımız. Sebebi belli: tayinler çıkıyor, üniversite yerleştirme sonuçları açıklanıyor, atamalar yapılıyor. Binlerce insan hiç görmediği bir şehirde, üç hafta içinde, oturacak bir yer bulmak zorunda kalıyor.",
      "Geçen hafta konuştuğum bir öğretmen Sinop'tan Gaziantep'e atanmıştı. Elinde beş gün izin vardı, o beş günün üçü yolda geçecekti. \"Gitmeden tutayım da rahatlayayım\" diyordu.",
      "O rahatlama isteği tam olarak dolandırıcıların beslendiği yer. Ama uzaktan ev tutmak imkânsız değil — sadece sırayı doğru kurmak gerekiyor.",
      "## Önce şehri tanıyın, evi değil",
      "En sık yapılan hata: ilanlara bakarak başlamak.",
      "Ev bakmadan önce şu üç soruyu cevaplayın:",
      "**İşyeriniz / okulunuz tam olarak nerede?** Adresi haritaya girin ve etrafında 20 dakikalık ulaşım halkasını çıkarın. Bu halkanın dışına çıkmayın, çünkü hiç bilmediğiniz bir şehirde \"yakın sayılır\" duygusu yanıltıcıdır.",
      "**O şehirde kim nerede oturuyor?** Yeni şehirde bir tanıdığınız varsa arayın. Yoksa şehrin sosyal medya gruplarına yazın: \"X hastanesinde çalışacağım, hangi mahalleleri önerirsiniz?\" Türkiye'de bu soruya cevap gelmeyen tek bir şehir yok.",
      "**Bütçe bandınız gerçekçi mi?** 2026'da Türkiye genelinde 100 metrekarelik konutun ortalama kirası 24 bin lira civarında. Ama şehirler arasında uçurum var: İstanbul'da 40 bini aşarken, birçok Anadolu şehrinde 15-20 bin bandında iş bitiyor. Gittiğiniz şehrin ortalamasını bilerek bakın ki piyasanın çok altındaki bir ilanı gördüğünüzde \"fırsat\" değil \"şüphe\" diye okuyabilesiniz.",
      "Küçük bir taktik: Şehirdeki bir emlak ofisini arayıp \"gelmeden önce genel bir fikir almak istiyorum\" deyin. Çoğu size mahalle mahalle bir tablo çizer. Ev tutmasanız bile bu 10 dakikalık konuşma çok işinize yarar.",
      "## Uzaktan ev bakmanın gerçekçi yolu",
      "Fotoğraf yalan söyler. Geniş açı lens 12 metrekarelik odayı salon gibi gösterir.",
      "**Canlı video turu isteyin.** Kayıtlı video değil, o anda yapılan görüntülü arama. Şunları özellikle istetin:",
      "- Balkondan sokağa doğru çevirsin (manzara değil, çevre)\n- Musluğu açsın, su basıncını göresiniz\n- Banyo ve mutfak dolaplarının altını göstersin\n- Pencereyi açsın, dışarıdan gelen sesi duyasınız\n- Apartman girişini, merdiveni, asansörü göstersin\n- Sokakta 20-30 metre yürüsün",
      "Görüntülü arama sırasında **kapı numarasını ve apartman tabelasını** çektirin. Sonra o adresi haritadan kontrol edin. Basit ama çok işe yarayan bir doğrulama.",
      "**Bir vekil gönderin.** En sağlamı bu. O şehirde tanıdığınız biri, akrabanız, iş arkadaşınız... Eve giren kişi sizin adınıza bakabilir. Yeni işyerinize de sorabilirsiniz; gelen memura ev bakmakta yardım etmeyen kurum azdır.",
      "**Sokak görünümünü kullanın.** Adres eldeyse haritadan sokağın hâlini görün. Karşıda ne var, sokak ne kadar geniş, park sorunu var mı?",
      "## Sözleşmeyi uzaktan yapmak",
      "Burada iki yol var.",
      "**Vekaletname yolu.** Noterden düzenleyeceğiniz vekaletnameye \"kira sözleşmesi imzalama, depozito ödeme, abonelik açtırma\" yetkilerini açıkça yazdırın. Yurt dışındaysanız konsolosluktan alacağınız vekaletname aynı işi görür. Vekaletnameyi olabildiğince dar tutun — sadece bu iş için, süreli olarak.",
      "**Uzaktan imza / kurumsal süreç.** Kurumsal bir platform üzerinden kiralıyorsanız sözleşme dijital olarak imzalanabiliyor, ödemeler kurumsal hesaptan yürüyor. Bu, uzaktan kiralamada en az riskli yol.",
      "Sözleşmeyi imzalamadan önce metni **PDF olarak isteyin** ve okuyun. Uzaktan yapılan işlemlerde en çok atlanan şey bu: insan yüz yüze olmadığı için \"nasılsa standart\" diye geçiyor. Standart değil.",
      "Bakılacaklar: kiralayanın adı tapudakiyle aynı mı, kira ve depozito rakamları yazıyla da yazılmış mı, artış maddesi ne diyor, demirbaş listesi ekli mi.",
      "## Ödeme: burada hiç esneklik yok",
      "Uzaktan kiralamada en kritik bölüm burası. Kuralları kısa tutuyorum:",
      "- Evi (siz veya güvendiğiniz biri) **görmeden** hiçbir ödeme yapılmaz\n- Ödeme, sözleşmedeki kiraya verenin **kendi hesabına** yapılır. Başka isim çıkıyorsa dur\n- Elden, kargoyla, kripto ile, \"arkadaşımın hesabına\" ödeme yok\n- Havale açıklamasına ne için ödendiği yazılır\n- Kapora için yazılı makbuz alınır",
      "\"Çok talep var, bugün kaporayı yatırmazsan başkasına vereceğim\" cümlesi, uzaktan kiralamada en yaygın baskı yöntemidir. Gerçek bir ev sahibi de bunu söyleyebilir, dolandırıcı da. Fark şu: gerçek ev sahibi tapusunu göstermekten çekinmez.",
      "## Taşınma öncesi lojistik",
      "Ev tamam. Şimdi geriye kalanlar:",
      "**Abonelikler.** Elektrik, su, doğalgaz aboneliklerinin çoğu artık e-Devlet veya kurum uygulamalarından açılabiliyor. Gerekli belge: kimlik, sözleşme, DASK poliçesi (elektrik ve doğalgazda isteniyor). DASK poliçesi ev sahibinin sorumluluğunda, ama poliçe numarasını sizden isteyecekler — sözleşme aşamasında talep edin.",
      "**İkametgâh.** Adres değişikliğini e-Devlet üzerinden yapabilirsiniz. Kira sözleşmesi yeterli.",
      "**Nakliye.** Şehirlerarası nakliyede sezon farkı büyük. Ağustos-Eylül döneminde fiyatlar tavan yapıyor. Mümkünse tarihi 15 gün kaydırın, ciddi fark görürsünüz. Sigortasız yükleme yaptırmayın.",
      "**İlk hafta çantası.** Eşya kamyonu iki gün gecikirse ne lazım? Yatak takımı, temizlik malzemesi, birkaç kap, şarj aletleri, ilaçlar. Ayrı bir valize koyun.",
      "**Anahtar teslimi.** Anahtarı aldığınız gün giriş tutanağını yapın: her odanın fotoğrafı, sayaç değerleri, mevcut hasarlar. Çıkarken depozito tartışmasını bu on dakika belirliyor.",
      "## Gurbetçiyseniz durum biraz farklı",
      "Yurt dışından Türkiye'de ev tutan ya da evini kiraya veren binlerce kişi var, ikisinde de en çok karşılaştığımız sorun aynı: **vekaletname yetersizliği.**",
      "Konsolosluktan alınan vekaletnamede \"kiraya verme\" yetkisi yoksa, akrabanız evinizi kiraya veremiyor. Ya da \"tahsilat\" yetkisi yoksa kira parasını takip edemiyor. Vekaletname alırken yapılacak işleri tek tek saydırın, genel ifadelerle yetinmeyin.",
      "Bir de şu var: uzaktan yönetimde ev sahibi olmak, ev tutmaktan daha zor. Türkiye'de evi olan gurbetçilerin çoğu her tatilde bir sorunla karşılaşıyor. Bu konuda ayrı bir rehberimiz var, blogda \"Yurt Dışından Türkiye'deki Mülkünüzü Yönetmek\" başlığına bakabilirsiniz.",
      "## Bunu biz nasıl kolaylaştırıyoruz",
      "Kiram Güvende portföyündeki dairelerin tamamı ilan yayınlanmadan önce ekspertizden geçiyor. Tapu doğrulanıyor, hasar tutanağı tutuluyor, sözleşme avukat kontrolünden geçmiş standart metin oluyor, ödemeler kurumsal hesap üzerinden yürüyor.",
      "Uzaktan kiralama açısından bunun anlamı şu: \"karşımdaki kişi gerçekten mal sahibi mi\" sorusuna cevap aramak zorunda kalmıyorsunuz. Kiracıdan komisyon da almıyoruz.",
      "Türkiye'nin dört bir yanında portföyümüzü genişletiyoruz — Kahramanmaraş ve Gaziantep'ten İstanbul, Ankara, İzmir ve Antalya'ya. Taşınacağınız şehrin sayfasına göz atın; evinizi güvenceye almak istiyorsanız ücretsiz değerleme formunu doldurun, 48 saat içinde arayalım.",
    ],
    faq: [
      {
        question: "Evi görmeden kiralamak güvenli mi?",
        answer:
          "Kendiniz göremiyorsanız güvendiğiniz birini gönderin veya canlı görüntülü tur yapın. Kayıtlı video yeterli değildir. Kurumsal güvence sunan platformlar üzerinden ilerlemek en düşük riskli yoldur.",
      },
      {
        question: "Başkası benim adıma kira sözleşmesi imzalayabilir mi?",
        answer:
          "Evet, noterden düzenlenmiş ve \"kira sözleşmesi imzalama\" yetkisini açıkça içeren bir vekaletname ile. Yurt dışındaysanız konsolosluktan alabilirsiniz.",
      },
      {
        question: "Elektrik ve doğalgaz aboneliği için ne gerekiyor?",
        answer:
          "Kimlik, kira sözleşmesi ve DASK poliçe numarası. DASK ev sahibinin yükümlülüğüdür, poliçe numarasını sözleşme aşamasında isteyin.",
      },
      {
        question: "Tayin döneminde ne zaman ev aramaya başlamalıyım?",
        answer:
          "Atama kesinleşir kesinleşmez. Temmuz sonu-Ağustos, kiralık arzının en daraldığı ve fiyatların en yükseldiği dönem. Aynı ev Ekim'de belirgin biçimde ucuza bulunabiliyor.",
      },
      {
        question: "Öğrenciysem ev mi yurt mu daha mantıklı?",
        answer:
          "Tek başına ev tutmak çoğu üniversite şehrinde yurttan pahalı çıkıyor. Ev ekonomik hâle geliyorsa genelde iki-üç kişilik paylaşımda geliyor. Paylaşımlı kiralamada sözleşmede tüm kiracıların adının yazılı olmasına dikkat edin; tek isimle imzalanan sözleşmede tüm sorumluluk o kişiye kalıyor.",
      },
    ],
  },
  {
    slug: "kira-garantisi-nedir-ev-sahibi-rehberi",
    title: "Kira Garantisi Nedir? Ev Sahipleri İçin Kapsamlı Rehber",
    excerpt:
      "Kira garantisi nedir, nasıl çalışır ve ev sahibine ne kazandırır? Kiracı ödesin ödemesin kiranızı her ay almanın yolunu adım adım anlatıyoruz.",
    category: "Rehber",
    readMinutes: 5,
    publishedAt: "2026-09-14",
    author: { name: "Editör Ekibi", role: "Kiram Güvende" },
    cover: { gradient: "from-emerald-600 to-cyan-500", emoji: "✅" },
    body: [
      "**Kısa cevap:** Kira garantisi, kiranızın kiracıdan bağımsız olarak güvence altına alındığı bir yönetim modelidir. Kiracı ödesin ya da ödemesin, kira geliriniz her ayın 1'inde hesabınızda olur. Tahsilat, gecikme ve kiracı sorunlarının takibi sizden çıkar; siz sadece düzenli kiranızı alırsınız.",
      "Klasik kiralamada ev sahibinin en büyük derdi belirsizliktir: Bu ay yatacak mı? Ararsam ne diyeceğim? Yatmazsa nasıl çıkaracağım? Kira garantisi bu belirsizliği ortadan kaldırır. Ev sahibi için kira, \"olursa gelen\" bir para olmaktan çıkıp **her ay aynı gün gelen sabit bir gelire** dönüşür.",
      "## Kira garantisi nasıl çalışır?",
      "Model basit bir mantığa dayanır: kiranızın ödenmesi kiracının davranışına bırakılmaz. Kiram Güvende, mülkünüzü profesyonel olarak yönetir, kiracı ilişkisini üstlenir ve ödeme takvimini garanti eder. Kiracı geç öderse ya da hiç ödemezse, bu sizin sorununuz değil bizim sürecimiz olur. Siz kira gününü beklemekle uğraşmazsınız; para hesabınıza her ayın 1'inde geçer. Sürecin tamamını [Nasıl Çalışır](/nasil-calisir) sayfasında adım adım görebilirsiniz.",
      "Bunun karşılığında Kiram Güvende, kira bedeli üzerinden yalnızca **%8 komisyon** alır. Bu, çoğu ev sahibinin bir aylık boşluk ya da bir tahliye davası masrafıyla kıyaslandığında son derece küçük bir tutardır.",
      "## Kira garantisi ev sahibine ne kazandırır?",
      "Ev sahiplerinin sık sorduğu \"somut olarak ne değişir?\" sorusunun cevabı üç başlıkta toplanıyor.",
      "### 1. Ödeme belirsizliği biter",
      "Dosyalarımızda en çok karşılaştığımız durum, kirasını 3-4 ay alamamış ve ne yapacağını bilemeyen ev sahibi. Garanti modelinde bu senaryo baştan yok. Kira, kiracının niyetine değil sözleşmeye bağlıdır.",
      "### 2. Kiracıyla muhatap olmazsınız",
      "Tamir talebi, gecikme bahanesi, \"bu ay biraz sıkıntı var\" telefonları... Tüm bu iletişim yükünü profesyonel ekip devralır. Özellikle işiyle uğraşan ya da başka şehirde yaşayan ev sahipleri için bu tek başına büyük bir rahatlama.",
      "### 3. Boş kalma ve tahsilat riski yönetilir",
      "Kiracı bulma, seçme ve sözleşme süreçleri profesyonel yürütüldüğü için hem doğru kiracı seçilir hem de daire uzun süre boş kalmaz. Boş kalan her ay, ev sahibi için doğrudan kayıptır; garanti modeli bu kaybı en aza indirmeyi hedefler.",
      "## Kira garantisi güvenli mi?",
      "Ev sahiplerinin en çok tereddüt ettiği nokta bu. Kısa cevap: model, yazılı sözleşmeye dayandığı için güvenlidir. Ödeme yükümlülüğü şirketin taahhüdüdür; kiracının o ay ödeyip ödememesi sizi ilgilendirmez. Sözleşmeyi imzalarken ödeme günü, komisyon oranı ve süre gibi maddeleri net görürsünüz. Şeffaflık, güvenin temelidir; belirsiz vaat değil, yazılı taahhüt esastır. Piyasadaki farklı \"garanti\" modellerinin karşılaştırmasını [bu yazıda](/blog/kira-garantisi-nedir-avantaj-dezavantaj) bulabilirsiniz.",
      "## Kimler için mantıklı?",
      "Kira garantisi özellikle şu ev sahipleri için anlam kazanıyor: kirasını düzenli almakta zorlananlar, başka şehirde ya da yurt dışında yaşayıp mülküyle uzaktan ilgilenmek zorunda olanlar, birden fazla kiralık dairesi olup hepsini tek tek takip etmek istemeyenler ve kirayı bir \"ek gelir\" değil, hesabını yapabileceği düzenli bir gelir olarak görmek isteyenler. Yani neredeyse her ev sahibinin bir yerinde durduğu bir ihtiyaç.",
      "## Kiranızı garantiye almanın en kolay yolu",
      "Kira garantisi, \"kira yatacak mı\" endişesini hayatınızdan çıkarır. Türkiye genelinde hizmet veren Kiram Güvende ile mülkünüz profesyonelce yönetilir, kiranız her ayın 1'inde hesabınızda olur. Mülkünüzün bu modele uygunluğunu görmek dakikalar sürüyor.",
      "[Hemen ücretsiz değerlendirme alın →](/basvuru)",
    ],
    faq: [
      {
        question: "Kiracı hiç ödemezse kiramı yine alır mıyım?",
        answer:
          "Evet. Modelin özü budur. Kiracının o ay ödeyip ödememesi sizin gelirinizi etkilemez; kira her ayın 1'inde hesabınıza geçer. Kiracıyla tahsilat ve gerekirse hukuki süreç bizim işimizdir.",
      },
      {
        question: "Komisyon ne kadar ve nasıl kesiliyor?",
        answer:
          "Kiram Güvende kira bedeli üzerinden %8 komisyon alır. Bu oran sözleşmede açıkça belirtilir; sürpriz kesinti olmaz. Bir aylık kira kaybı ya da bir tahliye masrafıyla kıyaslandığında oldukça düşük bir maliyettir.",
      },
      {
        question: "Kiracıyı ben mi buluyorum?",
        answer:
          "Hayır. Kiracı bulma, ödeme geçmişi ve uygunluk değerlendirmesi profesyonel ekip tarafından yapılır. Doğru kiracı seçimi, hem sizin hem sistemin en çok önem verdiği aşamadır.",
      },
    ],
  },
  {
    slug: "kira-odemeyen-kiraci-nasil-cikarilir",
    title: "Kira Ödemeyen Kiracı Nasıl Çıkarılır? 2026 Güncel Rehber",
    excerpt:
      "Kira ödemeyen kiracı nasıl çıkarılır? Temerrüt ihtarı, iki haklı ihtar ve icra yoluyla tahliye süreçleri 2026 güncel haliyle avukat imzasıyla anlatıldı.",
    category: "Hukuk",
    readMinutes: 6,
    publishedAt: "2026-09-14",
    author: { name: "Av. Şafak Yılmaz", role: "Gaziantep Barosu" },
    cover: { gradient: "from-red-600 to-rose-500", emoji: "🚪" },
    body: [
      "**Kısa cevap:** Kira ödemeyen kiracı, keyfi olarak değil ancak yasal yollarla çıkarılabilir. Üç ana yol vardır: **temerrüt nedeniyle tahliye** (en az 30 günlük yazılı ödeme ihtarı), aynı kira yılında iki farklı ayda yapılan yazılı bildirime dayanan **iki haklı ihtar** ve icra dairesi üzerinden yürütülen **İİK m.269 tahliye takibi.** Hangi yol seçilirse seçilsin, yazılı ve tercihen noter kanalıyla yapılan bir bildirim şarttır.",
      "Uygulamada ev sahiplerinin en sık yaptığı hata, kiracıyı sözlü uyarıp \"artık çık\" demektir. Oysa Türk hukukunda kiracı, tek gün gecikmiş olsa bile usulüne uygun yazılı bir süreç işletilmeden çıkarılamaz. Doğru başlanmayan süreç, aylar sonra baştan başlamak anlamına gelir.",
      "## 1. Temerrüt nedeniyle tahliye (TBK m.315)",
      "En yaygın yol budur. Kiracı kirayı ödemediğinde, ev sahibi yazılı bir ihtar göndererek kiracıya **en az 30 gün** süre verir. Bu süre içinde ödeme yapılmazsa, ev sahibi tahliye davası açabilir. İhtarda ödenmeyen kira tutarı, süre ve ödenmemesi halinde sözleşmenin feshedileceği açıkça yazılmalıdır. Noter aracılığıyla gönderilen ihtar, dava aşamasında ispat açısından çok daha güçlüdür. İhtar sonrası adımların ayrıntısı için [Kiracım Kirayı Ödemiyor: 2026'da İzlenmesi Gereken Yasal Yollar](/blog/kiraci-kira-odemiyor-2026-yasal-yollar) yazısına bakabilirsiniz.",
      "## 2. İki haklı ihtar nedeniyle tahliye",
      "Kiracı, aynı kira yılı içinde iki farklı aya ait kirayı zamanında ödemez ve bunun için iki ayrı yazılı ihtar alırsa, ev sahibi kira yılının bitiminden itibaren **bir ay içinde** tahliye davası açabilir. Buradaki önemli ayrıntı şu: kiracı ihtar sonrası ödeme yapsa bile, iki haklı ihtar koşulu oluşmuştur. Yani \"sonradan ödedi\" savunması bu yolda tahliyeyi engellemez. Ev sahiplerinin gözden kaçırdığı en güçlü yollardan biridir.",
      "## 3. İcra yoluyla tahliye (İİK m.269)",
      "Ev sahibi, icra dairesine başvurarak hem kira alacağını tahsil etmek hem de tahliye istemek üzere takip başlatır. Kiracıya bir **ödeme emri** tebliğ edilir. Kiracının borca itiraz için **7 gün**, kirayı ödemek için **30 gün** süresi vardır. Bu süreler içinde ödeme yapılmaz ve itiraz da edilmezse, süreç icra mahkemesinde tahliye kararına doğru ilerler. Bu yol, alacak ve tahliyeyi aynı çatı altında yürütmesi bakımından pratiktir.",
      "## Süreç ne kadar sürer, masrafı nedir?",
      "Dürüst cevap: kiracı direnç gösterirse süreç uzayabilir. İhtar, dava ve icra aşamalarıyla birlikte tahliye çoğu dosyada **6 ila 12 ay** arasında tamamlanır. Masraf kalemleri harç, tebligat ve avukatlık ücretinden oluşur; tutar dosyanın niteliğine göre değişir. Süreci uzatan en büyük etken, baştan yapılan usul hatalarıdır — bu yüzden ilk adımı doğru atmak zamandan ve paradan tasarruf ettirir.",
      "## Sözleşme süresi bitse bile keyfi çıkarma yok",
      "Ev sahiplerinin sık sorduğu bir soru: \"Sözleşme süresi bitti, kiracıyı çıkarabilir miyim?\" Konut kiralarında sürenin dolması tek başına tahliye sebebi değildir. Kanun kiracıyı korur; ev sahibi ancak sınırlı sebeplerle (temerrüt, iki haklı ihtar, gereksinim, tahliye taahhüdü vb.) ve yasal usulle tahliye isteyebilir. Bu nedenle \"süre doldu\" demek yeterli olmaz. Tahliye taahhütnamesi dahil sözleşmeye baştan konması gereken maddeler için [bu rehbere](/blog/kira-sozlesmesi-yaparken-dikkat-edilecek-7-madde) göz atın.",
      "## Bu süreci hiç yaşamamanın yolu",
      "Tahliye süreci hukuken çözülebilir, ama en iyi tahliye hiç ihtiyaç duyulmayanıdır. Kiram Güvende ile kiranız kiracıdan bağımsız güvence altına alınır: kiracı ödesin ya da ödemesin kira geliriniz her ayın 1'inde hesabınızda olur, tahsilat ve gerekli hukuki süreçler bizim işimiz olur. Türkiye genelinde, %8 komisyonla.",
      "[Hemen ücretsiz değerlendirme alın →](/basvuru)",
      "---",
      "**Yazar: Av. Şafak Yılmaz — Gaziantep Barosu**",
      "*Bu yazı genel bilgilendirme amaçlıdır, hukuki danışmanlık yerine geçmez. Somut durumunuz için bir avukata danışmanız önerilir.*",
    ],
    faq: [
      {
        question: "Kiracı bir ay geç ödedi, hemen çıkarabilir miyim?",
        answer:
          "Hayır. Tek bir gecikme, usulüne uygun yazılı ihtar olmadan tahliye sebebi oluşturmaz. Önce en az 30 günlük ödeme ihtarı gönderilmeli; süre sonunda ödeme yapılmazsa yasal yola başvurulabilir.",
      },
      {
        question: "İhtarı kendim yazabilir miyim, noter şart mı?",
        answer:
          "Yazılı olması yasal zorunluluk, noter ise zorunlu değil ama şiddetle önerilir. Noter ihtarı, ihtarın gönderildiğini ve içeriğini kesin biçimde ispatlar; dava aşamasında lehinize güçlü bir delil olur.",
      },
      {
        question: "Kiracı evi tahliye kararına rağmen boşaltmazsa?",
        answer:
          "Mahkeme tahliye kararı verdikten sonra kiracı çıkmazsa, icra memuru aracılığıyla zorla tahliye (icra marifetiyle tahliye) yapılır. Bu aşamada süreç idari olarak yürür ve kiracının rızası aranmaz.",
      },
    ],
  },
  {
    slug: "2026-kira-artis-orani-nasil-hesaplanir",
    title: "2026 Kira Artış Oranı Nasıl Hesaplanır? Güncel TÜFE Rehberi",
    excerpt:
      "2026 kira artış oranı nasıl hesaplanır? Güncel TÜFE 12 aylık ortalama, yasal tavan ve örnek hesaplama ev sahipleri için adım adım anlatıldı.",
    category: "Finans",
    readMinutes: 5,
    publishedAt: "2026-09-14",
    author: { name: "Editör Ekibi", role: "Kiram Güvende" },
    cover: { gradient: "from-amber-500 to-yellow-400", emoji: "📈" },
    body: [
      "**Kısa cevap:** 2026 kira artış oranı, sözleşmenizin yenilendiği aydan bir önceki ayın TÜİK verisine göre açıklanan **TÜFE 12 aylık ortalama değişim oranını** geçemez. Eylül 2026 için bu oran **%31,79** olarak belirlendi. Yani kira yılınız Eylül'de doluyorsa, kiraya en fazla %31,79 zam uygulayabilirsiniz.",
      "Hesaplama aslında tek satır: *Mevcut kira × (1 + oran)*. Aylık 30.000 TL kira için Eylül 2026'da yeni kira 30.000 × 1,3179 = **39.537 TL** olur. Karışıklık genellikle \"hangi ayın oranı\" ve \"tavanı aşarsam ne olur\" sorularında çıkıyor; aşağıda bunları tek tek açıklıyoruz.",
      "## 2026 kira artış oranı hangi yasaya dayanıyor?",
      "Konut ve iş yeri kiralarında artış sınırı Türk Borçlar Kanunu'nun 344. maddesiyle belirleniyor. Kanun net: yenilenen kira dönemindeki artış, \"bir önceki kira yılında tüketici fiyat endeksindeki on iki aylık ortalamalara göre değişim oranını\" geçemez. Yani ölçü aylık enflasyon değil, **TÜFE'nin 12 aylık ortalaması**. Bu ikisi sık karıştırılıyor ve ev sahipleri farkı bilmeyince ya hak kaybına uğruyor ya da tavanı aşıp sonradan dava riskiyle karşılaşıyor.",
      "Bir de sık sorulan bir konu var: 2022–2024 arasında konut kiralarında geçerli olan **%25 artış sınırı 1 Temmuz 2024 itibarıyla sona erdi.** Artık hem konut hem iş yeri kiralarında tek bir tavan var, o da TÜFE 12 aylık ortalaması. Yani \"yasal zam %25'tir\" bilgisi güncelliğini yitirdi.",
      "## Doğru ayı seçmek: en çok yapılan hata",
      "Ev sahiplerinin dosyalarımızda en sık gördüğümüz hatası, zam yaptıkları ayın oranını kullanmak. Oysa esas alınacak veri, sözleşmenin yenilendiği aydan **bir önceki aya** ait. Örneğin sözleşme her yıl 1 Ekim'de yenileniyorsa, Eylül ayında açıklanan oran kullanılır. TÜİK enflasyon verisini genellikle her ayın ilk üç günü açıkladığı için, zamanlama önemli.",
      "### Adım adım hesaplama",
      "Uygulamada şöyle ilerleyin: önce sözleşmenizin yenilenme ayını bulun. Sonra bir önceki aya ait açıklanmış TÜFE 12 aylık ortalama oranını alın. Mevcut kirayı bu oranla çarpıp mevcut kiraya ekleyin. Örneğin 25.000 TL kira ve %31,79 oran için artış 7.947,50 TL, yeni kira 32.947,50 TL olur. Kuruşları yukarı yuvarlamak yaygın ama şart değil; sözleşmede aksi yazmıyorsa makul bir yuvarlama sorun çıkarmaz.",
      "## Tavanı aşarsanız ne olur?",
      "Tavanın üzerinde bir zam maddesi sözleşmeye yazılsa bile, yasal sınırı aşan kısım geçersiz sayılır. Kiracı, fazladan ödediği tutarı geri isteyebilir ya da kira tespit davasıyla oranı yasal seviyeye çektirebilir. Bu yüzden \"kiracı kabul etti\" demek yeterli değil; kanunun tavanı emredici. Ev sahibinin menfaatine olan, tavanı doğru hesaplayıp o oranı eksiksiz uygulamak. Kiracı tarafının zam, depozito ve tahliye konusundaki haklarını [Kiracı Hakları 2026](/blog/kiraci-haklari-2026-zam-depozito-tahliye) yazısında topladık.",
      "## Beş yıldan uzun süren kiralarda durum farklı",
      "Aynı kiracı beş yılı doldurduğunda tablo değişir. Beşinci yılın sonunda ev sahibi, kira bedelinin güncellenmesi için **kira tespit davası** açabilir. Bu davada hâkim, TÜFE tavanıyla bağlı olmadan, rayiç (piyasa) kira bedelini dikkate alarak yeni bedeli belirler. Yıllardır piyasanın çok altında kira alan ev sahipleri için bu, kirayı gerçek değerine yaklaştırmanın yasal yolu. Şehir şehir güncel rayiçler için [Türkiye Kira Fiyatları 2026](/blog/turkiye-kira-fiyatlari-2026-sehir-sehir) yazısına bakabilirsiniz.",
      "## Kirayı doğru hesaplamak yetmiyorsa",
      "Oranı kusursuz hesaplasanız bile, asıl mesele çoğu ev sahibi için \"kira zamanında ve tam olarak yatacak mı?\" sorusu. Kiram Güvende tam da burada devreye giriyor: kiracı öder ya da ödemez, kira geliriniz her ayın 1'inde hesabınızda oluyor. Yasal artış takibi, tahsilat ve kiracı süreçlerini biz yürütüyoruz; siz sadece kiranızı alıyorsunuz. Türkiye genelinde, %8 komisyonla.",
      "[Hemen ücretsiz değerlendirme alın →](/basvuru)",
    ],
    faq: [
      {
        question: "Eylül 2026 kira artış oranı yüzde kaç?",
        answer:
          "Eylül 2026 için TÜFE 12 aylık ortalamalara göre kira artış tavanı %31,79'dur. Bu oran her ay yeniden açıklanır; sizin için geçerli olan, sözleşmenizin yenilendiği aydan bir önceki ayın oranıdır.",
      },
      {
        question: "Kiracı zammı kabul etmezse ne yapabilirim?",
        answer:
          "Yasal tavan içinde kalan bir zammı kiracının reddetme hakkı yoktur; oran kanundan doğar. Kiracı yeni bedeli ödemekten kaçınırsa, kira farkı için icra takibi ya da kira tespit/uyarlama süreçleri gündeme gelebilir. Yazılı bildirim yapmanız ipin ucunu elinizde tutmanızı sağlar.",
      },
      {
        question: "Enflasyon çok yüksek, tavanın üzerine çıkabilir miyim?",
        answer:
          "Hayır. Enflasyon ne olursa olsun, artış TÜFE 12 aylık ortalamasını aşamaz. Piyasa kiranızın çok üzerine çıktıysa çözüm zammı yükseltmek değil; beş yıl dolduğunda kira tespit davası açmak ya da kirayı garanti altına alan bir yönetim modeline geçmektir.",
      },
    ],
  },
  {
    slug: "gaziantep-kira-garantili-ev-yonetimi",
    title: "Gaziantep'te Kira Garantili Ev Yönetimi: Ev Sahiplerine Rehber",
    excerpt:
      "Gaziantep'te evini kiraya verenler için kira garantili ev yönetimi rehberi. Şehitkamil ve Şahinbey'de kiranızı her ay garanti altına almanın yolu.",
    category: "Piyasa",
    readMinutes: 5,
    publishedAt: "2026-09-14",
    author: { name: "Editör Ekibi", role: "Kiram Güvende" },
    cover: { gradient: "from-orange-500 to-rose-600", emoji: "🏙️" },
    body: [
      "**Kısa cevap:** Gaziantep'te evini kiraya veren bir ev sahibiyseniz, kira garantili ev yönetimi ile kiranızı kiracıdan bağımsız güvence altına alabilirsiniz. Kiracı ödesin ya da ödemesin, kira geliriniz her ayın 1'inde hesabınızda olur; kiracı bulma, sözleşme ve tahsilat süreçleri profesyonel ekibe geçer.",
      "Gaziantep, son yıllarda hem nüfus hem konut talebi açısından hareketli bir şehir. Şehitkamil ve Şahinbey başta olmak üzere merkez ilçelerde kiralık daireye talep sürüyor. Ama talebin yüksek olması, her kiracının düzenli ödeyeceği anlamına gelmiyor — ve bir mülk sahibinin asıl derdi de tam olarak bu.",
      "## Gaziantep'te ev sahibinin gerçek sorunu ne?",
      "Bize ulaşan Gaziantepli ev sahiplerinin anlattıkları hep aynı yerde birleşiyor: kirayı zamanında alamamak, geç ödeyen kiracıyla her ay pazarlık etmek ve iş uzayınca ne yapacağını bilememek. Deprem sonrası dönemde şehirdeki konut hareketliliği arttıkça, \"doğru kiracıyı seçmek\" ve \"kirayı garanti altına almak\" ev sahipleri için birinci öncelik haline geldi.",
      "Klasik yolla, yani kendiniz ya da bir emlakçı aracılığıyla kiraya verdiğinizde, kiranın yatması tamamen kiracının niyetine kalıyor. Kira garantili yönetimde ise bu belirsizlik ortadan kalkıyor. Modelin genel işleyişini [Kira Garantisi Nedir?](/blog/kira-garantisi-nedir-ev-sahibi-rehberi) yazısında anlattık.",
      "## Kira garantili ev yönetimi Gaziantep'te nasıl işliyor?",
      "Model şehir fark etmeksizin aynı mantıkla çalışır ve Gaziantep de Kiram Güvende'nin öncelikli hizmet bölgeleri arasındadır. Mülkünüz profesyonel olarak değerlendirilir, uygun kiracı bulunur ve sözleşme süreci yürütülür. Bundan sonrası sizin için basit: kiracı ödesin ya da ödemesin, **kira her ayın 1'inde hesabınızda.** Karşılığında yalnızca %8 komisyon alınır.",
      "### Şehitkamil ve Şahinbey ev sahipleri için ne değişir?",
      "Merkez ilçelerde daire sahibi olup da başka bir semtte veya şehirde yaşayan çok sayıda ev sahibi var. Bu durumda mülkü yakından takip etmek zor. Kira garantili yönetimle daireye siz gitmek zorunda kalmazsınız; kiracı iletişimi, tahsilat ve olası sorunlar profesyonel ekibin sorumluluğunda olur. Gaziantep içinde de olsanız, yurt dışında da olsanız işleyiş değişmez.",
      "## Yerel piyasayı tanımak neden önemli?",
      "Kira bedelini doğru belirlemek, hem dairenin boş kalmaması hem de gelirinizi maksimize etmek için kritik. Şehitkamil'in yeni gelişen bölgeleriyle Şahinbey'in merkezi mahalleleri arasında kira seviyeleri farklılık gösterebiliyor. Profesyonel değerlendirme, dairenizi ne çok düşük (gelir kaybı) ne de çok yüksek (uzun süre boş kalma) fiyatlayarak dengeyi kurar. Güncel kira bedelleri hızla değiştiği için, kararı ilan sitelerindeki anlık rakamlara göre değil, gerçek talep verisine göre vermek gerekir. Şehir bazlı güncel tablo için [Türkiye Kira Fiyatları 2026](/blog/turkiye-kira-fiyatlari-2026-sehir-sehir) yazısına bakabilirsiniz.",
      "## Gaziantep'teki kiranızı garantiye alın",
      "Gaziantep'te düzenli ve tam kira geliri artık şansa bağlı olmak zorunda değil. Kiram Güvende ile daireniz profesyonelce yönetilir, kiranız her ayın 1'inde hesabınızda olur. Şehitkamil'den Şahinbey'e, merkezden yeni gelişen bölgelere kadar dairenizin uygunluğunu görmek dakikalar sürüyor.",
      "[Hemen ücretsiz değerlendirme alın →](/basvuru)",
    ],
    faq: [
      {
        question: "Gaziantep'te kira garantisi hangi ilçeleri kapsıyor?",
        answer:
          "Kiram Güvende Gaziantep genelinde, özellikle Şehitkamil ve Şahinbey başta olmak üzere merkez ilçelerde hizmet veriyor. Dairenizin uygunluğunu ücretsiz değerlendirmeyle netleştirebilirsiniz.",
      },
      {
        question: "Kiracımı bulmuş durumdayım, yine de faydalanabilir miyim?",
        answer:
          "Duruma göre değişir. Mevcut kiracıyla veya yeni kiracıyla nasıl ilerleneceği, dairenizin ve sözleşmenizin durumuna bağlı olarak değerlendirilir. En doğrusu, mevcut durumunuzu paylaşıp size özel bir değerlendirme almanız.",
      },
      {
        question: "Deprem sonrası hasarlı ya da yeni yapılmış daireler için de geçerli mi?",
        answer:
          "Kira garantili yönetim, kiraya verilebilir durumdaki daireler için geçerlidir. Dairenizin kiralanabilirlik durumu değerlendirme aşamasında birlikte gözden geçirilir.",
      },
    ],
  },
  {
    slug: "almanyada-yasayan-ev-sahibi-kira-garantisi",
    title: "Almanya'da Yaşayan Ev Sahibi Türkiye'deki Kirasını Nasıl Garantiler?",
    excerpt:
      "Almanya'da yaşayıp Türkiye'deki evini kiraya veren gurbetçiler için kira garantisi rehberi. Kiranızı uzaktan, her ay hesabınızda garanti altına alın.",
    category: "Gurbetçi",
    readMinutes: 5,
    publishedAt: "2026-09-14",
    author: { name: "Editör Ekibi", role: "Kiram Güvende" },
    cover: { gradient: "from-slate-700 to-amber-500", emoji: "🇩🇪" },
    body: [
      "**Kısa cevap:** Almanya'da yaşayıp Türkiye'deki evini kiraya veren bir gurbetçiyseniz, kira garantili yönetimle kiranızı uzaktan güvence altına alabilirsiniz. Kiracı ödesin ya da ödemesin, kira geliriniz her ayın 1'inde Türkiye'deki hesabınızda olur; kiracıyla muhatap olmak, tahsilat ve sorun takibi için binlerce kilometre öteden uğraşmanıza gerek kalmaz.",
      "Gurbetçi ev sahiplerinin en bilinen sıkıntısı mesafe. Kiracı geç ödediğinde arayacak vaktiniz yok, sorun çıktığında yerinde göremezsiniz, güvendiğiniz bir akraba \"idare ediyorum\" dese de içiniz rahat etmez. Dosyalarımızda en çok karşılaştığımız hikâye bu: \"Türkiye'deki dairem var ama başımın belası oldu.\"",
      "## Uzaktan mülk yönetiminin gerçek zorluğu",
      "Yurt dışında yaşarken Türkiye'deki bir daireyi yönetmek üç noktada tıkanır: kiranın zamanında ve tam yatıp yatmadığını takip etmek, kiracıyla iletişimi yürütmek ve bir sorun çıktığında (ödememe, hasar, tahliye) yerinde müdahale edememek. Çoğu gurbetçi bu işi bir aile büyüğüne veya arkadaşa emanet ediyor; ama bu hem onlara yük oluyor hem de kira gelirini garanti etmiyor. Vekalet, banka ve denetim altyapısını sıfırdan kurmak isteyenler için [uzaktan mülk yönetimi rehberimiz](/blog/yurt-disindan-mulk-yonetimi-pratik-rehber) adım adım yol gösteriyor.",
      "## Kira garantisi mesafeyi nasıl ortadan kaldırır?",
      "Kira garantili yönetimde mülkünüz profesyonel bir ekip tarafından yönetilir ve ödeme takvimi taahhüt altına alınır. Bu sizin için şu anlama gelir: Almanya'da olmanız hiçbir şeyi değiştirmez. Kiracı o ay öder ya da ödemez, **kira geliriniz her ayın 1'inde hesabınıza geçer.** Kiracıyla telefon trafiği, tahsilat takibi ve gerekirse hukuki süreçler tamamen ekibin sorumluluğuna geçer. Karşılığında yalnızca %8 komisyon alınır. Modelin ayrıntıları için [Kira Garantisi Nedir?](/blog/kira-garantisi-nedir-ev-sahibi-rehberi) yazısına bakabilirsiniz.",
      "### Akrabaya emanet etmekle arasındaki fark",
      "Bir yakınınız iyi niyetle yardım edebilir, ama kirayı garanti edemez, kiracıyı hukuki olarak takip edemez ve size düzenli rapor sunmakla yükümlü değildir. Profesyonel yönetimde ise ilişki yazılı sözleşmeye dayanır: ödeme günü bellidir, sorumluluk nettir ve gelir taahhüt altındadır. Bu, hem sizin içinizi rahatlatır hem de aile ilişkilerinizi kira meselesinin gerginliğinden korur.",
      "## Türkiye'ye gelmeden süreç yürür mü?",
      "Evet. Kiracı bulma, sözleşme ve yönetim süreçleri Türkiye'ye gelmenizi gerektirmeyecek şekilde planlanabilir. Gerekli durumlarda vekaletle işlem yürütmek mümkündür. Amaç, sizin yalnızca kiranızı almanız; geri kalan her şeyin yerinde ve profesyonelce halledilmesidir.",
      "## Gurbette olun, kiranız Türkiye'de sizi beklesin",
      "Almanya'da ya da başka bir ülkede yaşıyor olmanız, Türkiye'deki kiranızı almak için sürekli tetikte olmanızı gerektirmemeli. Kiram Güvende ile daireniz Türkiye genelinde profesyonelce yönetilir, kiranız her ayın 1'inde hesabınızda olur. Uzaktan, tek tuşla başlayın.",
      "[Hemen ücretsiz değerlendirme alın →](/basvuru)",
    ],
    faq: [
      {
        question: "Almanya'dayken kiramı euro olarak mı alırım?",
        answer:
          "Kira geliriniz Türkiye'deki kira bedeli üzerinden, Türk Lirası olarak Türkiye'deki hesabınıza yatırılır. Bu tutarı dilediğiniz gibi değerlendirebilirsiniz. Önemli olan, tutarın her ay aynı gün eksiksiz hesabınızda olması.",
      },
      {
        question: "Kiracı sorun çıkarırsa ben mi Türkiye'ye gelmek zorundayım?",
        answer:
          "Hayır. Kiracı kaynaklı sorunların takibi ve gerektiğinde hukuki süreç profesyonel ekibin sorumluluğundadır. Yurt dışından bu süreçlerle tek tek uğraşmanıza gerek kalmaz.",
      },
      {
        question: "Dairemi hiç görmeden yönetim mümkün mü?",
        answer:
          "Evet. Uzaktan mülk yönetiminin amacı tam da budur: mülkünüzün başında olmadan, düzenli bilgi akışıyla ve garanti edilmiş kira geliriyle daireyi güvende tutmak.",
      },
    ],
  },
];
