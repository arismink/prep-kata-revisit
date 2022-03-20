const months = [
  {
    month: 'January',
    abrev: '01'
  },
  {
    month: 'February',
    abrev: '02'
  },
  {
    month: 'March',
    abrev: '03'
  },
  {
    month: 'April',
    abrev: '04'
  },
  {
    month: 'May',
    abrev: '05'
  },
  {
    month: 'June',
    abrev: '06'
  },
  {
    month: 'October',
    abrev: '10'
  },
  {
    month: 'November',
    abrev: '11'
  },
  {
    month: 'December',
    abrev: '12'
  }
];



const talkingCalendar = function(date) {
  let newDate = '';
  let m = date[5] + date[6];
  let d = date[8] + date[9];
  let y = date[0] + date[1] + date[2] + date[3];

  for (let mon of months) {
    if (m === mon.abrev) {
      newDate += mon.month;
      break;
    }
  }
  
  switch (d[0]) {
  
  case ('0'):
    if (d[1] === '1') {
      newDate += ' ' + d[1] + 'st';
    } else if (d[1] === '2') {
      newDate += ' ' + d[1] + 'nd';
    } else if (d[1] === '3') {
      newDate += ' ' + d[1] + 'rd';
    } else {
      newDate += ' ' + d[1] + 'th';
    }
    break;
  
  case ('1'):
    newDate += ' ' + d + 'th';
    break;

  default:
    if (d[1] === '1') {
      newDate += ' ' + d + 'st';
    } else if (d[1] === '2') {
      newDate += ' ' + d + 'nd';
    } else if (d[1] === '3') {
      newDate += ' ' + d + 'rd';
    } else {
      newDate += ' ' + d + 'th';
    }
    break;
  }
      
  newDate += ', ' + y;

  return newDate;
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));
console.log(talkingCalendar("1987/10/12"));
console.log(talkingCalendar("1987/10/04"));
