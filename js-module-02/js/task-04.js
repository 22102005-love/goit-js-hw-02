"use script";
const formatString = function (string) {
  console.log("длина строки-", string.length);
  const fixedStringLength = 40;
  let stringAfterCheck;

  if (string.length <= fixedStringLength) {
    stringAfterCheck = string;
  } else {
    stringAfterCheck = string.substring(0, 40) + "...";
  }
  return stringAfterCheck;
};

console.log(formatString("Curabitur ligula sapien, tincidunt non."));
console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));
console.log(formatString("Curabitur ligula sapien."));
console.log(
  formatString(
    "Nunc sed turpis. Curabitur a felis in nunc fringilla tristique."
  )
);
