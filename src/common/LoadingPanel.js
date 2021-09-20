
import React from "react";

const LoadingPanel = () => {
	return (
		<div className="ch-skeleton" style={{height:200, color: "#AAA", display: "flex", flexDirection: "column", justifyContent: "center", textAlign: "center" }}>
			Loading...
		</div>
	)
}

export default LoadingPanel;
