import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Statistic, Card, Row, Col, Table } from 'antd'
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons'
// import _ from 'lodash'

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

	componentWillReceiveProps(nextProps) {
		this.setState({
			data: nextProps.yq_Data,
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
				title: '操作',
				key: 'operation',
				fixed: 'right',
				width: 30,
				render: () => <a>详细数据</a>,
			},
		]
		const { data } = this.state ? this.state : {}
		console.log(data)
		console.log(this)
		return (
			<div>
				<div className="site-statistic-demo-card">
					<div
						style={{
							display: 'flex',
							justifyContent: 'center',
							flexDirection: 'column',
						}}
					>
						<h2>全国疫情数据（总计/人数）：</h2>
						<h5>
							数据发布时间：
							{data.updateTime ? data.updateTime : 0}
						</h5>
					</div>
					<Row gutter={16}>
						<Col span={6}>
							<Card>
								<Statistic
									title={<h4>确诊人数</h4>}
									value={
										data.todayStatictic
											? data.todayStatictic.confirmedNum
											: 0
									}
									valueStyle={{
										color: '#cf1322',
									}}
									prefix={<ArrowUpOutlined />}
								/>
							</Card>
						</Col>
						<Col span={6}>
							<Card>
								<Statistic
									title={<h4>死亡人数</h4>}
									value={
										data.todayStatictic
											? data.todayStatictic.deadNum
											: 0
									}
									valueStyle={{ color: '#777777' }}
									prefix={<ArrowDownOutlined />}
								/>
							</Card>
						</Col>
						<Col span={6}>
							<Card>
								<Statistic
									title={<h4>治愈人数</h4>}
									value={
										data.todayStatictic
											? data.todayStatictic.curedNum
											: 0
									}
									valueStyle={{ color: '#3f8600' }}
									prefix={<ArrowUpOutlined />}
								/>
							</Card>
						</Col>
						<Col span={6}>
							<Card>
								<Statistic
									title={<h4>重症病例</h4>}
									value={
										data.todayStatictic
											? data.todayStatictic.seriousNum
											: 0
									}
									valueStyle={{ color: '#FF9933' }}
									prefix={<ArrowDownOutlined />}
								/>
							</Card>
						</Col>
					</Row>
				</div>
				<Table
					columns={columns}
					// dataSource={this.props.yq_Data.todayDetailList}
					dataSource={data.todayDetailList}
					scroll={{ x: 1500, y: 1000 }}
					rowKey={(record, index) => `complete${record.id}${index}`}
				/>
			</div>
		)
	}
}

export default connect(mapStateToProps)(Statistics)
