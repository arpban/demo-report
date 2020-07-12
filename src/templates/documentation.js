import React from 'react'
import Helmet from 'react-helmet'
import styled, { injectGlobal } from 'styled-components'
import '../styles.scss'
import Sidebar from '../components/sidebar/sidebar'

const SiteWrapper = styled.div`
	width: 100%;
	min-height: 100vh;
`

const MainView = styled.div`
	margin-left: 300px;

	.main-view-header {
		display: flex;
		justify-content: space-between;
		height: 64px;
		border-bottom: 1px solid gainsboro;
		align-items: center;
		position: fixed;
		top: 0;
		width: 100%;
		background: white;
		.right,
		.left {
			height: 100%;
		}
		.left {
			.search {
				height: 100%;
				display: flex;
				.icon {
					display: flex;
					align-items: center;
					padding: 10px 15px;
					svg {
						stroke-width: 1.2;
						color: #9f9f9f;
					}
				}
				.input {
					height: 100%;
					input {
						height: 100%;
						border: none;
						&:hover {
							cursor: pointer;
						}
						&:focus {
							outline: none;
						}
					}
				}
				&:hover {
					.icon {
						svg {
							color: #2196f3;
						}
						cursor: pointer;
					}
				}
			}
		}
	}
`

const Documentation = styled.div`
	padding: 30px;

	header {
		font-size: 34px;
		margin-bottom: 20px;
		font-weight: 400;
		line-height: 43px;
	}
`

export default ({ pathContext, location }) => {
	const { page, nav } = pathContext
	const description = page.frontmatter.description ? (
		<p>{page.frontmatter.description}</p>
	) : (
		''
	)

	return (
		<div>
			<Helmet>
				<title>{page.frontmatter.title}</title>
			</Helmet>

			<SiteWrapper>
				<Sidebar nav={nav} currentPath={location.pathname} />
				<MainView>
					{/* Top bar */}
					<div className="main-view-header">
						<div className="left">
							<div className="search">
								<div className="icon">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
										className="feather feather-search"
									>
										<circle cx="11" cy="11" r="8" />
										<line
											x1="21"
											y1="21"
											x2="16.65"
											y2="16.65"
										/>
									</svg>
								</div>
								<div className="input">
									<input type="text" placeholder="Search" />
								</div>
							</div>
						</div>
						<div className="right" />
					</div>

					{/* Main View Content */}
					<div
						style={{ marginTop: '64px' }}
						className="main-view-content"
					>
						<Documentation>
							<header>{page.frontmatter.title}</header>
							<article
								dangerouslySetInnerHTML={{ __html: page.html }}
							/>
						</Documentation>
					</div>
				</MainView>
			</SiteWrapper>
		</div>
	)
}
