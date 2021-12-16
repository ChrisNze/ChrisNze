import React, { useState } from "react";
import classes from "../Css/footer.module.css";

function Footer() {
	const [getValue, setGetValue] = useState({
		Name: "",
		Email: "",
	});

	const getEmail = (e) => {
		setGetValue({
			...getValue,
			Email: e.target.value.trim(),
		});
	};

	const getName = (e) => {
		setGetValue({
			...getValue,
			Name: e.target.value,
		});
	};

	const submitDetails = (e) => {
		e.preventDefault();
		setGetValue({
			Email: "",
			Name: "",
		});
	};
	return (
		<footer className={classes.footer}>
			<div className="container">
				<div className={classes.footer_heading_wrapper}>
					<h1 className="heading_primary">Investment Pal</h1>
					<h2 className="heading_secondary">A bright financial future depends on how many assets you acquire not on how many luxury products you buy.</h2>
					<div className="bottom_div">
						<div className="bottom1 animation"></div>
					</div>
				</div>

				<div className={classes.footer_content_wrapper}>
					<div className={classes.form_wrapper}>
						<form onSubmit={submitDetails} method="POST">
							<h1>Send us an Email</h1>
							<div className={classes.input_wrapper}>
								<input type="text" value={getValue.Name} onChange={getName} placeholder="Name" name="Name" className={classes.input} required />
								<label>Name</label>
							</div>
							<div className={classes.input_wrapper}>
								<input type="email" value={getValue.Email} onChange={getEmail} placeholder="Email" name="Email" className={classes.input} required />
								<label>Email</label>
							</div>
							<button type="submit">Submit</button>
						</form>
					</div>

					<div className={classes.about_wrapper}>
						<h1>About</h1>
						<p>
							<span>We are Investment Pal Company, our job is to connect you with the most trusted and reliable investment agents</span>
							<span>We have them verified and have their assets to our dispose in case of any unfaithfullness.</span>
						</p>
					</div>

					<div className={classes.mission_wrapper}>
						<h1>Mission</h1>
						<p>
							<span>We dream of a financially free society where wealth is equally distributed among individuals.</span>
							<span>A society where individuals can go ahead chasing their passion and worrying less about money</span>
						</p>
					</div>
				</div>
			</div>

			<div className={classes.copywrite}>
				<div className="container">
					<p>Copyright &copy; 2018 - All Rights Reserved - Investment Pal</p>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
