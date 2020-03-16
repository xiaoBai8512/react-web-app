import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Statistic, Card, Row, Col, Table } from 'antd'
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons'
import _ from 'lodash'

import './index.scss'

function mapStateToProps(state) {
	return {}
}

class Statistics extends Component {
	constructor(props) {
		super(props)
		this.state = {
			data: [],
		}
	}
	// componentDidMount() {
	// 	setTimeout(() => {
	// 		this.setState({
	// 			data: this.props.yq_Data.todayDetailList,
	// 		})
	// 	}, 1000)
	// }

	componentWillReceiveProps(nextProps) {
		this.setState({
			data: nextProps.yq_Data.todayDetailList,
		})
	}
	render() {
		const columns = [
			{
				title: '省份',
				width: 40,
				dataIndex: 'provinceName',
				key: 'provinceName',
				fixed: 'left',
			},
			{
				title: '确诊病例',
				width: 50,
				dataIndex: 'confirmedNum',
				key: 'confirmedNum',
				// fixed: 'left',
			},
			// {
			// 	title: '疑似病例',
			// 	width: 100,
			// 	dataIndex: 'suspectedNum',
			// 	key: 'suspectedNum',
			// 	// fixed: 'left',
			// },
			{
				title: '死亡病例',
				dataIndex: 'deadNum',
				key: 'deadNum',
				width: 50,
			},
			{
				title: '治愈',
				dataIndex: 'curedNum',
				key: 'curedNum',
				width: 100,
			},
			{
				title: 'Action',
				key: 'operation',
				fixed: 'right',
				width: 30,
				render: () => <a>action</a>,
			},
		]
		const { data } = this.state
		console.log(data)
		return (
			<div>
				<div className="site-statistic-demo-card">
					<Row gutter={16}>
						<Col span={12}>
							<Card>
								<Statistic
									title="Active"
									value={11.28}
									precision={2}
									valueStyle={{ color: '#3f8600' }}
									prefix={<ArrowUpOutlined />}
									suffix="%"
								/>
							</Card>
						</Col>
						<Col span={12}>
							<Card>
								<Statistic
									title="Idle"
									value={9.3}
									precision={2}
									valueStyle={{ color: '#cf1322' }}
									prefix={<ArrowDownOutlined />}
									suffix="%"
								/>
							</Card>
						</Col>
					</Row>
				</div>
				<Table
					columns={columns}
					// dataSource={this.props.yq_Data.todayDetailList}
					dataSource={this.state.data}
					scroll={{ x: 1500, y: 1000 }}
					rowKey={(record, index) => `complete${record.id}${index}`}
				/>
				,
			</div>
		)
	}
}

export default connect(mapStateToProps)(Statistics)
