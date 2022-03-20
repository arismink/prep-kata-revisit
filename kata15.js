const organizeInstructors = function(instructors) {
  let log = {};

  for (let x of instructors) {
    if (!log[x.course]) log[x.course] = [];
    log[x.course].push(x.name);
  }
  return log;
};



console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));
