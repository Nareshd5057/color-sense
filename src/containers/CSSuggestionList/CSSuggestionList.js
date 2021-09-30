import React, { Component } from 'react'
import { SpringGrid, measureItems, makeResponsive } from 'react-stonecutter'

const Grid = makeResponsive(SpringGrid, {
	maxWidth: 1920,
	minPadding: 100,
})

class CSSuggestionList extends Component {
	render() {
		// console.log(this.props.data)
		return (
			<Grid
				className="grid"
				component="ul"
				columns={null}
				columnWidth={200}
				columnHeight={200}
				gutterWidth={20}
				gutterHeight={20}
				perspective={600}
				// duration={useCSS ? dur	ation : null}
				// easing={useCSS ? easing : null}
				// component="ul"
				// columns={5}
				// columnWidth={250}
				// gutterWidth={5}
				// gutterHeight={5}
				// itemHeight={200}
				// springConfig={{ stiffness: 170, damping: 26 }}
				// enterExitStyle={'simple'}
			>
				{Object.keys(this.props.data).map((item, index) => {
					return (
						<li
							key={index}
							className="item_grid"
							style={{
								backgroundColor: this.props.data[item].hex,
								width: 200,
								height: 150,
							}}
						>
							<span>{this.props.data[item].name}</span>
							<span>{this.props.data[item].hex}</span>
						</li>
					)
				})}
			</Grid>
		)
	}
}
export default CSSuggestionList
