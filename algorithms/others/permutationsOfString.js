// Given a string, find all the permutations of the string
// --------------------------------------------------------- Time Complexity - O(!N)
function permutation(str) {
  const permutations = [];
  perm(str, "", permutations);
  return permutations;
}

function perm(str, prefix, permutations) {
  if (str.length === 0) {
    permutations.push(prefix);
    return;
  }
  for (let i = 0; i < str.length; i++) {
    let pattern = str.substring(0, i) + str.substring(i + 1);
    perm(pattern, prefix + str.charAt(i), permutations);
  }
}

let string = "ABC";
console.log(permutation(string));
