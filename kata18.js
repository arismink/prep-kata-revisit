const squareCode = function(message) {
  let text = message.replace(/\s/g, '');
  let code = '';
  let step = Math.ceil(Math.sqrt(text.length));

  for (let z = 0; z < step; z++) {
    for (let x = z; x <= text.length; x += step) {
      code += text.charAt(x);
    }
    code += ' ';
  }
  return code;
};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));
