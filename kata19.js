const queenThreat = function(board) {
  let ind = [];
  // find the index of the white queen and black queen position
  for (let z = 0; z < 8; z++) {
    for (let i = 0; i < 8; i++) {
      if (board[z][i] === 1) {
        ind.push(z);
        ind.push(i);
      }
    }
  }

  // checks if the horizontal and vertical distance of the two queens are equal to each other
  if (Math.abs(ind[0] - ind[2]) === Math.abs(ind[1] - ind[3])) return true;

  else if (ind[0] === ind[2]) return true;

  else if (ind[1] === ind[3]) return true;

  return false;

};

const generateBoard = function(wQueen, bQueen) {
  let board = [];

  for (let x = 0; x < 8; x++) {
    let array = [];

    for (let y = 0; y < 8; y++) {
      if ((x === wQueen[0] && y === wQueen[1])) array.push(1);

      else if (x === bQueen[0] && y === bQueen[1]) array.push(1);

      else array.push(0);
    }
    board.push(array);
  }
  return board;
};

let whiteQueen = [2, 4];
let blackQueen = [5, 1];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.table(generatedBoard);
console.log(queenThreat(generatedBoard));