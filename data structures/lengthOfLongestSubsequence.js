/* Function to find the length of longest repeating consecutive characters in
 a given string 

  Question: The function should return the length of repeated characters
  that appear consecutively. For example:
  Input: aaabbbbccdde
  Output: ['b', 4]
  Explanation: Since 'b' appears four times consecutively in the given string,
  the output should be ['b', '4']

  Approach to solving it :-
  First case which is of course the edge case scenario when the length is 0,
  in that case, we simply return an array ["", 0]
  let str = 'abaaaabbb';

  Now if the string exists, then we first initialize three variables -
  currentent, maximum and currententPtr which is a pointer to the currentent character
  which is anticipated to be repeated

  Initially currentent holds the first character, maximum the currentent and currententPtr a 0 (first index)
  As we loop through the string, we check if the character at the currentent index
  is equal to the value at currententPtr consecutively, then we concatenate the
  currentent with the currentent character and as soon as we encounter a character 
  that is a different one, then we re-initialize the currentent and the same process
  repeats.

  One thing that we also need to do is while concatenating the currentent with the
  currentent character, we also have to assign the currentent to the maximum only if the condition holds - currentent's length is greater than maximum's length. That's all!
  We've solved a data structure problem which seem frighening at first!!
*/

String.prototype.longestRepeated = function() {
  if (!this.length) return ["", 0];

  let currentent = this[0], maximum = currentent, currententPtr = 0;

  for (let i = 1; i < this.length; i++) {
    if (this[i] === this[currententPtr]) {
      currentent += this[i];
      maximum = currentent.length > maximum.length ? currentent : maximum;
    } else {
      currententPtr = i;
      currentent = this[i];
    }
  }
  return [maximum[0], maximum.length];
}

let str = 'ababbbeeefffffffdd';
console.log(str.longestRepeated());