function getPoll(poll_id){
	return ($.ajax({
		url:"/polls/" + poll_id,
		type: "GET",
		data: {},
		dataType: 'json',
		async: false,
		success:function(response){
				return response;
		}
	}))
}

$(document).on('click', "#comenzar_2", function() {
	var poll_response = getPoll("2");
	var poll = poll_response.responseJSON;
	var form_id = "poll_2";

	var poll_div = document.getElementById("polldiv");
	var container_div = document.createElement("div");
	var poll_form_div = document.createElement("div");
	var poll_form = document.createElement("form");

	container_div.setAttribute("class", "container");
	poll_form_div.setAttribute("style", "justify-content: center");
	poll_form_div.setAttribute("class", "col-md-12");

	poll_form.setAttribute("action", "/resultados/save/2");
	poll_form.setAttribute("method", "POST");
	poll_form.setAttribute("id", form_id);


	while (poll_div.firstChild) {
	    poll_div.removeChild(poll_div.firstChild);
	}
	poll_form_div.appendChild(poll_form);
	container_div.appendChild(poll_form_div);
	poll_div.appendChild(container_div);

	parserMongo(poll, form_id);
});

$(document).on('click', "#comenzar_1", function() {
	var poll_response = getPoll("1");
	var poll = poll_response.responseJSON;
	var form_id = "poll_1";

	var poll_div = document.getElementById("polldiv");
	var container_div = document.createElement("div");
	var poll_form_div = document.createElement("div");
	var poll_form = document.createElement("form");

	container_div.setAttribute("class", "container");
	poll_form_div.setAttribute("style", "justify-content: center");
	poll_form_div.setAttribute("class", "col-md-12");

	poll_form.setAttribute("action", "/resultados/save/1");
	poll_form.setAttribute("method", "POST");
	poll_form.setAttribute("id", form_id);


	while (poll_div.firstChild) {
	    poll_div.removeChild(poll_div.firstChild);
	}
	poll_form_div.appendChild(poll_form);
	container_div.appendChild(poll_form_div);
	poll_div.appendChild(container_div);

	parserMongo(poll, form_id);
});



var quizApp = function(n) {
	// n: number of questions to show
	// poll: JSON object containing the poll
	this.n = n;
	this.current_group = 1;
	this.id_form;
	this.section;
	this.n_total;
	this.last_group;
	// Número de grupos
	this.n_group;
	this.n_total;

	this.setParams = function(poll, idForm) {
		this.id_form = idForm;
		this.section = poll.secciones[0];
		this.n_total = this.section.preguntas.length;

		var div = this.n_total / this.n;
		this.last_group = this.n_total % this.n;
		this.n_group = Math.round(div);
		this.n_total = this.section.preguntas.length;
	}

	this.createText = function(id, name, n) {
		var f = document.getElementById(id);

		var d = document.createElement("div");
		var l = document.createElement("label");

		var t = document.createTextNode(n + ". " + name);

		d.setAttribute("class", "form-group");

		l.appendChild(t);
		d.appendChild(l);

		var i = document.createElement("input");

		i.setAttribute("type", "text");
		i.setAttribute("name", name);
		i.setAttribute("class", "form-control");
		
		d.appendChild(i);
		f.appendChild(d);

	}


	this.createSelection = function(id, name, n, options, type) {
		var f = document.getElementById(id);

		var d = document.createElement("div");
		d.setAttribute("class", "form-group");

		var l = document.createElement("label");
		l.appendChild(document.createTextNode(n + ". " + name));
		d.appendChild(l);

		var p = document.createElement("p");

		var i_inv = document.createElement("input");
		i_inv.setAttribute("type", "radio");
		i_inv.setAttribute("name", name);
		i_inv.setAttribute("value", "");
		i_inv.setAttribute("hidden", "hidden");
		i_inv.setAttribute("checked", true);
		p.appendChild(i_inv);

		var input_type = (type == "seleccion" ? "radio" : "checkbox");

		for(option of options) {
			var i = document.createElement("input");
			i.setAttribute("type", input_type);
			i.setAttribute("name", name);
			i.setAttribute("value", option);
			p.appendChild(i);

			p.appendChild(document.createTextNode(" " + option));
			p.appendChild(document.createElement("br"));

		}

		d.appendChild(p);
		f.appendChild(d);
	}

	this.addQuestion = function(i, id) {
		var question = this.section.preguntas[i];
			if (question.tipo == "texto")
                this.createText(id, question.texto, i + 1);
            else 
                this.createSelection(id, question.texto, i + 1, question.opciones, question.tipo);
	}

	this.displayQuiz = function() {
		var form = document.getElementById(this.id_form);
		var ques = 0;
		var div, div_id;
		for (let i = 1; i < this.n_group; i++) {
			div = document.createElement("div");
			div.hidden = true;
			div_id = "group" + i;
			div.setAttribute("id", div_id);
			form.appendChild(div);
			for (let j = 0; j < this.n; j++) {
				this.addQuestion(ques, div_id);
				ques += 1;
			}
		}

		var last_div = document.createElement("div");
		last_div.hidden = true;
		var last_div_id = "group" + this.n_group;
		last_div.setAttribute("id", last_div_id);
		form.appendChild(last_div);
		if (this.last_group) {
			for (let i = 0; i < this.last_group; i++) {
				this.addQuestion(ques, last_div_id);
				ques += 1;
			}
		}
		else {
			for (let i = 0; i < this.n; i++) {
				this.addQuestion(ques, last_div_id);
				ques += 1;
			}
		}
		
		form.appendChild(last_div);

	}

	this.displayGroup = function(group) {
		this.current_group = group;
		var d = document.getElementById("group" + this.current_group);
		d.hidden = false;

		this.manageButtons();
	}

	this.manageButtons = function() {
		if (this.current_group == 1) {
			$("#previous").attr("disabled", true);
		}

		else if (this.current_group == this.n_group) {
			$("#next").attr("disabled", true);
		}

		else {
			$("#previous").attr("disabled", false);
			$("#next").attr("disabled", false);	
		}
	}

	this.changeGroup = function(n) {
		var d = document.getElementById("group" + this.current_group);
		d.hidden = true;
		this.current_group = this.current_group + n;
		this.displayGroup(this.current_group);
	}
}


