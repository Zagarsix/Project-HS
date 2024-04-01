import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Navbar from "./component/navbar";
import Footer from "./component/footer";

import Home from "./views/home";
import Nosotros from "./views/nosotros";
import Matriculas from "./views/matriculas";
import Blog from "./views/blog";
import Contacto from "./views/contacto";
import NotFound from "./views/NotFound";




//create your first component
const Layout = () => {

	return (
		<div>
			<BrowserRouter>
				<Navbar />
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
				<Footer />
			</BrowserRouter>
		</div>
	);
};

export default Layout;