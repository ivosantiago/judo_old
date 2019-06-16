const Technique = (label = "", technique = []) => {
  return {
    label: label,
    techniques: technique
  };
};
export const BELTS = [{ id: "purple", color: "#3c128c", label: "Roxa" }];
export const BELT_TECHNIQUES = {
  purple: {
    naguewaza: new Technique("Projeções (Nague Waza)", [
      { primary: "haraigoshi" },
      { primary: "uchimata" },
      { primary: "kosotogari" },
      { primary: "kosotogake" },
      { primary: "kouchigari" },
      { primary: "koshiguruma" },
      { primary: "tsurigoshi" },
      { primary: "tomoenague" },
      { primary: "kataguruma" },
      { primary: "sumigaeshi" },
      { primary: "taniotoshi" },
      { primary: "sukuinage" },
      { primary: "utsurigoshi" },
      { primary: "oguruma" },
      { primary: "ashiguruma" },
      { primary: "hanegoshi" }
    ]),
    renrakuwaza: new Technique("Projeções Combinadas (Renraku-Waza)", [
      { primary: "sassaetsurikomiashi", secondary: "kosotogari" },
      { primary: "sassaetsurikomiashi", secondary: "kosotogake" },
      { primary: "sassaetsurikomiashi", secondary: "deashibarai" },
      { primary: "ukigoshi", secondary: "koshiguruma" },
      { primary: "kosotogari", secondary: "taniotoshi" }
    ]),
    kaeshiwaza: new Technique("Projeções de Contra-ataques (Kaeshi-Waza)", [
      { primary: "ogoshi", secondary: "ushirogoshi" },
      { primary: "kosotogake", secondary: "uchimata" },
      { primary: "deashibarai", secondary: "deashibarai" },
      { primary: "hanegoshi", secondary: "utsurigoshi" },
      { primary: "tomoenague", secondary: "ouchigari" }
    ]),
    katamewaza: new Technique("Imobilizações (Katame-Waza)", [
      { primary: "kuzurekamishihogatame" },
      { primary: "kuzureyokoshihogatame" },
      { primary: "tateshihogatame" },
      { primary: "kuzuretateshihogatame" }
    ]),
    shimewaza: new Technique("Estrangulamento (Shime-Waza)", [
      { primary: "namijujijime" },
      { primary: "katajujijime" },
      { primary: "gyakujujijime" },
      { primary: "hadakajime" },
      { primary: "okurierijime" },
      { primary: "katahajime" },
      { primary: "koshijime" }
    ]),
    kansetsuwaza: new Technique("Chave de Braço (Kansetsu Waza)", [
      { primary: "jujigatame" },
      { primary: "udegarami" },
      { primary: "udegatame" },
      { primary: "hizagatame" }
    ])
  }
};
export const TECHNIQUES = {
  haraigoshi: {
    id: "haraigoshi",
    label: "Harai-goshi",
    videoId: "0gzk4M3OA0U"
  },
  uchimata: {
    id: "uchimata",
    label: "Uchi-Mata",
    videoId: "O93a4H5dEis"
  },
  kosotogari: {
    id: "kosotogari",
    label: "Ko-Soto-Gari",
    videoId: "H84aXkA3e7g"
  },
  kosotogake: {
    id: "kosotogake",
    label: "Ko-Soto-Gake",
    videoId: "QpE9TREP9ys"
  },
  kouchigari: {
    id: "kouchigari",
    label: "Ko-Uchi-Gari",
    videoId: "-SuAzlYzpJk"
  },
  koshiguruma: {
    id: "koshiguruma",
    label: "Koshi-Guruma",
    videoId: "nrzxjDcsbL4"
  },
  tsurigoshi: {
    id: "tsurigoshi",
    label: "Tsuri-Goshi",
    videoId: "OLqryPZyUuA"
  },
  tomoenague: {
    id: "tomoenague",
    label: "Tomoe-Nague",
    videoId: "tOIbQ2cXRHU"
  },
  kataguruma: {
    id: "kataguruma",
    label: "Kata-Guruma",
    videoId: "yD09HBiPgEU"
  },
  sumigaeshi: {
    id: "sumigaeshi",
    label: "Sumi Gaeshi",
    videoId: "kod5QHdmE7E"
  },
  taniotoshi: {
    id: "taniotoshi",
    label: "Tani Otoshi",
    videoId: "wS9pM3y8YH4"
  },
  sukuinage: {
    id: "sukuinage",
    label: "Sukui Nage",
    videoId: "LfBesVQaHXU"
  },
  utsurigoshi: {
    id: "utsurigoshi",
    label: "Utsuri Goshi",
    videoId: "3ARHWWYXJL4"
  },
  oguruma: {
    id: "oguruma",
    label: "O Guruma",
    videoId: "jNf08NFlaUg"
  },
  ashiguruma: {
    id: "ashiguruma",
    label: "Ashi-Guruma",
    videoId: "0cCsllLrClY"
  },
  hanegoshi: {
    id: "hanegoshi",
    label: "Hane-Goshi",
    videoId: "TTLgAT_uEis"
  },
  sassaetsurikomiashi: {
    id: "sassaetsurikomiashi",
    label: "Sassae-Tsuri-Komi-Ashi",
    videoId: "lWtn1qEHyTo"
  },
  deashibarai: {
    id: "deashibarai",
    label: "De-Ashi-Barai",
    videoId: "VFgPK3l5d9U"
  },
  ukigoshi: {
    id: "ukigoshi",
    label: "Uki-Goshi",
    videoId: "dFXK9plNIss"
  },
  ogoshi: {
    id: "ogoshi",
    label: "O-Goshi",
    videoId: "GDWtRtJ23cM"
  },
  ushirogoshi: {
    id: "ushirogoshi",
    label: "Ushiro-Goshi",
    videoId: "r31DHx-o7nc"
  },
  ouchigari: {
    id: "ouchigari",
    label: "O Uchi Gari",
    videoId: "jw-jNNCDx7I"
  },
  kuzurekamishihogatame: {
    id: "kuzurekamishihogatame",
    label: "Kuzure-Kami-Shiho-Gatame",
    videoId: "noaBgIcgO88"
  },
  kuzureyokoshihogatame: {
    id: "kuzureyokoshihogatame",
    label: "Kuzure-Yoko-Shiho-Gatame",
    videoId: "54fQM7dYz0M"
  },
  tateshihogatame: {
    id: "tateshihogatame",
    label: "Tate-Shiho-Gatame",
    videoId: "HgZpUWO5hV0"
  },
  kuzuretateshihogatame: {
    id: "kuzuretateshihogatame",
    label: "Kuzure-Tate-Shiho-Gatame",
    videoId: "i9VUQhqxYJU"
  },
  namijujijime: {
    id: "namijujijime",
    label: "Nami Juji Jime",
    videoId: "OAhF3pXt7S0"
  },
  katajujijime: {
    id: "katajujijime",
    label: "Kata Juji Jime",
    videoId: "akn5KBwyhbg"
  },
  gyakujujijime: {
    id: "gyakujujijime",
    label: "Gyaku Juji Jime",
    videoId: "6q6lgWeoi4Y"
  },
  hadakajime: {
    id: "hadakajime",
    label: "Hadaka Jime",
    videoId: "kTGDvZQ8sY0"
  },
  okurierijime: {
    id: "okurierijime",
    label: "Okuri Eri Jime",
    videoId: "mBRtKyMm6v0"
  },
  katahajime: {
    id: "katahajime",
    label: "Kata Ha Jime",
    videoId: "wcLI263QUdA"
  },
  koshijime: {
    id: "koshijime",
    label: "Koshi Jime",
    videoId: "TihIlJ2Re0c"
  },
  jujigatame: {
    id: "jujigatame",
    label: "Juji Gatame",
    videoId: "G35DNFiX48I"
  },
  udegarami: {
    id: "udegarami",
    label: "Ude Garami",
    videoId: "3z67tCt3b00"
  },
  udegatame: {
    id: "udegatame",
    label: "Ude Gatame",
    videoId: "tK51IkxG8ek"
  },
  hizagatame: {
    id: "hizagatame",
    label: "Hiza Gatame",
    videoId: "Tt8HIHYKvlI"
  }
};

export const getTechniques = belt => {
  return Promise.resolve(BELT_TECHNIQUES[belt]);
};

export default BELTS;
