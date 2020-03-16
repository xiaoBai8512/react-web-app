import request from '../plugin/axios'

// 淘女郎
export function fetchList(query) {
	return request({
		url: '/126-2',
		method: 'get',
		params: query ? query : '',
	})
}

// 疫情数据
export function todayStatictic(query) {
	return request({
		url: '/2217-2',
		method: 'post',
		params: query ? query : {},
	})
}
