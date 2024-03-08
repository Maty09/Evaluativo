let lista = [];

const creartabla = () => {
    const tbody = document.getElementById("tbody");
    tbody.innerHTML = "";
    lista.forEach((element, index) => {
        tbody.innerHTML += `
            <tr>
                <th scope="row">${index + 1}</th>
                <td>${element.numerogenerado}</td>
                <td><button class="btn btn-warning" onclick="eliminarNumero(${index})">Eliminar</button></td>
            </tr>
        `;
    });
};

const generarNumerosAleatorios = () => {
    const desde = parseInt(document.getElementById("dato").value);
    const hasta = parseInt(document.getElementById("dato2").value);
    const cantidadNumeros = parseInt(document.getElementById("cantidad").value);
    for (let i = 0; i < cantidadNumeros; i++) {
        const numeroAleatorio = Math.floor(Math.random() * (hasta - desde + 1)) + desde;
        lista.push({ numerogenerado: numeroAleatorio });
    }
    creartabla();
};

const eliminarNumero = (index) => {
    lista.splice(index, 1);
    creartabla();
};