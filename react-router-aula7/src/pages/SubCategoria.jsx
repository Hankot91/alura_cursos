import { useParams } from "react-router-dom";
import CardList from "../components/Card";

const SubCategoria = () => {
    const {subCategoria} = useParams();

    return (
            <CardList url={`/posts?subcategoria=${subCategoria}`} />
    )
}

export default SubCategoria; 