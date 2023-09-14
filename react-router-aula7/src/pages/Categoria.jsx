import { useState, useEffect } from "react";
import {
	useParams,
	Routes,
	Route,
	Link,
	useResolvedPath,
} from "react-router-dom";
import "../assets/css/blog.css";
import { search } from "../api/api";
import ListCat from "../components/ListCat";
import CardList from "../components/Card";
import SubCategoria from "./SubCategoria";

const Categoria = () => {
	const { id } = useParams();
	const url = useResolvedPath("").pathname;
	const [subCategorias, setSubCategoria] = useState([]);

	useEffect(() => {
		search(`/categorias?id=${id}`, (response) => {
			setSubCategoria(response[0].subcategorias);
		});
	}, [id]);
	return (
		<>
			<div className="container">
				<h2 className="title-page">Pet noticias</h2>
			</div>
			<ListCat url="/categorias" />
			<ul className="category-list container flex">
				{subCategorias.map((subCategoria) => (
					<li
						className={`category-list__category category-list__category--${id}`}
						key={subCategoria}
					>
						<Link to={`${url}/${subCategoria}`}>
							{subCategoria}
						</Link>
					</li>
				))}
			</ul>
			<Routes>
				<Route
					path="/"
					element={<CardList url={`/posts?categoria=${id}`} />}
				/>
                <Route
                    path="/:subCategoria"
                    element={<SubCategoria/>}
                />
			</Routes>
		</>
	);
};

export default Categoria;
