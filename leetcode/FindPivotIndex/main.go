package pivotIndex

func pivotIndex(nums []int) int {
	left := 0
	right := sum(nums)

	for i := 0; i < len(nums); i++ {
		right -= nums[i]
		if left == right {
			return i
		} else {
			left += nums[i]
		}
	}

	return -1
}

func sum(nums []int) int {
	s := 0
	for i := 0; i < len(nums); i++ {
		s += nums[i]
	}
	return s
}
