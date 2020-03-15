import React, { Component } from 'react'
import { Menu, Row, Col } from 'antd'
import { AppstoreFilled } from '@ant-design/icons'
import routers from '../../router/routers'
import { withRouter } from 'react-router-dom'

const { Item } = Menu

class HeaderNav extends Component {
	constructor(props) {
		super(props)
		const menus = routers
		this.state = {
			menus,
		}
	}
	handleClick = (e) => {
		// console.log('click ', e)
		// this.setState({
		// 	current: e.key,
		// })
		// Router()
		console.log(this.props)
		// console.log(Router())
		// this.props.history.push({
		// 	pathname: keyPath,
		// 	state: {
		// 		id: 3,
		// 	},
		// })
		console.log(this.state.menus[e.key].path)
		this.props.history.push({ pathname: this.state.menus[e.key].path })
	}

	render() {
		return (
			<Row>
				<Col span={24} flex="1">
					<Menu
						onClick={this.handleClick}
						theme="dark"
						mode="horizontal"
						style={{ lineHeight: '64px' }}
						overflowedIndicator={React.createElement(() => {
							return <AppstoreFilled />
						})}
					>
						{this.state.menus.map((item, index) => (
							<Item key={index.toString()}>{item.name}</Item>
						))}
					</Menu>
				</Col>
			</Row>
		)
	}
}

export default withRouter(HeaderNav)
