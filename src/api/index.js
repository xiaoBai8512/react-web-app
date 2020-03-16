import request from '../plugin/axios'

// 淘女郎
export function fetchList(query) {
	return request({
		url: '/126-2',
		method: 'post',
		data: query ? query : {},
	})
}

// 疫情数据
export function todayStatistic(query) {
	return request({
		url: '/2217-2',
		method: 'post',
		data: query ? query : {},
	})
}
