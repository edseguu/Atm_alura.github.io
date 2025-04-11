document.getElementById("b1").addEventListener("click", function() {
    fetch("/api/atm/ejecutarJava")
    .then(response => response.text())
    .then(data => {
        document.getElementById("divtxt").textContent = data;
    });

});

/*
const objetoId = 1;

const nuevoSaldo = 300;

const url = `/api/atm/actualizarSaldo/${objetoId}`;

const data = {
    saldo: nuevoSaldo
}

const options = {
    method: "PUT",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
}

fetch(url, options)
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.text(); // O response.json() si tu backend devuelve JSON
    })
    .then(data => {
        console.log('Respuesta del servidor:', data);
    })
    .catch(error => {
        console.error('Hubo un error al enviar la solicitud:', error);
    });
*/




document.getElementById("inputNombre").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        let dialogo = document.getElementById("dialog1");
        dialogo.style.display = "none";
    }

    let nombreUs = document.getElementById("nombreUsuario");
    let inputNombre = document.getElementById("inputNombre");

    nombreUs.textContent = inputNombre.value;

});


function cerrarBtn(){
    let btnInicial = document.getElementById("b1");
    let valorSaldo = document.getElementById("saldoUsuario");
    let containerbtn = document.getElementById("containerBotones");
    let inputIngreso = document.getElementById("inputIngreso");
    
    btnInicial.style.display = "none";
    containerbtn.style.visibility= "visible";
    inputIngreso.style.display = "block";
    
    valorSaldo.style.display = "block";
}


function ingresarDinero(){
    fetch("/api/atm/saldoUsuario")
        .then(response => response.text())
        .then(data => {
            document.getElementById("saldo").textContent = data;
        });
    
    let inputIngreso = document.getElementById("inputIngreso").value;


    const objetoId = 1;

    const nuevoSaldo = inputIngreso ;

    const url = `/api/atm/actualizarSaldo/${objetoId}`;

    const data = {
        saldo: nuevoSaldo
    }

    const options = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    }

    fetch(url, options)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.text(); // O response.json() si tu backend devuelve JSON
        })
        .then(data => {
            console.log('Respuesta del servidor:', data);
            fetch("/api/atm/saldoUsuario")
                .then(response => response.text())
                .then(data => {

                    document.getElementById("saldo").textContent = data;
                    // Opcional: Limpiar el input después del ingreso
                    document.getElementById("inputIngreso").value = "";
                });
        })
        .catch(error => {
            console.error('Hubo un error al enviar la solicitud:', error);
        });


    console.log("Esta es la cantidad enviada" + inputIngreso);


}

function quitarSaldo(){
    fetch("/api/atm/saldoUsuario")
        .then(response => response.text())
        .then(data => {
            document.getElementById("saldo").textContent = data;
        });

    let inputIngreso = document.getElementById("inputIngreso").value;


    const objetoId = 1;

    const nuevoSaldo = inputIngreso ;

    const url = `/api/atm/quitarSaldo/${objetoId}`;

    const data = {
        saldo: nuevoSaldo
    }

    const options = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    }

    fetch(url, options)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.text(); // O response.json() si tu backend devuelve JSON
        })
        .then(data => {
            console.log('Respuesta del servidor:', data);
            fetch("/api/atm/saldoUsuario")
                .then(response => response.text())
                .then(data => {
                    document.getElementById("saldo").textContent = data;
                    // Opcional: Limpiar el input después del ingreso
                    document.getElementById("inputIngreso").value = "";
                });
        })
        .catch(error => {
            console.error('Hubo un error al enviar la solicitud:', error);
        });
    if (data > inputIngreso){
        alert("No se puede retirar esa cantidad");
    }



    console.log("Esta es la cantidad enviada" + inputIngreso);

    


}


function limitarLongitud(inputElement, maxLength) {
    if (inputElement.value.length > maxLength) {
        inputElement.value = inputElement.value.slice(0, maxLength);
    }
}

