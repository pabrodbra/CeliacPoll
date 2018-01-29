/* PROPIETARY */	
// --- Admin - Añadir
//Esta crea el formulario para añadir pregunta al pulsar el boton de añadir pregunta de la barra de admin
$(document).on('click', "#btn-anadir", function() {
$('#fh5co-content').html('<form id="form1" action="/polls/anadir/2" method="POST" >\
					<div class="col-md-12"> \
						<div class="form-group"> \
							<label for="texto" class="sr-only">Enunciado</label> \
							<textarea placeholder="Enunciado" id="texto" name="texto" type="text" class="form-control input-lg" rows="3"></textarea \
						</div>	\
					</div>\
					<div class="col-md-12">\
								<div class="form-group">\
									<label for="tipo" class="sr-only">Tipo</label>\
									<select class="form-control input-lg" name="tipo" id="tipo">\
									  <option>texto</option>\
									  <option>seleccion</option>\
									</select>\
								</div>	\
							</div>\
					<div id="fo">\
					<div class="col-md-12"> \
						<div class="form-group">\
							<label for="opciones" class="sr-only">Opcion1</label>\
							<input placeholder="Opcion1" id="opcion1" name="opciones" type="text" class="form-control input-lg">\
						</div>	\
					</div>\
					\
					<div class="col-md-12"> \
						<div class="form-group">\
							<label for="opciones" class="sr-only">Opcion2</label>\
							<input placeholder="Opcion2" id="opcion2" name="opciones" type="text" class="form-control input-lg">\
						</div>	\
					</div>\
					</div>\
					<div class="col-md-12">\
						<div class="form-group">\
							<button class="btn btn-primary btn-lg " id="anadir-pregunta" >Añadir</button>\
							<input type="reset" id="reset" class="btn btn-outline btn-lg " value="Reset">\
						</div>	\
					</div>\
				</form>\
				<div class="col-md-12"> \
							<a class="btn btn-outline btn-sm" id="anadir-opcion" onClick="aa=crearOpcion(aa)">+</a>\
					</div>	')
});
//Esta es para añadir mas opciones si se quisiera al pulsar el boton +
var aa=2;
function crearOpcion(aa) {
aa= aa+1;
	$('#fo').append('<div class="col-md-12"> \
						<div class="form-group">\
							<label for="opciones" class="sr-only">Opcion'+aa+'</label>\
							<input placeholder="Opcion'+aa+'" id="opcion'+aa+'" name="opciones" type="text" class="form-control input-lg">\
						</div>	\
					</div> ')
return aa
};

//AÑADIR PREGUNTA se ejecuta al pulsar el boton añadir pregunta y manda el post para añadir en base a lo que se haya escrito en el post
$(document).on('click', "#anadir-pregunta", function(){
	$( "#form1" ).submit(function( event ) {
		// Stop form from submitting normally
		event.preventDefault();

		// Get some values from elements on the page:
		var $form = $( this ),
		term = $form.find( "input[name='texto']" ).val();
		tipe = $form.find( "input[name='tipo']" ).val();
		opc = $form.find( "input[name='opciones']" ).val();
		url ="/polls/anadir/2" ;
		data ={ 
			"tipo": tipo,
			"texto": term,
			"opciones​": [opc] 
		}
		// Send the data using post
		$.ajax({
			url         : $(this).attr('action'),
			type        : 'POST',
			data        : $(this).serialize(), 
			cache       : false,
			async       : false,
			success: function(response){
				alert('datos guardados')
				$( "#reset" ).click()
			},
			error : function(response){
				alert('error al guardar los datos')
			}
		//return false;
		});
	});
});


