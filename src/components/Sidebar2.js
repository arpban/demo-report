import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import Sidebar from './sidebar/sidebar'
import path from 'path'

const Sidebar2 = ({}) => (
	<StaticQuery
		query={graphql`
			query {
				allMarkdownRemark(
					limit: 1000
					sort: { order: ASC, fields: fileAbsolutePath }
					filter: { fileAbsolutePath: { regex: "//docs//" } }
				) {
					edges {
						node {
							fileAbsolutePath
							html
							headings {
								value
								depth
							}
							frontmatter {
								title
								description
								redirectTo
							}
						}
					}
				}
			}
		`}
		render={data => (
			<Sidebar nav={getNav(data)} />
		)}
	/>
)

function getNav(result){
	let nav = []

	result.allMarkdownRemark.edges.forEach(({ node }) => {
		if (node.fileAbsolutePath.indexOf('index') > 0) {
			const parent = {
				title: node.frontmatter.title,
				children: [],
				redirectFrom: getDocPath(node),
			}

			nav.push(parent)
		} else {
			const parent = nav[nav.length - 1]
			if (!parent.path) {
				parent.path = getDocPath(node)
			}

			parent.children.push({
				title: node.frontmatter.title,
				path: getDocPath(node),
			})
		}
	})

	return nav
}

function getDocPath({ fileAbsolutePath }) {
	const ext = path.extname(fileAbsolutePath)
	const file = stripOrderingNumbers(path.basename(fileAbsolutePath, ext))
	const dir = stripOrderingNumbers(
		path
			.dirname(fileAbsolutePath)
			.split(path.sep)
			.pop()
	)

	return `/docs/${dir}${file === 'index' ? '' : `/${file}`}`
}

function stripOrderingNumbers(str) {
	return str.replace(/^(\d+-)/, '')
}

export default Sidebar2
