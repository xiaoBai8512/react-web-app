import React, { Component } from 'react'
import { fetchList } from '../../api'
import './index.scss'
import NewsList from '../../components/NewsList'

class index extends Component {
	constructor(props) {
		super(props)
		this.state = {
			content: [], // 数据体
		}
	}

	componentDidMount(props) {
		this.getData()
	}

	getData() {
		fetchList().then(({ data }) => {
			this.setState({
				content: data.showapi_res_body.pagebean,
			})
		})
	}

	render() {
		return <NewsList content={this.state.content} />
	}
}

export default index
