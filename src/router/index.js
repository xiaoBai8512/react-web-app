import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import index from '../pages/index/index'
import news from '../pages/news/news'

const BasicRoute = () => (
	<BrowserRouter>
		<Switch>
			<Route exact path="/" component={index} />
		</Switch>
		<Switch>
			<Route exact path="/news" component={news} />
		</Switch>
	</BrowserRouter>
)

export default BasicRoute