var jsq = new quizApp(5);

function parserMongo(poll, idForm) {
	jsq.setParams(poll, idForm);	
	jsq.displayQuiz();

	var button_div = document.createElement("div");
	button_div.setAttribute("id", "divbutton");

	var form = document.getElementById(idForm);
	form.appendChild(button_div);

	createPrevNext("divbutton");
	createSubmit("divbutton", "Enviar", idForm);
	jsq.displayGroup(1);
}


function createPrevNext(id) {
	var f = document.getElementById(id);

	var i_prev = document.createElement("button");
	i_prev.setAttribute("class", "btn btn-primary btn-lg")
	i_prev.setAttribute("name", "previous");
	i_prev.setAttribute("id", "previous");
	i_prev.appendChild(document.createTextNode("Anterior"));

	var i_next = document.createElement("button");
	i_next.setAttribute("class", "btn btn-primary btn-lg")
	i_next.setAttribute("name", "next");
	i_next.setAttribute("id", "next");
	i_next.appendChild(document.createTextNode("Siguiente"));

	f.appendChild(i_prev);
	f.appendChild(i_next);
}


function createSubmit(id, text, id_form) {
	var f = document.getElementById(id);

	var i = document.createElement("button");
	i.setAttribute("class", "btn btn-primary btn-lg");
	i.setAttribute("type", "submit");
	i.setAttribute("onClick", "enviarForm("+id_form+")");
	i.appendChild(document.createTextNode(text));

	f.appendChild(i);
}


$(document).on('click', "#next", function(e) {
	e.preventDefault();
	jsq.changeGroup(1);
});	
	
$(document).on('click', "#previous", function(e) {
	e.preventDefault();
	jsq.changeGroup(-1);
});

function enviarForm(form_id){
	$('#'+form_id.id).submit(function( event ) {
		// Stop form from submitting normally
		event.preventDefault();
		// Send the data using post
		
		$.ajax({
			url         : $(this).attr('action'),
			type        : 'POST',
			data        : $(this).serialize(), 
			cache       : false,
			async       : true,
			success: function(response){
				alert('datos guardados, muchas gracias')
				console.log(response);
				$('#polldiv').html('<div class="col-md-12 heading text-center">\
										<h2>'+response.mensaje+'</h2>\
										<h2>El resultado de tu test es: '+response.result+'</h2>\
                  						<a class="btn btn-outline btn-lg" href="/cuestionario1" id="home">Lo he entendido</a>\
                			</div>')},
			error : function(response){
				alert('error al guardar los datos')
			}
		});
		
	})
}
