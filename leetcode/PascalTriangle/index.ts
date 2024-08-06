function generate(numRows: number): number[][] {
  let list: number[][] = [[1]];

  if (numRows === 1) {
    return list;
  }

  for (let i = 1; i < numRows; i++) {
    let row = new Array(i + 1);
    row[0] = 1;
    row[i] = 1;
    let prevrow = list[i - 1];

    for (let j = 1; j < i; j++) {
      row[j] = prevrow[j] + prevrow[j - 1];
    }

    list.push(row);
  }

  return list;
};
