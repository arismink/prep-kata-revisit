const numberOfVowels = function(data) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let count = 0;

  for (let letter of data) if (vowels.includes(letter)) count ++;
  return count;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));
