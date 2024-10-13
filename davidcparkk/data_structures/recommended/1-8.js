// Arrays and Strings
// Zero Matrix
// Write an algorithm such that if an element in an M x N matrix is 0, its entire row and column are set to 0

const zeroMatrix = function(matrix){
  if (matrix.length === 0) {return;}

  let zeroScan = checkZeros(matrix);

  zeroifyCols(matrix, zeroScan);
  zeroifyRows(matrix, zeroScan);

};

const checkZeros = function(matrix){
  let matrixHeight = matrix.length;
  let matrixWidth = matrix[0].length;
  let rowsToZeroify = {};
  let colsToZeroify = {};

  for (let i = 0; i < matrixHeight; i ++ ) {
    for (let j = 0; j < matrixWidth; j ++ ) {
      if (matrix[i][j] === 0) {
        rowsToZeroify[i] = true;
        colsToZeroify[j] = true;
      }
    }
  }
  return {
    rowsToZeroify: rowsToZeroify,
    colsToZeroify: colsToZeroify,
  };
};

const printMatrix = function(matrix){
  for( let i = 0; i < matrix.length; i++) {
    console.log(matrix[i]);
  }
}

const zeroifyCol = function(matrix,col){
  for(let i = 0; i < matrix.length; i ++){
    matrix[i][col] = 0;
  }
}

const zeroifyCols = function(matrix, zeroScan) {
  for( let col in zeroScan.colsToZeroify) {
    zeroifyCol(matrix, Number(col));
  }
}

const zeroifyRow = function(matrix,col){
  for(let i = 0; i < matrix[row].length; i ++){
    matrix[row][i] = 0;
  }
}

const zeroifyRows = function(matrix, zeroScan) {
  for( let row in zeroScan.rowsToZeroify) {
    zeroifyRow(matrix, Number(row));
  }
};

let testMatrix = [
  [1,1,1,1],
  [1,1,1,1],
  [1,0,1,1],
  [1,1,1,1],
  [1,1,1,1],
  [1,1,1,1]
];

console.log('before');
printMatrix(testMatrix);
// console.log(checkZeros(testMatrix1));

zeroMatrix(testMatrix);

console.log('after');
printMatrix(testMatrix);

