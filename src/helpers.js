export const compareTwoProductTitles = (first, second) => {
  const re = /\s+|denner|coop|migros/gi;
  first = first.replace(re, "");
  second = second.replace(re, "");

  if (first === second) return 1;
  if (first.length < 2 || second.length < 2) return 0;

  let firstBigrams = new Map();
  for (let i = 0; i < first.length - 1; i++) {
    const bigram = first.substring(i, i + 2);
    const count = firstBigrams.has(bigram) ? firstBigrams.get(bigram) + 1 : 1;

    firstBigrams.set(bigram, count);
  }

  let intersectionSize = 0;
  for (let i = 0; i < second.length - 1; i++) {
    const bigram = second.substring(i, i + 2);
    const count = firstBigrams.has(bigram) ? firstBigrams.get(bigram) : 0;

    if (count > 0) {
      firstBigrams.set(bigram, count - 1);
      intersectionSize++;
    }
  }
  return (2.0 * intersectionSize) / (first.length + second.length - 2);
};

// Use to remove unnecessary words from titles
const formatTitle = (title) => {
  let formattedTitle = title;
  if (title.includes("Naturaplan")) {
    formattedTitle = title.replace("Naturaplan", "");
  }
  if (title.includes("ca.")) {
    formattedTitle = title.slice(0, title.indexOf("ca."));
  }
  return formattedTitle;
};
