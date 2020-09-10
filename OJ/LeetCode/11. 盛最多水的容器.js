const maxArea = points => {
  let maxArea = 0
  for (let i = 0; i < points.length; ++i) {
    for (let j = i + 1; j < points.length; ++j) {
      const height = points[i] < points[j] ? points[i] : points[j]
      const width = j - i
      const currentArea = height * width
      maxArea = maxArea > currentArea ? maxArea : currentArea
    }
  }
  return maxArea
}
