import React, { Component } from 'react'
import './Table.scss'
// import $ from 'jquery';

class Table extends Component {
	constructor(props) {
		super(props)

		this.state = {}
	}

	componentDidMount() {}

	componentDidUpdate() {}

	render() {
		let tableJson = this.props.data
		let table_rows = []
		let table_head = []
		if (tableJson !== undefined) {
			// Create table headers
			table_head = tableJson.head.map(th => <th>{th.text}</th>)

			// Create table body
			table_rows = tableJson.rows.map(tr => {
				// Create cells
				let cells = tr.values.map(cell => {
					if (cell.link) {
						return (
							<td>
								<a href={cell.link}>{cell.value}</a>
							</td>
						)
					} else {
						return <td>{cell.value}</td>
					}
				})

				// Create rows
				// switch (tr.row_type) {
				// 	case 'heading':
				// 		return <tr class="row-heading">{cells}</tr>
				// 	case 'subheading':
				// 		return <tr class="row-subheading">{cells}</tr>
				// 	case 'highlight':
				// 		return <tr class="row-highlight">{cells}</tr>
				// 	case 'normal':
				// 		return <tr class="">{cells}</tr>
				// 	default:
				// 		return <tr>{cells}</tr>
				// }
				return <tr class={tr.row_type}>{cells}</tr>
			})
		}

		return (
			<div className="table-type-1">
				<table>
					<thead>
						<tr>{table_head}</tr>
					</thead>
					<tbody>{table_rows}</tbody>
				</table>
			</div>
		)
	}
}

export default Table
