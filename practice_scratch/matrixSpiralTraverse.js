// posted by arlo on discord

function spiralTraverse(matrix) {
  // Write your code here.
  const result = [];

  let startrow = 0;
  let startcol = 0;
  let endrow = matrix.length - 1;
  let endcol = matrix[0].length - 1;
  console.log(endrow);
  console.log(endcol);

  while (startrow <= endrow && startcol <= endcol) {
    for (let i = startcol; i <= endcol; i++) {
      result.push(matrix[startrow][i]);
    }
    for (let j = startrow + 1; j <= endrow; j++) {
      result.push(matrix[j][endcol]);
    }
    for (let k = endcol - 1; k >= startcol; k--) {
      if (startrow === endrow) break;
      result.push(matrix[endrow][k]);
    }
    for (let l = endrow - 1; l > startrow; l--) {
      if (startcol === endcol) break;
      result.push(matrix[l][startcol]);
    }

    startrow += 1;
    endrow -= 1;
    startcol += 1;
    endcol -= 1;
  }
  return result;
}
