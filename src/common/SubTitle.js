import React from 'react';
import { Heading } from "@chakra-ui/react"

function SubTitle({ text, icon:Icon }) {
	return (
		<Heading as="h3" size="md" my={4} className="subtitle">
		<Icon /> {text}
	  </Heading>
	)
}

export default SubTitle
