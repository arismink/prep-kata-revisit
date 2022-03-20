const repeatNumbers = function(data) {
  let text = '';

  for (let nums of data) {
    let str = '';
    let count = 0;
    while (count < nums[1]) {
      str += nums[0];
      count++;
    }
    text = text + str + ',';
  }
  return text.slice(0, -1);

};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));