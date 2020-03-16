import React, { Component } from 'react'
import { todayStatictic } from '../../api'

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
		return <div>4563123123131</div>
	}
}

export default news
