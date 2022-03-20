// determine initial facing position
const facing = function(directions) {
  let face;

  (directions[0] === "left") ? face = "north" : face = "east";

  return face;
};

const blocksAway = function(directions) {
  let pos = {
    east: 0,
    north: 0
  };
  let east = 0;
  let north = 0;
  let face = facing(directions);
  
  // determining starting coordinates
  (face === "north") ? north = directions[1] : east = directions[1];

  // starting at directions[2] because the initial positioning has already been determined
  for (let i = 2; i < directions.length; i += 2) {
    switch (face) {
    case "north":
      if (directions[i] === "right") {
        east += directions[i + 1];
        face = "east";
      } else if (directions[i] === "left") {
        east -= directions[i + 1];
        face = "west";
      }
      break;
    case "east":
      if (directions[i] === "right") {
        north -= directions[i + 1];
        face = "south";
      } else if (directions[i] === "left") {
        north += directions[i + 1];
        face = "north";
      }
      break;
    case "south":
      if (directions[i] === "right") {
        east -= directions[i + 1];
        face = "west";
      } else if (directions[i] === "left") {
        east += directions[i + 1];
        face = "east";
      }
      break;
    case "west":
      if (directions[i] === "right") {
        north += directions[i + 1];
        face = "north";
      } else if (directions[i] === "left") {
        north -= directions[i + 1];
        face = "south";
      }
      break;
    }
    
  }
  pos.east = east;
  pos.north = north;

  return pos;
};

console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));