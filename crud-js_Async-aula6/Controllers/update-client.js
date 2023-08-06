import { clientService } from "../Connection/connection.js";
const dataForm = document.querySelector("[data-form]");

dataForm.addEventListener("submit", async (event) => {
	event.preventDefault();
	const url = new URL(window.location);
	const id = url.searchParams.get("id");
	const name = document.querySelector("[data-nombre]").value;
	const email = document.querySelector("[data-email]").value;
	try {
		await clientService.updateClient(name, email, id);
		location.href = "../screens/edicion_concluida.html";
	} catch (error) {
		console.log(error);
		location.href = "../screens/error.html";
	}
});

const getClient = async () => {
	const url = new URL(window.location);
	const id = url.searchParams.get("id");
	if (id === null) {
		window.location.href = "../screens/error.html";
	} else {
		const name = document.querySelector("[data-nombre]");
		const email = document.querySelector("[data-email]");
		try {
			const client = await clientService.detailClient(id);
			if (client === null || (!client.name && !client.email)) {
				throw new Error();
			} else {
				name.value = client.name;
				email.value = client.email;
			}
		} catch (error) {
			console.log(error);
			location.href = "../screens/error.html";
		}
	}
};

getClient();
