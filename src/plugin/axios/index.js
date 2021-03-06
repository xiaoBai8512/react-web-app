import axios from 'axios'
import qs from 'qs'

// 创建一个 axios 实例
const service = axios.create({
	baseURL: process.env.REACT_APP_BASE_URL,
	// baseURL: '/api',
	// withCredentials: true, // 跨域请求，允许保存cookie
	timeout: 100000, // 请求超时时间
	headers: {
		// 'Enc-type': 'application/x-www-form-urlencoded',
		'Content-Type': 'application/x-www-form-urlencoded',
	},
})

// HTTPrequest拦截
service.interceptors.request.use(
	(config) => {
		// const { userId, activationCode, latestOrderSn } =
		console.log(19, config)
		const commonData = {
			showapi_appid: '42222',
			showapi_sign: '42932bad205a407a8429ba513cfbece1',
		}

		let joinedCommonDataStr = ''

		for (const prop in commonData) {
			joinedCommonDataStr += `&${prop}=${commonData[prop]}`
		}

		if (config.method === 'get') {
			if (config.url.indexOf('?') > -1) {
				config.url += joinedCommonDataStr
			} else {
				config.url += '?' + joinedCommonDataStr.substr(1)
			}

			return config
		}
		if (config.method === 'post' && typeof config.data === Object) {
			Object.assign(config.data, commonData)
			return config
		} else {
			// const formData = new FormData()
			// console.log(42, formData)
			// let params = Object.assign(config.data, commonData)
			// console.log(44, params)
			// Object.keys(params).forEach((key) => {
			// 	formData.append(
			// 		key,
			// 		Object.assign(config.data, commonData)[key],
			// 	)
			// })
			// if (config.url.indexOf('?') > -1) {
			// 	config.url += joinedCommonDataStr
			// } else {
			// 	config.url += '?' + joinedCommonDataStr.substr(1)
			// }
			// let params = Object.assign(config.data, commonData)
			// console.log(51, params)

			// const formData = new FormData()
			// Object.keys(params).forEach((key) => {
			// 	formData.append(key, params[key])
			// })
			if (config.url.indexOf('?') > -1) {
				config.par += joinedCommonDataStr
			} else {
				config.url += '?' + joinedCommonDataStr.substr(1)
			}
			qs.stringify(joinedCommonDataStr)
			console.log(52, joinedCommonDataStr)
			return config
		}
	},
//TODO: 217713900
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
			if (errMsg) {
			}
		}

		if (errMsg) {
			error.message = errMsg
		}
		return Promise.reject(error)
	},
)
export default service
