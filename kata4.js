const instructorWithLongestName = function(instructors) {
  let count = 0;
  let person;

  for (let x of instructors) {
    if (x.name.length > count) {
      count = x.name.length;
      person = x;
    }
  }
  
  return person;
};

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));

