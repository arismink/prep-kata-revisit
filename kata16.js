// assuming that 'lower' means to make all letters lowercase
const vowels = ['a', 'e', 'i', 'o', 'u'];

const precedence = ['camel', 'pascal', 'snake', 'kebab', 'title', 'vowel', 'consonant', 'upper', 'lower'];

const upper = function(input) {
  let str = '';

  for (let letter of input) str += letter.toUpperCase();
  return str;
};

const consonant = function(input) {
  let str = '';

  for (let letter of input) {
    if (!vowels.includes(letter)) letter = letter.toUpperCase();
    str += letter;
  }
  return str;

};

const vowel = function(input) {
  let str = '';

  for (let letter of input) {
    if (vowels.includes(letter)) {
      letter = letter.toUpperCase();
    }
    str += letter;
  }
  return str;
};

const lower = function(input) {
  let str = '';
  for (let x = 0; x < input.length; x++) {
    if (x === 0) str += input[x].toLowerCase();

    else if (input[x - 1] === ' ') str += input[x].toLowerCase();

    else str += input[x].toLowerCase();
  }
  return str;
};

const title = function(input) {
  let str = '';
  for (let x = 0; x < input.length; x++) {
    if (x === 0) str += input[x].toUpperCase();

    else if (input[x - 1] === ' ') str += input[x].toUpperCase();

    else str += input[x];
  }
  return str;
};

const kebab = function(input) {
  let str = '';
  for (let x = 0; x < input.length; x++) {
    (input[x] === ' ') ? str += '-' : str += input[x];
  }
  return str;

};

const snake = function(input) {
  let str = '';
  for (let x = 0; x < input.length; x++) {
    (input[x] === ' ') ? str += '_' : str += input[x];
  }
  return str;
};

const pascal = function(input) {
  let str = '';
  for (let x = 0; x < input.length; x++) {
    if (x === 0) str += input[x].toUpperCase();

    else if (input[x - 1] === ' ') str += input[x].toUpperCase();

    else if (input[x] !== ' ') str += input[x];
  }
  return str;
};
 
const camel = function(input) {
  let str = '';
  for (let x = 0; x < input.length; x++) {
    if (input[x - 1] === ' ') str += input[x].toUpperCase();

    else if (input[x] !== ' ') str += input[x];
  }
  return str;
};

// case was not allowed as a parameter name, swapped to types
const makeCase = function(input, types) {
  let array = [];

  (!Array.isArray(types)) ? array.push(types) : array = types;

  // so that casing occurs in a specific order
  precedence.forEach(function(p) {
    for (let a of array) {
      if (p === a && p === "camel") input = camel(input);
      
      if (p === a && p === "pascal") input = pascal(input);

      if (p === a && p === "snake") input = snake(input);
      
      if (p === a && p === "kebab") input = kebab(input);
      
      if (p === a && p === "title") input = title(input);
      
      if (p === a && p === "vowel") input = vowel(input);
      
      if (p === a && p === "consonant") input = consonant(input);
      
      if (p === a && p === "upper") input = upper(input);
      
      if (p === a && p === "lower") input = lower(input);
  
    }
  });

  return input;

};

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));
console.log(makeCase("this is a string", ["upper", "camel"]));
