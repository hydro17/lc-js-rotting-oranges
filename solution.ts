
var orangesRotting = function (grid: number[][]) {
  let rounds = 0;
  let areNewRottenOranges = false;

  do {
    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[i].length; j++) {
        if (grid[i][j] === 2) {
          makeNeighbouringOrangesRotten(i, j, grid);
        }
      }
    }

    areNewRottenOranges = false

    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[i].length; j++) {
        if (grid[i][j] === 3) {
          areNewRottenOranges = true;
        }
      }
    }

    if (areNewRottenOranges) rounds++;

    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[i].length; j++) {
        if (grid[i][j] === 3) grid[i][j] = 2;
      }
    }
  } while (areNewRottenOranges);

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 1) return -1;
    }
  }

  return rounds;
};

function makeNeighbouringOrangesRotten(i, j, grid) {
  makeOrangeRotten(i - 1, j, grid);
  makeOrangeRotten(i, j + 1, grid);
  makeOrangeRotten(i + 1, j, grid);
  makeOrangeRotten(i, j - 1, grid);
}

function makeOrangeRotten(row, col, grid) {
  if (isFieldValid(row, col, grid) && grid[row][col] === 1) {
    grid[row][col] = 3;
  }
}

function isFieldValid(row, col, grid) {
  return row >= 0 && row < grid.length && col >= 0 && col < grid[row].length;
}

//--- tests ---

const oranges: number[][] = [
  [2, 1, 0, 0],
  [1, 1, 0, 0],
  [0, 1, 0, 0],
  [0, 2, 0, 0]
];

console.log(orangesRotting(oranges));

console.log(oranges);