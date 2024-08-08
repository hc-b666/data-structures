function spiralOrder(matrix: number[][]): number[] {
  if (matrix.length === 0) {
    return [];
  }

  let result: number[] = [];
  let top = 0;
  let bottom = matrix.length - 1;
  let left = 0;
  let right = matrix[0].length - 1;

  while (top <= bottom && left <= right) {
    // traverse from left to right
    for (let i = left; i <= right; i++) {
      result.push(matrix[top][i]);
    }
    top++;

    // traverse from top to bottom
    for (let j = top; j <= bottom; j++) {
      result.push(matrix[j][right]);
    }
    right--;

    // traverse from right to left
    if (top <= bottom) {
      for (let k = right; k >= left; k--) {
        result.push(matrix[bottom][k]);
      }
      bottom--;
    }

    // traverse from bottom to top
    if (left <= right) {
      for (let l = bottom; l >= top; l--) {
        result.push(matrix[l][left]);
      }
      left++;
    }
  }

  return result;
}
