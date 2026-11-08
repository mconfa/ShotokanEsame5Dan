// ============================================================================
// DOMANDE ESAME KARATE - Programma FIKTA 2022
// ============================================================================
// Ogni oggetto e' una scheda (domanda/risposta). Puoi aggiungerne a mano:
// basta copiare un blocco { ... } e modificarlo, mantenendo la virgola.
//
// Campi:
//   esame      -> passaggio di grado (i numeri "N°" vengono resi in grassetto)
//   categoria  -> "Kihon" oppure "Kata"
//   numero     -> (solo Kihon) numero del passaggio, mostrato in grassetto
//   titolo     -> (opzionale) nome del passaggio, es. "shihozuki"
//   partenza   -> (opzionale) posizione/indicazione di partenza
//   soluzione  -> Kihon: array di righe (le combinazioni) | Kata: stringa (vuota da riempire)
//   nome       -> (solo Kata) nome del kata, mostrato in grassetto
//   video      -> (opzionale) link YouTube: viene incorporato nella risposta
//
// Per aggiungere una domanda tutta tua, puoi anche usare il campo opzionale:
//   domanda    -> testo della domanda gia' pronto (sovrascrive quella generata)
// ============================================================================

const DOMANDE = [

  // ==========================================================================
  // DA CINTURA MARRONE (1° kyu) AL 1° DAN
  // ==========================================================================
  {
    esame: "da cintura marrone (1° kyu) al 1° Dan",
    categoria: "Kihon",
    numero: "1",
    partenza: "partenza da gedanbarai - 5 passi avanti",
    soluzione: [
      "sanbonzuki"
    ]
  },
  {
    esame: "da cintura marrone (1° kyu) al 1° Dan",
    categoria: "Kihon",
    numero: "2",
    partenza: "5 passi indietro",
    soluzione: [
      "ageuke gyakuzuki",
      "uchiuke kizamizuki gyakuzuki",
      "sotouke yokohijiate urakenuchi gyakuzuki",
      "gedanbarai urakenuchi gyakuzuki",
      "shutouke kizami-maegeri nukite"
    ]
  },
  {
    esame: "da cintura marrone (1° kyu) al 1° Dan",
    categoria: "Kihon",
    numero: "3",
    partenza: "partenza da gedanbarai in kibadachi avanti",
    soluzione: [
      "yokogeri keage (3 passi in kibadachi con spostamento laterale)",
      "yokogeri kekomi (3 passi in kibadachi con spostamento laterale)"
    ]
  },
  {
    esame: "da cintura marrone (1° kyu) al 1° Dan",
    categoria: "Kihon",
    numero: "4",
    partenza: "partenza da kamae - 4 passi avanti",
    soluzione: [
      "maegeri junzuki gyakuzuki",
      "yokogeri kekomi urakenuchi gyakuzuki",
      "mawashigeri gyakuzuki urakenuchi",
      "ushirogeri urakenuchi gyakuzuki"
    ]
  },
  {
    esame: "da cintura marrone (1° kyu) al 1° Dan",
    categoria: "Kihon",
    numero: "5",
    partenza: "partenza da kamae",
    soluzione: [
      "maegeri yokogeri kekomi (avanti cg)",
      "gedanbarai gyakuzuki (un passo indietro)",
      "mawashigeri yokogeri kekomi urakenuchi gyakuzuki (avanti cg)"
    ]
  },
  {
    esame: "da cintura marrone (1° kyu) al 1° Dan",
    categoria: "Kihon",
    numero: "6",
    partenza: "partenza da kamae",
    soluzione: [
      "maegeri - yokogeri - ushirogeri (sg in tre direzioni sul posto)"
    ]
  },
  {
    esame: "da cintura marrone (1° kyu) al 1° Dan",
    categoria: "Kata",
    nome: "bassaidai",
    soluzione: "",
    video: "https://www.youtube.com/watch?v=WRYZ3FxEb-Q"
  },
  {
    esame: "da cintura marrone (1° kyu) al 1° Dan",
    categoria: "Kata",
    nome: "kankudai",
    soluzione: "",
    video: "https://www.youtube.com/watch?v=4cHTmu1vBvk"
  },
  {
    esame: "da cintura marrone (1° kyu) al 1° Dan",
    categoria: "Kata",
    nome: "jion",
    soluzione: "",
    video: "https://youtu.be/4cHTmu1vBvk?is=hj2SNDH8Rt1bqNDO"
  },

  // ==========================================================================
  // DAL 1° AL 2° DAN
  // ==========================================================================
  {
    esame: "dal 1° al 2° Dan",
    categoria: "Kihon",
    numero: "1",
    partenza: "partenza da kamae - ripetere 3 volte avanzando",
    soluzione: [
      "yoriashi kizamizuki oizuki tsugiashi gyakuzuki"
    ]
  },
  {
    esame: "dal 1° al 2° Dan",
    categoria: "Kihon",
    numero: "2",
    partenza: "indietro kaeashi prolungato + indietro yoriashi",
    soluzione: [
      "ageuke sotouke (sb) gyakuzuki",
      "sotouke gedanbarai (sb) urakenuchi gyakuzuki",
      "gedanbarai uchiuke (sb) kizamizuki gyakuzuki"
    ]
  },
  {
    esame: "dal 1° al 2° Dan",
    categoria: "Kihon",
    numero: "3",
    partenza: "partenza da gedanbarai in kibadachi avanti",
    soluzione: [
      "yokogeri keage-kekomi (sg 3 passi in kibadachi con spostamento laterale)"
    ]
  },
  {
    esame: "dal 1° al 2° Dan",
    categoria: "Kihon",
    numero: "4",
    partenza: "partenza da kamae (avanti)",
    soluzione: [
      "kizami-maegeri maegeri junzuki gyakuzuki",
      "kizami-mawashigeri mawashigeri gyakuzuki urakenuchi",
      "kizami-maegeri ushirogeri urakenuchi gyakuzuki"
    ]
  },
  {
    esame: "dal 1° al 2° Dan",
    categoria: "Kihon",
    numero: "5",
    partenza: "partenza da kamae",
    soluzione: [
      "kizami-maegeri mawashigeri gyakuzuki urakenuchi (avanti)",
      "gedanbarai urakenuchi gyakuzuki (un passo indietro)",
      "mawashigeri urakenuchi gyakuzuki (ritorno sul posto)",
      "ushirogeri urakenuchi gyakuzuki (avanti)",
      "tsugiashi maeashi mawashigeri gyakuzuki urakenuchi (avanti)"
    ]
  },
  {
    esame: "dal 1° al 2° Dan",
    categoria: "Kihon",
    numero: "6",
    partenza: "shiho uke-kime - partenza da kamae (oppure eseguita sulle diagonali: N.est, S.ovest, S.est, N.ovest)",
    soluzione: [
      "Nord: (passo indietro) gedanbarai urakenuchi dx gyakuzuki sx, (passo avanti) mawashigeri sx tsugiashi gyakuzuki dx",
      "Sud: (ruotando yoriashi indietro) gedanbarai urakenuchi dx gyakuzuki sx, tsugiashi maeashi mawashigeri dx tsugiashi gyakuzuki sx (avanti)",
      "Est: (passo indietro) gedanbarai urakenuchi sx gyakuzuki dx, (passo avanti) mawashigeri dx tsugiashi gyakuzuki sx",
      "Ovest: (ruotando yoriashi indietro) gedanbarai urakenuchi sx gyakuzuki dx, tsugiashi maeashi mawashigeri sx tsugiashi gyakuzuki dx (avanti)"
    ]
  },
  {
    esame: "dal 1° al 2° Dan",
    categoria: "Kata",
    nome: "enpi",
    soluzione: "",
    video: "https://www.youtube.com/watch?v=PzQyxDKYJJo"
  },
  {
    esame: "dal 1° al 2° Dan",
    categoria: "Kata",
    nome: "jitte",
    soluzione: "",
    video: "https://www.youtube.com/watch?v=2tS1A02Dg6g"
  },
  {
    esame: "dal 1° al 2° Dan",
    categoria: "Kata",
    nome: "hangetsu",
    soluzione: "",
    video: "https://www.youtube.com/watch?v=YasWNWzGrDo"
  },

  // ==========================================================================
  // DAL 2° AL 3° DAN
  // ==========================================================================
  {
    esame: "dal 2° al 3° Dan",
    categoria: "Kihon",
    numero: "1",
    partenza: "shihozuki - partenza da kamae",
    soluzione: [
      "nord: oizuki",
      "sud: tsugiashi gyakuzuki",
      "ovest: yoriashi gyakuzuki",
      "est: oikomi gyakuzuki"
    ]
  },
  {
    esame: "dal 2° al 3° Dan",
    categoria: "Kihon",
    numero: "2",
    partenza: "shihogeri - shizentai heisoku dachi - quattro direzioni",
    soluzione: [
      "nord: ren-maegeri (dx/sx)",
      "sud: ren-ushirogeri (dx/sx)",
      "est/ovest: ren-yokogeri (dx/sx)",
      "nord: ren-mawashigeri (dx/sx)",
      "est/ovest: ren-uramawashigeri (dx/sx)"
    ]
  },
  {
    esame: "dal 2° al 3° Dan",
    categoria: "Kihon",
    numero: "3",
    partenza: "da hachijidachi, indietro gedanbarai in kibadachi (tornare in hachijidachi)",
    soluzione: [
      "yokogeri keage (un passo in kibadachi con spostamento laterale)",
      "gedanbarai gyakuzuki in zenkutsudachi (un passo indietro)",
      "tsugiashi maeashi yokogeri kekomi urakenuchi gyakuzuki (avanti)"
    ]
  },
  {
    esame: "dal 2° al 3° Dan",
    categoria: "Kihon",
    numero: "4",
    partenza: "partenza da kamae",
    soluzione: [
      "yoriashi kizamizuki maegeri junzuki (avanti)",
      "sotouke gedanbarai (sb) urakenuchi gyakuzuki (un passo indietro)",
      "mawashigeri tsugiashi gyakuzuki (avanti)"
    ]
  },
  {
    esame: "dal 2° al 3° Dan",
    categoria: "Kihon",
    numero: "5",
    partenza: "partenza da kamae",
    soluzione: [
      "tsugiashi gyakuzuki tsugiashi maeashi mawashigeri gyakuzuki urakenuchi (avanti)",
      "mawashigeri uramawashigeri (sg) urakenuchi gyakuzuki (avanti)"
    ]
  },
  {
    esame: "dal 2° al 3° Dan",
    categoria: "Kihon",
    numero: "6",
    partenza: "partenza da kamae",
    soluzione: [
      "maegeri mawashigeri (sg) gyakuzuki urakenuchi (avanti)",
      "oizuki gyakuzuki (un passo indietro)",
      "ushirogeri uraken gyakuzuki mawashigeri gyakuzuki (avanti)"
    ]
  },
  {
    esame: "dal 2° al 3° Dan",
    categoria: "Kihon",
    numero: "7",
    partenza: "partenza da kamae",
    soluzione: [
      "kizami-maegeri (o mawashigeri) kizamizuki gyakuzuki (sul posto)",
      "tsugiashi maeashi mawashigeri maegeri mawashigeri (sg) gyakuzuki (avanti)",
      "tsugiashi maeashi uramawashigeri uraken gyakuzuki (avanti)"
    ]
  },
  {
    esame: "dal 2° al 3° Dan",
    categoria: "Kata",
    nome: "gankaku",
    soluzione: "",
    video: "https://www.youtube.com/watch?v=hz8Kzb2OLLs"
  },
  {
    esame: "dal 2° al 3° Dan",
    categoria: "Kata",
    nome: "kankusho",
    soluzione: "",
    video: "https://youtu.be/pzGC41xQn74?is=Ia4FRvsOtd7Cz6Iu"
  },
  {
    esame: "dal 2° al 3° Dan",
    categoria: "Kata",
    nome: "bassaisho",
    soluzione: "",
    video: "https://www.youtube.com/watch?v=HMYQGq-cLJk"
  },

  // ==========================================================================
  // DAL 3° AL 4° DAN
  // ==========================================================================
  {
    esame: "dal 3° al 4° Dan",
    categoria: "Kihon",
    numero: "1",
    partenza: "shiho tateshutouke gyakuzuki - in fudodachi",
    soluzione: [
      "nord: yoriashi tateshutouke gyakuzuki",
      "sud: yoriashi tateshutouke gyakuzuki",
      "est: yoriashi tateshutouke gyakuzuki",
      "ovest: yoriashi tateshutouke gyakuzuki"
    ]
  },
  {
    esame: "dal 3° al 4° Dan",
    categoria: "Kihon",
    numero: "2",
    partenza: "shihogeri - shizentai c.g. - quattro direzioni",
    soluzione: [
      "nord: maegeri dx",
      "sud: ushirogeri sx",
      "est: yokogeri dx",
      "nord: mawashigeri sx",
      "est: uramawashigeri dx"
    ]
  },
  {
    esame: "dal 3° al 4° Dan",
    categoria: "Kihon",
    numero: "3",
    partenza: "partenza da kamae",
    soluzione: [
      "yoriashi gyakuzuki, yoriashi kizamizuki, oizuki, yoriashi urakenuchi"
    ]
  },
  {
    esame: "dal 3° al 4° Dan",
    categoria: "Kihon",
    numero: "4",
    partenza: "partenza da kamae",
    soluzione: [
      "yoriashi kizamizuki maegeri jyunzuki tsugiashi gyakuzuki"
    ]
  },
  {
    esame: "dal 3° al 4° Dan",
    categoria: "Kihon",
    numero: "5",
    partenza: "partenza da kamae",
    soluzione: [
      "kizami yokogeri kekomi oikomizuki urakenuchi (sb) tsugiashi gyakuzuki",
      "tsugiashi maeashi uramawashigeri (oppure mawashigeri) (avanti)"
    ]
  },
  {
    esame: "dal 3° al 4° Dan",
    categoria: "Kihon",
    numero: "6",
    partenza: "partenza da kamae",
    soluzione: [
      "ushirogeri uramawashigeri (sg) oikomizuki (avanti)",
      "(oppure) ushirogeri yokogeri kekomi (sg) oizuki"
    ]
  },
  {
    esame: "dal 3° al 4° Dan",
    categoria: "Kata",
    nome: "nijushiho",
    soluzione: "",
    video: "https://www.youtube.com/watch?v=TWGZ-NSBb4Y"
  },
  {
    esame: "dal 3° al 4° Dan",
    categoria: "Kata",
    nome: "sochin",
    soluzione: "",
    video: "https://www.youtube.com/watch?v=xmnBfc7Kgpg"
  },
  {
    esame: "dal 3° al 4° Dan",
    categoria: "Kata",
    nome: "unsu",
    soluzione: "",
    video: "https://www.youtube.com/watch?v=Y9XR30lfYrs"
  },

  // ==========================================================================
  // DAL 4° AL 5° DAN
  // ==========================================================================
  {
    esame: "dal 4° al 5° Dan",
    categoria: "Kata",
    nome: "gojushiho dai",
    soluzione: "",
    video: "https://www.youtube.com/watch?v=ipXXlxHmqlI"
  },
  {
    esame: "dal 4° al 5° Dan",
    categoria: "Kata",
    nome: "ji-in",
    soluzione: "",
    video: "https://www.youtube.com/watch?v=QqnkcJ9Hbjo"
  },
  {
    esame: "dal 4° al 5° Dan",
    categoria: "Kata",
    nome: "wankan",
    soluzione: "",
    video: "https://www.youtube.com/watch?v=q5Oik2kNJ8s"
  },
  {
    esame: "dal 4° al 5° Dan",
    categoria: "Kata",
    nome: "chinte",
    soluzione: "",
    video: "https://www.youtube.com/watch?v=DaWKvsyLFn0"
  },
  {
    esame: "dal 4° al 5° Dan",
    categoria: "Kata",
    nome: "meikyo",
    soluzione: "",
    video: "https://www.youtube.com/watch?v=XVJ8w6slyoc"
  }

];

// Rende DOMANDE disponibile sia aprendo il file con doppio clic (browser)
// sia in contesti a moduli (non necessario per l'uso normale).
if (typeof module !== "undefined" && module.exports) {
  module.exports = DOMANDE;
}
