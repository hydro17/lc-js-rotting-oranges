
var orangesRotting = function (grid: number[][]) {
  const fieldsTocheck = [[]];
  let round = fieldsTocheck.length - 1;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 2) addNeighboursOfRottenOrange(i, j, grid, fieldsTocheck, round);
    }
  }

  console.log(fieldsTocheck);

  do {
    fieldsTocheck.push([]);
    let nextRound = fieldsTocheck.length - 1;

    while (fieldsTocheck[round].length > 0) {
      const [i, j] = fieldsTocheck[round].pop();
      getRottenOrange(i, j, grid, fieldsTocheck, nextRound);
    }
    round = nextRound;

  } while (fieldsTocheck[round].length > 0);

  return round - 1;
};

const getRottenOrange = (i, j, grid, fieldsTocheck, round) => {
  grid[i][j] = 2;
  addNeighboursOfRottenOrange(i, j, grid, fieldsTocheck, round);
}

const addNeighboursOfRottenOrange = (i, j, grid, fieldsTocheck, round) => {
  let row, col;

  row = i - 1;
  col = j;
  if (row >= 0 && grid[row][col] === 1) fieldsTocheck[round].unshift([row, col]);

  row = i;
  col = j + 1;
  if (col < grid[i].length && grid[row][col] === 1) fieldsTocheck[round].unshift([row, col]);

  row = i + 1;
  col = j;
  if (row < grid.length && grid[row][col] === 1) fieldsTocheck[round].unshift([row, col]);

  row = i;
  col = j - 1;
  if (col >= 0 && grid[row][col] === 1) fieldsTocheck[round].unshift([row, col]);
}

//--- tests ---

const oranges: number[][] = [
  [2, 1, 1],
  [1, 1, 0],
  [0, 1, 0]
];

console.log(orangesRotting(oranges));