// Avtomatik yaratilgan (imzo.uz dan olingan real rang rasmlari). Qo'lda tahrirlamang.
export type ProductColor = { name: string; sw: string; img: string };

// imzo'da rangi bo'lmagan oynalar uchun o'xshash mahsulot ranglarini ishlatamiz
const COLOR_ALIASES: Record<string, string> = {
  "akfa-7000": "engelberg-70", // PVC
  "penta-6500": "engelberg-70", // PVC
  "aldoks": "thermo-78-engelberg", // alyumin
};

export function getProductColors(slug: string): ProductColor[] | undefined {
  return PRODUCT_COLORS[slug] || PRODUCT_COLORS[COLOR_ALIASES[slug]];
}

export const PRODUCT_COLORS: Record<string, ProductColor[]> = {
  "trio-60": [
    {
      "name": "Mokko eman",
      "sw": "/products/trio-60/colors/sw0.jpg",
      "img": "/products/trio-60/colors/c0.png"
    },
    {
      "name": "Oq",
      "sw": "/products/trio-60/colors/sw1.jpg",
      "img": "/products/trio-60/colors/c1.png"
    },
    {
      "name": "Kulrang",
      "sw": "/products/trio-60/colors/sw2.jpg",
      "img": "/products/trio-60/colors/c2.png"
    },
    {
      "name": "Oltin eman",
      "sw": "/products/trio-60/colors/sw3.jpg",
      "img": "/products/trio-60/colors/c3.png"
    },
    {
      "name": "Solod eman",
      "sw": "/products/trio-60/colors/sw4.jpg",
      "img": "/products/trio-60/colors/c4.png"
    }
  ],
  "quattro-60": [
    {
      "name": "Mokko eman",
      "sw": "/products/quattro-60/colors/sw0.jpg",
      "img": "/products/quattro-60/colors/c0.png"
    },
    {
      "name": "Oq",
      "sw": "/products/quattro-60/colors/sw1.jpg",
      "img": "/products/quattro-60/colors/c1.png"
    },
    {
      "name": "Kulrang",
      "sw": "/products/quattro-60/colors/sw2.jpg",
      "img": "/products/quattro-60/colors/c2.png"
    },
    {
      "name": "Oltin eman",
      "sw": "/products/quattro-60/colors/sw3.jpg",
      "img": "/products/quattro-60/colors/c3.png"
    },
    {
      "name": "Solod eman",
      "sw": "/products/quattro-60/colors/sw4.jpg",
      "img": "/products/quattro-60/colors/c4.png"
    }
  ],
  "engelberg-70": [
    {
      "name": "Mokko eman",
      "sw": "/products/engelberg-70/colors/sw0.jpg",
      "img": "/products/engelberg-70/colors/c0.png"
    },
    {
      "name": "Kulrang eman",
      "sw": "/products/engelberg-70/colors/sw1.jpg",
      "img": "/products/engelberg-70/colors/c1.png"
    },
    {
      "name": "Antratsit",
      "sw": "/products/engelberg-70/colors/sw2.jpg",
      "img": "/products/engelberg-70/colors/c2.png"
    },
    {
      "name": "Solod eman",
      "sw": "/products/engelberg-70/colors/sw3.jpg",
      "img": "/products/engelberg-70/colors/c3.png"
    },
    {
      "name": "Tog' emani",
      "sw": "/products/engelberg-70/colors/sw4.jpg",
      "img": "/products/engelberg-70/colors/c4.png"
    },
    {
      "name": "Kvarts kulrang",
      "sw": "/products/engelberg-70/colors/sw5.jpg",
      "img": "/products/engelberg-70/colors/c5.png"
    },
    {
      "name": "Oltin eman",
      "sw": "/products/engelberg-70/colors/sw6.jpg",
      "img": "/products/engelberg-70/colors/c6.png"
    },
    {
      "name": "Antratsit metbrash",
      "sw": "/products/engelberg-70/colors/sw7.jpg",
      "img": "/products/engelberg-70/colors/c7.png"
    },
    {
      "name": "Oq",
      "sw": "/products/engelberg-70/colors/sw8.jpg",
      "img": "/products/engelberg-70/colors/c8.png"
    },
    {
      "name": "Beton eman",
      "sw": "/products/engelberg-70/colors/sw9.jpg",
      "img": "/products/engelberg-70/colors/c9.png"
    },
    {
      "name": "Platina",
      "sw": "/products/engelberg-70/colors/sw10.jpg",
      "img": "/products/engelberg-70/colors/c10.png"
    }
  ],
  "engelberg-80": [
    {
      "name": "Antratsit",
      "sw": "/products/engelberg-80/colors/sw0.jpg",
      "img": "/products/engelberg-80/colors/c0.png"
    },
    {
      "name": "Solod eman",
      "sw": "/products/engelberg-80/colors/sw1.jpg",
      "img": "/products/engelberg-80/colors/c1.png"
    },
    {
      "name": "Beton eman",
      "sw": "/products/engelberg-80/colors/sw2.jpg",
      "img": "/products/engelberg-80/colors/c2.png"
    },
    {
      "name": "Antratsit metbrash",
      "sw": "/products/engelberg-80/colors/sw3.jpg",
      "img": "/products/engelberg-80/colors/c3.png"
    },
    {
      "name": "Mokko eman",
      "sw": "/products/engelberg-80/colors/sw4.jpg",
      "img": "/products/engelberg-80/colors/c4.png"
    },
    {
      "name": "Platina",
      "sw": "/products/engelberg-80/colors/sw5.jpg",
      "img": "/products/engelberg-80/colors/c5.png"
    },
    {
      "name": "Oq",
      "sw": "/products/engelberg-80/colors/sw6.jpg",
      "img": "/products/engelberg-80/colors/c6.png"
    },
    {
      "name": "Kulrang eman",
      "sw": "/products/engelberg-80/colors/sw7.jpg",
      "img": "/products/engelberg-80/colors/c7.png"
    },
    {
      "name": "Tog' emani",
      "sw": "/products/engelberg-80/colors/sw8.jpg",
      "img": "/products/engelberg-80/colors/c8.png"
    },
    {
      "name": "Kvarts kulrang",
      "sw": "/products/engelberg-80/colors/sw9.jpg",
      "img": "/products/engelberg-80/colors/c9.png"
    },
    {
      "name": "Oltin eman",
      "sw": "/products/engelberg-80/colors/sw10.jpg",
      "img": "/products/engelberg-80/colors/c10.png"
    }
  ],
  "thermo-57-engelberg": [
    {
      "name": "Temir kulrang",
      "sw": "/products/thermo-57-engelberg/colors/sw0.jpg",
      "img": "/products/thermo-57-engelberg/colors/c0.png"
    },
    {
      "name": "Oltin eman",
      "sw": "/products/thermo-57-engelberg/colors/sw1.jpg",
      "img": "/products/thermo-57-engelberg/colors/c1.png"
    },
    {
      "name": "Kulrang eman",
      "sw": "/products/thermo-57-engelberg/colors/sw2.jpg",
      "img": "/products/thermo-57-engelberg/colors/c2.png"
    },
    {
      "name": "Oq-alyumin",
      "sw": "/products/thermo-57-engelberg/colors/sw3.jpg",
      "img": "/products/thermo-57-engelberg/colors/c3.png"
    },
    {
      "name": "Antratsit metbrash",
      "sw": "/products/thermo-57-engelberg/colors/sw4.jpg",
      "img": "/products/thermo-57-engelberg/colors/c4.png"
    },
    {
      "name": "Kvarts kulrang",
      "sw": "/products/thermo-57-engelberg/colors/sw5.jpg",
      "img": "/products/thermo-57-engelberg/colors/c5.png"
    },
    {
      "name": "Platina",
      "sw": "/products/thermo-57-engelberg/colors/sw6.jpg",
      "img": "/products/thermo-57-engelberg/colors/c6.png"
    },
    {
      "name": "Mokko eman",
      "sw": "/products/thermo-57-engelberg/colors/sw7.jpg",
      "img": "/products/thermo-57-engelberg/colors/c7.png"
    },
    {
      "name": "Solod eman",
      "sw": "/products/thermo-57-engelberg/colors/sw8.jpg",
      "img": "/products/thermo-57-engelberg/colors/c8.png"
    },
    {
      "name": "Antratsit",
      "sw": "/products/thermo-57-engelberg/colors/sw9.jpg",
      "img": "/products/thermo-57-engelberg/colors/c9.png"
    },
    {
      "name": "Kulrang",
      "sw": "/products/thermo-57-engelberg/colors/sw10.jpg",
      "img": "/products/thermo-57-engelberg/colors/c10.png"
    },
    {
      "name": "Oq",
      "sw": "/products/thermo-57-engelberg/colors/sw11.jpg",
      "img": "/products/thermo-57-engelberg/colors/c11.png"
    },
    {
      "name": "Tog' emani",
      "sw": "/products/thermo-57-engelberg/colors/sw12.jpg",
      "img": "/products/thermo-57-engelberg/colors/c12.png"
    },
    {
      "name": "Beton eman",
      "sw": "/products/thermo-57-engelberg/colors/sw13.jpg",
      "img": "/products/thermo-57-engelberg/colors/c13.png"
    }
  ],
  "thermo-70-engelberg": [
    {
      "name": "Temir kulrang",
      "sw": "/products/thermo-70-engelberg/colors/sw0.jpg",
      "img": "/products/thermo-70-engelberg/colors/c0.png"
    },
    {
      "name": "Beton eman",
      "sw": "/products/thermo-70-engelberg/colors/sw1.jpg",
      "img": "/products/thermo-70-engelberg/colors/c1.png"
    },
    {
      "name": "Oq",
      "sw": "/products/thermo-70-engelberg/colors/sw2.jpg",
      "img": "/products/thermo-70-engelberg/colors/c2.png"
    },
    {
      "name": "Antratsit metbrash",
      "sw": "/products/thermo-70-engelberg/colors/sw3.jpg",
      "img": "/products/thermo-70-engelberg/colors/c3.png"
    },
    {
      "name": "Oq-alyumin",
      "sw": "/products/thermo-70-engelberg/colors/sw4.jpg",
      "img": "/products/thermo-70-engelberg/colors/c4.png"
    },
    {
      "name": "Kulrang",
      "sw": "/products/thermo-70-engelberg/colors/sw5.jpg",
      "img": "/products/thermo-70-engelberg/colors/c5.png"
    },
    {
      "name": "Antratsit",
      "sw": "/products/thermo-70-engelberg/colors/sw6.jpg",
      "img": "/products/thermo-70-engelberg/colors/c6.png"
    },
    {
      "name": "Oltin eman",
      "sw": "/products/thermo-70-engelberg/colors/sw7.jpg",
      "img": "/products/thermo-70-engelberg/colors/c7.png"
    },
    {
      "name": "Tog' emani",
      "sw": "/products/thermo-70-engelberg/colors/sw8.jpg",
      "img": "/products/thermo-70-engelberg/colors/c8.png"
    },
    {
      "name": "Platina",
      "sw": "/products/thermo-70-engelberg/colors/sw9.jpg",
      "img": "/products/thermo-70-engelberg/colors/c9.png"
    },
    {
      "name": "Kulrang eman",
      "sw": "/products/thermo-70-engelberg/colors/sw10.jpg",
      "img": "/products/thermo-70-engelberg/colors/c10.png"
    },
    {
      "name": "Mokko eman",
      "sw": "/products/thermo-70-engelberg/colors/sw11.jpg",
      "img": "/products/thermo-70-engelberg/colors/c11.png"
    },
    {
      "name": "Solod eman",
      "sw": "/products/thermo-70-engelberg/colors/sw12.jpg",
      "img": "/products/thermo-70-engelberg/colors/c12.png"
    },
    {
      "name": "Kvarts kulrang",
      "sw": "/products/thermo-70-engelberg/colors/sw13.jpg",
      "img": "/products/thermo-70-engelberg/colors/c13.png"
    }
  ],
  "thermo-78-engelberg": [
    {
      "name": "Mokko eman",
      "sw": "/products/thermo-78-engelberg/colors/sw0.jpg",
      "img": "/products/thermo-78-engelberg/colors/c0.png"
    },
    {
      "name": "Solod eman",
      "sw": "/products/thermo-78-engelberg/colors/sw1.jpg",
      "img": "/products/thermo-78-engelberg/colors/c1.png"
    },
    {
      "name": "Antratsit",
      "sw": "/products/thermo-78-engelberg/colors/sw2.jpg",
      "img": "/products/thermo-78-engelberg/colors/c2.png"
    },
    {
      "name": "Antratsit metbrash",
      "sw": "/products/thermo-78-engelberg/colors/sw3.jpg",
      "img": "/products/thermo-78-engelberg/colors/c3.png"
    },
    {
      "name": "Oq",
      "sw": "/products/thermo-78-engelberg/colors/sw4.jpg",
      "img": "/products/thermo-78-engelberg/colors/c4.png"
    },
    {
      "name": "Kulrang",
      "sw": "/products/thermo-78-engelberg/colors/sw5.jpg",
      "img": "/products/thermo-78-engelberg/colors/c5.png"
    },
    {
      "name": "Platina",
      "sw": "/products/thermo-78-engelberg/colors/sw6.jpg",
      "img": "/products/thermo-78-engelberg/colors/c6.png"
    },
    {
      "name": "Temir kulrang",
      "sw": "/products/thermo-78-engelberg/colors/sw7.jpg",
      "img": "/products/thermo-78-engelberg/colors/c7.png"
    },
    {
      "name": "Beton eman",
      "sw": "/products/thermo-78-engelberg/colors/sw8.jpg",
      "img": "/products/thermo-78-engelberg/colors/c8.png"
    },
    {
      "name": "Oq-alyumin",
      "sw": "/products/thermo-78-engelberg/colors/sw9.jpg",
      "img": "/products/thermo-78-engelberg/colors/c9.png"
    },
    {
      "name": "Kvarts kulrang",
      "sw": "/products/thermo-78-engelberg/colors/sw10.jpg",
      "img": "/products/thermo-78-engelberg/colors/c10.png"
    },
    {
      "name": "Oltin eman",
      "sw": "/products/thermo-78-engelberg/colors/sw11.jpg",
      "img": "/products/thermo-78-engelberg/colors/c11.png"
    },
    {
      "name": "Tog' emani",
      "sw": "/products/thermo-78-engelberg/colors/sw12.jpg",
      "img": "/products/thermo-78-engelberg/colors/c12.png"
    },
    {
      "name": "Kulrang eman",
      "sw": "/products/thermo-78-engelberg/colors/sw13.jpg",
      "img": "/products/thermo-78-engelberg/colors/c13.png"
    }
  ],
  "thermo-98-engelberg": [
    {
      "name": "Temir kulrang",
      "sw": "/products/thermo-98-engelberg/colors/sw0.jpg",
      "img": "/products/thermo-98-engelberg/colors/c0.png"
    },
    {
      "name": "Beton eman",
      "sw": "/products/thermo-98-engelberg/colors/sw1.jpg",
      "img": "/products/thermo-98-engelberg/colors/c1.png"
    },
    {
      "name": "Oq-alyumin",
      "sw": "/products/thermo-98-engelberg/colors/sw2.jpg",
      "img": "/products/thermo-98-engelberg/colors/c2.png"
    },
    {
      "name": "Kvarts kulrang",
      "sw": "/products/thermo-98-engelberg/colors/sw3.jpg",
      "img": "/products/thermo-98-engelberg/colors/c3.png"
    },
    {
      "name": "Platina",
      "sw": "/products/thermo-98-engelberg/colors/sw4.jpg",
      "img": "/products/thermo-98-engelberg/colors/c4.png"
    },
    {
      "name": "Kulrang eman",
      "sw": "/products/thermo-98-engelberg/colors/sw5.jpg",
      "img": "/products/thermo-98-engelberg/colors/c5.png"
    },
    {
      "name": "Antratsit",
      "sw": "/products/thermo-98-engelberg/colors/sw6.jpg",
      "img": "/products/thermo-98-engelberg/colors/c6.png"
    },
    {
      "name": "Oltin eman",
      "sw": "/products/thermo-98-engelberg/colors/sw7.jpg",
      "img": "/products/thermo-98-engelberg/colors/c7.png"
    },
    {
      "name": "Tog' emani",
      "sw": "/products/thermo-98-engelberg/colors/sw8.jpg",
      "img": "/products/thermo-98-engelberg/colors/c8.png"
    },
    {
      "name": "Oq",
      "sw": "/products/thermo-98-engelberg/colors/sw9.jpg",
      "img": "/products/thermo-98-engelberg/colors/c9.png"
    },
    {
      "name": "Kulrang",
      "sw": "/products/thermo-98-engelberg/colors/sw10.jpg",
      "img": "/products/thermo-98-engelberg/colors/c10.png"
    },
    {
      "name": "Antratsit metbrash",
      "sw": "/products/thermo-98-engelberg/colors/sw11.jpg",
      "img": "/products/thermo-98-engelberg/colors/c11.png"
    },
    {
      "name": "Mokko eman",
      "sw": "/products/thermo-98-engelberg/colors/sw12.jpg",
      "img": "/products/thermo-98-engelberg/colors/c12.png"
    },
    {
      "name": "Solod eman",
      "sw": "/products/thermo-98-engelberg/colors/sw13.jpg",
      "img": "/products/thermo-98-engelberg/colors/c13.png"
    }
  ],
  "thermo-105-engelberg": [
    {
      "name": "Temir kulrang",
      "sw": "/products/thermo-105-engelberg/colors/sw0.jpg",
      "img": "/products/thermo-105-engelberg/colors/c0.png"
    },
    {
      "name": "Beton eman",
      "sw": "/products/thermo-105-engelberg/colors/sw1.jpg",
      "img": "/products/thermo-105-engelberg/colors/c1.png"
    },
    {
      "name": "Oq-alyumin",
      "sw": "/products/thermo-105-engelberg/colors/sw2.jpg",
      "img": "/products/thermo-105-engelberg/colors/c2.png"
    },
    {
      "name": "Kvarts kulrang",
      "sw": "/products/thermo-105-engelberg/colors/sw3.jpg",
      "img": "/products/thermo-105-engelberg/colors/c3.png"
    },
    {
      "name": "Platina",
      "sw": "/products/thermo-105-engelberg/colors/sw4.jpg",
      "img": "/products/thermo-105-engelberg/colors/c4.png"
    },
    {
      "name": "Kulrang eman",
      "sw": "/products/thermo-105-engelberg/colors/sw5.jpg",
      "img": "/products/thermo-105-engelberg/colors/c5.png"
    },
    {
      "name": "Antratsit",
      "sw": "/products/thermo-105-engelberg/colors/sw6.jpg",
      "img": "/products/thermo-105-engelberg/colors/c6.png"
    },
    {
      "name": "Oltin eman",
      "sw": "/products/thermo-105-engelberg/colors/sw7.jpg",
      "img": "/products/thermo-105-engelberg/colors/c7.png"
    },
    {
      "name": "Tog' emani",
      "sw": "/products/thermo-105-engelberg/colors/sw8.jpg",
      "img": "/products/thermo-105-engelberg/colors/c8.png"
    },
    {
      "name": "Oq",
      "sw": "/products/thermo-105-engelberg/colors/sw9.jpg",
      "img": "/products/thermo-105-engelberg/colors/c9.png"
    },
    {
      "name": "Kulrang",
      "sw": "/products/thermo-105-engelberg/colors/sw10.jpg",
      "img": "/products/thermo-105-engelberg/colors/c10.png"
    },
    {
      "name": "Antratsit metbrash",
      "sw": "/products/thermo-105-engelberg/colors/sw11.jpg",
      "img": "/products/thermo-105-engelberg/colors/c11.png"
    },
    {
      "name": "Mokko eman",
      "sw": "/products/thermo-105-engelberg/colors/sw12.jpg",
      "img": "/products/thermo-105-engelberg/colors/c12.png"
    },
    {
      "name": "Solod eman",
      "sw": "/products/thermo-105-engelberg/colors/sw13.jpg",
      "img": "/products/thermo-105-engelberg/colors/c13.png"
    }
  ],
  "champion": [
    { "name": "Temir kulrang", "sw": "/products/champion/colors/sw0.jpg", "img": "/products/champion/colors/c0.png" },
    { "name": "Mokko eman", "sw": "/products/champion/colors/sw1.jpg", "img": "/products/champion/colors/c1.png" },
    { "name": "Kulrang eman", "sw": "/products/champion/colors/sw2.jpg", "img": "/products/champion/colors/c2.png" },
    { "name": "Kulrang", "sw": "/products/champion/colors/sw3.jpg", "img": "/products/champion/colors/c3.png" },
    { "name": "Oq-alyumin", "sw": "/products/champion/colors/sw4.jpg", "img": "/products/champion/colors/c4.png" },
    { "name": "Antratsit", "sw": "/products/champion/colors/sw5.jpg", "img": "/products/champion/colors/c5.png" },
    { "name": "Oltin eman", "sw": "/products/champion/colors/sw6.jpg", "img": "/products/champion/colors/c6.png" },
    { "name": "Oq", "sw": "/products/champion/colors/sw7.jpg", "img": "/products/champion/colors/c7.png" }
  ],
  "bkh-65": [
    { "name": "Oq", "sw": "/products/bkh-65/colors/sw0.jpg", "img": "/products/bkh-65/colors/c0.png" },
    { "name": "Antratsit", "sw": "/products/bkh-65/colors/sw1.jpg", "img": "/products/bkh-65/colors/c1.png" }
  ]
};
