const multiplicationTable = function(maxValue) {
  let str = '';
  for (let num = 1; num <= maxValue; num++) {
    let count = 1;
    while (count <= maxValue) {
      str += (count * num) + ' ';
      count++;
    }
    str += "\n";
  }
  return str;
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));
