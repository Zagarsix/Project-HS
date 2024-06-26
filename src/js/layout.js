import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Navbar from "./component/navbar";
import Footer from "./component/footer";
import ButtonWame from "./component/buttonWame";
import ScrollToTopButton from "./component/buttonScrollToTop";

import Home from "./views/home";
import Nosotros from "./views/nosotros";
import Matriculas from "./views/matriculas";
import Blog from "./views/blog";
import Contacto from "./views/contacto";
import NotFound from "./views/NotFound";

//create your first component
const Layout = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const handleMenuToggle = (isNavCollapsed) => {
		setIsMenuOpen(!isNavCollapsed);
	};

	return (
		<div className={isMenuOpen ? 'menu-open' : ''}>
			<BrowserRouter>
				<Navbar onMenuToggle={handleMenuToggle}/>
				<Switch>
					<Route exact path={"/"} >
						<Home />
					</Route>
					<Route exact path={"/nosotros"} >
						<Nosotros />
					</Route>
					<Route exact path={"/contacto"} >
						<Contacto />
					</Route>
					<Route exact path={"/matriculas"} >
						<Matriculas />
					</Route>
					<Route exact path={"/blog"}>
						<Blog />
					</Route>
					<Route component={NotFound} />
				</Switch>
				<ButtonWame/>
				<ScrollToTopButton/>
				<Footer />
			</BrowserRouter>
		</div>
	);
};

export default Layout;