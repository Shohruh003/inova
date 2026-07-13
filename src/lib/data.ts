export const SITE = {
  brand: "INOVA",
  phone: "+998911151133",
  phoneDisplay: "+998 91 115 11 33",
  phoneShort: "91-115-11-33",
  telegram: "inova_akfa",
  instagram: "inova.akfa",
  mapUrl: "https://yandex.ru/maps/-/CPvWMW3V",
  address: "Farg'ona tumani, Chimyon qishlog'i",
  hours: "Dushanba – Shanba, 09:00 – 18:00",
  experienceYears: 14,
  warrantyYears: 5,
  serviceYears: 3,
};

// Telegram bot konfiguratsiyasi.
// botUsername — "Bepul konsultatsiya" tugmasi shu bot bilan chat ochadi (t.me/<username>).
//   .env yoki shu yerda o'zgartiring. "@" belgisini qo'shmang.
// Server tomonida xabarlarni yuborish uchun .env.local da quyidagilarni o'rnating:
//   TELEGRAM_BOT_TOKEN=123456789:AAAA...
//   TELEGRAM_CHAT_ID=123456789   (admin user_id yoki chat_id, kanal -100... bo'lishi mumkin)
export const BOT = {
  username: process.env.NEXT_PUBLIC_BOT_USERNAME || "inova_bot",
};

export const IMAGES = {
  hero: "https://images.unsplash.com/photo-1613545325268-9265e1609167?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxpbnRlcmlvciUyMGRlc2lnbiUyMGJyaWdodCUyMHJvb20lMjBsYXJnZSUyMHdpbmRvd3N8ZW58MXx8fHwxNzc5OTQ2NTk2fDA&ixlib=rb-4.1.0&q=80&w=1600",
  window1:
    "https://images.unsplash.com/photo-1730718934488-2857906d23d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQVkMlMjB3aW5kb3dzJTIwZG9vcnMlMjBtb2Rlcm4lMjBpbnN0YWxsYXRpb258ZW58MXx8fHwxNzc5OTQ2NTkxfDA&ixlib=rb-4.1.0&q=80&w=1080",
  window2:
    "https://images.unsplash.com/photo-1730718949490-8bb461a9d9bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxQVkMlMjB3aW5kb3dzJTIwZG9vcnMlMjBtb2Rlcm4lMjBpbnN0YWxsYXRpb258ZW58MXx8fHwxNzc5OTQ2NTkxfDA&ixlib=rb-4.1.0&q=80&w=1080",
  building:
    "https://images.unsplash.com/photo-1614595737476-42487331b8a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxtb2Rlcm4lMjBob21lJTIwZXh0ZXJpb3IlMjB3aW5kb3clMjBmYWNhZGUlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzc5OTQ2NTk2fDA&ixlib=rb-4.1.0&q=80&w=1200",
  interior:
    "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcmlvciUyMGRlc2lnbiUyMGJyaWdodCUyMHJvb20lMjBsYXJnZSUyMHdpbmRvd3N8ZW58MXx8fHwxNzc5OTQ2NTk2fDA&ixlib=rb-4.1.0&q=80&w=1200",
  door1:
    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  door2:
    "https://images.unsplash.com/photo-1505691938895-1758d7feb511?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
};

export const NAV_LINKS = [
  { label: "Bosh sahifa", href: "#home" },
  { label: "Mahsulotlar", href: "#products" },
  { label: "Xizmatlar", href: "#services" },
  { label: "Shartlar", href: "#terms" },
  { label: "Galereya", href: "#gallery" },
  { label: "Aloqa", href: "#contact" },
];

export const PRODUCT_CATEGORIES = [
  { id: "plastikovye-okna", label: "Plastik romlar" },
  { id: "alyuminievye-okna", label: "Alyumin romlar" },
  { id: "doors", label: "Eshiklar" },
  { id: "razdvizhnye-sistemy", label: "Surilma tizimlari" },
  { id: "importnye-sistemy", label: "Import tizimlari" },
  { id: "fasadnye-sistemy", label: "Fasad tizimlari" },
  { id: "rolletnye-sistemy", label: "Rollet tizimlari" },
  { id: "steklyannye-ograzhdeniya", label: "Oynali to'siqlar" },
  { id: "aksessuary", label: "Aksessuarlar" },
] as const;

export type Product = {
  slug: string;
  name: string;
  category: (typeof PRODUCT_CATEGORIES)[number]["id"];
  profile: string;
  badge: string;
  description: string;
  features: string[];
  img: string;
  banner?: string;
  specImg?: string;
  specs: { label: string; value: string }[];
  highlights: { title: string | null; text: string }[];
};

