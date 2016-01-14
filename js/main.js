$(document).ready(initPage);

function initPage() {
  //conectar a PARSE //SDK
  $('#formLanding').submit(enviarformulario);
  Parse.initialize("p3ZtmQQYGzXGECb7AjDb8BiBuRHb2sFAdnW8dFfC", "SRXdcCmnfkq20cIOrSZzJSEh1R9YXVmdHJK37Jd0");
  
  /*
  //test the SDK
  var TestObject = Parse.Object.extend("TestObject");
  var testObject = new TestObject();
  testObject.save({foo: "bar"}).then(function(object) {
    alert("yay! it worked / Oh si, Funciona!");
  });
  */
  
  
  //plugin Form Validate
  $('#formLanding').validate({
    submitHandler function(form) {
    enviarFormulario();
  },
    rules: {
      nombre: "required",
      apellidos: "required",
      telefono: {
        required: true,
        digits: true
      },
      email: {
        required: true,
        email: true
      },
      ciudad: "required",
      placa: "required",
      vehiculo: "required",
    },//fin rules
    messages: {
      nombre: "Ingrese su nombre",
      apellidos: "Ingrese sus apellidos",
      telefono: {
        required: "Este campo es obligatorio. Ingrese su número de teléfono",
        digits: "Ingrese sólo números"
      },
      email: {
        required: "Ingrese su correo electrónico",
        email: "Por favor, escribe una dirección de correo válida"
      },
      ciudad: "Este campo es obligatorio. Seleccione la ciudad ",
      placa: "Este campo es obligatorio. Ingrese el número de placa del vehículo",
      vehiculo: "Este campo es obligatorio. Seleccione el tipo de uso del vehículo",
    } //fin mensajes
  }); //fin validate metodo
} //fin iniciar pagina

////////////ENVIAR FORMULARIO////////////
function enviarFormulario()
{
  //Creacion var  conecte al servicio
  var Cliente = Parse.Object.extend("Cliente");
    //creacion de instancia - 
  var cliente = new Cliente();
    cliente.save({
      Nombre: $('#nombre').value(),
      Apellido: $('apellidos').val(),
    }).then(function() {
      //Para limpiar los imputs
      $('#nombre').val("");
      $('#apellidos').val("");
      alert("Registro guardado");
    });
}//fin f() enviar Formulario