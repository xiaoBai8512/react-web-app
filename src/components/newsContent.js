import React, { Component } from 'react'
import { connect } from 'react-redux'

function mapStateToProps(state) {
	return {}
}

class newsContent extends Component {
	render() {
		return <div>新闻</div>
	}
}

export default connect(mapStateToProps)(newsContent)