// Mahsulot ma'lumotlari va rasmlar IMZO rasmiy saytidan (imzo.uz) olingan.
// Diler sifatida foydalaniladi. Rasmlar: public/products/<slug>/
export const PRODUCTS: Product[] = [
  {
    slug: "rehau-artevo",
    name: "Rehau ArtEvo",
    category: "plastikovye-okna",
    profile: "PVC profil",
    badge: "Premium",
    description:
      "Rehau Artevo oynalari yuqori issiqlik va shovqin izolyatsiyasini ta'minlaydi, zamonaviy dizaynni ishonchlilik bilan uyg'unlashtiradi. Ushbu vinil derazalar ham turar-joy, ham tijorat joylari uchun mos bo'lib…",
    features: [
      "7 kamerali profil",
      "Tavaqa balandligi 2800 mm",
      "Tavaqa kengligi 1000 mm",
      "Steklopaket 56 mm gacha",
    ],
    img: "/products/rehau-artevo/card.jpg",
    banner: "/products/rehau-artevo/banner.webp",
    specImg: "/products/rehau-artevo/spec.png",
    specs: [
      { label: "Profil turi", value: "PVX" },
      { label: "Kameralar soni", value: "7" },
      { label: "Tavaqaning maksimal balandligi", value: "2800 mm" },
      { label: "Tavaqaning maksimal kengligi", value: "1000 mm" },
      { label: "Steklopaket qalinligi", value: "56 mm gacha" },
      { label: "Montaj chuqurligi", value: "80 mm" },
      { label: "Issiqlik izolyatsiyasi", value: "0,98 m2 C/Vt" },
    ],
    highlights: [
      { title: null, text: "Windows Rehau Artevo — Bu qulay mikroiqlim va zamonaviy interyer yaratish uchun innovatsion yechim. Artevo profilidan yasalgan derazalar o‘zining puxta o‘ylangan dizayni tufayli yuqori issiqlik va shovqin izolyatsiyasini ta’minlaydi va o‘rnatishni qisqa vaqt ichida yakunlash mumkin." },
      { title: null, text: "Rehau Artevo tizimi turar-joy va jamoat binolarini yangi qurish uchun ham, ta'mirlash uchun ham javob beradi. Bu &mdash asosidagi ko'p qatlamli profillarni o'z ichiga oladi; issiqlik izolyatsiyasi xususiyatlarini yaxshilaydigan termal qo'shimchalar bilan bardoshli ramka. Alyuminiyning ikki qismidan yasalgan, mustahkamlangan shisha tolali shisha bilan bog'langan birlashtirilgan profillar strukturaga mustahkamlik va yuklarga qarshilik ko'rsatadi." },
      { title: null, text: "Tizim, shuningdek, ishonchliligi va chidamliligi bilan ajralib turadigan koplanar eshiklarni yig'ish imkonini beradi. Rehau Artevo oynalari bitta mahsulotda energiya samaradorligi, uslub va ishonchlilikni qadrlaydiganlar uchun ajoyib tanlovdir." },
    ],
  },
  {
    slug: "rehau-euro-design-70",
    name: "Rehau Euro-Design 70",
    category: "plastikovye-okna",
    profile: "PVC profil",
    badge: "Ommabop",
    description:
      "Rehau Euro-Design 70 derazalari nafis dizaynni ishonchlilik bilan uyg'unlashtirib, mukammal issiqlik va ovoz izolyatsiyasini ta'minlaydi. Ushbu vinil oynalar turar-joy va tijorat ilovalari uchun ideal bo'lib…",
    features: [
      "5 kamerali profil",
      "Tavaqa balandligi 2400 mm",
      "Tavaqa kengligi 1000 mm",
      "Montaj chuqurligi 70 mm",
    ],
    img: "/products/rehau-euro-design-70/card.jpg",
    banner: "/products/rehau-euro-design-70/banner.webp",
    specImg: "/products/rehau-euro-design-70/spec.png",
    specs: [
      { label: "Profil turi", value: "PVX" },
      { label: "Kameralar soni", value: "5" },
      { label: "Tavaqaning maksimal balandligi", value: "2400 mm" },
      { label: "Tavaqaning maksimal kengligi", value: "1000 mm" },
      { label: "Montaj chuqurligi", value: "70 mm" },
      { label: "Issiqlik izolyatsiyasi", value: "0,8 m² C/Vt" },
    ],
    highlights: [
      { title: null, text: "Windows Rehau Euro-Design 70 — Bu uyda qulay mikroiqlimni ta'minlaydigan ishonchli va iqtisodiy yechim. O'rnatish chuqurligi 70 mm va besh kamerali profilga ega tizim mukammal issiqlik va shovqin izolyatsiyasini kafolatlaydi, bu esa uni turar-joy va tijorat binolarida foydalanish uchun ideal qiladi.." },
      { title: null, text: "Rehau Euro-Design 70 turli me'moriy uslublar uchun mos bo'lib, dizayn va soyalarning katta tanlovini taklif etadi. Yaxshi o'ylangan profil dizayni va tashqi ta'sirlarga chidamliligi tufayli derazalar bardoshli va parvarish qilish oson. Bu bitta mahsulotda yuqori sifat, energiya tejamkorligi va nafis ko‘rinishni qidirayotganlar uchun eng maqbul yechimdir." },
    ],
  },
  {
    slug: "trio-60",
    name: "Trio 60",
    category: "plastikovye-okna",
    profile: "PVC profil",
    badge: "Hamyonbop",
    description:
      "TRIO 60 tizimi - ixcham profildan ishlab chiqarilgan va yuqori yorug'lik o'tkazuvchanligiga ega konstruksiyalar. IMZO dan Trio 60 oynalari zamonaviy dizayn, ishonchlilik va energiya samaradorligini o'zida mujassam etgan…",
    features: [
      "3 kamerali profil",
      "Profil devori 2,8 mm",
      "Montaj kengligi 60 mm",
      "Tavaqa balandligi 2400 mm",
    ],
    img: "/products/trio-60/card.jpg",
    banner: "/products/trio-60/banner.jpg",
    specImg: "/products/trio-60/spec.png",
    specs: [
      { label: "Profil turi", value: "PVX" },
      { label: "Kameralar soni", value: "3" },
      { label: "Profil devorining qalinligi", value: "2,8 mm" },
      { label: "Montaj kengligi", value: "60 mm" },
      { label: "Tavaqaning maksimal balandligi", value: "2400 mm" },
      { label: "Tavaqaning maksimal kengligi", value: "1200 mm" },
      { label: "Steklopaket qalinligi", value: "4-32 mm" },
      { label: "Montaj chuqurligi", value: "60 mm" },
    ],
    highlights: [
      { title: null, text: "TRIO 60 PVX tizimlari Markaziy Osiyo iqlimi sharoitlarini hisobga olgan holda yaratilgan.Trio 60 haqiqatan ham O‘zbekistonda eng mashhur rom modellaridan biri hisoblanadi. Trio 60’ning mashhurligi uning mukammal sifati, ajoyib texnik xususiyatlari va hamyonbop narxi bilan bog‘liq.TRIO romlari boshqa PVX romlariga qaraganda ancha bardoshli va energiya tejamkor hisoblanadi. TRIO uyingizda shinam muhit yaratadi." },
      { title: null, text: "IMZO Trio 60 romlari Markaziy Osiyoning o‘zgaruvchan iqlimdan qo‘rqmaydi! Biz barcha standartlarga rioya qilib, mustahkamlik va germetiklikka alohida e'tibor qaratdik. Ushbu seriyadagi profillar an'anaviy plastik derazalarga qaraganda ko'proq issiqlikni saqlaydi va uzoq vaqt davomida xizmat qiladi. TRIO 60 bizning shourumlarimizdagi eng mashhur modellardan biri hisoblanadi. Agar siz ishonchlilik, soddalik va qulaylikni yaxshi ko'rsangiz, IMZO Trio seriyasini tanlang." },
      { title: null, text: "IMZO TRIO 6000 seriyasi ajoyib tashqi ko‘rinishga ega bo‘lib, issiqlikni saqlash va ko'cha shovqinidan himoya qilish bo'yicha mukammal ko'rsatkichlarga ega.Ushbu profil seriyasining asosiy afzalliklari - 2,8 mm li devor qalinligi hamda qo'shimcha rezinali zichlagichni o'rnatish imkoniyatidir. Trio 60 energiya yo'qotishlarini kamaytirishga va pulni tejashga yordam beradi. Ushbu romlar sizning uyingizni yelvizak, sovuq, namlik va quyoshdan ishonchli himoyalaydi." },
      { title: null, text: "Biz zamonaviy muhandislik ishlanmalari bilan birgalikda yillar davomida tasdiqlangan yechimlardan foydalandik - Trio 60'da mustahkamlangan profil, argon bilan to'ldirilgan energiya tejovchi steklopaketlar mavjud. TRIO 60 tizimi klassik dizayn va ajoyib samaradorlik parametrlarining uyg‘unligidir. Trio 60 bilan sizning uyingiz haqiqatan ham himoyalangan bo‘ladi." },
    ],
  },
  {
    slug: "quattro-60",
    name: "Quattro 60",
    category: "plastikovye-okna",
    profile: "PVC profil",
    badge: "Ommabop",
    description:
      "IMZO Quattro 60 - yuqori darajadagi yorug‘lik o'tkazuvchanligiga ega romlar. Qo‘shimcha yorug‘lik xonani keng qiladi, samaradorlikni oshiradi va sizga ijobiy kayfiyat baxsh etadi.",
    features: [
      "4 kamerali profil",
      "Profil devori 2,2 mm",
      "Tavaqa balandligi до 2400 mm",
      "Tavaqa kengligi до 1200 mm",
    ],
    img: "/products/quattro-60/card.jpg",
    banner: "/products/quattro-60/banner.jpg",
    specImg: "/products/quattro-60/spec.png",
    specs: [
      { label: "Profil turi", value: "PVX" },
      { label: "Kameralar soni", value: "4" },
      { label: "Profil devorining qalinligi", value: "2,2 mm" },
      { label: "Tavaqaning maksimal balandligi", value: "до 2400 mm" },
      { label: "Tavaqaning maksimal kengligi", value: "до 1200 mm" },
      { label: "Steklopaket qalinligi", value: "4-32 mm" },
    ],
    highlights: [
      { title: null, text: "Quattro - shovqin va issiqlik izolatsiyasi bo‘yicha yuqori talablar qo‘yiladigan ofis, jamoat binolari va xonadonlar uchun ajoyib yechim. Kumush rangiga bo'yalgan tutqich va Vinchester laminatsiyasidagi deraza interyeringizga oziga xoslik beradi." },
      { title: null, text: "Quattro 60 to'rt kamerali tizim bo‘lib, shovqin va issiqlik izolatsiyasi bo‘yicha yuqori talablar qo‘yiladigan ofis, jamoat binolari va xonadonlar uchun ajoyib yechim. Kumush rangiga bo'yalgan tutqich va Vinchester laminatsiyasidagi deraza interyeringizga oziga xoslik beradi." },
      { title: null, text: "Yog‘och laminatsiyasiga ega Quattro 6000 - jozibali nafislik timsolidir. Keng formatli oyna yuqori yorug‘lik o‘tkazuvchanlik xususiyatlariga ega. 20 mm qalinlikdagi steklopaket optimal ekspluatatsion ko'rsatkichlariga ega. Modelning nafisligi har qanday interyerga mos keladi. Imzo 60 Quattro to'rt kamerali tizimi turar-joy binolari, ma'muriy, xizmat ko'rsatish va jamoat binolari uchun ajoyib yechim. Profil hamyonbop narx, yuqori sifatli furnituralar va mukammal texnik xususiyatlar bilan ajralib turadi." },
      { title: null, text: "IMZO'dan Quattro 60 oynalari zamonaviy uslub, ishonchlilik va yuqori energiya samaradorligini o'zida mujassam etgan oynali tizimdir. Bu turar-joy va tijorat ilovalari uchun ideal tanlov bo'lib, maksimal qulaylik va chidamlilikni ta'minlaydi. Bundan tashqari, Quattro 60 derazalari oshxona uchun juda mos keladi: ular quyosh nuri o'tishiga imkon beradi, yorqin va qulay muhit yaratadi, shu bilan birga changning kirib kelishini samarali oldini oladi." },
    ],
  },
  {
    slug: "engelberg-70",
    name: "Engelberg 70",
    category: "plastikovye-okna",
    profile: "PVC profil",
    badge: "Ommabop",
    description:
      "Engelberg 70 profilidan tayyorlangan romlar Shveytsariya texnologiyasidan foydalangan holda ishlab chiqariladi va Yevropa sifat standartlariga javob beradi.",
    features: [
      "5 kamerali profil",
      "Profil devori 2,8 mm",
      "Montaj kengligi 70 mm",
      "Tavaqa balandligi 2300 mm",
    ],
    img: "/products/engelberg-70/card.jpg",
    banner: "/products/engelberg-70/banner.jpg",
    specImg: "/products/engelberg-70/spec.png",
    specs: [
      { label: "Profil turi", value: "PVX" },
      { label: "Kameralar soni", value: "5" },
      { label: "Profil devorining qalinligi", value: "2,8 mm" },
      { label: "Montaj kengligi", value: "70 mm" },
      { label: "Tavaqaning maksimal balandligi", value: "2300 mm" },
      { label: "Tavaqaning maksimal kengligi", value: "1000 mm" },
      { label: "Steklopaket qalinligi", value: "24-40 mm" },
    ],
    highlights: [
      { title: null, text: "Ushbu rom tizimi yotoqxonangiz va zalingiz uchun juda mos keladi. Ushbu rom ortiqcha shovqindan himoya qiladi va xonada qulay haroratni saqlashga yordam beradi." },
      { title: null, text: "Beshta kamera va po'latli kuchaytirgich rom shaklini ushlab turadi, deformatsiyadan himoya qiladi, issiqlikni saqlaydi va ko'chadagi shovqinni o‘tkazmaydi. Engelberg 70 profil seriyasi zal, kabinet va yotoqxona uchun ajoyib yechim." },
      { title: "Maksimal qulaylikni tanlaganlar uchun", text: "Engelberg 70 profili Markaziy Osiyo iqlimiga va intensiv foydalanishga moslashtirilgan. Yuqori harorat o'zgarishiga, quyosh nuriga uzoq vaqt ta'sir qilishiga va og'ir yuklarga bardosh bera oladi. Germetik konstruksiya issiqlik yo'qotilishidan himoya qiladi hamda ovoz va namlik izolatsiyasini ta'minlaydi. Maxsus steklopaket esa yorug'lik o‘tkazuvchanlik xususiyatlariga ega." },
      { title: null, text: "60 000 tagacha ochilish tsikllari" },
    ],
  },
  {
    slug: "engelberg-80",
    name: "Engelberg 80",
    category: "plastikovye-okna",
    profile: "PVC profil",
    badge: "Premium",
    description:
      "Engelberg 80 - estetik dizayn va energiya samaradorligini maqbul narxda birlashtirgan yuqori izolyatsion ko‘satkichlariga ega rom va eshik tizimi.",
    features: [
      "6 kamerali profil",
      "Profil devori 2,8 mm",
      "Montaj kengligi 76 mm",
      "Tavaqa balandligi 2200 mm",
    ],
    img: "/products/engelberg-80/card.jpg",
    banner: "/products/engelberg-80/banner.png",
    specImg: "/products/engelberg-80/spec.png",
    specs: [
      { label: "Profil turi", value: "PVX" },
      { label: "Profil seriyasi", value: "Issiq" },
      { label: "Kameralar soni", value: "6" },
      { label: "Profil devorining qalinligi", value: "2,8 mm" },
      { label: "Montaj kengligi", value: "76 mm" },
      { label: "Tavaqaning maksimal balandligi", value: "2200 mm" },
      { label: "Tavaqaning maksimal kengligi", value: "1100 mm" },
      { label: "Steklopaket qalinligi", value: "24-50 mm" },
      { label: "Montaj chuqurligi", value: "80 mm" },
      { label: "Qopqoqning maksimal og'irligi", value: "80 kg gacha" },
    ],
    highlights: [
      { title: null, text: "EN 12211 Yevropa standarti EN 1026 ga muvofiq sinovdan o'tkazilgandan so'ng har qanday materialning to'liq yig'ilgan romlar hamda tashqi va ichki eshiklari uchun sinov natijalari tasnifini belgilaydi." },
      { title: "Universal konstruksiya", text: "Tizimning montaj chuqurligi uni ko'plab tuzilmalarda qo'llash imkonini beradi: - turar-joy binolarida, ofis binolarida va turli jamoat va sanoat binolarida; - Arxitektura yoki konstruktiv talablar tufayli boshqa materiallardan foydalanish mumkin bo'lmagan rom va eshik konstruktsiyalari. - Issiqlik va ovoz izolyatsiyasiga yuqori talablar qo‘yiladigan rom konstruksiyalari" },
      { title: null, text: "Tizim profillarining assortimenti uni ko'plab konstruksiyalarda qo'llash imkonini beradi: - turar-joy binolarida, ofis binolarida va turli jamoat va sanoat binolarida; - Arxitektura yoki konstruktiv talablar tufayli boshqa materiallardan foydalanish mumkin bo'lmagan rom va eshik konstruktsiyalari. - Issiqlik va ovoz izolyatsiyasiga yuqori talablar qo‘yiladigan rom konstruksiyalari" },
    ],
  },
  {
    slug: "thermo-64-engelberg",
    name: "Thermo 64 Engelberg",
    category: "alyuminievye-okna",
    profile: "Alyumin profil",
    badge: "Yangi",
    description:
      "Thermo 64 Engelberg — IMZO'ning termo ko'prikli yangi alyumin rom va eshik tizimi. Batafsil texnik ma'lumotlar uchun biz bilan bog'laning.",
    features: [
      "Termo ko'prikli tizim",
      "Yangi avlod profili",
      "Rom va eshiklar uchun",
      "Ma'lumot: so'rov bo'yicha",
    ],
    img: "/products/thermo-64-engelberg/card.jpg",
    specs: [],
    highlights: [],
  },
  {
    slug: "thermo-85-engelberg",
    name: "Thermo 85 Engelberg",
    category: "alyuminievye-okna",
    profile: "Alyumin profil",
    badge: "Yangi",
    description:
      "Thermo 85 Engelberg — IMZO'ning yangi avlod alyumin tizimi. Mukammal issiqlik izolyatsiyasi va zamonaviy dizayn uyg'unligi, turar-joy va tijorat binolari uchun.",
    features: [
      "Termo ko'prik 39 mm",
      "Montaj chuqurligi 85 mm",
      "Tavaqa balandligi 2100 mm",
      "Tavaqa kengligi 1200 mm",
    ],
    img: "/products/thermo-85-engelberg/card.jpg",
    specImg: "/products/thermo-85-engelberg/spec.png",
    specs: [
      { label: "Profil turi", value: "Alyuminiy" },
      { label: "Profil seriyasi", value: "Issiq" },
      { label: "Tavaqaning maksimal balandligi", value: "2100 mm" },
      { label: "Tavaqaning maksimal kengligi", value: "1200 mm" },
      { label: "Montaj chuqurligi", value: "85 mm" },
      { label: "Termo ko'prik kengligi", value: "39 mm" },
    ],
    highlights: [
      { title: "Yuqori issiqlik izolyatsiyasi", text: "Poliamiddan tayyorlangan o'rnatilgan termo ko'prikli profillar sifatli ikki kamerali steklopaket bilan birgalikda uyingizda issiqlikni saqlaydi va energiya xarajatlarini kamaytiradi." },
      { title: "Zamonaviy dizayn", text: "Thermo 85 — zamonaviy qat'iy dizayn, ekologik toza va xavfsiz materiallar hamda yuqori mustahkamlikning uyg'un kombinatsiyasi." },
      { title: "Mustahkam konstruksiya", text: "Sindirish yoki deformatsiya qilish qiyin bo'lgan mustahkam romlar kerakmi? Thermo 85 alyumin tizimini tanlang — u uzoq yillar xizmat qiladi." },
    ],
  },
  {
    slug: "champion",
    name: "Champion",
    category: "alyuminievye-okna",
    profile: "Alyumin profil",
    badge: "Hamyonbop",
    description:
      "IMZO Champion alyuminiy tizimidan tayyorlangan konstruktsiyalar asosan balkonlar va lodjiyalarni sovuq oynalashda hamda issiqlik izolyatsiyasi bo‘yicha talablari yuqori bo'lmagan binolarda ishlatiladi.",
    features: [
      "Profil devori 1,1 mm",
      "Tavaqa balandligi 2200 mm",
      "Tavaqa kengligi 1100 mm",
      "Steklopaket 4-24 mm",
    ],
    img: "/products/champion/card.jpg",
    banner: "/products/champion/banner.jpg",
    specImg: "/products/champion/spec.png",
    specs: [
      { label: "Profil turi", value: "Alyumin" },
      { label: "Profil seriyasi", value: "Sovuq" },
      { label: "Profil devorining qalinligi", value: "1,1 mm" },
      { label: "Tavaqaning maksimal balandligi", value: "2200 mm" },
      { label: "Tavaqaning maksimal kengligi", value: "1100 mm" },
      { label: "Steklopaket qalinligi", value: "4-24 mm" },
      { label: "Qoplama", value: "Anodlash, RAL ranglari, Laminatsiya" },
      { label: "Montaj chuqurligi", value: "47" },
    ],
    highlights: [
      { title: null, text: "Ushbu tizimdan maʼmuriy va jamoat binolar uchun kirish eshiklar, alyumin romlar, doʻkon oynalari ishlab chiqariladi." },
      { title: "Sovuq oynalash", text: "Termo ko'prigi bo'lmagan alyuminiy tizimi \"sovuq\" deb ataladi. Bunday tizimlar ichki yechimlar uchun ideal: - ichki eshiklar / derazalar; - makonni zonalashtirish uchun to‘siqlar;" },
      { title: "Yengil va funksional", text: "Alyuminiydan tayyorlangan romlar yengil, oson o'rnatiladi va mustahkam tayanchni tayyorlashni talab qilmaydi. Alyuminiy konstruktsiya to'g'ridan-to'g'ri balkonning metall panjarasiga o'rnatilishi mumkin." },
      { title: null, text: "Ushbu tizim ayvon, verandalar va terrasalar uchun qo‘llaniladi." },
    ],
  },
  {
    slug: "thermo-57-engelberg",
    name: "Thermo 57 Engelberg",
    category: "alyuminievye-okna",
    profile: "Alyumin profil",
    badge: "Universal",
    description:
      "Ushbu rom va eshik tizimi funksionallik, estetika va foydalanishning universalligi hamda turli xil me'moriy yechimlar va hamyonbop narxni o‘zida mujassamlashtiradi. Yengil va mustahkam Thermo 57 rom va eshik tizimi…",
    features: [
      "Steklopaket 4-30 mm",
      "Qoplama Anodlash, RAL ranglari, Laminatsiya",
      "Deraza ramkasini o'rnatish chuqurligi 49 mm",
      "Eshik ramkasini o'rnatish chuqurligi 57 mm",
    ],
    img: "/products/thermo-57-engelberg/card.jpg",
    specImg: "/products/thermo-57-engelberg/spec.png",
    specs: [
      { label: "Profil turi", value: "Alyumin" },
      { label: "Profil seriyasi", value: "Issiq" },
      { label: "Steklopaket qalinligi", value: "4-30 mm" },
      { label: "Qoplama", value: "Anodlash, RAL ranglari, Laminatsiya" },
      { label: "Deraza ramkasini o'rnatish chuqurligi", value: "49 mm" },
      { label: "Eshik ramkasini o'rnatish chuqurligi", value: "57 mm" },
      { label: "Tavaqaning chuqurligi", value: "57 mm" },
      { label: "Termo ko‘prik kengligi", value: "17 mm" },
    ],
    highlights: [
      { title: null, text: "Optimallashtirilgan alyuminiy profillar tufayli ushbu tizim qisqa vaqt ichida o‘rnatiladi" },
      { title: null, text: "BKT 57 - yangi rom va eshik tizimi. Issiq alyuminiy derazalarning hamyonbop yechimi. Turar-joy hamda jamoat binolarida qo'llanilishi mumkin." },
      { title: null, text: "Tizim shisha tolali mustahkamlangan poliamiddan tayyorlangan ikkita termo ko‘priklar yordamida bir-biriga bog'langan ikkita alyuminiy qismdan iborat. Kombinatsiyalangan profillar yaxshi statik ko'rsatkichlarga ega bo'lgan konstruksiyalarni ishlab chiqarish imkonini beradi." },
      { title: null, text: "Ushbu tizimdan ishonchli va mustahkam hisoblanadigan komplanar eshiklarni yig'ish mumkin." },
    ],
  },
  {
    slug: "thermo-65-engelberg",
    name: "Thermo 65 Engelberg",
    category: "alyuminievye-okna",
    profile: "Alyumin profil",
    badge: "Ommabop",
    description:
      "IMZO kompaniyasining Thermo 65 Engelberg derazalari yuqori issiqlik izolyatsiyasi va zamonaviy uslubni ta'minlaydi. Ushbu alyuminiy derazalar ishonchlilik va chidamlilikni qulaylik va nafislik bilan uyg'unlashtirgan…",
    features: [
      "3 kamerali profil",
      "Profil devori 1,4 mm",
      "Tavaqa balandligi 2500 mm",
      "Tavaqa kengligi 1600 mm",
    ],
    img: "/products/thermo-65-engelberg/card.jpg",
    banner: "/products/thermo-65-engelberg/banner.jpg",
    specImg: "/products/thermo-65-engelberg/spec.png",
    specs: [
      { label: "Profil turi", value: "Alyumin" },
      { label: "Profil seriyasi", value: "Issiq" },
      { label: "Kameralar soni", value: "3" },
      { label: "Profil devorining qalinligi", value: "1,4 mm" },
      { label: "Tavaqaning maksimal balandligi", value: "2500 mm" },
      { label: "Tavaqaning maksimal kengligi", value: "1600 mm" },
      { label: "Steklopaket qalinligi", value: "6-32 mm" },
      { label: "Qoplama", value: "Anodlash, RAL ranglari, Laminatsiya" },
      { label: "Montaj chuqurligi", value: "65 mm" },
    ],
    highlights: [
      { title: null, text: "Poliamidli termo ko‘prik va yuqori sifatli steklopaketlar uyingizni ko'cha shovqinidan va issiqlik yo'qotilishidan himoya qiladi. Bunday romlar bilan uyingiz har qanday ob-havo sharoitlariga tayyori! Thermo 65 sifatli, puxta o'ylangan va zamonaviy uyni qadrlovchilar tanlovi" },
      { title: null, text: "Thermo 65 zamonaviy va nafis dizayn, ekologik toza va xavfsiz materiallar hamda yuqori darajadagi issiqlik va shovqin izolyatsiyasining uyg'unligidir. Markaziy Osiyo iqlimida barcha sifat va qulaylik talablariga javob beradigan rom tizimi." },
      { title: null, text: "Sizga sinmaydigan va deformatsiyalangan mustahkam romlar kerakmi? Termo 65 romlarini tanlang. Ushbu tizim faol foydalanish uchun mo'ljallangan, korroziyaga va ob-havo o'zgarishlariga chidamli, quyosh, yomg'ir va sovuqdan qo'rqmaydi. To'g'ri o'rnatilgan Thermo 65 rom tizimi sizga ko‘p yillar davomida xizmat qiladi." },
    ],
  },
  {
    slug: "thermo-78-engelberg",
    name: "Thermo 78 Engelberg",
    category: "alyuminievye-okna",
    profile: "Alyumin profil",
    badge: "Premium",
    description:
      "Thermo 78 - xonadonlar va uchastkalar uchun eng zamonaviy taklif. Thermo 78 modeli atrof-muhit ta'siriga va har qanday ob-havo sharoitlariga bardosh bera oladi. IMZO'dan Thermo 78 Engelberg derazalari yuqori issiqlik…",
    features: [
      "Profil devori 1,4-1,9 mm",
      "Tavaqa balandligi 2600 mm",
      "Tavaqa kengligi 1200 mm",
      "Steklopaket 20-36 mm",
    ],
    img: "/products/thermo-78-engelberg/card.jpg",
    banner: "/products/thermo-78-engelberg/banner.jpg",
    specImg: "/products/thermo-78-engelberg/spec.png",
    specs: [
      { label: "Profil turi", value: "Alyumin" },
      { label: "Profil seriyasi", value: "Issiq" },
      { label: "Profil devorining qalinligi", value: "1,4-1,9 mm" },
      { label: "Tavaqaning maksimal balandligi", value: "2600 mm" },
      { label: "Tavaqaning maksimal kengligi", value: "1200 mm" },
      { label: "Steklopaket qalinligi", value: "20-36 mm" },
      { label: "Qoplama", value: "Anodlash, RAL ranglari, Laminatsiya" },
    ],
    highlights: [
      { title: null, text: "O‘zbekistonning iqlim sharoitiga moslashgan: quyosh ta'siriga bardosh bera oladi hamda sovuq va issiqdan ishonchli himoya qiladi" },
      { title: "Mustahkam dizayn", text: "Massiv \"issiq\" profil yaxshilangan issiqlik izolyatsiyasi xususiyatlariga ega bo'lgan uch qatlamli steklopaketni o'rnatishga imkon beradi. Ushbu rom tizimi bilan uyingizga shovqin kirmaydi. Bu oyna quyidagi afzalliklarga ega: kameralarning innovatsion tartibi, argon bilan to‘ldirilgan energiya tejovchi steklopaketlar, zamonaviy import furnituralar" },
      { title: "Ishonchlilikning timsoli", text: "Eksklyuziv Thermo 78 profilidan tayyorlangan derazalar bilan sizning uyingiz doimo issiq va yorug' bo'ladi. Ushbu seriyadagi konstruksiyalarning beqiyos issiqlik va yorug'lik o'tkazuvchanligi sizning barcha orzularingizni amalga oshiradi." },
    ],
  },
  {
    slug: "thermo-98-engelberg",
    name: "Thermo 98 Engelberg",
    category: "alyuminievye-okna",
    profile: "Alyumin profil",
    badge: "Premium",
    description:
      "THERMO 98 tizimining eng yuqori issiqlik ko'rsatkichlari quyidagilar tufayli ta'minlanadi: - kattalashtirilgan ko'p kamerali termoko'priklaridan foydalanish; - termo ko'prigi zonasida ko'pikli polietilen…",
    features: [
      "Montaj chuqurligi 90 mm",
      "Tavaqaning chuqurligi 98 mm",
      "Termo ko‘prik kengligi 54 mm",
    ],
    img: "/products/thermo-98-engelberg/card.jpg",
    banner: "/products/thermo-98-engelberg/banner.jpg",
    specImg: "/products/thermo-98-engelberg/spec.png",
    specs: [
      { label: "Profil turi", value: "Alyumin" },
      { label: "Profil seriyasi", value: "Issiq" },
      { label: "Montaj chuqurligi", value: "90 mm" },
      { label: "Tavaqaning chuqurligi", value: "98 mm" },
      { label: "Termo ko‘prik kengligi", value: "54 mm" },
    ],
    highlights: [
      { title: null, text: "THERMO 98 tizimining eng yuqori issiqlik ko'rsatkichlari quyidagilar tufayli ta'minlanadi: - kattalashtirilgan ko'p kamerali termoko'priklaridan foydalanish; - termo ko'prigi zonasida ko'pikli polietilen qo'shimchalardan foydalanish; - steklopaketda issiqlik izolatsiyasining innovatsion tamoyiilarini qo‘llash. Ushbu rom tizimi 40 dB gacha bo‘lgan shovqindan himoya qiladi." },
      { title: null, text: "ISO 10140-2: 2010 devorlar, pollar, eshiklar, derazalar, panjurlar, fasad elementlari, jabhalar, oynalar, havoni boshqarish moslamalari, ventilyatsiya, panellar kabi kichik texnik elementlar kabi qurilish mahsulotlarining havodagi ovoz izolatsiyasini o'lchash uchun laboratoriya usulini belgilaydi. (ventilyatsiya panellari ), tashqi havo kirishlari, elektr simlari, transport sızdırmazlık tizimlari va ularning birikmalari, masalan, plitkali devorlar yoki pollar, to'xtatilgan shiftlar yoki suzuvchi pollar." },
      { title: null, text: "THERMO 98 deraza va eshik tizimining bazaviy o'lchami 90 mm (rom uchun) va 98 mm (tavaqa uchun) ni tashkil etadi. Jismoniy ta'sir sinovlarida ko‘rsatilgan natija — 100%." },
    ],
  },
  {
    slug: "thermo-105-engelberg",
    name: "Thermo 105 Engelberg",
    category: "alyuminievye-okna",
    profile: "Alyumin profil",
    badge: "Premium",
    description:
      "EN 12600, EN 14019 va EN 13049 standartlariga javob beradi. Ushbu sinovlarni o‘tkazish uchun massasi 50 kg bo'lgan mayatnik ishlatiladi.",
    features: [
      "Profil devori 1,4 mm",
      "Tavaqa balandligi 3000 mm",
      "Tavaqa kengligi 1000 mm",
      "Montaj chuqurligi 98 mm",
    ],
    img: "/products/thermo-105-engelberg/card.jpg",
    specImg: "/products/thermo-105-engelberg/spec.png",
    specs: [
      { label: "Profil turi", value: "Alyumin" },
      { label: "Profil seriyasi", value: "Issiq" },
      { label: "Profil devorining qalinligi", value: "1,4 mm" },
      { label: "Tavaqaning maksimal balandligi", value: "3000 mm" },
      { label: "Tavaqaning maksimal kengligi", value: "1000 mm" },
      { label: "Montaj chuqurligi", value: "98 mm" },
      { label: "Tavaqaning chuqurligi", value: "105 mm" },
      { label: "Termo ko‘prik kengligi", value: "54 mm" },
    ],
    highlights: [
      { title: null, text: "Sinov namunasiga ta'sir qiluvchi kuch — mayatnikning tushishi natijasida hosil bo'lgan kinetik energiya hisoblanadi (Djouldan o‘lchanadi). Ushbu sinovlar Fransiyaning NFP qoidalariga muvofiq ishlab chiqilgan 50 kilogrammli shisha bilan to'ldirilgan qop bilan ham amalga oshirilishi mumkin." },
      { title: null, text: "IMZO’dan Thermo 105 Engelberg derazalari mukammal energiya samaradorligi va zamonaviy dizaynni taklif etadi. Ushbu alyuminiy oynalar turar-joy va tijorat joylari uchun ideal bo'lib, butun umr davomida ishonchlilik, chidamlilik va qulaylikni ta'minlaydi. Profil bozordagi eksklyuzivlardan biri bo'lib, uning o'ziga xos xususiyatlari va afzalliklarini ta'kidlaydi." },
    ],
  },
  {
    slug: "mdf-40",
    name: "MDF 40",
    category: "doors",
    profile: "Eshik tizimi",
    badge: "Ommabop",
    description:
      "IMZO xonalararo eshiklari yuqori sifatli va mustahkam mahsulot bo‘lib, sizning interyeringiz uchun mos keladi.",
    features: [
      "Profil devori 1,5 mm",
      "Tavaqa balandligi 2700 mm",
      "Tavaqa kengligi 1000 mm",
      "Montaj chuqurligi Devor yuzasi",
    ],
    img: "/products/mdf-40/card.jpg",
    banner: "/products/mdf-40/banner.jpg",
    specImg: "/products/mdf-40/spec.png",
    specs: [
      { label: "Profil turi", value: "Alyumin" },
      { label: "Profil devorining qalinligi", value: "1,5 mm" },
      { label: "Tavaqaning maksimal balandligi", value: "2700 mm" },
      { label: "Tavaqaning maksimal kengligi", value: "1000 mm" },
      { label: "Montaj chuqurligi", value: "Devor yuzasi" },
      { label: "Obnalichka kengligi", value: "50 mm" },
      { label: "Oyna qalinligi", value: "6 mm" },
    ],
    highlights: [
      { title: null, text: "IMZO xonalararo eshiklari yuqori sifatli va mustahkam mahsulot bo‘lib, sizning interyeringiz uchun mos keladi. Ichki eshiklar turar-joy binolari, ofislar, bolalar bog'chalari, maktablar, mehmonxonalar, tibbiyot muassasalari va binolarda o'rnatish uchun mo'ljallangan." },
      { title: null, text: "IMZO o'zining innovatsion texnologiyalari va yuqori sifatli mahsulotlari bilan mashhur. Biz yog'och massivi, MDF va alyuminiy kabi yuqori sifatli materiallardan foydalanamiz, bu esa mahsulotlarining mustahkamligini ta'minlaydi. Biz har bir mijozga individual tarzda yondashamiz." },
      { title: null, text: "IMZO kompaniyasining MDF 40 eshik tizimlari uslub va funksionallikning mukammal kombinatsiyasini taklif etadi. Ushbu eshiklar mukammal ovoz yalıtımını ta'minlaydi va turar-joy va tijorat joylari uchun mos keladi, qulay muhit va ishonchli himoya yaratadi." },
    ],
  },
  {
    slug: "invisible-door",
    name: "Invisible Door",
    category: "doors",
    profile: "Eshik tizimi",
    badge: "Premium",
    description:
      "IMZO kompaniyasining Invisible Door interyer dizayniga innovatsion va zamonaviy yondashuvni taklif etadi. Yashirin menteşali bu eshiklar minimalizm va estetika muhim bo'lgan turar-joy va tijorat joylari uchun ideal…",
    features: [
      "Yashirin qutili eshik",
      "Devor bilan bir tekisda",
      "Minimalistik dizayn",
      "Ichki makonlar uchun",
    ],
    img: "/products/invisible-door/card.jpg",
    specs: [],
    highlights: [
      { title: null, text: "Ko‘rinmas eshiklar yanada ko‘p bo'sh joyni yaratadi. Quyosh nurlari insonga kuch-quvvat beradi va uyda qulaylik yaratadi." },
      { title: null, text: "Ko‘rinmas eshiklarni alyuminiydan yasalgan surilma eshiklar bilan birgalikda mukammal tarzda ishlatilsa bo‘ladi." },
      { title: null, text: "IMZO ko‘p funksiyali eshiklarni taklif qiladi. Xonalararo eshiklar jamoat joylarida o'rnatish uchun mo'ljallangan. Ushbu eshiklar konstruksiya mustahkamligi va xavfsizligi, yuqori darajadagi shovqin izolyatsiyasi va ajoyib dizayn bilan ajralib turadi." },
      { title: null, text: "Metall ramkali eshik bloki tashrif buyuruvchilarning oqimi yuqori bo‘lgan ma'muriy va ofis binolari uchun eng yaxshi yechim." },
    ],
  },
  {
    slug: "bkh-20",
    name: "BKH 20",
    category: "razdvizhnye-sistemy",
    profile: "Surilma tizim",
    badge: "Hamyonbop",
    description:
      "BKH 20 tizimi universal surilma to‘siqni yaratishga imkon beradi. Oson o‘rnatiladigan tizim yorug'lik va shovqindan himoya qiluvchi maydonini yaratadi.",
    features: [
      "Tavaqa balandligi 2500 mm",
      "Tavaqa kengligi 700 mm",
      "Steklopaket 8-10 mm",
      "Qoplama Anodlash, RAL ranglari, Laminatsiya",
    ],
    img: "/products/bkh-20/card.jpg",
    banner: "/products/bkh-20/banner.jpg",
    specImg: "/products/bkh-20/spec.png",
    specs: [
      { label: "Profil turi", value: "Alyumin" },
      { label: "Tavaqaning maksimal balandligi", value: "2500 mm" },
      { label: "Tavaqaning maksimal kengligi", value: "700 mm" },
      { label: "Steklopaket qalinligi", value: "8-10 mm" },
      { label: "Qoplama", value: "Anodlash, RAL ranglari, Laminatsiya" },
      { label: "Tizim turi", value: "Xonalararo" },
      { label: "Qopqoqning ko'rinadigan qismining kengligi", value: "20 mm" },
      { label: "Profilning montaj kengligi (ikki relsali)", value: "133 mm" },
      { label: "Profilning montaj kengligi (uch relsali)", value: "255 mm" },
    ],
    highlights: [
      { title: null, text: "Osma surilma tizim - BKH 20 surilma tizimi xonani zonalashtirish masalasini hal qilishga yordam beradi. Ushbu tizim yordamida xona turli zonalarga bo'linadi, tabiiy quyosh nuri esa xonaning butun maydoniga uzatiladi." },
      { title: null, text: "Surilma tizimlar benuqson ko'rinishga ega bo‘lib, amaliylik, funksionallik va ergonomiklik bilan ajralib turadi." },
      { title: null, text: "BKH 20 tizimi sizga maydondan samarali foydalanib, ichki makonni zonalash yoki birlashtirish imkonini beradi. Mexanizmning sinxron ochilishi eshiklarni qulaylik va tezlik bilan ochish imkonini beradi. Ushbu tizimning katta afzalligi uning arzonligi va mukammal funksionalligidan iborat." },
      { title: "Maksimal funksionallik", text: "BKH 20 tizimining asosiy afzalligi uning universalligidan iborat. Uning yordamida siz xona ichida turli zonalarni yaratishingiz mumkin. Tizim konstruksiyasi to‘siqning o'lchami va shaklini osongina o'zgartirishga imkon beradi. Uni ofislar, do'konlar, restoranlar, mehmonxonalar va boshqa binolarda o‘rnatishingiz mumkin." },
    ],
  },
  {
    slug: "bkh-65",
    name: "BKH 65",
    category: "razdvizhnye-sistemy",
    profile: "Surilma tizim",
    badge: "Ommabop",
    description:
      "HS-Portal - nostandart o'lchamdagi bo‘shliqlarni yopish imkonini beruvchi aylanma-surilma tizimlari. Bu haqiqatan ham original yechim. Bunday tizimlar standart eshik o'rniga o'rnatiladi. Ochiq holatda ko'cha va uy…",
    features: [
      "Steklopaket 20-48 mm",
      "Qoplama Anodlash, RAL ranglari, Laminatsiya",
      "Profilning montaj kengligi (ikki relsali) 148 mm",
      "Profilning montaj kengligi (uch relsali) 232 mm",
    ],
    img: "/products/bkh-65/card.jpg",
    banner: "/products/bkh-65/banner.jpg",
    specImg: "/products/bkh-65/spec.png",
    specs: [
      { label: "Profil turi", value: "Alyumin" },
      { label: "Profil seriyasi", value: "Issiq" },
      { label: "Steklopaket qalinligi", value: "20-48 mm" },
      { label: "Qoplama", value: "Anodlash, RAL ranglari, Laminatsiya" },
      { label: "Profilning montaj kengligi (ikki relsali)", value: "148 mm" },
      { label: "Profilning montaj kengligi (uch relsali)", value: "232 mm" },
      { label: "Konstruksiyaning maksimal balandligi", value: "3300 mm" },
      { label: "Konstruksiyaning maksimal kengligi", value: "2800 mm" },
    ],
    highlights: [
      { title: null, text: "Estetika va chidamlilik. Jismoniy, kimyoviy va biologik ta'sirlarga chidamlilik cheksiz xizmat muddatini ta'minlaydi. Alyumin profillar ajoyib estetik ko'rinishga ega. Ushbu tizimni RAL palitrasidan istalgan rangga bo'yash mumkin." },
      { title: null, text: "Issiqlik izolyatsiyasi va bo'sh joy. Alyuminiydan yasalgan yuqori issiqlik izolatsiyasiga ega surilma eshiklar qishki bog‘, balkon va terrasada keng makon yaratad. Alyuminiyning o'ta yuqori mustahkamligi tufayli maksimal shaffofligini va kunduzgi yorug'likning kirib borishini ta'minlaydigan panoramali konstruksiyalarni amalga oshirish mumkin." },
      { title: null, text: "BKH 65 panoramali surilma tizimi tabiat bilan uyg‘unlikning vizual effektini yaratadi, bu esa sizga qulay sharoitlarda landshaft manzaralaridan bahramand bo‘lish imkonini beradi. BKH 65 maksimal yorug‘likni ta'minlaydi va yashash maydonini vizual ravishda kengaytiradi." },
      { title: null, text: "IMZO dan BKH 65 derazalari yuqori quvvat va energiya samaradorligini ta'minlaydigan alyuminiy profilli zamonaviy oynalar tizimidir." },
    ],
  },
  {
    slug: "slide-master",
    name: "Slide Master",
    category: "importnye-sistemy",
    profile: "Import tizim",
    badge: "Import",
    description:
      "Issiqlik izolyatsiyasiga ega SlideMaster surilma tizimi — balkon uchun oyna tizimlarining yangi standarti. SlideMaster surilma tizimi issiqlik izolyatsiyasi, qulaylik va estetika nuqtai nazaridan yangilandi. Sizning…",
    features: [
      "Tavaqa kengligi 1500 mm",
      "Konstruksiyaning maksimal balandligi 2800 mm",
      "Og‘irligi 150 kg gacha",
      "Tashuvchi tizim 2x2 karetkalar",
    ],
    img: "/products/slide-master/card.jpg",
    specImg: "/products/slide-master/spec.jpg",
    specs: [
      { label: "Tavaqaning maksimal kengligi", value: "1500 mm" },
      { label: "Konstruksiyaning maksimal balandligi", value: "2800 mm" },
      { label: "Og‘irligi", value: "150 kg gacha" },
      { label: "Tashuvchi tizim", value: "2x2 karetkalar" },
      { label: "Rulman roliklari", value: "100% zanglamaydigan po‘lat" },
      { label: "Qopqoqning minimal kengligi", value: "450 мм" },
    ],
    highlights: [
      { title: null, text: "SlideMaster to'rtta standart relslardan iborat bo‘lib, har bir blok alohida relsda harakatlanadi. Har bir blok qulflangan bo‘lib, bir-birini tortadi, birinchi ochiq panel yopilish yo'nalishi bo'yicha ichkariga suriladi. Blok oxirgi nuqtaga yetgandan so'ng, siz tortib olgan panel muammosiz qulflanadi." },
      { title: null, text: "SlideMaster ham issiqlik izolyatsiyasiga ega steklopaket, ham bir qatlamli steklopaket bilan jihozlanadi. Issiqlik izolyatsiyasi bilan bog‘liq muammolar SlideMaster surilma tizimi yordamida hal qilinadi. SlideMaster tizimi burchak profillaridan foydalanmasdan maksimal panoramali ko'rinishlarni ta'minlaydi. Kengligi 1,5 m gacha bo'lgan maxsus panellar yordamida ajoyib panoramali ko'rinishlarni yaratsa bo‘ladi. Ushbu panellar zamonaviy mexanizmlari va maxsus qulflash tizimi yordamida qulay tarzda yopilishi / ochilishi mumkin." },
    ],
  },
  {
    slug: "tiara-twinmax",
    name: "Tiara Twinmax",
    category: "importnye-sistemy",
    profile: "Import tizim",
    badge: "Import",
    description:
      "Tiara Twinmax ramkasiz tizimi funksionalligi va vizual jozibadorligi bilan ajralib turadi. Sizning balkoningizni qulay va shinam makonga aylantiradi. IMZO’dan Tiara Twinmax oynalari zamonaviy dizayn va yuqori energiya…",
    features: [
      "Steklopaket 20-50 mm",
      "Qoplama Anodlash, RAL ranglari, laminatsiya",
      "Profilning montaj kengligi (ikki relsali) 148 mm",
      "Profilning montaj kengligi (uch relsali) 232 mm",
    ],
    img: "/products/tiara-twinmax/card.jpg",
    banner: "/products/tiara-twinmax/banner.jpg",
    specImg: "/products/tiara-twinmax/spec.png",
    specs: [
      { label: "Profil turi", value: "Alyumin" },
      { label: "Profil seriyasi", value: "Issiq" },
      { label: "Steklopaket qalinligi", value: "20-50 mm" },
      { label: "Qoplama", value: "Anodlash, RAL ranglari, laminatsiya" },
      { label: "Profilning montaj kengligi (ikki relsali)", value: "148 mm" },
      { label: "Profilning montaj kengligi (uch relsali)", value: "232 mm" },
      { label: "Konstruksiyaning maksimal balandligi", value: "3300 mm" },
      { label: "Konstruksiyaning maksimal kengligi", value: "2800 mm" },
    ],
    highlights: [
      { title: null, text: "Tiara Twinmax ajoyib tashqi ko'rinishi va funksionalligi bilan ajralib turadi. Ushbu tizim sizning balkoningizni qulay makonga aylantiradi." },
      { title: "Funksionallik va estetika", text: "Albert Genau balkon tizimlari uchun eng yuqori darajadagi issiqlik izolatsiyasini taklif qiladi. Issiqlik izolyatsiyasini ta'minlash maqsadida magnit, cho'tka va EPDM qistirmalar qo‘llaniladi. Ushbu tizim ko'p yillar davomida xizmat ko‘rsatadi" },
      { title: "Komplektatsiya", text: "Barcha turdagi oynalar uchun mo‘ljallangan aylanma-surilma tizim. Panellar uchun to'xtash joyi talab qilinmaydi. Panelning maksimal o'lchamlari: 800 x 2700 mm Turli yo‘nalishlarda ochiladi. Yengil dizaynga ega, tez o‘rnatiladi. Ko'rinmas vertikal ramkalar panoramali oynalarni yaratishga imkon beradi. Tashqi yuzalar oson tozalanadi. Bolalar xavfsizligini ta'minlash uchun \"espalyetta\" qulfi bilan jihozlangan. Ushbu qulf tizimning chap va o'ng tomoniga o'rnatilishi mumkin; 2 nuqtali qulf bilan jihozlangan." },
    ],
  },
  {
    slug: "gilyotina-tizimi",
    name: "Gilyotina tizimi",
    category: "importnye-sistemy",
    profile: "Import tizim",
    badge: "Import",
    description:
      "Turar-joy va tijorat binolarida panoramali oynalash uchun vertikal ko'tarish tizimiga ega innovatsion derazalar. Masofadan boshqarish pulti yoki smartfon yordamida boshqariladi. IMZO kompaniyasining gilyotin tizimlari…",
    features: [
      "Vertikal surilma oyna",
      "Restoran va ayvonlar uchun",
      "Avtomatik boshqaruv",
      "Panoramali ko'rinish",
    ],
    img: "/products/gilyotina-tizimi/card.jpg",
    specs: [],
    highlights: [
      { title: null, text: "IMZO mashhur Albert Genau brendidan Vertiflex gilyotina tizimlarini taklif etadi. Gilyotina panoramali oynalarining bir turi bo'lib, uning yordamida har qanday ob-havoda qulay vaqt o'tkazish uchun individual joy yaratishingiz mumkin." },
      { title: null, text: "Vertiflex gilyotin tizimlari Yevropa standartlariga mos keladi va mehmonxonalar, kafelar, restoranlar va yozgi teraslarni oynalash uchun qo‘llaniladi." },
      { title: null, text: "Gilyotin tizimlari - vertikal ochiladigan panoramali oynalarning yangi turi. Gilyotina tizimlarini masofadan boshqarish pulti yoki aqlli uy tizimiga ulangan smartfon yordamida boshqarishingiz mumkin." },
      { title: null, text: "Gilyotina tizimi maxsus SafeGuard siqish mexanizmi bilan jihozlangan. Ushbu mexanizm zanjirning uzilishi bilan bog'liq muammolarni bartaraf etishga yordam beradi. Sizning qulayligingiz va xavfsizligingizni ta'minlash uchun gilyotina tizimlarining pastki qopqog'i tashqaridan olinmaydigan qilib ishlab chiqilgan. Maxsus profil barmoqlarni chimchilashdan himoya qiladi." },
      { title: null, text: "Gilyotinaning kengligi va balandligi 4 m ga yetishi mumkin. Uning 4 stvorkali varianti ham mavjud. Gilyotina tizimlarini o'rnatish maydoni 12 m2 dan oshmagan joylarda o‘rnatish tavsiya etiladi." },
    ],
  },
  {
    slug: "pergola",
    name: "Pergola",
    category: "importnye-sistemy",
    profile: "Import tizim",
    badge: "Import",
    description:
      "Surilma pergola ochiq terrasalar, kafelar va restoranlar uchun universal yechim hisoblanadi. Masofadan boshqarish pulti yoki smartfon yordamida boshqariladi.",
    features: [
      "Konstruksiya turi Bir pog‘onali, ajratilgan",
      "Tom kengligi 7000 mm",
      "Kengligi Mijoz ehtiyojlariga ko‘ra",
      "Boshqarish variantlari Avtomatika, pult orqali",
    ],
    img: "/products/pergola/card.jpg",
    banner: "/products/pergola/banner.jpg",
    specImg: "/products/pergola/spec.png",
    specs: [
      { label: "Konstruksiya turi", value: "Bir pog‘onali, ajratilgan" },
      { label: "Tom kengligi", value: "7000 mm" },
      { label: "Kengligi", value: "Mijoz ehtiyojlariga ko‘ra" },
      { label: "Boshqarish variantlari", value: "Avtomatika, pult orqali" },
    ],
    highlights: [
      { title: null, text: "IMZO avtomatik tomi suriladigan pergolalarni taklif qiladi. Pergolaning tayanch konstruksiyasi yuqori sifatli alyuminiy profildan qilingan. Pergola tomi alyuminiy qovurg'ali PVX profillaridan iborat bo'lib, ular maxsus relslar bo'ylab ovozsiz harakatlanadi." },
      { title: null, text: "Yomg'ir va suvning kirib kelishidan samarali himoya qilish uchun pergola karkasida maxsus teshiklar mavjud. IMZO pergolasining zamonaviy va ergonomik dizayni har qanday binoga mos keladi va ajoyib landshaftlarni yaratishga imkoniyat beradi." },
      { title: null, text: "Pergolalar ochiq maydonni zonalashtirishning eng samarali va qulay usullaridan biridir. Pergoladan foydalanib, siz ochiq joyda dam olish zonasini yaratishingiz mumkin. Pergola bilan siz o'zingizni quyosh nuri va yomg'irdan himoya qilishingiz mumkin." },
    ],
  },
  {
    slug: "bioklimatik-pergola",
    name: "Bioklimatik pergola",
    category: "importnye-sistemy",
    profile: "Import tizim",
    badge: "Premium",
    description:
      "Bioklimatik pergola quyoshdan himoya qiladigan innovatsion, yuqori texnologiyali va eng zamonaviy mahsulot bo'lib, ideal mikroiqlimni tashkil qilish imkonini beradi.",
    features: [
      "Konstruksiya turi Buraladigan lamellar",
      "Kengligi 5000 mm",
      "Boshqarish variantlari Avtomatika, pult orqali",
      "Uzunligi 7000 mm",
    ],
    img: "/products/bioklimatik-pergola/card.jpg",
    banner: "/products/bioklimatik-pergola/banner.jpg",
    specImg: "/products/bioklimatik-pergola/spec.png",
    specs: [
      { label: "Konstruksiya turi", value: "Buraladigan lamellar" },
      { label: "Kengligi", value: "5000 mm" },
      { label: "Boshqarish variantlari", value: "Avtomatika, pult orqali" },
      { label: "Uzunligi", value: "7000 mm" },
    ],
    highlights: [
      { title: null, text: "Bugungi kunda aylanma panjarali pergola quyoshdan himoya qiladigan yechim. Takomillashtirilgan ishlash ko'rsatkichlariga ega mahsulot juda ko'p afzalliklarga ega" },
      { title: null, text: "Tizim mexanizmi motorli boshqaruvga ega bo'lib, po'lat yoki alyuminiydan tayyorlangan tayanch karkasdan va aylanadigan tomdan iborat." },
    ],
  },
  {
    slug: "bkf-48",
    name: "BKF 48",
    category: "fasadnye-sistemy",
    profile: "Fasad tizimi",
    badge: "Biznes",
    description:
      "IMZO kompaniyasining BKF 48 fasad tizimlari ishonchlilik va energiya samaradorligini ta'minlaydigan yuqori sifatli alyuminiy yechimlarni taklif etadi. Tijorat va turar-joy ilovalari uchun ideal bo'lgan ushbu fasadlar…",
    features: [
      "Profil devori 1,5-2-3 mm",
      "Steklopaket 20-38 mm",
      "Qoplama Anodlash, RAL ranglari, Laminatsiya, Vakuum, 3D",
      "O'rnatish kengligi 58-232 mm",
    ],
    img: "/products/bkf-48/card.jpg",
    banner: "/products/bkf-48/banner.jpg",
    specImg: "/products/bkf-48/spec.png",
    specs: [
      { label: "Profil turi", value: "Alyumin" },
      { label: "Profil seriyasi", value: "Issiq" },
      { label: "Profil devorining qalinligi", value: "1,5-2-3 mm" },
      { label: "Steklopaket qalinligi", value: "20-38 mm" },
      { label: "Qoplama", value: "Anodlash, RAL ranglari, Laminatsiya, Vakuum, 3D" },
      { label: "O'rnatish kengligi", value: "58-232 mm" },
    ],
    highlights: [
      { title: null, text: "Steklopaketlar tashqi tomondan o'rnatiladi va siqish plankasi bilan mahkamlanadi. Shundan so'ng, siqish plankalari ko'rinadigan kengligi 50-80 mm bo'lgan dekorativ qoplamalar bilan yopiladi." },
      { title: "Strukturaviy oynalash", text: "Ushbu tizimning asosiy g'oyasi mullion va transom ramkasining minimal ko'rinadigan qismi bilan uzluksiz, mukammal silliq sirlangan sirtni yaratishdir. Ushbu dizaynda oyna bloki jabhaning yuk ko'taruvchi elementlariga maxsus elim yordamida biriktiriladi va shu bilan oyna tekisligi orqasida ramkani butunlay yashiradi. Bu binoning favqulodda yengilligi va shaffofligi ta'sirini yaratadi. Strukturaviy jabhalar, an'anaviy oynalardan farqli o'laroq, oynaning tashqi yuzasida siqish chiziqlari yo'q, buning natijasida ikkita qo'shni ko'zoynak faqat tor silikon chiziq bilan ajratilgan." },
    ],
  },
  {
    slug: "bkf-50",
    name: "BKF 50",
    category: "fasadnye-sistemy",
    profile: "Fasad tizimi",
    badge: "Biznes",
    description:
      "BKF 50 tizimi quyidagi fasad konstruksiyalarini ishlab chiqarish uchun ishlatilishi mumkin: shaffof fasadlar, tom tuzilmalari, qishki bog'lar va boshqalar.",
    features: [
      "Profil devori 1,5 - 2 - 3 mm",
      "Qoplama Anodlash, RAL ranglari, Laminatsiya, Vakuum, 3D",
      "Termo ko‘prik kengligi 54 mm",
      "O'rnatish kengligi 58-232 mm",
    ],
    img: "/products/bkf-50/card.jpg",
    banner: "/products/bkf-50/banner.jpg",
    specImg: "/products/bkf-50/spec.png",
    specs: [
      { label: "Profil turi", value: "Alyumin" },
      { label: "Profil seriyasi", value: "Issiq" },
      { label: "Profil devorining qalinligi", value: "1,5 - 2 - 3 mm" },
      { label: "Qoplama", value: "Anodlash, RAL ranglari, Laminatsiya, Vakuum, 3D" },
      { label: "Termo ko‘prik kengligi", value: "54 mm" },
      { label: "O'rnatish kengligi", value: "58-232 mm" },
      { label: "Oynalash variantlari", value: "Dekorativ qopqoqlar / Strukturaviy" },
      { label: "Steklopaketning maksimal og‘irligi", value: "250 kg gacha" },
      { label: "To‘ldirgichning fiksatsiyalash usuli", value: "Siqib turadigan profil + qopqoq" },
      { label: "To‘ldirgichning minimal qalinligi", value: "4 mm" },
      { label: "To‘ldirgichning maksimal qalinligi", value: "62 mm" },
    ],
    highlights: [
      { title: null, text: "Profil tirgaklarining mukammal konfiguratsiyasi tuzilmalarning optimal shaffofligi va estetik ko'rinishini ta'minlaydi." },
      { title: null, text: "Ushbu tizim noyob me'moriy dizaynga ega binolarni loyihalashda noyob dizayn yechimlarni amalga oshirish imkonini beradi" },
      { title: null, text: "Bugungi kunda fasad oynalari zamonaviy qurilish arxitekturasining eng muhim qismlaridan biri hisoblanadi. Birinchi qarashda ko'rinadigan soddaligiga qaramay, fasad tizimi deyarli har qanday g'oyani amalga oshirishga imkon beradi." },
      { title: "9 ballgacha zilzilabardoshlik", text: "BKF 50 tizimidan tayyorlangan konstruktsiyalar yuqori seysmik faollik sharoitida ishlashga moslashtirilgan, bu bizning mintaqamiz uchun ayniqsa muhimdir. Buni AAMA 501.6 usuli bo'yicha sinovlar natijalari tasdiqlaydi. Ushbi sinovning maqsadi fasad tushishiga olib kelishi mumkin bo'lgan tashqi devorlarning ramka elementlarining gorizontal siljishining kritik amplitudasini aniqlashdir. Ushbu test natijalari BKF 50 tizimidan tuzilmalarning ishonchliligining juda yuqori darajasini ko'rsatdi." },
    ],
  },
  {
    slug: "rolikli-panjaralar",
    name: "Rolikli panjaralar",
    category: "rolletnye-sistemy",
    profile: "Rollet tizimi",
    badge: "Xavfsizlik",
    description:
      "Alyuminiy dan tayyorlangan rolikli panjaralar an'anaviy panjaralar o‘rniga o‘rnatiladi. Rolikli panjaralar o‘zining estetik ko'rinishi va funksionalligini to'liq saqlab, sizga uzoqr vaqt davomida xizmat qiladi.",
    features: [
      "Kengligi 55 / 77 mm",
      "Og‘irligi 0,52 / 0,35 kg",
    ],
    img: "/products/rolikli-panjaralar/card.jpg",
    specImg: "/products/rolikli-panjaralar/spec.png",
    specs: [
      { label: "Profil turi", value: "Alyumin" },
      { label: "Kengligi", value: "55 / 77 mm" },
      { label: "Og‘irligi", value: "0,52 / 0,35 kg" },
    ],
    highlights: [
      { title: null, text: "Ekstruzion profildan tayyorlangan panjaralar deraza va eshiklarni o'g'irlik va qiziquvchan ko'zlardan yuqori darajada himoya qiladi." },
      { title: null, text: "Alyuminiydan tayyorlangan rolikli panjaralar va rollet tizimlari" },
      { title: null, text: "Rolikli panjaralar eng mashhur variantlardan biri hisoblanadi." },
      { title: null, text: "Sovuq mavsumda ularning oldida qorni tozalashning hojati yo'q. Ular o‘son o‘rnatiladi, alohida parvarish talab etilmaydi. Rolikli panjaralar sizga uzoq vaqt xizmat qiladi. Rolikli panjaralar garaj uchun qulay va ergonomik yechim. Garaj profili issiqlikni samarali saqlaydi va ichki makonni himoya qiladi. Avtomatik eshiklar masofadan boshqarish pulti yordamida ochiladi. Ushbu mahsulot hamyonbop narx bilan ajralib turadi." },
    ],
  },
  {
    slug: "seksiyali-darvozalar",
    name: "Seksiyali darvozalar",
    category: "rolletnye-sistemy",
    profile: "Rollet tizimi",
    badge: "Xavfsizlik",
    description:
      "Ushbu mahsulot turli arxitekturaviy uslubi va jabhalari bilan uyg'unlashadi. Zamonaviy dizaynga ega seksiyali darvozalar har xil uslubdagi binolar va barcha turdagi jabhalarga mos keladi.",
    features: [
      "Garaj darvozalari",
      "Issiqlik izolyatsiyasi",
      "Avtomatik ochilish",
      "Xavfsiz konstruksiya",
    ],
    img: "/products/seksiyali-darvozalar/card.jpg",
    specs: [],
    highlights: [
      { title: null, text: "Seksiyali garaj darvozalari boshqa turdagi darvozalarga nisbatan bir qator afzalliklarga ega. Seksiyali garaj darvozalar necha bo'limlardan iborat bo'lib, ular bir-biriga po'lat ilgaklar yordamida bog'langan. Yo‘naltiruvchi bo'ylab harakatlanayotganda, darvoza vertikal (yopiq) holatdan gorizontal (ochiq) holatga o'tadi. Garaj darvozasining harakatlanish trayektoriyasi garaj ichidagi joyni tejashga imkon beradi. Ushbu xususiyatlar tufayli seksiyali garaj darvozalari tobora ommalashib bormoqda." },
      { title: "Avtomatikaning afzalliklari.", text: "Seksiyali darvozalarning boshqa turdagi avtomatik eshiklarga nisbatan asosiy afzalligi shundaki, ularni juda cheklangan joyda o‘rnatishingiz mumkin. Darvoza bir nechta bo'limlardan iborat bo'lib, ular bir-biriga kuchli ilgaklar bilan bog'langan. Darvoza ochilganda, yon qo'llanmalar bo'ylab siljiydigan qismlar asta-sekin shift ostiga o'tadi." },
    ],
  },
  {
    slug: "bko-40",
    name: "BKO 40",
    category: "steklyannye-ograzhdeniya",
    profile: "Oynali to'siq",
    badge: "Premium",
    description:
      "Ko'p funksiyali steklopaketlar yuqori yorug'lik o'tkazuvchanligi bilan birgalikda issiqlikni tejash va quyoshdan himoya qilish xususiyatlarini ta'minlaydi.",
    features: [
      "Shisha to'siqlar",
      "Balkon va terassalar",
      "Yuqori yorug'lik o'tkazishi",
      "Zamonaviy ko'rinish",
    ],
    img: "/products/bko-40/card.jpg",
    specs: [],
    highlights: [
      { title: null, text: "Steklopaket derazaning 80% maydonini egallaydi. Shu munosabat bilan mustahkam steklopaket butun deraza sifatining kalitidir. Romlarning texnik xususiyatlari steklopaket sifatiga bog'liq. Ko'p funksiyali steklopaketlar yuqori yorug'lik o'tkazuvchanligi bilan birgalikda issiqlikni tejash va quyoshdan himoya qilish xususiyatlarini ta'minlaydi." },
    ],
  },
  {
    slug: "bkgf-90",
    name: "BKGF-90",
    category: "steklyannye-ograzhdeniya",
    profile: "Oynali to'siq",
    badge: "Premium",
    description:
      "Oynali to'siqlar har qanday turdagi binolarda keng qo‘llaniladi. Ushbu tizimlarni balkonlar, lodjiyalar yoki zinapoyalarga o'rnatishingiz mumkin. Oynali to‘siqlar ham ichki ham tashqi makonda o‘rnatiladi.",
    features: [
      "Romsiz oynalash",
      "Panoramali fasad",
      "Maksimal shaffoflik",
      "Premium segment",
    ],
    img: "/products/bkgf-90/card.jpg",
    banner: "/products/bkgf-90/banner.jpg",
    specs: [],
    highlights: [
      { title: null, text: "BKGF 90 tizimi oynali to‘siqlarni yig'ish uchun mo'ljallangan bo‘lib, mustahkamlangan tayanch profilga ega." },
      { title: null, text: "Oyna alyuminiy xanjar shaklidagi profil yordamida mahkamlanadi, u murvatli ulanish yordamida ochiladi. Siqish mexanizmlarini yashiradigan dekorativ shtapik esa konstruksiyaning ishchi qismlarini rezina qistirmalari yordamida muhrlaydi." },
      { title: null, text: "IMZO dan BKGF 90 shisha panjaralari teraslar, balkonlar va interyerlar uchun oqlangan va xavfsiz echimlarni taklif etadi. Ushbu fextavonie yuqori chidamlilik va zamonaviy dizaynni taqdim etadi, sizning makoningiz ko'rinishini yaxshilaydi va ochiq tuyg'u yaratadi." },
    ],
  },
  {
    slug: "hasharotlardan-himoyalovchi-tor",
    name: "Hasharotlardan himoyalovchi to‘r",
    category: "aksessuary",
    profile: "Aksessuar",
    badge: "Aksessuar",
    description:
      "Hasharotlardan himoyalovchi to‘r — zamonaviy uylarda eng kerakli narsalardan biri.",
    features: [
      "Hasharotlardan himoya",
      "Olinadigan ramka",
      "Har qanday romga mos",
      "Yengil parvarish",
    ],
    img: "/products/hasharotlardan-himoyalovchi-tor/card.jpg",
    banner: "/products/hasharotlardan-himoyalovchi-tor/banner.jpg",
    specs: [],
    highlights: [
      { title: null, text: "Zamonaviy uyda hasharotlardan himoyalovchi to‘r eng kerakli narsalardan biri hisoblanadi. Maxsus texnikalar mavjudligiga qaramay, va xona ichiga muntazam ravishda toza havo kirish kerak. Ochiq derazalar orqali uyga kiradigan chivinlar va boshqa hasharotlar yashovchilar uchun noqulaylik tug'dirishi va bolalarni qo'rqitishi mumkin." },
    ],
  },
  {
    slug: "deraza-tokchalari",
    name: "Deraza tokchalari",
    category: "aksessuary",
    profile: "Aksessuar",
    badge: "Aksessuar",
    description:
      "Interyerning muhim qismi bo‘lib, estetik ko'rinishni va funksionalligini ta'minlashda muhim rol o‘ynaydo. Deraza tokchasi xonada qulay muhit yaratadi va interyerga ajoyib ko‘rinish beradi.",
    features: [
      "PVX tokchalar",
      "Namlikka chidamli",
      "Turli kengliklar",
      "Oson o'rnatish",
    ],
    img: "/products/deraza-tokchalari/card.jpg",
    specs: [],
    highlights: [
      { title: null, text: "Deraza tokchalari deraza tizimining estetik jozibasi va foydalanish qulayligini ta'minlaydi." },
      { title: null, text: "IMZO deraza tokchalari PVXdan tayyorlangan. Vertikal va 45 ° burchak ostida joylashtirilgan qattiqlashtiruvchi elementlar yordamida konstruskiyaning mustahkamligi ta'minlanadi. IMZO deraza tokchalari deformatsiyalanmaydi va ko'p yillar davomida o‘z shaklini o‘zgarmaydi." },
      { title: null, text: "PVX'dan tayyorlangan deraza tokchalari interyer uchun amaliy va zamonaviy yechim hisoblanadi. Ular namlikka va harorat o'zgarishiga chidamli, oson va tez tozalanadi. PVX uzoq xizmat muddatini ta'minlaydi va bo'yashni talab qilmaydi. PVX deraza tokchalari oson o‘rnatiladi. Ranglar, tekstura va dizaynining keng tanlovi mavjud. IMZO deraza tokchalari sizning uyingizda zamonaviy va funksional makon yaratish uchun amaliy yechimdir." },
      { title: null, text: "Deraza tokchalarini dekorlash uchun IMZO yetakchi nemis brendi tomonidan ishlab chiqarilgan 10 turdagi laminatsiya plyonkasini taklif qiladi. Yuqori sifatli laminatsiya deraza tokchasiga ajoyib ko'rinish beradi, uni shikastlanishdan himoya qiladi va uzoq xizmat muddatini ta'minlaydi." },
    ],
  },
  {
    slug: "rom-va-eshik-tutqichlari",
    name: "Rom va eshik tutqichlari",
    category: "aksessuary",
    profile: "Aksessuar",
    badge: "Aksessuar",
    description:
      "IMZO ishlab chiqarish jarayonida kichik detallarga ham jiddiy e’tibor qaratadi. Shu munosabat bilan biz dunyoning yetakchi brendlari tomonidan ishlab chiqarilgan yuqori sifatli furnituralarni o‘rnatamiz.",
    features: [
      "Rom va eshik uchun",
      "Turli rang va shakllar",
      "Ergonomik dizayn",
      "Bardoshli material",
    ],
    img: "/products/rom-va-eshik-tutqichlari/card.jpg",
    specs: [],
    highlights: [
      { title: null, text: "Rom va eshik tizimlarining mustahkamligini va uzoq vaqt davomida ishlashni ta'minlash uchun har bir tafsilot muhim ahamiyatga ega. Yuqori sifatli furnituralar bilan sizning derazalaringiz ko'p yillar davomida xizmat qiladi." },
      { title: null, text: "IMZO deraza va eshik konstruksiyalarida mashhur brendlardan tutqichlar va ilgaklar o‘rnatilgan." },
      { title: null, text: "Rom va eshik tutqichlarining barcha modellari barcha sifat sertifikatlariga ega va laboratoriya sharoitida bir nechta sinovlardan o'tgan." },
    ],
  },
];

