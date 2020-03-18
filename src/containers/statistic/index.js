import React, { Component } from 'react'
import { todayStatistic } from '../../api'

import Statistics from '../../components/Statistics'

class news extends Component {
	constructor(props) {
		super(props)
		this.state = {
			todayStatisticData: null,
		}
	}

	componentDidMount() {
		this.getData()
	}

	getData() {
		todayStatistic().then(({ data }) => {
			this.setState({
				todayStatisticData: data.showapi_res_body,
			})
		})
	}

	render() {
		return <Statistics yq_Data={this.state.todayStatisticData} />
	}
}

export default news
