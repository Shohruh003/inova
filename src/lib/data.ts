export const SITE = {
  brand: "INOVA",
  // Sayt manzili (asosiy domen www.inovaakfa.uz). Kerak bo'lsa Vercel'da NEXT_PUBLIC_SITE_URL bilan almashtiriladi.
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.inovaakfa.uz",
  phone: "+998911151133",
  phoneDisplay: "+998 91 115 11 33",
  phoneShort: "91-115-11-33",
  telegram: "inova_akfa",
  instagram: "inova.akfa",
  mapUrl: "https://yandex.ru/maps/-/CPvWMW3V",
  address: "Farg'ona tumani, Chimyon shaharchasi",
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

// Mahsulot ma'lumotlari va rasmlar rasmiy diler sifatida joylashtirilgan.
// Rasmlar: public/products/<slug>/
export const PRODUCTS: Product[] = [
  {
    slug: "akfa-7000",
    name: "Akfa 7000",
    category: "plastikovye-okna",
    profile: "PVC profil",
    badge: "Premium",
    description:
      "Akfa 7000 — maksimal qulaylik va kafolatlangan komfort uchun energiya tejovchi PVC profil seriyasi. Besh kamerali profil va po'lat kuchaytirgich shaklini ishonchli saqlaydi, deformatsiyalanmaydi, issiqlikni ushlab turadi va ko'cha shovqinidan himoya qiladi.",
    features: [
      "5 kamerali profil",
      "Montaj chuqurligi 70 mm",
      "Steklopaket 24–32 mm",
      "Tavaqa og'irligi 80 kg gacha",
    ],
    img: "/products/akfa-7000/card.jpg",
    banner: "/products/akfa-7000/banner.jpg",
    specImg: "/products/akfa-7000/spec.jpg",
    specs: [
      { label: "Profil turi", value: "PVX" },
      { label: "Kameralar soni", value: "5" },
      { label: "Montaj chuqurligi", value: "70 mm" },
      { label: "Steklopaket qalinligi", value: "24–32 mm" },
      { label: "Kuchaytiruvchi profil qalinligi", value: "1,2 mm" },
      { label: "Tavaqa og'irligi (rom)", value: "80 kg gacha" },
      { label: "Tavaqa og'irligi (eshik)", value: "110 kg gacha" },
      { label: "Tavaqaning maksimal o'lchami (rom)", value: "2000 × 1000 mm" },
      { label: "Tavaqaning maksimal o'lchami (eshik)", value: "2000 × 900 mm" },
    ],
    highlights: [
      { title: "Maksimal qulaylik", text: "Akfa 7000 energiya tejovchi profil seriyasi bo'lib, besh kamerasi va po'lat kuchaytirgichi shaklini ishonchli ushlab turadi, deformatsiyaga uchramaydi, issiqlikni saqlaydi va ko'cha shovqinini o'tkazmaydi." },
      { title: null, text: "Iqlim nazorati ostidagi xonalar uchun ayniqsa dolzarb — isitish va konditsionerlashda tejashga imkon beradi. Zal, ish xonasi, kutubxona va yotoqxona uchun ajoyib yechim." },
      { title: null, text: "Roto furnituralari taxminan 15 000 ochish-yopish tsikliga (~10 yil) sinovdan o'tgan — uzoq muddatli ishonchli xizmat." },
    ],
  },
  {
    slug: "penta-6500",
    name: "Penta 6500",
    category: "plastikovye-okna",
    profile: "PVC profil",
    badge: "Yangi",
    description:
      "Penta 6500 — Markaziy Osiyoning keskin kontinental iqlimi uchun ishlab chiqilgan yangi avlod besh kamerali PVC profil. Xonani harorat o'zgarishlari va shovqindan ishonchli himoya qiladi, kengaytirilgan yorug'lik ochilishi tabiiy nurni ko'proq o'tkazadi.",
    features: [
      "5 kamerali profil",
      "Montaj chuqurligi 65 mm",
      "Steklopaket 6–20 mm",
      "Tavaqa og'irligi 60 kg gacha",
    ],
    img: "/products/penta-6500/card.png",
    specs: [
      { label: "Profil turi", value: "PVX" },
      { label: "Kameralar soni", value: "5" },
      { label: "Ramkani o'rnatish chuqurligi", value: "65 mm" },
      { label: "Steklopaket qalinligi", value: "6–20 mm" },
      { label: "Profilni mustahkamlovchi qalinligi", value: "1,2 mm" },
      { label: "Tavaqa og'irligi (rom)", value: "60 kg gacha" },
      { label: "Tavaqa og'irligi (eshik)", value: "100 kg gacha" },
      { label: "Tavaqaning maksimal balandligi (rom/eshik)", value: "1650 / 1900 mm" },
      { label: "Tavaqaning maksimal kengligi (rom/eshik)", value: "800 / 900 mm" },
    ],
    highlights: [
      { title: null, text: "Penta 6500 — tasdiqlangan muhandislik yechimlari va zamonaviy texnologik ishlanmalarni o'zida mujassam etgan yangi besh kamerali PVC profil." },
      { title: null, text: "Markaziy Osiyoning keskin kontinental iqlimi uchun mo'ljallangan: xonani harorat o'zgarishi va shovqindan himoya qiladi, uzoq davom etadigan quyosh nuri va yuklarga chidamli." },
      { title: null, text: "Profil dizayni yorug'lik ochilishini kengaytiradi va ko'proq tabiiy yorug'lik kiritadi. Keng laminatsiya tanlovi har qanday interyerga mos keladi." },
    ],
  },
  {
    slug: "trio-60",
    name: "Trio 60",
    category: "plastikovye-okna",
    profile: "PVC profil",
    badge: "Hamyonbop",
    description:
      "TRIO 60 tizimi - ixcham profildan ishlab chiqarilgan va yuqori yorug'lik o'tkazuvchanligiga ega konstruksiyalar. INOVA dan Trio 60 oynalari zamonaviy dizayn, ishonchlilik va energiya samaradorligini o'zida mujassam etgan…",
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
      { title: null, text: "INOVA Trio 60 romlari Markaziy Osiyoning o‘zgaruvchan iqlimdan qo‘rqmaydi! Biz barcha standartlarga rioya qilib, mustahkamlik va germetiklikka alohida e'tibor qaratdik. Ushbu seriyadagi profillar an'anaviy plastik derazalarga qaraganda ko'proq issiqlikni saqlaydi va uzoq vaqt davomida xizmat qiladi. TRIO 60 bizning shourumlarimizdagi eng mashhur modellardan biri hisoblanadi. Agar siz ishonchlilik, soddalik va qulaylikni yaxshi ko'rsangiz, INOVA Trio seriyasini tanlang." },
      { title: null, text: "INOVA TRIO 6000 seriyasi ajoyib tashqi ko‘rinishga ega bo‘lib, issiqlikni saqlash va ko'cha shovqinidan himoya qilish bo'yicha mukammal ko'rsatkichlarga ega.Ushbu profil seriyasining asosiy afzalliklari - 2,8 mm li devor qalinligi hamda qo'shimcha rezinali zichlagichni o'rnatish imkoniyatidir. Trio 60 energiya yo'qotishlarini kamaytirishga va pulni tejashga yordam beradi. Ushbu romlar sizning uyingizni yelvizak, sovuq, namlik va quyoshdan ishonchli himoyalaydi." },
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
      "INOVA Quattro 60 - yuqori darajadagi yorug‘lik o'tkazuvchanligiga ega romlar. Qo‘shimcha yorug‘lik xonani keng qiladi, samaradorlikni oshiradi va sizga ijobiy kayfiyat baxsh etadi.",
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
      { title: null, text: "Yog‘och laminatsiyasiga ega Quattro 6000 - jozibali nafislik timsolidir. Keng formatli oyna yuqori yorug‘lik o‘tkazuvchanlik xususiyatlariga ega. 20 mm qalinlikdagi steklopaket optimal ekspluatatsion ko'rsatkichlariga ega. Modelning nafisligi har qanday interyerga mos keladi. Inova 60 Quattro to'rt kamerali tizimi turar-joy binolari, ma'muriy, xizmat ko'rsatish va jamoat binolari uchun ajoyib yechim. Profil hamyonbop narx, yuqori sifatli furnituralar va mukammal texnik xususiyatlar bilan ajralib turadi." },
      { title: null, text: "INOVA'dan Quattro 60 oynalari zamonaviy uslub, ishonchlilik va yuqori energiya samaradorligini o'zida mujassam etgan oynali tizimdir. Bu turar-joy va tijorat ilovalari uchun ideal tanlov bo'lib, maksimal qulaylik va chidamlilikni ta'minlaydi. Bundan tashqari, Quattro 60 derazalari oshxona uchun juda mos keladi: ular quyosh nuri o'tishiga imkon beradi, yorqin va qulay muhit yaratadi, shu bilan birga changning kirib kelishini samarali oldini oladi." },
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
    slug: "aldoks",
    name: "Aldoks",
    category: "alyuminievye-okna",
    profile: "ALYUMIN profil",
    badge: "Yangi",
    description:
      "Aldoks — noyob me'moriy ko'rinish yaratish imkonini beruvchi alyumin rom va eshik tizimi. Mustahkam va nafis dizayn, egri, qavariq yoki siniq shakllarni amalga oshirishga imkon beruvchi moslashuvchan tizim.",
    features: [
      "Alyumin (sovuq) profil",
      "Montaj chuqurligi 45,5 mm",
      "Steklopaket 4–20 mm",
      "450+ rang varianti",
    ],
    img: "/products/aldoks/card.jpg",
    banner: "/products/aldoks/banner.jpg",
    specImg: "/products/aldoks/spec.jpg",
    specs: [
      { label: "Profil turi", value: "Alyumin" },
      { label: "Profil seriyasi", value: "Sovuq" },
      { label: "Montaj chuqurligi", value: "45,5 mm" },
      { label: "Steklopaket qalinligi", value: "4–20 mm" },
      { label: "Tavaqa og'irligi (rom)", value: "80 kg gacha" },
      { label: "Tavaqa og'irligi (eshik)", value: "140 kg gacha" },
      { label: "Tavaqaning maksimal o'lchami (rom)", value: "1800 × 1000 mm" },
      { label: "Tavaqaning maksimal o'lchami (eshik)", value: "2500 × 1500 mm" },
      { label: "Qoplama", value: "Anodlash, RAL ranglari, Laminatsiya" },
    ],
    highlights: [
      { title: "Yangi format derazalar", text: "Aldoks rom va eshik tizimlari noyob me'moriy ko'rinish yaratish va eng dadil g'oyalarni amalga oshirish imkonini beradi. Mustahkam va nafis dizayn." },
      { title: "Moslashuvchan tizim", text: "Tizim turli shakllarni — botiq, qavariq, siniq va boshqalarni yaratishga imkon beradi. Alyumin konstruksiyalarning xizmat muddati 80 yildan oshadi." },
      { title: null, text: "Zamonaviy kukunli bo'yash texnologiyasi 450+ rang va qoplama variantini beradi: metallik, anodlangan, mat/yaltiroq RAL ranglari." },
    ],
  },
  {
    slug: "champion",
    name: "Champion",
    category: "alyuminievye-okna",
    profile: "ALYUMIN profil",
    badge: "Hamyonbop",
    description:
      "INOVA Champion alyuminiy tizimidan tayyorlangan konstruktsiyalar asosan balkonlar va lodjiyalarni sovuq oynalashda hamda issiqlik izolyatsiyasi bo‘yicha talablari yuqori bo'lmagan binolarda ishlatiladi.",
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
    profile: "ALYUMIN profil",
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
    slug: "thermo-70-engelberg",
    name: "Thermo 70 Engelberg",
    category: "alyuminievye-okna",
    profile: "ALYUMIN profil",
    badge: "Premium",
    description:
      "Thermo 70 (BKT-70) — O'zbekistonning barcha iqlim zonalari uchun issiqlik-texnik standartlarga javob beradigan issiq alyumin profil tizimi. 70 mm o'rnatish chuqurligi va 24 mm poliamid termoko'prik issiqlikni ishonchli saqlaydi, uch qatlamli EPDM zichlash konturi esa shovqin va namlikdan himoya qiladi…",
    features: [
      "O'rnatish chuqurligi 70 mm",
      "Termo ko‘prik 24 mm",
      "3 kamerali profil",
      "Steklopaket 20-32 mm",
    ],
    img: "/products/thermo-70-engelberg/card.jpg",
    banner: "/products/thermo-70-engelberg/banner.jpg",
    specImg: "/products/thermo-70-engelberg/spec.png",
    specs: [
      { label: "Profil turi", value: "Alyumin" },
      { label: "Profil seriyasi", value: "Issiq" },
      { label: "O‘rnatish chuqurligi", value: "70 mm" },
      { label: "Profil kesimi kengligi", value: "52 mm" },
      { label: "Termo ko‘prik (poliamid)", value: "24 mm" },
      { label: "Kameralar soni", value: "3 kamerali" },
      { label: "Steklopaket qalinligi", value: "20-32 mm" },
      { label: "Tavaqaning maksimal o‘lchami", value: "3000 × 1000 mm" },
      { label: "Qoplama", value: "Anodlash, RAL ranglari, Aluwood laminatsiya" },
    ],
    highlights: [
      { title: null, text: "Thermo 70 — issiq alyumin profil tizimi bo‘lib, 70 mm o‘rnatish chuqurligi va 24 mm poliamid termoko‘prigi issiqlikni ishonchli saqlaydi. Turar-joy va tijorat binolari uchun mos keladi." },
      { title: "Ishonchli himoya", text: "Uchta EPDM zichlash konturi shovqin, chang va namlikdan himoya qiladi. Argon bilan to‘ldirilgan energiya tejovchi steklopaketlar va zamonaviy import furnituralar uzoq muddatli qulaylikni ta'minlaydi." },
      { title: "Zamonaviy dizayn", text: "Profil 450 dan ortiq RAL rangda kukunli bo‘yaladi, anodlanadi yoki 'Aluwood' yog‘och naqshi ostida laminatsiya qilinadi — har qanday interyerga mos keladi. Alyumin konstruksiyaning xizmat muddati 80 yildan oshadi." },
    ],
  },
  {
    slug: "thermo-78-engelberg",
    name: "Thermo 78 Engelberg",
    category: "alyuminievye-okna",
    profile: "ALYUMIN profil",
    badge: "Premium",
    description:
      "Thermo 78 - xonadonlar va uchastkalar uchun eng zamonaviy taklif. Thermo 78 modeli atrof-muhit ta'siriga va har qanday ob-havo sharoitlariga bardosh bera oladi. INOVA'dan Thermo 78 Engelberg derazalari yuqori issiqlik…",
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
    profile: "ALYUMIN profil",
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
    profile: "ALYUMIN profil",
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
      { title: null, text: "INOVA’dan Thermo 105 Engelberg derazalari mukammal energiya samaradorligi va zamonaviy dizaynni taklif etadi. Ushbu alyuminiy oynalar turar-joy va tijorat joylari uchun ideal bo'lib, butun umr davomida ishonchlilik, chidamlilik va qulaylikni ta'minlaydi. Profil bozordagi eksklyuzivlardan biri bo'lib, uning o'ziga xos xususiyatlari va afzalliklarini ta'kidlaydi." },
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
      { title: null, text: "INOVA dan BKH 65 derazalari yuqori quvvat va energiya samaradorligini ta'minlaydigan alyuminiy profilli zamonaviy oynalar tizimidir." },
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
      "Tiara Twinmax ramkasiz tizimi funksionalligi va vizual jozibadorligi bilan ajralib turadi. Sizning balkoningizni qulay va shinam makonga aylantiradi. INOVA’dan Tiara Twinmax oynalari zamonaviy dizayn va yuqori energiya…",
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
      "Turar-joy va tijorat binolarida panoramali oynalash uchun vertikal ko'tarish tizimiga ega innovatsion derazalar. Masofadan boshqarish pulti yoki smartfon yordamida boshqariladi. INOVA kompaniyasining gilyotin tizimlari…",
    features: [
      "Vertikal surilma oyna",
      "Restoran va ayvonlar uchun",
      "Avtomatik boshqaruv",
      "Panoramali ko'rinish",
    ],
    img: "/products/gilyotina-tizimi/card.jpg",
    specs: [],
    highlights: [
      { title: null, text: "INOVA mashhur Albert Genau brendidan Vertiflex gilyotina tizimlarini taklif etadi. Gilyotina panoramali oynalarining bir turi bo'lib, uning yordamida har qanday ob-havoda qulay vaqt o'tkazish uchun individual joy yaratishingiz mumkin." },
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
      { title: null, text: "INOVA avtomatik tomi suriladigan pergolalarni taklif qiladi. Pergolaning tayanch konstruksiyasi yuqori sifatli alyuminiy profildan qilingan. Pergola tomi alyuminiy qovurg'ali PVX profillaridan iborat bo'lib, ular maxsus relslar bo'ylab ovozsiz harakatlanadi." },
      { title: null, text: "Yomg'ir va suvning kirib kelishidan samarali himoya qilish uchun pergola karkasida maxsus teshiklar mavjud. INOVA pergolasining zamonaviy va ergonomik dizayni har qanday binoga mos keladi va ajoyib landshaftlarni yaratishga imkoniyat beradi." },
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
      "INOVA kompaniyasining BKF 48 fasad tizimlari ishonchlilik va energiya samaradorligini ta'minlaydigan yuqori sifatli alyuminiy yechimlarni taklif etadi. Tijorat va turar-joy ilovalari uchun ideal bo'lgan ushbu fasadlar…",
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
      { title: null, text: "INOVA dan BKGF 90 shisha panjaralari teraslar, balkonlar va interyerlar uchun oqlangan va xavfsiz echimlarni taklif etadi. Ushbu fextavonie yuqori chidamlilik va zamonaviy dizaynni taqdim etadi, sizning makoningiz ko'rinishini yaxshilaydi va ochiq tuyg'u yaratadi." },
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
      { title: null, text: "INOVA deraza tokchalari PVXdan tayyorlangan. Vertikal va 45 ° burchak ostida joylashtirilgan qattiqlashtiruvchi elementlar yordamida konstruskiyaning mustahkamligi ta'minlanadi. INOVA deraza tokchalari deformatsiyalanmaydi va ko'p yillar davomida o‘z shaklini o‘zgarmaydi." },
      { title: null, text: "PVX'dan tayyorlangan deraza tokchalari interyer uchun amaliy va zamonaviy yechim hisoblanadi. Ular namlikka va harorat o'zgarishiga chidamli, oson va tez tozalanadi. PVX uzoq xizmat muddatini ta'minlaydi va bo'yashni talab qilmaydi. PVX deraza tokchalari oson o‘rnatiladi. Ranglar, tekstura va dizaynining keng tanlovi mavjud. INOVA deraza tokchalari sizning uyingizda zamonaviy va funksional makon yaratish uchun amaliy yechimdir." },
      { title: null, text: "Deraza tokchalarini dekorlash uchun INOVA yetakchi nemis brendi tomonidan ishlab chiqarilgan 10 turdagi laminatsiya plyonkasini taklif qiladi. Yuqori sifatli laminatsiya deraza tokchasiga ajoyib ko'rinish beradi, uni shikastlanishdan himoya qiladi va uzoq xizmat muddatini ta'minlaydi." },
    ],
  },
  {
    slug: "rom-va-eshik-tutqichlari",
    name: "Rom va eshik tutqichlari",
    category: "aksessuary",
    profile: "Aksessuar",
    badge: "Aksessuar",
    description:
      "INOVA ishlab chiqarish jarayonida kichik detallarga ham jiddiy e’tibor qaratadi. Shu munosabat bilan biz dunyoning yetakchi brendlari tomonidan ishlab chiqarilgan yuqori sifatli furnituralarni o‘rnatamiz.",
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
      { title: null, text: "INOVA deraza va eshik konstruksiyalarida mashhur brendlardan tutqichlar va ilgaklar o‘rnatilgan." },
      { title: null, text: "Rom va eshik tutqichlarining barcha modellari barcha sifat sertifikatlariga ega va laboratoriya sharoitida bir nechta sinovlardan o'tgan." },
    ],
  },
];

// Bosh sahifada ko'rsatiladigan 3 ta tanlangan mahsulot (har xil segmentdan).
export const FEATURED_SLUGS = ["trio-60", "engelberg-70", "thermo-70-engelberg", "thermo-78-engelberg", "thermo-105-engelberg"];

export const STATS = [
  { value: "14+", label: "Yil tajriba" },
  { value: "2000+", label: "Bajarilgan loyiha" },
  { value: "5 yil", label: "Kafolat muddati" },
  { value: "100%", label: "Sifat nazorati" },
];

export const STEPS = [
  { num: "01", title: "Murojaat qiling", desc: "Telefon yoki Telegram orqali biz bilan bog'laning." },
  { num: "02", title: "O'lchov", desc: "Mutaxassis kelib aniq o'lchovlarni oladi." },
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
