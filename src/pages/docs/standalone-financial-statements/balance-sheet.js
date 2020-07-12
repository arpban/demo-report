import React from 'react'
import { Link } from 'gatsby'
import Table from '../../../components/Table/Table'
import Layout from '../../../components/layout'
import jsonData from '../../../docs/financial_statements.json'

const loadData = () => JSON.parse(JSON.stringify(jsonData))

const BalanceSheet = () => {
	// let data = loadData()
	// console.log(data)

	let tableJson = {
		head: [
			{
				key: 'particulars',
				text: 'Particulars',
			},
			{
				key: 'note_no',
				text: 'Note No.',
			},
			{
				key: '2018',
				text: 'Mar 18',
			},
			{
				key: '2017',
				text: 'Mar 17',
			},
		],
		rows: [
			{
				order: 1,
				values: [
					{
						value: 'Assets',
						link: null,
					},
					{
						value: '',
					},
					{
						value: '',
					},
					{
						value: '',
					},
				],
				row_type: 'heading',
			},
			{
				order: 2,
				values: [
					{
						value: 'Non-current Assets',
						link: null,
					},
					{
						value: '',
					},
					{
						value: '',
					},
					{
						value: '',
					},
				],
				row_type: 'subheading',
			},
			{
				order: 3,
				values: [
					{
						value: 'Property, Plant and Equipment',
						link: null,
					},
					{
						value: '3A',
						link: 'http://arban.co',
					},
					{
						value: 2503.04,
					},
					{
						value: 2451,
					},
				],
			},
			{
				order: 4,
				values: [
					{
						value: 'Capital, Work in Progress',
						link: null,
					},
					{
						value: '3A',
						link: 'http://arban.co',
					},
					{
						value: 105.04,
					},
					{
						value: 25,
					},
				],
			},
			{
				order: 4,
				values: [
					{
						value: 'Intangible Assets',
						link: null,
					},
					{
						value: '3B',
						link: 'http://arban.co',
					},
					{
						value: 3.04,
					},
					{
						value: 2,
					},
				],
			},
			{
				order: 3,
				values: [
					{
						value: 'Financial assets',
						link: null,
					},
					{
						value: '3A',
						link: 'http://arban.co',
					},
					{
						value: 2503.04,
					},
					{
						value: 2451,
					},
				],
			},
			{
				order: 3,
				values: [
					{
						value: 'Investments',
						link: null,
					},
					{
						value: '4',
						link: 'http://arban.co',
					},
					{
						value: 787,
					},
					{
						value: 972,
					},
				],
				row_type: 'subrow',
			},
			{
				order: 3,
				values: [
					{
						value: 'Loans',
						link: null,
					},
					{
						value: '5',
						link: 'http://arban.co',
					},
					{
						value: 0.59,
					},
					{
						value: 0.4,
					},
				],
				row_type: 'subrow',
			},
			{
				order: 3,
				values: [
					{
						value: 'Other financial assets',
						link: null,
					},
					{
						value: '6',
						link: 'http://arban.co',
					},
					{
						value: 8,
					},
					{
						value: 1,
					},
				],
				row_type: 'subrow',
			},
			{
				order: 3,
				values: [
					{
						value: 'Other non current assets',
						link: null,
					},
					{
						value: '7',
						link: 'http://arban.co',
					},
					{
						value: 85.5,
					},
					{
						value: 70,
					},
				],
			},
			{
				order: 3,
				values: [
					{
						value: 'Total Non-current Assets',
						link: null,
					},
					{
						value: '',
					},
					{
						value: 3494,
					},
					{
						value: 2451,
					},
				],
				row_type: 'highlight',
			},
			{
				order: 3,
				values: [
					{
						value: 'Current Assets',
						link: null,
					},
					{
						value: '',
					},
					{
						value: '',
					},
					{
						value: '',
					},
				],
				row_type: 'subheading',
			},
			{
				order: 3,
				values: [
					{
						value: 'Inventories',
						link: null,
					},
					{
						value: '8',
						link: 'http://arban.co',
					},
					{
						value: 2116,
					},
					{
						value: 1589,
					},
				],
			},
			{
				order: 3,
				values: [
					{
						value: 'Financial assets',
						link: null,
					},
					{
						value: '',
					},
					{
						value: '',
					},
					{
						value: '',
					},
				],
			},
			{
				order: 3,
				values: [
					{
						value: 'Investments',
						link: null,
					},
					{
						value: '9',
						link: 'http://arban.co',
					},
					{
						value: 804.04,
					},
					{
						value: 670,
					},
				],
				row_type: 'subrow',
			},
			{
				order: 3,
				values: [
					{
						value: 'Trade Receivables',
						link: null,
					},
					{
						value: '19',
						link: 'http://arban.co',
					},
					{
						value: 727.04,
					},
					{
						value: 600,
					},
				],
				row_type: 'subrow',
			},
			{
				order: 3,
				values: [
					{
						value: 'Cash and cash equivalents',
						link: null,
					},
					{
						value: '11',
						link: 'http://arban.co',
					},
					{
						value: 65,
					},
					{
						value: 38,
					},
				],
				row_type: 'subrow',
			},
			{
				order: 3,
				values: [
					{
						value: 'Other current assets',
						link: null,
					},
					{
						value: '',
					},
					{
						value: 316,
					},
					{
						value: 271,
					},
				],
			},
			{
				order: 3,
				values: [
					{
						value: 'Total Current Assets',
						link: null,
					},
					{
						value: '',
					},
					{
						value: 4201,
					},
					{
						value: 3411,
					},
				],
				row_type: 'highlight',
			},
			{
				order: 3,
				values: [
					{
						value: 'Total Assets',
						link: null,
					},
					{
						value: '',
					},
					{
						value: 7695.96,
					},
					{
						value: 6958.53,
					},
				],
				row_type: 'highlight2',
			},
			{
				order: 3,
				values: [
					{
						value: 'Equities & Liabilities',
						link: null,
					},
					{
						value: '',
					},
					{
						value: '',
					},
					{
						value: '',
					},
				],
				row_type: 'heading',
			},
			{
				order: 3,
				values: [
					{
						value: 'Equity',
						link: null,
					},
					{
						value: '',
					},
					{
						value: '',
					},
					{
						value: '',
					},
				],
				row_type: 'subheading',
			},
			{
				order: 3,
				values: [
					{
						value: 'Equity share capital',
						link: null,
					},
					{
						value: '16',
						link: 'http://arban.co',
					},
					{
						value: 57,
					},
					{
						value: 57,
					},
				],
			},
			{
				order: 3,
				values: [
					{
						value: 'Other equity',
						link: null,
					},
					{
						value: '17',
						link: 'http://arban.co',
					},
					{
						value: 4574,
					},
					{
						value: 3900,
					},
				],
			},
			{
				order: 3,
				values: [
					{
						value: 'Equity attributable to owners of the company',
					},
					{
						value: '',
						link: '',
					},
					{
						value: '4631',
					},
					{
						value: '3985',
					},
				],
				row_type: 'highlight',
			},
			{
				order: 3,
				values: [
					{
						value: 'Non-current Liabilities',
					},
					{
						value: '',
						link: '',
					},
					{
						value: '',
					},
					{
						value: '',
					},
				],
				row_type: 'subheading',
			},
			{
				order: 3,
				values: [
					{
						value: 'Financial Liabilities',
					},
					{
						value: '',
						link: '',
					},
					{
						value: '',
					},
					{
						value: '',
					},
				],
				row_type: '',
			},
			{
				order: 3,
				values: [
					{
						value: 'Borrowings',
					},
					{
						value: '18',
						link: '/',
					},
					{
						value: '1195',
					},
					{
						value: '719',
					},
				],
				row_type: 'subrow',
			},
			{
				order: 3,
				values: [
					{
						value: 'Other financial liabilities',
					},
					{
						value: '',
						link: '',
					},
					{
						value: '0.65',
					},
					{
						value: '0.49',
					},
				],
				row_type: 'subrow',
			},
			{
				order: 3,
				values: [
					{
						value: 'Provisions',
					},
					{
						value: '',
						link: '',
					},
					{
						value: '7',
					},
					{
						value: '8',
					},
				],
				row_type: '',
			},
			{
				order: 3,
				values: [
					{
						value: 'Total Non-current Liabilities',
					},
					{
						value: '',
						link: '',
					},
					{
						value: '1461',
					},
					{
						value: '988',
					},
				],
				row_type: 'highlight',
			},
			{
				order: 3,
				values: [
					{
						value: 'Current liabilities',
					},
					{
						value: '',
						link: '',
					},
					{
						value: '',
					},
					{
						value: '',
					},
				],
				row_type: 'subheading',
			},
			{
				order: 3,
				values: [
					{
						value: 'Financial liabilities',
					},
					{
						value: '',
						link: '',
					},
					{
						value: '',
					},
					{
						value: '',
					},
				],
				row_type: '',
			},
			{
				order: 3,
				values: [
					{
						value: 'Borrowings',
					},
					{
						value: '23',
						link: '/',
					},
					{
						value: '1461',
					},
					{
						value: '988',
					},
				],
				row_type: 'subrow',
			},
			{
				order: 3,
				values: [
					{
						value: 'Trades Payables',
					},
					{
						value: '24',
						link: '/',
					},
					{
						value: '196',
					},
					{
						value: '988',
					},
				],
				row_type: 'subrow',
			},
			{
				order: 3,
				values: [
					{
						value: 'Provisions',
					},
					{
						value: '26',
						link: '/',
					},
					{
						value: '245',
					},
					{
						value: '25',
					},
				],
				row_type: '',
			},
			{
				order: 3,
				values: [
					{
						value: 'Other current liabilities',
					},
					{
						value: '27',
						link: '/',
					},
					{
						value: '2445',
					},
					{
						value: '2533',
					},
				],
				row_type: '',
			},
			{
				order: 3,
				values: [
					{
						value: 'Total Current Liabilities',
					},
					{
						value: '',
					},
					{
						value: '1602',
					},
					{
						value: '1602',
					},
				],
				row_type: 'highlight',
			},
			{
				order: 3,
				values: [
					{
						value: 'Total Equity & Liabilities',
					},
					{
						value: '',
						link: '',
					},
					{
						value: '7695.6',
					},
					{
						value: '6958',
					},
				],
				row_type: 'highlight2',
			},
		],
	}

	return (
		<Layout>
			<div>
				<header className="doc-title">Balance Sheet</header>
			</div>
			<Table data={tableJson} />
		</Layout>
	)
}

export default BalanceSheet
