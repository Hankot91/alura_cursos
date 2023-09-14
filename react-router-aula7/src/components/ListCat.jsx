import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { search } from "../api/api";
import "../assets/css/blog.css";

const ListCat = ({ url }) => {
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		search(url, setCategories);
	}, [url]);

	return (
		<ul className="category-list container flex">
			{categories.map((category) => (
				<Link to={`/categoria/${category.id}`} key={category.id}>
					<li
						className={`category-list__category category-list__category--${category.id}`}
					>
						{category.nombre}
					</li>
				</Link>
			))}
		</ul>
	);
};

export default ListCat;
