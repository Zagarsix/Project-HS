import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Navbar from "./component/navbar";
import Home from "./component/home";
import About from "./component/about";
import Contact from "./component/contact";
import Pricing from "./component/pricing";
import Faq from "./component/faq";
import BlogHome from "./component/blog-home";
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
					<Switch>
						<Navbar />
						{/* <Route exact path={"/"} >
							<Home />
						</Route> */}
						<Route exact path={"/about"} >
							<About />
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
						<Route exact path={"/blog-home"} >
							<BlogHome />
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
						<Route component={NotFound}/>
						<Footer />						
					</Switch>
			</BrowserRouter>
		</div>
	);
};

export default Layout;