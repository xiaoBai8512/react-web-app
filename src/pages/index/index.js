import React, { Component } from 'react'
import { fetchList } from '../../api'

class index extends Component {
	componentWillMount(props) {
		fetchList()
	}

	render() {
		return <div>123</div>
	}
}

export default index
