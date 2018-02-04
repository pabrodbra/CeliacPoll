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

$(document).on('click', "#comenzar_1", function() {
	var poll_response = getPoll("1");
	var poll = poll_response.responseJSON;
	var form_id = "poll_1"

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
	poll_form_div.appendChild(poll_form)
	container_div.appendChild(poll_form_div);
	poll_div.appendChild(container_div);

	parserMongo(poll, form_id)
});

function parserMongo(poll, idForm) {
	for(let seccion of poll.secciones) {
		for(let pregunta of seccion.preguntas) {
			switch(pregunta.tipo) {
				case "texto":
					createText(idForm, pregunta.texto);
					break;
				case "seleccion":
					createSelection(idForm, pregunta.texto, pregunta.opciones);
					break;
				case "multi-seleccion":
					createMultiSelection(idForm, pregunta.texto, pregunta.opciones);
			}
		}
	}
	createSubmit(idForm, "Enviar");
}

function createText(id, name) {
	var f = document.getElementById(id);
	var d = document.createElement("div");
	var l = document.createElement("label");
	var t = document.createTextNode(name);

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

function createSelection(id, name, options) {
	var f = document.getElementById(id);

	var d = document.createElement("div");
	var l = document.createElement("label");
	var t = document.createTextNode(name);
	d.setAttribute("class", "form-group");

	l.appendChild(t);
	d.appendChild(l);

	var s = document.createElement("select");

	s.setAttribute("class", "form-control");
	s.setAttribute("name", name);

	var o_default = document.createElement("option");
	o_default.setAttribute("selected", "true");
	o_default.setAttribute("value", "");
	s.appendChild(o_default);

	for(option of options) {
		var o = document.createElement("option");
		//o.setAttribute("name", name);
		o.setAttribute("value", option);
		var tt = document.createTextNode(option);
		o.appendChild(tt);
		s.appendChild(o);

	}

	d.appendChild(s);
	f.appendChild(d);
}

function createMultiSelection(id, name, options) {
	var f = document.getElementById(id);

	var d = document.createElement("div");
	var l = document.createElement("label");
	var t = document.createTextNode(name);

	d.setAttribute("class", "form-group");
	l.appendChild(t);
	d.appendChild(l);

	var s = document.createElement("select");
	s.setAttribute("class", "form-control");
	s.setAttribute("name", name);
	s.setAttribute("multiple", "multiple");
	s.setAttribute("id", "idMulti")

	for(option of options) {
		var o = document.createElement("option");
		//o.setAttribute("name", name);
		o.setAttribute("value", option);
		var tt = document.createTextNode(option);
		o.appendChild(tt);
		s.appendChild(o);

	}

	d.appendChild(s);
	f.appendChild(d);
}

function createSubmit(id, text) {
	var f = document.getElementById(id);

	var i = document.createElement("button");
	i.setAttribute("class", "btn btn-primary btn-lg")
	i.setAttribute("type", "submit");
	var tt = document.createTextNode(text);
	i.appendChild(tt);

	f.appendChild(i);
}

function getQuestionText(text) {
	return (text[text.length -1]=="?")? text + " ":text + ": ";
}

$(document).on('change', '#idMulti', function(e) {
	//e.preventDefault();
	var eso = $(this).prop('selected');
	console.log("test");
	console.log(e);
	//$(this).prop('selected', !$(this).prop('selected'));
	return false;
});

/*
$('option').mousedown(function(e) {
    e.preventDefault();
    var originalScrollTop = $(this).parent().scrollTop();
    console.log(originalScrollTop);
    $(this).prop('selected', $(this).prop('selected') ? false : true);
    var self = this;
    $(this).parent().focus();
    setTimeout(function() {
        $(self).parent().scrollTop(originalScrollTop);
    }, 0);

    return false;
});

$('#poll_1').submit(function (e) {
    // prevent form submission
    e.preventDefault();
    var thisForm = $(e.currentTarget);
    $.ajax({
        // simulate form submission
        type: poll_1.attr('method') || 'POST',
        url: thisForm.attr('action') || window.location.href,
        data: $.serialize(thisForm.data())
    })
    .always(function () {
        // when it is done submitting data to the server, redirect
        window.location.replace("http://www.google.com");
    });
});

*/
