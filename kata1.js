const sumLargestNumbers = function(data) {
  let ans = 0;
  let firstMax = 0;
  let secondMax = 0;

  for (let i = 0; i <= data.length; i++) {
    if (data[i] > firstMax) {
      secondMax = firstMax;
      firstMax = data[i];
    
    } else if ((data[i] < firstMax && data[i] > secondMax)) {
      secondMax = data[i];
    }
  }
  
  ans = firstMax + secondMax;
  return ans;
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));
