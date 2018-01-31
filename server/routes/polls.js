var express = require('express');

// Import models
var Poll  = require('../models/poll.js');
var PollResult  = require('../models/pollResult.js');

//// --- Routing
var router = express.Router();

// -- Poll Controllers -- Collection: polls
// Get all Polls
router.get('/', function(req,res,next) {
    Poll.find(function (err, polls) {
        if (err) return console.log(err);
        res.json(polls);
    })
});

// Get Poll with ?idPoll
router.get('/:id', function(req,res,next) {
    // pasamos el param id encuesta para filtrar y obtener el documento 
    Poll.findOne({idEncuesta: req.params.id}, function (err, polls) {
        if (err) return console.log(err);
        res.json(polls);
    })
});

// Get Questions Number from Poll with ?idPoll
router.get('/total/:id', function(req,res,next) {
    Poll.findOne({idEncuesta: req.params.id}, function(err,polls) {
        if (err) return console.log(err);
        res.json(polls.secciones[0].preguntas.length);
    })
});

// Get Question ?idPreg from Poll with ?idPoll
router.get('/:id/pregunta/:idPregunta', function(req,res,next) {
    Poll.findOne({idEncuesta: req.params.id}, function(err,polls){
        if (err) return console.log(err);
        // comprobar que no se excede el maximo de preguntas.
        if (req.params.idPregunta > polls.secciones[0].preguntas.length)
        {
            res.json({mensaje: "error, se execde el maximo de preguntas del cuestionario"});
        }
        res.json(
            polls.secciones[0].preguntas[req.params.idPregunta - 1]);
    })
});

// Add Question to Poll with ?idPoll
router.post('/anadir/:id', function(req,res,next){
    Poll.findOne({idEncuesta: req.params.id}, function(err,polls) {
        if (err) return console.log(err);
        // comrpboar que sea valido
        if(typeof req.body.texto == "undefined" || typeof req.body.tipo == "undefined")
        {
            res.json({mensaje: "error - no se han especificado los campos tipo o texto"});
        }
        else {
            // comprobar si es campo de texto
            if (req.body.texto == "texto") {
                polls.secciones[0].preguntas.push({texto: req.body.texto, tipo: req.body.tipo});
                polls.save();
                res.json({mensaje: "pregunta insertada con exito"});
            }
            else
            {
                polls.secciones[0].preguntas.push({texto: req.body.texto, tipo: req.body.tipo, opciones: req.body.opciones});
                polls.save();
                res.json({mensaje: "pregunta insertada con exito"});
            }
        }
    })
});

// Modify Question ?idPreg from Poll with ?idPoll
router.post('/modify/:id/:idPregunta', function(req,res,next){
    Poll.findOne({idEncuesta: req.params.id}, function(err,polls) {
        if (err) return console.log(err);
        
        polls.secciones[0].preguntas[req.params.idPregunta - 1].texto = req.body.texto;
        polls.secciones[0].preguntas[req.params.idPregunta - 1].opciones = req.body.opciones;

        polls.save();
        res.json({mensaje: "updated succesfully"})
    })
});

// Delete Question ?idPreg from Poll with ?idPoll
router.post('/delete/:id/:idPregunta', function(req,res,next){
    Poll.findOne({idEncuesta: req.params.id}, function(err,polls) {
        if (err) return console.log(err);
        var new_preguntas = polls.secciones[0].preguntas;
        new_preguntas.pop(req.params.idPregunta - 1);
        polls.secciones[0].preguntas = new_preguntas;
        polls.save();
        res.json({mensaje: "deleted succesfully"})
    });
});

// Other Controller-- IDK

module.exports = router;