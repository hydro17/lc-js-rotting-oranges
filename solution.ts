
var orangesRotting = function (grid: number[][]) {
  let rounds = 0;
  let areNewRottenOranges = false;

  do {
    doActionForAllGridFields(grid, (row, col, grid) => {
      if (grid[row][col] == 2) makeNeighbouringOrangesRotten(row, col, grid);
    });

    areNewRottenOranges = false;

    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[i].length; j++) {
        if (grid[i][j] === 3) {
          areNewRottenOranges = true;
        }
      }
    }

    if (areNewRottenOranges === true) rounds++;

    doActionForAllGridFields(grid, (row, col, grid) => {
      if (grid[row][col] === 3) grid[row][col] = 2;
    });

  } while (areNewRottenOranges === true);

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 1) return -1;
    }
  }

  return rounds;
};

function doActionForAllGridFields(grid, action) {
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      action(i, j, grid);
    }
  }
}

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

const oranges1: number[][] = [
  [2, 1, 0, 0],
  [1, 1, 1, 0],
  [0, 1, 0, 0],
  [0, 2, 0, 0]
];

const oranges2: number[][] = [
  [2, 1, 0, 0],
  [1, 1, 1, 0],
  [0, 1, 0, 0],
  [0, 2, 0, 1]
];

console.log(orangesRotting(oranges1));
console.log(oranges1);

console.log(orangesRotting(oranges2));
console.log(oranges2);