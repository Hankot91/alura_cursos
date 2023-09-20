import { Box, Button } from "../UI";
import Card from "../Card";
import { list } from "../../info.js";

const List = () => {
	return (
		<Box>
			{list.cargos.map((cargo, i) => {
				return (
					<Card key={i} cargo={cargo} />
				);
			})}
            <Button>Ver mas</Button>
		</Box>
	);
};

export default List;
