import { clientService } from "../Connection/connection.js";
const dataForm = document.querySelector("[data-form]");

dataForm.addEventListener("submit", async (event) => {
	event.preventDefault();
	const name = document.querySelector("[data-nombre]").value;
	const email = document.querySelector("[data-email]").value;

	try {
		await clientService.createClient(name, email);
		location.href = "../screens/registro_completado.html";
	} catch (error) {
		location.href = "../screens/error.html";
	}
});
