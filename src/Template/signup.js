import React, { Fragment, useState } from "react";
import classes from "../Static/Css/login.module.css";
import Login_pic from "../Static/Images/21.png";
import { FaLock, FaUser, FaUserCircle } from "react-icons/fa";
import { ImHome, ImLocation2, ImUser } from "react-icons/im";
import { AiFillMail } from "react-icons/ai";
import { Link } from "react-router-dom";

export const Values = React.createContext();

function Signup({ scrollTop }) {
	const [passwordCheck, setPasswordCheck] = useState("Confirm Password");
	const [incorrect, setIncorrect] = useState("");
	const [value, setValue] = useState({
		email: "",
		firstName: "",
		middleName: "",
		lastName: "",
		homeAddress: "",
		city: "",
		citizenship: "",
		nameOfReferee: "",
		userName: "",
		password: "",
		confirmPassword: "",
	});

	const validatePassword = (confirmpass) => {
		if (confirmpass !== value.password) {
			setPasswordCheck("Incorrect Password");
			setIncorrect("error");
		} else if (confirmpass === value.password) {
			setPasswordCheck("Confirm Password");
			setIncorrect("label");
		}
	};

	const pass = () => {
		if (value.confirmPassword !== value.password) {
			setPasswordCheck("Incorrect Password");
			setIncorrect("error");
		} else if (value.confirmPassword === value.password) {
			setPasswordCheck("Confirm Password");
			setIncorrect("label");
			reset();
		}
	};

	const getValue = (input) => (e) => {
		setValue({
			...value,
			[input]: e.target.value,
		});
		validatePassword(e.target.value);
	};

	const submitDetails = (e) => {
		e.preventDefault();
		pass();
	};

	const reset = () => {
		setValue({
			email: "",
			firstName: "",
			middleName: "",
			lastName: "",
			homeAddress: "",
			city: "",
			citizenship: "",
			nameOfReferee: "",
			userName: "",
			password: "",
			confirmPassword: "",
		});

		setPasswordCheck("");
	};

	return (
		<Fragment>
			<section className={`${classes.login_wrapper} clip_path`}>
				<div className={classes.container}>
					<div className={classes.login_container}>
						<div className={classes.login_pic_2}>
							<img src={Login_pic} alt="Login_pic" />
						</div>

						<form className={classes.form_div_2} method="GET" onSubmit={submitDetails}>
							<h1 className="heading_primary">Create Your Account</h1>
							<div className={classes.form_div_wrapper}>
								<div className={classes.input_wrapper}>
									<FaUser className={classes.icon} />
									<div className={classes.input}>
										<input type="text" required value={value.firstName} onChange={getValue("firstName")} placeholder="Firstname" name="firstName" className={classes.input} />
										<label className="label">Firstname</label>
									</div>
								</div>

								<div className={classes.input_wrapper}>
									<FaUser className={classes.icon} />

									<div className={classes.input}>
										<input type="text" required value={value.middleName} onChange={getValue("middleName")} placeholder="Middlename" name="middleName" className={classes.input} />
										<label className="label">Middlename</label>
									</div>
								</div>
							</div>

							<div className={classes.form_div_wrapper}>
								<div className={classes.input_wrapper}>
									<FaUser className={classes.icon} />

									<div className={classes.input}>
										<input type="text" required value={value.lastName} onChange={getValue("lastName")} placeholder="Lastname" name="lastName" className={classes.input} />
										<label className="label">Lastname</label>
									</div>
								</div>

								<div className={classes.input_wrapper}>
									<ImLocation2 className={classes.icon} />

									<div className={classes.input}>
										<input type="text" required value={value.city} onChange={getValue("city")} placeholder="City" name="city" className={classes.input} />
										<label className="label">City</label>
									</div>
								</div>
							</div>

							<div className={classes.form_div_wrapper}>
								<div className={`${classes.input_wrapper} ${classes.input_wrapper_2}`}>
									<ImHome className={classes.icon} />

									<div className={classes.input}>
										<input type="text" required value={value.homeAddress} onChange={getValue("homeAddress")} placeholder="Home Address" name="homeAddress" className={classes.input} />
										<label className="label">Home Address</label>
									</div>
								</div>
							</div>

							<div className={classes.form_div_wrapper}>
								<div className={`${classes.input_wrapper} ${classes.input_wrapper_2}`}>
									<ImLocation2 className={classes.icon} />

									<div className={classes.input}>
										<input type="text" required value={value.citizenship} onChange={getValue("citizenship")} placeholder="Citizenship" name="citizenship" className={classes.input} />
										<label className="label">Citizenship</label>
									</div>
								</div>

								<div className={`${classes.input_wrapper} ${classes.input_wrapper_2}`}>
									<ImUser className={classes.icon} />

									<div className={classes.input}>
										<input type="text" required value={value.nameOfReferee} onChange={getValue("nameOfReferee")} placeholder="Name of Referee" name="nameOfReferee" className={classes.input} />
										<label className="label">Name of Referee</label>
									</div>
								</div>
							</div>

							<div className={classes.form_div_wrapper}>
								<div className={classes.input_wrapper}>
									<FaUserCircle className={classes.icon} />

									<div className={classes.input}>
										<input type="text" required value={value.userName} onChange={getValue("userName")} placeholder="Username" name="userName" className={classes.input} />
										<label className="label">Username</label>
									</div>
								</div>

								<div className={classes.input_wrapper}>
									<AiFillMail className={classes.icon} />

									<div className={classes.input}>
										<input type="email" required value={value.email} onChange={getValue("email")} placeholder="Email" name="email" className={classes.input} />
										<label className="label">Email</label>
									</div>
								</div>
							</div>

							<div className={classes.form_div_wrapper}>
								<div className={`${classes.input_wrapper}`}>
									<FaLock className={classes.icon} />

									<div className={classes.input}>
										<input type="password" required value={value.password} onChange={getValue("password")} placeholder="Password" name="Password" className={classes.input} />
										<label className="label">Password</label>
									</div>
								</div>

								<div className={classes.input_wrapper}>
									<FaLock className={classes.icon} />

									<div className={classes.input}>
										<input
											type="password"
											required
											value={value.confirmPassword}
											onChange={getValue("confirmPassword")}
											placeholder="Confirm Password"
											name="Confirm Password"
											className={classes.input}
										/>
										<label className={incorrect}>{passwordCheck}</label>
									</div>
								</div>
							</div>

							<div className={classes.signin_wrapper}>
								<button type="submit" className={classes.signin}>
									Register
								</button>

								<button type="button" className={`${classes.reset} ${classes.signin}`} onClick={reset}>
									Clear
								</button>
							</div>

							<div className={classes.signup}>
								<p>Already have an account?</p>
								<Link to="/login" onClick={scrollTop}>
									Sign in
								</Link>
							</div>
						</form>
					</div>
				</div>
			</section>
		</Fragment>
	);
}

export default Signup;
