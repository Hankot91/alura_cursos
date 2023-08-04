export function validar(input){
    const tipoInput = input.dataset.type;
    
    if(validadores[tipoInput]){
        validadores[tipoInput](input);
    }    
    
    if (input.validity.valid) {
        input.parentElement.classList.remove('input-container--invalid');
    } else {
        input.parentElement.classList.add('input-container--invalid');
        const span = input.nextElementSibling.nextElementSibling;
        span.innerHTML = showMessage(tipoInput, input);
    }
}    

const validadores = {
    nacimiento:  input => validarFehca(input)
    
}    

const messageErrors = {
    nombre: {
        valueMissing: "El nombre no puede estar vacio"
    },
    email: {
        valueMissing: "El correo no puede estar vacio",
        typeMismatch: "El correo no es valido."
    },
    password: {
        valueMissing: "Ingresa una contraseña",
        patternMismatch: "Al menos un dígito, una letra minúscula,  una letra mayúscula, mínimo 8 caracteres en total"
    },
    nacimiento: {
        valueMissing: "Este campo no puede estar vacio",
        customError: "Debes tener al menos 18 años de edad."
    },
    telefono: {
        valueMissing: "Ingrese en el campo un numero telefonico",
        patternMismatch: "El numero debe ser en formato (xxxxxxxxxx) "
    },
    direccion : {
        valueMissing: "Ingrese una direccion en este campo",
        patternMismatch: "El formato de direccion no es valida"
    },
    ciudad : {
        valueMissing: "Ingrese una ciudad en este campo",
        patternMismatch: "Ingrese una ciudad valida"
    },
    estado : {
        valueMissing: "Ingrese un estado en este campo",
        patternMismatch: "Ingrese un estado valido"
    }
}

function showMessage(tipoInput, input){
    let messageError = "";
    const typeError = [
        "valueMissing",
        "typeMismatch",
        "patternMismatch",
        "customError"
    ];

    typeError.forEach( (error) =>{
        if(input.validity[error]){
            messageError = messageErrors[tipoInput][error];
        }
    });

    return messageError;
}

function validarFehca(input){
    const fechaActual = new Date();
    const fechaCliente = new Date(input.value);

    const diferenciaMilisegundos = fechaActual - fechaCliente;
    const anhosDiferencia = diferenciaMilisegundos / (1000 * 60 * 60 * 24 * 365.25);

    if (anhosDiferencia <= 18) {
        input.setCustomValidity('Debes tener al menos 18 años de edad.');
    } else {
        input.setCustomValidity('');
    }
}

