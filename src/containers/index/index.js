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
	onChange(e) {
		// const that = this
		// console.log(18, e)
		this.getData(e)
	}
	getData(e) {
		const params = {
			page: e ? e : 1,
		}
		fetchList(params).then(({ data }) => {
			this.setState({
				content: data.showapi_res_body.pagebean,
			})
		})
	}

	render() {
		return (
			<NewsList
				content={this.state.content}
				changePage={this.onChange.bind(this)}
			/>
		)
	}
}

export default index
