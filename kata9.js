const camelCase = function(input) {
  let str = '';
  for (let x = 0; x < input.length; x++) {
    if (input[x-1] === ' ') str += input[x].toUpperCase();
    else if (input[x] != ' ') str += input[x];
  }
  return str;
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));