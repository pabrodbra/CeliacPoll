var express = require('express');

// Import models
var PollResult  = require('../models/pollResult.js');
var Poll  = require('../models/poll.js');

//// --- Routing
var router = express.Router();
// PollResult Controller -- Collection: pollresults
// Get all PollResults
router.get('/', function(req,res,next) {
    PollResult.find(function(err, pollresults) {
        if (err) return console.log(err);
        res.json(pollresults)
    })
});

// Get all PollResults for Poll with ?idPoll
router.get('/:id', function(req,res,next){
    PollResult.find({idEncuesta: req.params.id}, function(err, pollresults) {
        if (err) return console.log(err);
        res.json(pollresults);
    })
});

// Save a PollResult for Poll with ?id
router.post('/save/:id', function(req,res,next) {
    //console.log(req.body)
    var respuestas = [];
    var score_final = 0;
    var original_poll;
    var current_question = 0;

    Poll.findOne({idEncuesta: req.params.id}, function (err, polls) {
        if (err) return console.log(err);
        console.log("####");
        console.log(polls);
        original_poll = polls;

        Object.keys(req.body).forEach(function(key) {
            var t_texto = key;
            var t_selected_option = req.body[key];
            var t_respuesta = {texto: t_texto, respuesta: t_selected_option};
            console.log("#");
            console.log(t_respuesta);
            respuestas.push(t_respuesta);

            for (var i = 0; i < original_poll.secciones[0].preguntas.length; i++){
              if (t_texto == original_poll.secciones[0].preguntas[i].texto)
                current_question = i;
            }

            var c_pregunta = original_poll.secciones[0].preguntas[current_question];
            if (typeof(c_pregunta.tipo) !== 'undefined' && c_pregunta.tipo != "texto"){
              var val_opciones = c_pregunta.opciones;
              var score_opciones = c_pregunta.valor_opciones;
              var percent = c_pregunta.percent_diagnostico
              var selected_index = -1;
              console.log(val_opciones)
              for (var i = 0; i < val_opciones.length; i++){
                if (val_opciones[i] == t_selected_option)
                  selected_index = i;
              }
              console.log(selected_index);
              if (selected_index != -1){
                console.log("--> " + val_opciones[selected_index])
                console.log("---> " + score_final)
                console.log("---> " + score_opciones[selected_index])
                console.log("---> " + percent)
                score_final += percent*score_opciones[selected_index];
                console.log("---> " + score_final)
              }
            }
        });

        var resultado = new PollResult({
            idEncuesta: req.params.id,
            respuestas: respuestas,
            scoreFinal: score_final
        });
        resultado.save();
        res.json(
            {
                mensaje: "Insertado con exito el resultado de la encuesta",
                result: score_final
            }
        );

    })


});

// Get Results Number from Result with ?idPoll
router.get('/total/:id', function(req,res,next) {
    PollResult.find({idEncuesta: req.params.id}, function(err,pollresults) {
        if (err) return console.log(err);
        res.json(pollresults.length);
    })
});

// Get all PollResults for Poll with ?idPoll
router.get('/view/:id/:resultIndex', function(req,res,next){
    PollResult.find({idEncuesta: req.params.id}, function(err, pollresults) {
        if (err) return console.log(err);
        res.json(pollresults[req.params.resultIndex - 1]);
    })
});

module.exports = router;
