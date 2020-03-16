import React, { Component } from 'react'
import { todayStatistic } from '../../api'

// import Statistic from '../../components/Statistic'

// function (state) {
// 	return {}
// }

class news extends Component {
	constructor(props) {
		super(props)
		this.state = {
			todayStatisticData: [],
		}
	}

	componentDidMount() {
		this.getData()
	}

	getData() {
		todayStatistic().then(({ data }) => {
			this.setState({
				todayStatisticData: data.showapi_res_body.todayDetailList,
			})
		})
	}

	render() {
		return <div></div>
	}
}

export default news
