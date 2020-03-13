import request from '../plugin/axios'

export function fetchList(query) {
	return request({
		url: '/109-35',
		method: 'post',
		data: query,
	})
}
