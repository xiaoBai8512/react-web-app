import React, { Component } from 'react'
import { yq_newsList } from '../../api'

import YQNewsList from '../../components/YQNewsList'

// import Statistic from '../../components/Statistic'

// function (state) {
// 	return {}
// }

class news extends Component {
	constructor(props) {
		super(props)
		this.state = {
			newsList: [],
		}
	}

	componentDidMount() {
		this.getData()
	}

	getData() {
		yq_newsList().then(({ data }) => {
			this.setState({
				newsList: data.showapi_res_body,
			})
		})
	}

	render() {
		return <YQNewsList newsList={this.state.newsList} />
	}
}

export default news
