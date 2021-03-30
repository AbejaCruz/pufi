divGaleria = document.querySelector('.galeria');
    divMensaje = document.querySelector('.mensaje');
    const div = document.createElement('div');

    var lista = "";
    var enlace = new Array();
    enlace[0] = (new Image()).src = "../images/1.jpg";
    enlace[1] = (new Image()).src = "../images/2.jpg";
    enlace[2] = (new Image()).src = "../images/3.jpg";
    enlace[3] = (new Image()).src = "../images/4.jpg";
    enlace[4] = (new Image()).src = "../images/5.jpg";
    enlace[5] = (new Image()).src = "../images/6.jpg";

    while ((enlace.length) > 0) {
        var indice = Math.floor(Math.random() * enlace.length);
        var otraImag = enlace.splice(indice, 1);
        var orig = ("" + otraImag + "").split(".th").join("");
        lista += "<a href=" + orig + " title='" + orig + "'>";
        lista += "<img src=" + otraImag + " alt='" + otraImag + "'>";
        lista += "</a> ";
    }

    divGaleria.innerHTML = lista;

    const formulario = document.getElementById('enviar');


    formulario.addEventListener('submit', (e) => {
        e.preventDefault();

        const correo = document.getElementById('email').value;

        if (correo !== "") {

            validarEmail(correo);

        }



    })

    function validarEmail(correo) {
        var expreg = new RegExp("^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$");

        if (expreg.test(correo)) {
            let valor = correo.length;
            let mensaje;

            if ((valor % 2) === 0) {
                mensaje = 'el correo es PAR';
            } else {
                mensaje = 'el correo es IMPAR';
            }

            divMensaje.innerHTML = `<div class='validacion correcto'>El correo con ${valor} carácteres ha sido enviado con Éxito,  ${mensaje} </div>`
            setTimeout(() => {
                document.querySelector('.validacion').remove();

            }, 3000);


        } else {
            divMensaje.innerHTML = `<div class='validacion error'>El correo no es válido </div>`
            setTimeout(() => {
                document.querySelector('.validacion').remove();
            }, 3000);

        }
    }
