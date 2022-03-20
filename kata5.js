const urlEncode = function(text) {
  let str = '';

  for (const letter of text.trim()) (letter === ' ') ? str += '%20' : str += letter;
  
  return str;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));

// started at 3:54 pm, finish 3:57 pm