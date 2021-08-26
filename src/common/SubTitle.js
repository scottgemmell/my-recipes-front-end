import React from 'react';

function SubTitle({ text, icon:Icon }) {
	return (
		<h2 className="subtitle">
			<Icon /> {text}
		</h2>
	)
}

export default SubTitle
