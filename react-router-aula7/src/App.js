import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./assets/css/base/base.css";

import Header from "./components/Header";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Post from "./pages/Post";
import Categoria from "./pages/Categoria.jsx";
import Page404 from "./pages/404";

function App() {
	return (
		<Router>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/sobre" element={<Sobre />} />
				<Route path="/posts/:id" element={<Post />} />
				<Route path="/categoria/:id/*" element={<Categoria />} />
				<Route path="*" element={<Page404 />} />
			</Routes>
		</Router>
	);
}

export default App;
