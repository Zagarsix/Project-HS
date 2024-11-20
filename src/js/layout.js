import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Navbar from "./component/navbar";
import Footer from "./component/footer";
import ButtonWame from "./component/buttonWame";
import ScrollToTopButton from "./component/buttonScrollToTop";

import Home from "./views/home";
import QuienesSomos from "./views/quienes-somos";
import EquipoA from "./views/equipo-academico";
import Matriculas from "./views/matriculas";
import Ayuda from "./views/centro-de-ayuda";
import Blog from "./views/blog";
import Blog1 from "./views/blog1-en-chile-se-puede-educar-en-casa";
import Blog2 from "./views/blog2-educacion-virtual-como-agente-transformador";
import Blog3 from "./views/blog3-iniciando-homeschool-guia-para-padres";
import Contacto from "./views/contacto";
import NotFound from "./views/NotFound";
import TermsAndConds from "./views/terminos-y-condiciones";
import PrivacyPolicy from "./views/politica-de-privacidad";

//create your first component
const Layout = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const handleMenuToggle = (isNavCollapsed) => {
		setIsMenuOpen(!isNavCollapsed);
	};

	return (
		<div className={isMenuOpen ? 'menu-open' : ''}>
			<BrowserRouter>
				<Navbar onMenuToggle={handleMenuToggle} />
				<Switch>
					<Route exact path={"/"} >
						<Home />
					</Route>
					<Route exact path={"/quienes-somos"} >
						<QuienesSomos />
					</Route>
					<Route exact path={"/equipo-academico"} >
						<EquipoA />
					</Route>
					<Route exact path={"/contacto"} >
						<Contacto />
					</Route>
					<Route exact path={"/matriculas"} >
						<Matriculas />
					</Route>
					<Route exact path={"/centro-de-ayuda"}>
						<Ayuda />
					</Route>
					<Route exact path={"/blog"}>
						<Blog />
					</Route>
					<Route exact path={"/blog1-en-chile-se-puede-educar-en-casa"}>
						<Blog1 />
					</Route>
					<Route exact path={"/blog2-educacion-virtual-como-agente-transformador"}>
						<Blog2 />
					</Route>
					<Route exact path={"/blog3-iniciando-homeschool-guia-para-padres"}>
						<Blog3 />
					</Route>
					<Route exact path={"/politica-de-privacidad"}>
						<PrivacyPolicy />
					</Route>
					<Route exact path={"/terminos-y-condiciones"}>
						<TermsAndConds />
					</Route>
					<Route component={NotFound} />
				</Switch>
				<ButtonWame />
				<ScrollToTopButton />
				<Footer />
			</BrowserRouter>
		</div>
	);
};

export default Layout;