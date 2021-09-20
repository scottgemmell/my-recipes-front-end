import React from 'react'
import { Heading } from "@chakra-ui/react";

function Title({ text }) {
	return (
		<Heading as="h1" size="2xl" my={4} >
			{text}
	  	</Heading>
	)
}

export default Title
