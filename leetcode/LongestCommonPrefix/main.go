package longestcommonprefix

func longestCommonPrefix(strs []string) string {
	commonprefix := ""

	for i := 0; i < len(strs[0]); i++ {
		curr := strs[0][i]
		iscommon := true

		for _, str := range strs {
			if i >= len(str) || str[i] != curr {
				iscommon = false
				break
			}
		}

		if iscommon {
			commonprefix += string(curr)
		} else {
			break
		}
	}

	return commonprefix
}
