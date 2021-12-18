import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import classes from "../Static/Css/login.module.css";
import Login_pic from "../Static/Images/21.png";
import { FaLock, FaUser } from "react-icons/fa";

function Login({ scrollTop }) {
	const [Value, setValue] = useState({
		Email: "",
		Password: "",
	});

	const getValue = (input) => (e) => {
		setValue({
			...Value,
			[input]: e.target.value.trim(),
		});
	};

	const submitDetails = (e) => {
		e.preventDefault();
		setValue({
			Email: "",
			Password: "",
		});
	};

	return (
		<Fragment>
			<section className={`${classes.login_wrapper} clip_path`}>
				<div className="container">
					<div className={classes.login_container}>
						<div className={classes.login_pic}>
							<img src={Login_pic} alt="Login_pic" />
						</div>

						<form className={classes.form_div} onSubmit={submitDetails}>
							<h1 className="heading_primary">Sign in</h1>
							<div className={classes.input_wrapper}>
								<FaUser className={classes.icon} />

								<div className={classes.input}>
									<input type="email" value={Value.Email} onChange={getValue("Email")} placeholder="Email" name="Email" className={classes.input} required />
									<label>Email</label>
								</div>
							</div>

							<div className={classes.input_wrapper}>
								<FaLock className={classes.icon} />

								<div className={classes.input}>
									<input type="password" value={Value.Password} onChange={getValue("Password")} placeholder="Password" name="Password" className={classes.input} maxLength="12" required />
									<label>Password</label>
								</div>
							</div>

							<div className={classes.forgot_password}>
								<Link to="/forgot Password">Forgot Password?</Link>
							</div>

							<div className={`${classes.signin_wrapper} ${classes.signin_wrapper_1}`}>
								<button type="submit" className={classes.signin}>
									Sign in
								</button>
							</div>

							<div className={classes.signup}>
								<p>Don't have an account yet?</p>
								<Link to="/signup" onClick={scrollTop}>
									Create Account
								</Link>
							</div>
						</form>
					</div>
				</div>
			</section>
		</Fragment>
	);
}

export default Login;
