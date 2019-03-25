/* 输入 emoji.png，返回 .png */

const extname = filename =>
	/.+\..+/.test(filename) ? `.${filename.split('.').pop()}` : ''
