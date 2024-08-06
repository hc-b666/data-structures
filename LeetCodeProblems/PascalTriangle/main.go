package pascaltriangle

func generate(numRows int) [][]int {
	list := [][]int{{1}}

	if numRows == 1 {
		return list
	}

	for i := 1; i < numRows; i++ {
		row := make([]int, i+1)
		row[0], row[i] = 1, 1

		prevRow := list[i-1]

		for j := 1; j < i; j++ {
			row[j] = prevRow[j-1] + prevRow[j]
		}

		list = append(list, row)
	}

	return list
}
