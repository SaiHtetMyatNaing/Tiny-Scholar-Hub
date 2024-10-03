export const myanmarAlphabet = [
  "က", // ka
  "ခ", // kha
  "ဂ", // ga
  "ဃ", // gha
  "င", // nga
  "စ", // ca
  "ဆ", // cha
  "ဇ", // ja
  "ဈ", // jha
  "ည", // nya
  "ဋ", //ṭa
  "ဌ", //ṭha
  "ဍ", //ḍa
  "ဎ", //ḍha
  "ဏ", //ṇa
  "တ", // ta
  "ထ", // tha
  "ဒ", // da
  "ဓ", // dha
  "န", // na
  "ပ", // pa
  "ဖ", // pha
  "ဗ", // ba
  "ဘ", // bha
  "မ", // ma
  "ယ", // ya
  "ရ", // ra
  "လ", // la
  "ဝ", // wa
  "သ", // sa
  "ဟ", // ha
  "ဠ", // ḷa
  "အ", // a
];

export const getNextTwo = (letter: string , alphabets : string[]): string[] => {
  const index = alphabets.indexOf(letter);
  if (index === -1 || index >= alphabets.length - 2) {
    return []; 
  }
  return [alphabets[index + 2], alphabets[index + 1]];
};

export const getPreviousTwo = (letter: string , alphabets : string[]): string[] => {
  const index = alphabets.indexOf(letter);
  if (index <= 1) {
    return [];
  }
  return [alphabets[index - 1], alphabets[index - 2]];
};