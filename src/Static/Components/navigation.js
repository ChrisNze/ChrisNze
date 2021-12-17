import React, { Fragment } from "react";
import classes from "../Css/navigation.module.css";
import { Link } from "react-router-dom";
import { FaBars, FaChevronUp } from "react-icons/fa";

function Navigation({ scrollTop }) {
	const btnScrollTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};
	return (
		<Fragment>
			<nav className={classes.navigation}>
				<h1 className="logo">investment pal</h1>
				<ul>
					<li>
						<Link to="/" className={classes.navigation_link} onClick={scrollTop}>
							Home
						</Link>
					</li>
					<li>
						<Link to="/notFound" className={classes.navigation_link} onClick={scrollTop}>
							About
						</Link>
					</li>
					<li>
						<Link to="/notFound" className={classes.navigation_link} onClick={scrollTop}>
							Contact
						</Link>
					</li>
					<li>
						<Link to="/signup" className={classes.navigation_link} onClick={scrollTop}>
							Signup
						</Link>
					</li>
				</ul>
				<div className={classes.login}>
					<Link to="/login" className="link_2" onClick={scrollTop}>
						Login
					</Link>
				</div>

				<FaBars className={classes.mobile_navigation} />
			</nav>

			<div className={`${classes.top} bounceanimation`} onClick={btnScrollTop}>
				<FaChevronUp className={classes.icon} />
			</div>
		</Fragment>
	);
}

export default Navigation;
