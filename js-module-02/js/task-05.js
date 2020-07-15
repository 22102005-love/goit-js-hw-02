"use script";
const checkForSpam = function (message) {
  const normalizeMessage = message.toLowerCase();
  console.log(normalizeMessage);
  const checkWords =
    normalizeMessage.includes("sale") || normalizeMessage.includes("spam")
      ? "true"
      : "false";
  return checkWords;
};

console.log(checkForSpam("Latest technology news"));
console.log(checkForSpam("JavaScript weekly newsletter"));
console.log(checkForSpam("Get best sale offers now!"));
console.log(checkForSpam("[SPAM] How to earn fast money?"));
