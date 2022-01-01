function isOldEnoughToVote(age) {
  return age >= 18 ? true : false;
}

let output = isOldEnoughToVote(18);
console.log(output);