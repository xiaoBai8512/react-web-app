import React, { Component } from 'react'
import {
	// BrowserRouter as Router,
	Route,
	Switch,
	// withRouter,
} from 'react-router-dom'
import routers from './routers'

const BasicRoute = () => (
	<Switch>
		{routers.map((item, index) => (
			<Route
				exact={item.path === '/'}
				path={item.path}
				component={item.component}
				key={index}
			/>
		))}
	</Switch>
	// constructor(props) {
	// 	super(props)
	// 	this.state = {}
	// 	console.log(9, this.props)
	// }
	// render() {
	// 	return (
	// <Router>

	// </Router>
	// 	)
	// }
)

export default BasicRoute
