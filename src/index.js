
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let ez = [];
  if(matrix === undefined || matrix[0] === undefined){
    return[];
  }
  for (let index = 0; index < matrix.length; index++) {
    if(index % 2 === 0){
      ez = ez.concat(matrix[index]);
    }else ez = ez.concat(matrix[index].reverse());
  }
return ez;
  }
