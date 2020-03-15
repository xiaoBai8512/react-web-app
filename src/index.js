import React from 'react'
import ReactDOM from 'react-dom'

// import App from './App';
import * as serviceWorker from './serviceWorker'

import { BrowserRouter } from 'react-router-dom'
import BasicRoute from './router'
import { ConfigProvider, Layout, Menu, Breadcrumb, Row, Col } from 'antd'
import {
	UserOutlined,
	LaptopOutlined,
	NotificationOutlined,
} from '@ant-design/icons'
import zhCN from 'antd/es/locale/zh_CN'
import moment from 'moment'
import 'moment/locale/zh-cn'

import 'antd/dist/antd.css'
import './index.css'
import HeaderNav from './components/HeaderNav'
import { createBrowserHistory } from 'history'

const history = createBrowserHistory()

moment.locale('zh-cn')

const { SubMenu } = Menu
const { Header, Content, Footer, Sider } = Layout

// console.log(26, Router())

ReactDOM.render(
	<BrowserRouter>
		<ConfigProvider locale={zhCN}>
			<Layout>
				<Header className="header">
					<div className="logo" />
					<HeaderNav></HeaderNav>
				</Header>

				<Content style={{ padding: '0 50px' }}>
					<Breadcrumb style={{ margin: '16px 0' }}>
						<Breadcrumb.Item>Home</Breadcrumb.Item>
						<Breadcrumb.Item>List</Breadcrumb.Item>
						<Breadcrumb.Item>App</Breadcrumb.Item>
					</Breadcrumb>
					<Layout
						className="site-layout-background"
						style={{ padding: '24px 0' }}
					>
						<Sider
							className="site-layout-background"
							width={200}
							breakpoint="lg"
							collapsedWidth="0"
							onBreakpoint={(broken) => {
								console.log(broken)
							}}
							onCollapse={(collapsed, type) => {
								console.log(collapsed, type)
							}}
						>
							<Menu
								mode="inline"
								defaultSelectedKeys={['1']}
								defaultOpenKeys={['sub1']}
								style={{ height: '100%' }}
							>
								<SubMenu
									key="sub1"
									title={
										<span>
											<UserOutlined />
											subnav 1
										</span>
									}
								>
									<Menu.Item key="1">option1</Menu.Item>
									<Menu.Item key="2">option2</Menu.Item>
									<Menu.Item key="3">option3</Menu.Item>
									<Menu.Item key="4">option4</Menu.Item>
								</SubMenu>
								<SubMenu
									key="sub2"
									title={
										<span>
											<LaptopOutlined />
											subnav 2
										</span>
									}
								>
									<Menu.Item key="5">option5</Menu.Item>
									<Menu.Item key="6">option6</Menu.Item>
									<Menu.Item key="7">option7</Menu.Item>
									<Menu.Item key="8">option8</Menu.Item>
								</SubMenu>
								<SubMenu
									key="sub3"
									title={
										<span>
											<NotificationOutlined />
											subnav 3
										</span>
									}
								>
									<Menu.Item key="9">option9</Menu.Item>
									<Menu.Item key="10">option10</Menu.Item>
									<Menu.Item key="11">option11</Menu.Item>
									<Menu.Item key="12">option12</Menu.Item>
								</SubMenu>
							</Menu>
						</Sider>
						<Content style={{ padding: '0 24px', minHeight: 280 }}>
							<>
								<Row>
									<Col span={24}>
										<BasicRoute history={history} />
									</Col>
								</Row>
							</>
						</Content>
					</Layout>
				</Content>
				<Footer style={{ textAlign: 'center' }}>
					Web ©2020 Created by GuLei
				</Footer>
			</Layout>
		</ConfigProvider>
	</BrowserRouter>,
	document.getElementById('root'),
)

serviceWorker.unregister()
