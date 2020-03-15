import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import routers from './routers'

class BasicRoute extends Component {
	constructor(props) {
		super(props)
		this.state = {}
		console.log(9,this.props)
	}
	render() {
		return (
			<Router>
				<Switch>
					{routers.map((item, index) => (
						<Route
							exact
							path={item.path}
							component={item.component}
							key={index}
						/>
					))}
				</Switch>
			</Router>
		)
	}
}

export default BasicRoute
