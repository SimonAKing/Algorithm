/* *
 * ! 矩形一 的左下角 x/y 坐标 均小于等于 矩形二 的右上角 x/y 坐标 , 并且
 * ? 矩形二 的左下角 x/y 坐标 均小于等于 矩形一 的右上角 x/y 坐标
 * 即可说明 , 两个矩形 相互重叠
 */
const isOverlap = (
	{ x: x1, y: y1, width: w1, height: h1 },
	{ x: x2, y: y2, width: w2, height: h2 }
) => x1 <= x2 + w2 && y1 <= y2 + h2 && x2 <= x1 + w1 && y2 <= y1 + h1
