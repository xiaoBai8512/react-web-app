import request from '../plugin/axios'

export function fetchList(query) {
	return request({
		url: '/126-2',
		method: 'get',
		data: query ? query : {},
	})
}
