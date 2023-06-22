export function convertToAbbreviation(number) {
  const suffixes = ["", "K", "M", "B", "T"];
  const suffixNum = Math.floor(("" + number).length / 3);
  const shortValue = parseFloat(
    (suffixNum !== 0 ? number / Math.pow(1000, suffixNum) : number).toPrecision(
      2
    )
  );
  return `${shortValue} ${suffixes[suffixNum]}`;
}

export function separateNumber(number) {
  return number.toLocaleString("en-US").replace(/,/g, " ");
}