// Bosh sahifada ko'rsatiladigan 3 ta tanlangan mahsulot (har xil segmentdan).
export const FEATURED_SLUGS = ["trio-60", "engelberg-70", "thermo-65-engelberg"];

export const STATS = [
  { value: "14+", label: "Yil tajriba" },
  { value: "2000+", label: "Bajarilgan loyiha" },
  { value: "5 yil", label: "Kafolat muddati" },
  { value: "100%", label: "Sifat nazorati" },
];

export const STEPS = [
  { num: "01", title: "Murojaat qiling", desc: "Telefon yoki Telegram orqali biz bilan bog'laning." },
  { num: "02", title: "O'lchov", desc: "Mutaxassis kelib aniq o'lchovlarni oladi. Bepul!" },
  { num: "03", title: "Shartnoma", desc: "Narx va muddatni kelishib shartnoma imzalanadi." },
  { num: "04", title: "Ishlab chiqarish", desc: "Buyurtma 7–30 kun ichida tayyor bo'ladi." },
  { num: "05", title: "O'rnatish", desc: "Professional ustalarimiz tomonidan o'rnatish." },
  { num: "06", title: "Kafolat", desc: "5 yil kafolat va 3 yil servis xizmati." },
];

export const DEADLINES = [
  { days: "7 kun", desc: "Oddiy loyihalar" },
  { days: "14 kun", desc: "O'rtacha hajmdagi buyurtmalar" },
  { days: "21 kun", desc: "Katta buyurtmalar" },
  { days: "30 kun", desc: "Maxsus loyihalar" },
];

export const GALLERY = [
  IMAGES.hero,
  IMAGES.window1,
  IMAGES.window2,
  IMAGES.building,
  IMAGES.interior,
  IMAGES.door1,
];
