import React, { Component } from 'react'
import { fetchList } from '../../api'
import './index.scss'


class index extends Component {
	constructor(props) {
		super(props)
		this.state = {
			contentlist: [],
		}
	}
	componentWillMount(props) {
		fetchList().then(({ data }) => {
			console.log(16, data)
			console.log(data.showapi_res_body.pagebean.contentlist)
			this.setState({
				contentlist: data.showapi_res_body.pagebean.contentlist,
			})
		})
	}

	render() {
		return (
			<div>
				<div className="contentlist">
					{/* {this.state.contentlist} */}
					{this.state.contentlist.map((item, index) => {
						// console.log(item.avatarUrl)
						return (
							<img
								className="avatarUrl"
								src={item.avatarUrl}
								key={index}
							/>
						)
					})}
				</div>
			</div>
		)
	}
}

export default index
