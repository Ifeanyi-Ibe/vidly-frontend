import React from "react";

const Like = ({ liked, handleLiked }) => {
	let classes = "fa fa-heart";

	return (
		<i
			className={liked ? classes : (classes += "-o")}
			aria-hidden="true"
			style={{ cursor: "pointer" }}
			onClick={handleLiked}
		/>
	);
};

export default Like;
