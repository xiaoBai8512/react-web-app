import axios from 'axios'

// 创建一个 axios 实例
const service = axios.create({
	baseURL: process.env.REACT_APP_BASE_URL,
	withCredentials: true, // 跨域请求，允许保存cookie
	timeout: 100000, // 请求超时时间
})

// HTTPrequest拦截
service.interceptors.request.use(
	(config) => {
		return config
	},
	(error) => {
		return Promise.reject(error)
	},
)
// HTTPresponse拦截
service.interceptors.response.use(
	(data) => {
		// console.log('data', data)
		let res = data.data
		if (res.status && res.status !== 'SUCCEED') {
			let errMsg = res.errorMessage
			if (errMsg) {
			}
		}
		// console.log('data', data)

		return data
	},
	(error) => {
		let errMsg
		if (error && error.response) {
			if (
				error.response.data &&
				error.response.data.status &&
				error.response.data.status === 'FAILED'
			) {
				errMsg = error.response.data.errorMessage
			}
			if ((errMsg)) {
			}
		}

		if ((errMsg)) {
			error.message = errMsg
		}
		return Promise.reject(error)
	},
)
export default service
