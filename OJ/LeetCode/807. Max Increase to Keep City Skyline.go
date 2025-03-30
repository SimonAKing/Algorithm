package leetcode

func maxIncreaseKeepingSkyline(grid [][]int) int {
	verticalH := len(grid)
	horizontalH := len(grid[0])
	verticalMax := make([]int, verticalH)
	horizontalMax := make([]int, horizontalH)

	for i, g := range grid {
		max := -1
		for _, v := range g {
			if v > max {
				max = v
			}
		}
		verticalMax[i] = max
	}

	for i := 0; i < horizontalH; i++ {
		max := -1
		for j := 0; j < verticalH; j++ {
			if grid[j][i] > max {
				max = grid[j][i]
			}
		}
		horizontalMax[i] = max
	}

	r := 0
	for i, g := range grid {
		for j, v := range g {
			max := verticalMax[i]
			if max > horizontalMax[j] {
				max = horizontalMax[j]
			}
			if v < max {
				r += max - v
			}
		}
	}

	return r
}