// --- Admin - Modificar
//Esta se ejecuta al pulsar el boton de la barra de admi de modificar y lee el número de preguntas de la bd y crea un boton para cada una
$(document).on('click', "#btn-mod", function() {
	$.ajax({
		url:"/polls/total/2" ,
		type: "GET",
		data: {},
		success:function(response){
			$('#fh5co-content').html('<h3>Elija la pregunta a modificar</h3>');
			for (var i = 1; i <= response; i++) {
				$('#fh5co-content').append('<button class="btn btn-primary btn-lg " id="pregunta'+i+'" onClick="crearModificar('+i+')" >'+i+'</button>');

			}
			$('#fh5co-content').append('<div id="modificardiv"></div>')
		},
		complete:function(response){
			
		},
		error:function(e){
			console.log("***ERROR*** :: " + e)
		}
	});
});
//Se ejecuta al pulsar el botón de una pregunta especifica, coge los datos de ésta de la db y los pone en el formulario
function crearModificar(i) {
	$.ajax({
		url:"/polls/2/pregunta/"+i ,
		type: "GET",
		data: {},
		success:function(response){

			$('#modificardiv').html('<form id="form1" action="" method="POST" >\
					<div class="col-md-12"> \
						<div class="form-group"> \
							<label for="texto" class="sr-only">Enunciado</label> \
							<input value="'+response.texto+'" id="texto" name="texto" type="text" class="form-control input-lg" rows="3"> \
						</div>	\
					</div>\
					<div class="col-md-12">\
								<div class="form-group">\
									<label for="tipo" class="sr-only">Tipo</label>\
									<select class="form-control input-lg" name="tipo" id="tipo">\
									  <option>texto</option>\
									  <option>seleccion</option>\
									</select>\
								</div>	\
							</div>\
					<div id="fo">\
					</div>\
					<div class="col-md-12">\
						<div class="form-group">\
							<button class="btn btn-primary btn-lg " id="modificar-pregunta" >Modificar</button>\
							<button  id="borrar" class="btn btn-outline btn-lg ">Borrar</button>\
						</div>	\
					</div>\
				</form>\
				');


			for (var np = response.opciones.length - 1; np >= 0; np--) {
				crearOpcionRellena(np, response)
			}
		},
		error:function(e){
			console.log("***ERROR*** :: " + e)
		}
	});

};
//Esta es para rellenar los for de las opciones de la pregunta que se quiere modificar
function crearOpcionRellena(np, resp) {
	console.log(resp);
	temp=resp.opciones[np]
	$('#fo').append('<div class="col-md-12"> \
						<div class="form-group">\
							<label for="opciones" class="sr-only">Opcion'+np+'</label>\
							<input value="'+temp+'" id="opcion'+np+'" name="opciones" type="text" class="form-control input-lg">\
						</div>	\
					</div> ')
return aa
};


/*
---------------------
----- AUTHENTICATION
---------------------
*/
// --- Admin & LogIn/LogOut handler
$(window).on("load", function() {
	console.log( "Ha ocurrido window.load: ventana lista" );
	if(sessionStorage['token']){
		console.log("There is a token!");
		document.getElementById("li_log").innerHTML = '<a id="logout" href="/login">Log Out</a>'
		//$('#li_log').html('<a id="logout" href="/login">Log Out</a>');
	} else{
		document.getElementById("fh5co-primary-menu").children[3].style.display = "none"
	}
});

// --- Log In Authentication + Token
$(function() { 
	$("#login_form").submit(function(e) {
		e.preventDefault();
		console.log("TESTING");
		var email = document.getElementById('email').value;
		var password = document.getElementById('password').value;

		$.ajax({
			type: "POST",
			url: "/users/auth",
			data: { "email" : email, "password" : password},
			dataType: "json",
			success: function(response) {
				console.log(response);
				if(response['success'] == true){
					security_token = response['token'];
					if (typeof(Storage) !== "undefined") {
						sessionStorage.setItem("token", security_token);
					} else {
					    // Sorry! No Web Storage support..
					    alert("Your browser does not support Session Storage, try with another!")
					}
					alert('Valid user! - You may access admin panel')
					window.location.href = "/admin";
				}
				else
					alert(response['message']);
			},
			error: function() {
				alert('Error logging in - Please try again');
			}
		});
	});
});

// --- Logout
$(document).on('click', "#logout", function(e) {
	sessionStorage.removeItem('token');
	window.location.href = "/";
});

// --- Admin authorizantion
$(document).on('click', "#admin_button", function(e) {
	console.log("ADMIN_CHECK");
	var verified = false;

	console.log("CHECK #1");
	console.log(verified);
	$.ajax({
		url:"/users/verify_admin" ,
		headers: {'x-access-token' : sessionStorage.token},
		type: "GET",
		data: {},
		async: false,
		success:function(response){
			if(response['success'] == true)
				verified = true;

		},
	});

	if(verified == false){
		e.preventDefault();
		alert('Inicie sesión para acceder al panel de control de administrador')
	}
});