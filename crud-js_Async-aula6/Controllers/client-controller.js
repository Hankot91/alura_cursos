import { clientService } from "../Connection/connection.js";

const dataTable = document.querySelector("[data-table]");

const newTr = (name, email, id) => {
	const tr = document.createElement("tr");

	const line = `  <td class="td" data-td>${name}</td>
                                    <td>${email}</td>
                                    <td>
                                        <ul class="table__button-control">
                                            <li>
                                                <a href="../screens/editar_cliente.html?id=${id}" class="simple-button simple-button--edit">Editar</a>
                                            </li>
                                            <li>
                                                <button class="simple-button simple-button--delete" type="button" id="${id}">
                                                    Eliminar
                                                </button>
                                            </li>
                                        </ul>
                                    </td>`;

	tr.innerHTML = line;

	const btn = tr.querySelector("button");
	btn.addEventListener("click", () => {
		const id = btn.id;
		clientService
			.deleteClient(id)
			.then()
			.catch((error) => alert(error));
	});
	return tr;
};

clientService
	.listClientData()
	.then((data) => {
		data.forEach(({ name, email, id }) => {
			dataTable.appendChild(newTr(name, email, id));
		});
	})
	.catch((error) => alert(error));
