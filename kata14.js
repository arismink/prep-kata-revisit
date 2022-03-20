const money = [
  {
    bill: 'twentyDollar',
    num: 2000
  },
  {
    bill: 'tenDollar',
    num: 1000
  },
  {
    bill: 'fiveDollar',
    num: 500
  },
  {
    bill: 'twoDollar',
    num: 200
  },
  {
    bill: 'oneDollar',
    num: 100
  },
  {
    bill: 'quarter',
    num: 25
  },
  {
    bill: 'dime',
    num: 10
  },
  {
    bill: 'nickel',
    num: 5
  },
  {
    bill: 'penny',
    num: 1
  },
];

const calculateChange = function(total, cash) {
  let change = cash - total;
  let bills = {};

  while (change > 0) {
    for (let x of money) {
      let count = 0;

      if (x.num <= change) {
        change -= x.num;
        count++;

        if (isNaN(bills[x.bill])) {
          bills[x.bill] = count;
        } else {
          bills[x.bill] += count;
        }
        break;
      }
    }
  
  }
  return bills;
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));
console.log(calculateChange(467, 500));