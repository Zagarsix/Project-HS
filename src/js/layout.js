import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Navbar from "./component/Navbar";
import Home from "./component/home";
import NuestraMision from "./component/nuestra-mision";
import Contact from "./component/contact";
import Pricing from "./component/pricing";
import Faq from "./component/faq";
import Odontologia from "./component/odontologia";
import BlogPost from "./component/blog-post";
import PortfolioOverview from "./component/portfolio-overview";
import PortfolioItem from "./component/portfolio-item";
import NotFound from "./component/NotFound";
import Footer from "./component/footer";



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
					<Route exact path={"/nuestra-mision"} >
						<NuestraMision />
					</Route>
					<Route exact path={"/contact"} >
						<Contact />
					</Route>
					<Route exact path={"/pricing"} >
						<Pricing />
					</Route>
					<Route exact path={"/faq"}>
						<Faq />
					</Route>
					<Route exact path={"/odontologia"} >
						<Odontologia />
					</Route>
					<Route exact path={"/blog-post"} >
						<BlogPost />
					</Route>
					<Route exact path={"/portfolio-overview"} >
						<PortfolioOverview />
					</Route>
					<Route exact path={"/portfolio-item"} >
						<PortfolioItem />
					</Route>
					<Route component={NotFound} />
				</Switch>
				<Footer />
			</BrowserRouter>
		</div>
	);
};

export default Layout;