import React from 'react'
// import { Redirect } from 'react-router'
import { navigate } from 'gatsby'

export default ({ pathContext }) => {
	// return <Redirect to={pathContext.to} />
	navigate(pathContext.to)
	return null
}
