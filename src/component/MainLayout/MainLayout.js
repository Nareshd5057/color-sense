import React, { Component } from 'react'
import CSmainInput from '../CSmainInput/CSmainInput'
import CSSuggestion from '../CSSuggestion/CSSuggestion'

export default class MainLayout extends Component {
	render() {
		return (
			<div>
				<CSmainInput />
				{/* <CSSuggestion /> */}
			</div>
		)
	}
}
