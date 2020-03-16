import React, { Component } from 'react'
// import { fetchList } from '../../api'

import { List, Avatar, Empty } from 'antd'
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons'

const IconText = ({ icon, text }) => (
	<span>
		{React.createElement(icon, { style: { marginRight: 8 } })}
		{text}
	</span>
)

class newsList extends Component {
	render() {
		let data = this.props.content
		return (
			<List
				itemLayout="vertical"
				size="small"
				pagination={{
					onChange: (page) => {
						console.log(page)
					},
					pageSize: 5,
					total: data.allPages,
					showTotal: (total) => `共 ${total} 页`,
				}}
				dataSource={data.contentlist}
				footer={
					<div>
						<b>ant design</b> footer part
					</div>
				}
				renderItem={(item) => (
					<List.Item
						key={item.title}
						actions={[
							<IconText
								icon={StarOutlined}
								text="156"
								key="list-vertical-star-o"
							/>,
							<IconText
								icon={LikeOutlined}
								text="156"
								key="list-vertical-like-o"
							/>,
							<IconText
								icon={MessageOutlined}
								text="2"
								key="list-vertical-message"
							/>,
						]}
						extra={
							<div className="cardDiv">
								{item.cardUrl && item.cardUrl !== '' ? (
									<img alt="card" src={item.cardUrl} />
								) : (
									<Empty
										image={Empty.PRESENTED_IMAGE_SIMPLE}
									/>
								)}
							</div>
						}
					>
						<List.Item.Meta
							avatar={<Avatar src={item.avatarUrl} />}
							title={<a href={item.href}>{item.realName}</a>}
							description={item.description}
						/>
						{item.content}
					</List.Item>
				)}
			/>
		)
	}
}

export default newsList