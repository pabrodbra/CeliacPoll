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

function parserMongo(poll, idForm) {
	for(let seccion of poll.secciones) {
		for(let pregunta of seccion.preguntas) {
			if (pregunta.tipo == "texto") 
                createText(idForm, pregunta.texto);
            else 
                createSelection(idForm, pregunta.texto, pregunta.opciones, pregunta.tipo);
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


function createSelection(id, name, options, type) {
	var f = document.getElementById(id);

	var d = document.createElement("div");
	d.setAttribute("class", "form-group");

	var l = document.createElement("label");
	l.appendChild(document.createTextNode(name));
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


function createSubmit(id, text) {
	var f = document.getElementById(id);

	var i = document.createElement("button");
	i.setAttribute("class", "btn btn-primary btn-lg")
	i.setAttribute("type", "submit");
	i.appendChild(document.createTextNode(text));

	f.appendChild(i);
}