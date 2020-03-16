import React, { Component } from 'react'
import { todayStatictic } from '../../api'

import Statictic from '../../components/Statictic'

// function (state) {
// 	return {}
// }

class news extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	componentDidMount() {
		this.getData()
	}

	getData() {
		todayStatictic().then((data) => {
			console.log(data)
		})
	}

	render() {
		return <Statictic />
	}
}

export default news
