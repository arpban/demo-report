import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

// import Sidebar from './sidebar/sidebar'
// import './layout.scss'

const Layout = ({ children }) => (
	<StaticQuery
		query={graphql`
			query SiteTitleQuery {
				site {
					siteMetadata {
						title
						sub_title
					}
				}
			}
		`}
		render={data => (
			<div class="landing-view">{data.site.siteMetadata.title}</div>
		)}
	/>
)

Layout.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Layout
