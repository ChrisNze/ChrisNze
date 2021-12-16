import React, { useEffect } from "react";
import "../Static/Css/App.css";
import Home from "./home";
import Account from "./account";
import About from "./about";
import Signup from "./signup";
import Contact from "./contact";
import Login from "./login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "./notFound";
import Navigation from "../Static/Components/navigation";
import Footer from "../Static/Components/footer";

function App() {
	const scrollTop = () => {
		window.scrollTo({
			top: 0,
		});
	};
	useEffect(() => {
		const body = document.getElementById("root");
		body.scrollIntoView(
			{
				top: 0,
				behavior: "smooth",
			},
			500
		);
	}, []);
	return (
		<Router>
			<div className="App">
				<Navigation scrollTop={scrollTop} />
				<Routes>
					<Route path="/" element={<Home scrollTop={scrollTop} />} />
					<Route path="signup" element={<Signup scrollTop={scrollTop} />} />
					<Route path="account" element={<Account scrollTop={scrollTop} />} />
					<Route path="about" element={<About scrollTop={scrollTop} />} />
					<Route path="contact" element={<Contact scrollTop={scrollTop} />} />
					<Route path="login" element={<Login scrollTop={scrollTop} />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
				<Footer scrollTop={scrollTop} />
			</div>
		</Router>
	);
}

export default App;
