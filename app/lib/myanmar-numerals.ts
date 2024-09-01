
export function englishNumeralToMyanmar(englishNumeral: string): string {
    const numeralMap: { [key: string]: string } = {
      "0": "၀",
      "1": "၁",
      "2": "၂",
      "3": "၃",
      "4": "၄",
      "5": "၅",
      "6": "၆",
      "7": "၇",
      "8": "၈",
      "9": "၉",
    };
  
    let myanmarNumeral = "";
    for (const digit of englishNumeral) {
      myanmarNumeral += numeralMap[digit] || digit;
    }
    return myanmarNumeral;
  }