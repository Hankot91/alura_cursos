import CardList from "../components/Card";
import ListCat from "../components/ListCat";

const Home = () => {
	return (
		<main>
			<div className="container">
				<h2 className="title-page">Pet noticias</h2>
			</div>
			<ListCat url={"/categorias"} />
			<CardList url={"/posts"} />
		</main>
	);
};

export default Home;
