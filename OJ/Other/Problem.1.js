// 1. promise  实现等待超时机制（异步请求超过10s则抛错）
const fetchWithTimeout = async (fetch, errorHandle, successHandle, timeout = 10) => {
	let isSuccess = false
	let isTimeout = false

	setTimeout(() => {
		if (!isSuccess) {
			isTimeout = true
		}
	}, timeout)

	const result = await Promise.resolve(fetch())
	if (isTimeout) { return errorHandle('TIMEOUT') }

	isSuccess = true
	successHandle(result)
}
