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
			// console.log(16, data)
			// console.log(data.showapi_res_body.pagebean.contentlist)
			this.setState({
				contentlist: data.showapi_res_body.pagebean.contentlist,
			})
		})
	}

	render() {
		return (
			<div>
				<div className="contentlist">
					{this.state.contentlist.map((item, index) => {
						// console.log(item.avatarUrl)
						return (
							<div key={index}>
								<img
									className="avatarUrl"
									src={item.avatarUrl}
								/>
								<span>{item.realName}</span>
								<span>{item.totalFanNum}</span>
								<span>{item.userId}</span>
								<span>{item.city}</span>
								<span>{item.height}</span>
								<span>{item.weight}</span>
								{/* <span>{item.imgList}</span> */}
								<span>
									<a href={item.link} target="_black">Link</a>
								</span>

								{/* <img className="cardUrl" src={item.cardUrl} /> */}
							</div>
						)
					})}
				</div>
			</div>
		)
	}
}

export default index
