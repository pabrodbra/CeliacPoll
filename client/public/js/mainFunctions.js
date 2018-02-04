/* PROPIETARY */	

/*
---------------------
----- ADMIN AÑADIR + MODIFICAR
---------------------
*/
// --- Admin - Añadir al pulsar el botón de la encuesta
function añadirPreguntaEncuesta(num_encuesta){
    $('#fh5co-content').html('<form id="form1" action="/polls/anadir/'+num_encuesta+'" method="POST" >\
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
						</div>	\
					</div>\
					</div>\
					<div class="col-md-12">\
						<div class="form-group">\
							<button class="btn btn-primary btn-lg " id="anadir-pregunta" >Añadir</button>\
							<input type="reset" id="reset" class="btn btn-outline btn-lg " value="Reset">\
							<button type="button" class="btn btn-outline btn-sm" id="anadir-opcion" onClick="aa=crearOpcion(aa)">Anadir opcion</button>\
						</div>	\
					</div>\
				</form>\
				<div class="col-md-12"> \
					</div>	')};

// --- Admin - Añadir al pulsar el botón de añadir preguntas te crea un boton para cada encuesta
$(document).on('click', "#btn-anadir", function() {
	$.ajax({
		url:"/polls/total_encuentas/retrieve" ,
		type: "GET",
		data: {},
		success:function(response){
			$('#fh5co-content').html('<h3>Elija la encuesta a modificar</h3>');
			for (var i = 1; i <= response; i++) {
				$('#fh5co-content').append('<div class="heading text-center">\
					<button class="btn btn-primary btn-lg " id="pregunta'+i+'" onClick="añadirPreguntaEncuesta('+i+')" >Encuesta '+i+'</button>\
					</div>');

			}
		},
		complete:function(response){
			
		},
		error:function(e){
			console.log("***ERROR*** :: " + e)
		}
	});
});

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
		url ="/polls/anadir/1" ;
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

// --- Admin - Modificar al pulsar el botón de la encuesta
function modificarEncuesta(num_encuesta){
    $.ajax({
        url:"/polls/total/" + num_encuesta ,
        type: "GET",
        data: {},
        success:function(response){
            $('#fh5co-content').html('<h3>Elija la pregunta a modificar</h3>');
            for (var i = 1; i <= response; i++) {
                $('#fh5co-content').append('<button class="btn btn-primary btn-lg " id="pregunta'+i+'" onClick="crearModificar('+i+', '+num_encuesta+')" >'+i+'</button>');

            }
            $('#fh5co-content').append('<div id="modificardiv"></div>')
        },
        complete:function(response){

        },
        error:function(e){
            console.log("ERROR :: " + e)
        }
    });
}

// --- Admin - Modificar al pulsar el botón de modificar preguntas te crea un boton para cada encuesta
$(document).on('click', "#btn-mod", function() {
	$.ajax({
		url:"/polls/total_encuentas/retrieve" ,
		type: "GET",
		data: {},
		success:function(response){
			$('#fh5co-content').html('<h3>Elija la encuesta a modificar</h3>');
			for (var i = 1; i <= response; i++) {
				$('#fh5co-content').append('<div class="heading text-center">\
					<button class="btn btn-primary btn-lg " id="pregunta'+i+'" onClick="modificarEncuesta('+i+')" >Encuesta '+i+'</button>\
					</div>');

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
function crearModificar(i, numEncuesta) {
	$.ajax({
		url:"/polls/"+numEncuesta+"/pregunta/"+i ,
		type: "GET",
		data: {},
		success:function(response){

			$('#modificardiv').html('<form id="form1" action="/polls/modify/'+numEncuesta+'/'+i+'" method="POST" >\
					<div class="col-md-12"> \
						<div class="form-group"> \
							<label for="texto" class="sr-only">Enunciado</label> \
							<textarea id="texto" name="texto" type="text" class="form-control input-lg" rows="3">'+response.texto+'</textarea> \
						</div>	\
					</div>\
					<div class="col-md-12">\
								<div class="form-group">\
									<label for="tipo" class="sr-only">Tipo</label>\
								</div>	\
							</div>\
					<div id="fo">\
					</div>\
					<div class="col-md-12">\
						<div class="form-group">\
							<button class="btn btn-primary btn-lg " id="modificar-pregunta" >Modificar</button>\
							<button type=button  id="borrar" class="btn btn-outline btn-lg" onClick=borrarPregunta('+i+', ' + numEncuesta +')>Borrar</button>\
							<button type=button class="btn btn-outline btn-sm" id="anadir-opcion" onClick="aa=crearOpcion(aa)">Anadir opcion</button>\
						</div>	\
					</div>\
				</form>\
				');


			for (var np = 0; np <= response.opciones.length -1 ; np++) {
				crearOpcionRellena(np, response)
			}
		},
		error:function(e){
			console.log("***ERROR*** :: " + e)
		}
	});

};



$(document).on('click', "#modificar-pregunta", function(){
	$( "#form1" ).submit(function( event ) {
		// Stop form from submitting normally
		event.preventDefault();

		// Get some values from elements on the page:
		var $form = $( this ),
		term = $form.find( "input[name='texto']" ).val();
		opc = $form.find( "input[name='opciones']" ).val();

		// Send the data using post
		$.ajax({
			url         : $(this).attr('action'),
			type        : 'POST',
			data        : $(this).serialize(), 
			cache       : false,
			async       : false,
			success: function(response){
				alert('datos guardados')
				$( "#btn-mod" ).click()
			},
			error : function(response){
				alert('error al guardar los datos')
			}
		//return false;
		});
	});
});

// -- Admin Borrar
function borrarPregunta(i, num_encuesta){
	$.ajax({
		url:"/polls/delete/"+num_encuesta+"/"+i ,
		type: "POST",
		data: {},
		success:function(response){
			$( "#btn-mod" ).click()	
		},
		error:function(e){
			console.log("***ERROR*** :: " + e)
		}
	});
};

/*
---------------------
----- Modificar Scores
---------------------
*/
// --- Admin - Modificar al pulsar el botón de la encuesta
function modificarEncuestaScore(num_encuesta){
   	$.ajax({
		url:"/polls/total/"+num_encuesta ,
		type: "GET",
		data: {},
		success:function(response){
			$('#fh5co-content').html('<h3>Elija la pregunta a modificar score</h3>');
			for (var i = 1; i <= response; i++) {
				$('#fh5co-content').append('<button class="btn btn-primary btn-lg " id="pregunta'+i+'" onClick="crearModificarScore('+i+', '+num_encuesta+')" >'+i+'</button>');

			}
			$('#fh5co-content').append('<div id="modificardiv"></div>')
		},
		complete:function(response){
			
		},
		error:function(e){
			console.log("***ERROR*** :: " + e)
		}
	});
};

// --- Admin - Modificar al pulsar el botón de modificar preguntas te crea un boton para cada encuesta
$(document).on('click', "#btn-mod-score", function() {
	$.ajax({
		url:"/polls/total_encuentas/retrieve" ,
		type: "GET",
		data: {},
		success:function(response){
			$('#fh5co-content').html('<h3>Elija la encuesta a modificar score</h3>');
			for (var i = 1; i <= response; i++) {
				$('#fh5co-content').append('<div class="heading text-center">\
					<button class="btn btn-primary btn-lg " id="pregunta'+i+'" onClick="modificarEncuestaScore('+i+')" >Encuesta '+i+'</button>\
					</div>');

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

function crearModificarScore(i, numEncuesta) {
	$.ajax({
		url:"/polls/"+numEncuesta+"/pregunta/"+i ,
		type: "GET",
		data: {},
		success:function(response){
			temp= response.percent_diagnostico;

			$('#modificardiv').html('<form id="form1" action="/polls/modify_value/'+numEncuesta+'/'+i+'" method="POST" >\
					<div class="col-md-12"> \
						<div class="form-group"> \
							<label>'+response.texto+'</label> \
								<div class="col-md-12"> \
									<label>Ponderación pregunta</label>\
								</div>	\
							<div class="col-md-4">\
								<input value="'+temp+'" id="percent_diagnostico" name="percent_diagnostico" type="text" class="form-control input-lg">\
							</div>	\
							<div class="col-md-12">\
								<label">Ponderación Opciones</label>\
							</div>\
						</div>	\
					</div>\
					<div id="fo">\
					</div>\
					<div class="col-md-12">\
						<div class="form-group col-md-6">\
							<button class="btn btn-primary btn-lg " id="modificar-scores" >Modificar</button>\
						</div>	\
					</div>\
				</form>\
				');


			for (var np = 0; np <= response.opciones.length -1; np++) {
				crearOpcionScore(np, response)
			}
		},
		error:function(e){
			console.log("***ERROR*** :: " + e)
		}
	});

};

$(document).on('click', "#modificar-scores", function(){
	console.log("hola");
	$( "#form1" ).submit(function( event ) {
		console.log($(this).attr('action'));
		console.log($(this).serialize());
		event.preventDefault();
		// Send the data using post
		$.ajax({
			url         : $(this).attr('action'),
			type        : 'POST',
			data        : $(this).serialize(), 
			cache       : false,
			async       : false,
			success: function(response){
				alert('datos guardados')
				$( "#btn-mod-score" ).click()
			},
			error : function(response){
				alert('error al guardar los datos')
			}
		//return false;
		});
	});
});
//Esta es para añadir mas opciones si se quisiera al pulsar el boton +
var aa=0;
function crearOpcion(aa) {
aa= aa+1;
	$('#fo').append('<div class="col-md-12" id='+aa+'> \
						<div class="form-group col-md-10">\
							<label for="opciones" class="sr-only">Opcion'+aa+'</label>\
							<input placeholder="Opcion" id="opcion'+aa+'" name="opciones" type="text" class="form-control input-lg">\
						</div>	\
						<div class="col-md-2">\
						<button type=button class="btn btn-outline btn-sm" id="borrar-opcion" onClick="borrarOpcion('+aa+')">-</button>\
						</div>	\
					</div> ')
return aa
};

function borrarOpcion(np){
	$('#'+np).remove();
}

//Esta es para rellenar los form de las opciones de la pregunta que se quiere modificar el score
function crearOpcionScore(np, resp) {
	console.log(resp);
	temp=resp.valor_opciones[np]
	temp2=resp.opciones[np]
	$('#fo').append('<div class="col-md-12" id="'+np+'"> \
						<div class="form-group">\
							<label">'+temp2+'</label>\
							<div class="col-md-4">\
								<input value="'+temp+'" id="opcion'+np+'" name="valor_opciones" type="text" class="form-control input-lg">\
							</div>	\
						</div>	\
					</div> ')
return aa
};
//Esta es para rellenar los for de las opciones de la pregunta que se quiere modificar
function crearOpcionRellena(np, resp) {
	console.log(resp);
	temp=resp.opciones[np]
	$('#fo').append('<div class="col-md-12" id="'+np+'"> \
						<div class="form-group col-md-10">\
							<label for="opciones" class="sr-only">Opcion'+np+'</label>\
							<input value="'+temp+'" id="opcion'+np+'" name="opciones" type="text" class="form-control input-lg">\
						</div>	\
						<div class="col-md-2">\
						<button type=button class="btn btn-outline btn-sm" id="borrar-opcion" onClick="borrarOpcion('+np+')">-</button>\
						</div>	\
					</div> ')
return aa
};

/*
---------------------
----- VER RESULTADOS
---------------------
*/
// --- Admin - Modificar al pulsar el botón de la encuesta
function verResultadosEncuesta(num_encuesta){
  $.ajax({
		url:"/resultados/total/"+num_encuesta ,
		type: "GET",
		data: {},
		success:function(response){
			$('#fh5co-content').html('<h3>Elija los resultados a observar </h3>');
			for (var i = 1; i <= response; i++) {
				$('#fh5co-content').append('<button class="btn btn-primary btn-lg " id="pregunta'+i+'" onClick="verResultado('+i+', '+num_encuesta+')" >'+i+'</button>');

			}
			$('#fh5co-content').append('<div id="resultadosdiv"></div>')
		},
		complete:function(response){
			
		},
		error:function(e){
			console.log("***ERROR*** :: " + e)
		}
	});
};

// --- Admin - Modificar al pulsar el botón de modificar preguntas te crea un boton para cada encuesta
$(document).on('click', "#btn-ver", function() {
	$.ajax({
		url:"/polls/total_encuentas/retrieve" ,
		type: "GET",
		data: {},
		success:function(response){
			$('#fh5co-content').html('<h3>Elija la encuesta para ver los resultados</h3>');
			for (var i = 1; i <= response; i++) {
				$('#fh5co-content').append('<div class="heading text-center">\
					<button class="btn btn-primary btn-lg " id="pregunta'+i+'" onClick="verResultadosEncuesta('+i+')" >Encuesta '+i+'</button>\
					</div>');

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


function verResultado(index, numEncuesta) {
	$.ajax({
		url:"/resultados/view/"+numEncuesta+"/"+index,
		type: "GET",
		data: {},
		success:function(response){
			$('#resultadosdiv').html('');
			$('#resultadosdiv').append('\
				<div class="col-md-12"> \
					<p class="text-left">\
						<h4>Puntuacion final</h4> \
						' + response.scoreFinal+ '\
					</p>\
				</div>\
				');
			for(respuesta of response.respuestas){
				$('#resultadosdiv').append('\
					<div class="col-md-12"> \
						<p class="text-left">\
							<h4>'+ respuesta.texto +'</h4> \
							' + respuesta.respuesta+ '\
						</p>\
					</div>\
					');
			}
		},
		error:function(e){
			console.log("***ERROR*** :: " + e)
		}
	});
};


/*
---------------------
----- AUTHENTICATION
---------------------
*/
// --- Admin & LogIn/LogOut handler
$(window).on("load", function() {
	if(sessionStorage['token']){
		console.log("There is a token!");
		document.getElementById("li_log").innerHTML = '<a id="logout" href="/login">Log Out</a>'
	} else{
		document.getElementById("fh5co-primary-menu").children[3].style.display = "none"
	}
});

// --- Log In Authentication + Token
$(function() { 
	$("#login_form").submit(function(e) {
		e.preventDefault();
		var email = document.getElementById('email').value;
		var password = document.getElementById('password').value;

		$.ajax({
			type: "POST",
			url: "/users/auth",
			data: { "email" : email, "password" : password},
			dataType: "json",
			success: function(response) {
				if(response['success'] == true){
					security_token = response['token'];
					if (typeof(Storage) !== "undefined") {
						sessionStorage.setItem("token", security_token);
					} else {
					    // Sorry! No Web Storage support..
					    alert("Your browser does not support Session Storage, try with another!")
					}
					alert('Valid user! - You may access admin panel')
					window.location.href = "/";
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
	var verified = false;

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