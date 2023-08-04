const dataTable = document.querySelector("[data-table]");

const newTr = (name, email) => {
	const tr = document.createElement("tr");

	const line = `  <td class="td" data-td>${name}</td>
                                    <td>${email}</td>
                                    <td>
                                        <ul class="table__button-control">
                                            <li>
                                                <a href="../screens/editar_cliente.html" class="simple-button simple-button--edit">Editar</a>
                                            </li>
                                            <li>
                                                <button class="simple-button simple-button--delete" type="button">
                                                    Eliminar
                                                </button>
                                            </li>
                                        </ul>
                                    </td>`;

	tr.innerHTML = line;
	return tr;
};

// const listData = () => {
//     const promise = new Promise((resolve, reject) => {
//         const http = new XMLHttpRequest();
//         http.open('GET', 'http://localhost:3000/perfil');
//         http.send();

//         http.onload = () => {

//             const data = JSON.parse(http.response);
//             if(http.status >= 400){
//                 reject(data);
//             } else{
//                 resolve(data);
//             }
//         }
//     });

//     return promise
// }

const listData = () => {
	return fetch("http://localhost:3000/perfil").then((response) =>
		response.json()
	);
};

listData()
	.then((data) => {
		data.forEach((perfil) => {
			dataTable.appendChild(newTr(perfil.nombre, perfil.email));
		});
	})
	.catch((error) => alert(error));
