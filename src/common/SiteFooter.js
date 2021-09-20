import React from 'react'
import { Box } from "@chakra-ui/react"

function SiteFooter() {

	return (
		<Box my={8} className="bottom layer">
			<div className="layer__inner">

				<footer className="site-footer">
					<p>
						&copy;2021
					</p>
				</footer>
				
			</div>
		</Box>
	)
}

export default SiteFooter
