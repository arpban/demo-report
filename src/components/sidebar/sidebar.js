import React, { Component } from 'react'
import { StaticQuery, Link, graphql } from 'gatsby'
import classnames from 'classnames'

import './sidebar.scss'
import logo from '../../images/company-logo.png'

const Sidebar = ({ currentPath, nav }) => {
	return (
		<StaticQuery
			query={graphql`
				query {
					site {
						siteMetadata {
							title
							sub_title
						}
					}
				}
			`}
			render={data => (
				<div className="sidebar">
					{/* Sidebar Top Section */}
					<div className="sidebar-top">
						<div className="logo">
							<img alt="company logo" src={logo} />
						</div>
						<div className="text">
							<div className="title">
								{data.site.siteMetadata.title}
							</div>
							<div className="sub-title">
								{data.site.siteMetadata.sub_title}
							</div>
						</div>
					</div>

					{/* Sidebar Main Section */}
					<div className="sidebar-main">
						{nav.map(parent => {
							return (
								<section key={parent.path}>
									<header>
										<Link to={parent.path}>
											{parent.title}
										</Link>
									</header>
									<div className="links">
										{parent.children.map(child => (
											<div
												className="sidebar-link"
												key={child.path}
											>
												<Link
													to={child.path}
													className={classnames({
														active:
															currentPath ===
															child.path,
													})}
												>
													{child.title}
												</Link>
											</div>
										))}
									</div>
								</section>
							)
						})}
					</div>
				</div>
			)}
		/>
	)
}

export default Sidebar
