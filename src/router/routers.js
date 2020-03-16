import index from '../containers/index'
import news from '../containers/news'
import statistic from '../containers/statistic'

export default [
	{
		name: '首页',
		path: '/',
		component: index,
	},
	{
		name: '新闻',
		path: '/news',
		component: news,
	},
	{
		name: '疫情统计',
		path: '/statistic',
		component: statistic,
	},
]
