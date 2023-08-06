const listClientData = () =>
	fetch("http://localhost:3000/perfil").then((response) => response.json());

const createClient = async (name, email) => {
	try {
		const response = await fetch("http://localhost:3000/perfil", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ name, email, id: uuid.v4() }),
		});

		if (!response.ok) {
			throw new Error("Error al crear el cliente");
		}

		return response.json();
	} catch (error) {
		throw new Error("Error en la conexión");
	}
};

const deleteClient = (id) =>
	fetch(`http://localhost:3000/perfil/${id}`, {
		method: "DELETE",
	});

const detailClient = (id) =>
	fetch(`http://localhost:3000/perfil/${id}`).then((response) =>
		response.json()
	);

const updateClient = async (name, email, id) => {
	try {
		fetch(`http://localhost:3000/perfil/${id}`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ name, email, id }),
		});
		if (!response.ok) {
			throw new Error("Error al crear el cliente");
		}

		return response.json();
	} catch (error) {
		throw new Error("Error en la conexión");
	}
};

export const clientService = {
	listClientData,
	createClient,
	deleteClient,
	detailClient,
	updateClient,
};
