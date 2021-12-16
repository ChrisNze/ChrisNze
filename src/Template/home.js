import React, { Fragment } from "react";
import classes from "../Static/Css/home.module.css";
import header_image from "../Static/Images/about.png";
import advice_image from "../Static/Images/header.png";
import testimony_1 from "../Static/Images/p1.png";
import { Link } from "react-router-dom";
import { FaPeopleCarry, FaTableTennis, FaTape, FaStar } from "react-icons/fa";

function Home({ scrollTop }) {
	return (
		<Fragment>
			{/* Header Section Starts */}
			<header className={classes.header}>
				<div className={`${classes.content_wrapper} container`}>
					<div className={classes.wrapper_text}>
						<h1>
							<span>Invest Early and Know</span>
							<span>Freedom</span>
						</h1>
						<p>Why spend on liabilities. Invest with us to be able to afford that luxury over and over again anytime in life.</p>

						<div className={classes.link_wrapper}>
							<Link to="/login" className="link_2" onClick={scrollTop}>
								Login
							</Link>
							<Link to="/signup" className="link_2" onClick={scrollTop}>
								Signup
							</Link>
						</div>
					</div>

					<div className={classes.image_wrapper}>
						<img src={header_image} alt="Header_picture" />
					</div>
				</div>
			</header>
			{/* Header Section Ends */}

			{/*///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/}

			{/* Section 1 Starts */}
			<section className={classes.main}>
				<div className="container">
					<div className={classes.section_holiday}>
						<h1 className="heading_primary">Our holiday activities</h1>
						<h2 className="heading_secondary">We sponsor your holiday with us</h2>
						<div className="bottom_div">
							<div className="bottom animation"></div>
						</div>
					</div>

					<div className={classes.holiday_details}>
						<div className={classes.holiday_details_heading}>
							<div className={classes.heading}>
								<FaTape className={classes.icon} />
								<h1>Entertainment</h1>
							</div>
							<p>Popular celebrities will be there to entertain us all.</p>
						</div>

						<div className={classes.holiday_details_heading}>
							<div className={classes.heading}>
								<FaTableTennis className={classes.icon} />
								<h1>Sports</h1>
							</div>
							<p>Different sport competitions are organised and awards are to be won.</p>
						</div>

						<div className={classes.holiday_details_heading}>
							<div className={classes.heading}>
								<FaPeopleCarry className={classes.icon} />
								<h1>Community Service</h1>
							</div>
							<p>We give back to the society through community service, and charity.</p>
						</div>
					</div>

					<div className={classes.donate}>
						<Link to="/notFound" className="link_2" onClick={scrollTop}>
							Donate
						</Link>
					</div>
				</div>
			</section>
			{/*///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/}

			{/* Section 2 Starts */}
			<section className={classes.section_advice}>
				<div className="container">
					<h1 className={`${classes.heading} heading_primary`}>Investment advice</h1>
					<div className={`bottom_div ${classes.bottom_div}`}>
						<div className="bottom animation"></div>
					</div>
					<div className={classes.advice_container}>
						<div className={classes.advice_pic}>
							<img src={advice_image} alt="Advice_picture" />
						</div>
						<div className={classes.advice_wrapper}>
							<h2 className="heading_tertiary">From the desk of the management, Investment Pal</h2>
							<div className={classes.advice_text}>
								<p>
									We are here to protect your interest. The problem has always been trust, but we have found way to conquer that. We verify the ability for our affiliated investment agencies to make
									steady returns. still on that we make sure they have physical assets that can be held as collateral to pay investors when at challenging times.
								</p>
								<Link to="/notFound" className="link_2" onClick={scrollTop}>
									Be an Agent
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/*///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/}

			{/* Section 3 Start */}
			<section className={classes.main}>
				<div className="container">
					<div className={classes.section_holiday}>
						<h1 className="heading_primary">Your roadmap to financial freedom</h1>
						<h2 className="heading_secondary">Pick a suitable investment for yourself and start earning big even while you sleep</h2>
						<div className="bottom_div">
							<div className="bottom animation"></div>
						</div>
					</div>

					<div className={classes.holiday_details}>
						<div className={`${classes.holiday_details_heading} ${classes.heading1}`}>
							<h1>Poda</h1>
							<p>The agent that earned vast popularity with her reputation. Earn 5% of your investment weekly</p>

							<div className={classes.donate}>
								<Link to="/notFound" className="link_2" onClick={scrollTop}>
									Click to proceed
								</Link>
							</div>
						</div>

						<div className={`${classes.holiday_details_heading} ${classes.heading1}`}>
							<h1>Investment Pal</h1>
							<p>This is the original platform owned and managed by Investment Pal. Get up to 4% of your capital in monthl</p>

							<div className={classes.donate}>
								<Link to="/notFound" className="link_2" onClick={scrollTop}>
									Click to proceed
								</Link>
							</div>
						</div>

						<div className={`${classes.holiday_details_heading} ${classes.heading1}`}>
							<h1>Skrid</h1>
							<p>Skrid is the king of realestate investment. earn up to 5% of your capital all your life</p>

							<div className={classes.donate}>
								<Link to="/notFound" className="link_2" onClick={scrollTop}>
									Click to proceed
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/*///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/}

			{/* Section 4 Starts */}

			<section className={`${classes.section_testimony} clip_path`}>
				<div className="container">
					<div className={classes.section_holiday}>
						<h1 className="heading_primary">What Our Users Say</h1>
						<h2 className="heading_secondary">We simply give the best to our users </h2>
						<div className="bottom_div">
							<div className="bottom animation"></div>
						</div>
					</div>

					<div className={classes.testimony_container}>
						<div className={classes.testimony_wrapper}>
							<div className={classes.icons}>
								<FaStar />
								<FaStar />
								<FaStar />
								<FaStar />
								<FaStar />
							</div>
							<p>Money is always eager and ready to work for anyone who is ready to imploy it.</p>
							<div className={classes.testifier_wrapper}>
								<img src={testimony_1} alt="Testifier" />
								<div>
									<h2>I. Koyenkian</h2>
									<p>Author | USA today network</p>
								</div>
							</div>
						</div>
						<div className={classes.testimony_wrapper}>
							<div className={classes.icons}>
								<FaStar />
								<FaStar />
								<FaStar />
								<FaStar />
								<FaStar />
							</div>
							<p>Money is always eager and ready to work for anyone who is ready to imploy it.</p>
							<div className={classes.testifier_wrapper}>
								<img src={testimony_1} alt="Testifier" />
								<div>
									<h2>I. Koyenkian</h2>
									<p>Author | USA today network</p>
								</div>
							</div>
						</div>
						<div className={classes.testimony_wrapper}>
							<div className={classes.icons}>
								<FaStar />
								<FaStar />
								<FaStar />
								<FaStar />
								<FaStar />
							</div>
							<p>Money is always eager and ready to work for anyone who is ready to imploy it.</p>
							<div className={classes.testifier_wrapper}>
								<img src={testimony_1} alt="Testifier" />
								<div>
									<h2>I. Koyenkian</h2>
									<p>Author | USA today network</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</Fragment>
	);
}

export default Home;
