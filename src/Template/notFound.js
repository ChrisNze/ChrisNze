import React, { Fragment } from "react";
import classes from "../Static/Css/notFound.module.css";
import NotFound_image from "../Static/Images/notfound.png";

function NotFound() {
	return (
		<Fragment>
			<div className={`${classes.notFound} clip_path`}>
				<div className="container">
					<img src={NotFound_image} alt="Page_NotFound" />
					<h1 className="heading_primary">Sorry, Page Not Found</h1>
					<p>Sorry, The Page you are looking for is not found</p>
				</div>
			</div>
		</Fragment>
	);
}

export default NotFound;
