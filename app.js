//Variables
const numeroOne = document.querySelector("#inputOne");
const numeroTwo = document.querySelector("#inputTwo");
const contenedorStyle = document.querySelector("#Resultado");
const contenedorMsj = document.querySelector("#mensaje");
let resultado = 0;

//Eventos

escucharEventos();

function escucharEventos() {
    document.addEventListener("click", (e) => {
        const opcion = e.target.value;
        const n1 = parseFloat(numeroOne.value);
        const n2 = parseFloat(numeroTwo.value);
        const n3 = numeroOne.value;
        const n4 = numeroTwo.value;
        if (numeroOne.value !== "" && numeroTwo.value !== "") {
            //Menu de seleccion
            switch (opcion) {
                case "Sumar":
                    resultado = n1 + n2;
                    return mensajeGenerar(
                        `La operacion realizada da: ${resultado}`
                    );
                case "Restar":
                    resultado = n1 - n2;
                    return mensajeGenerar(
                        `La operacion realizada da: ${resultado}`
                    );
                case "Multiplicacion":
                    resultado = n1 * n2;
                    return mensajeGenerar(
                        `La operacion realizada da: ${resultado}`
                    );
                case "Division":
                    if (n2 === 0) {
                        return mensajeGenerar("Division por 0, no existe.");
                    }
                    resultado = n1 / n2;
                    return mensajeGenerar(
                        `La operacion realizada da: ${resultado}`
                    );
                case "Potenciacion":
                    resultado = Math.pow(n1, n2);
                    return mensajeGenerar(
                        `La operacion realizada da: ${resultado}`
                    );
                case "Concatenacion":
                    resultado = `${n1}` + `${n2}`;
                    return mensajeGenerar(
                        `La operacion realizada da: ${resultado}`
                    );
                case "intIf":
                    if (n1 === n2) {
                        return mensajeGenerar(
                            `Numero #1 es igual que Numero #2`
                        );
                    }
                    if (n1 > n2) {
                        return mensajeGenerar(
                            `Numero #1 es mayor que Numero #2`
                        );
                    } else {
                        return mensajeGenerar(
                            `Numero #2 es mayor que Numero #1`
                        );
                    }

                case "intFor":
                    let contador = 0;
                    for (let i = n1; i < n2; i++) {
                        contador++;
                    }
                    return mensajeGenerar(
                        `La cantida de ciclos que se hicieron es de: ${contador}`
                    );

                case "intSwitch":
                    switch (n1) {
                        case 1:
                            return mensajeGenerar(`n1 tiene un valor de 1`);

                        case 2:
                            return mensajeGenerar(`n1 tiene un valor de 2`);

                        default:
                            return mensajeGenerar(
                                `n1 tiene un valor mayor de 2`
                            );
                    }

                default:
                    break;
            }
        } else {
            return mensajeGenerar("Debes ingresar los valores en los campos");
        }
    });
}

//Funciones

function mensajeGenerar(mensaje) {
    contenedorMsj.textContent = mensaje;
    contenedorStyle.classList.remove("hidden");

    //Elimnar elemento
    setTimeout(() => {
        contenedorStyle.classList.add("hidden");
    }, 3500);
}
