var express = require('express');

// Import models
var PollResult  = require('../models/pollResult.js');

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
    Object.keys(req.body).forEach(function(key) {
        var t_texto = key;
        var t_selected_option = req.body[key];
        var t_respuesta = {texto: t_texto, respuesta: t_selected_option};
        console.log("#");
        console.log(t_respuesta);
        respuestas.push(t_respuesta);
    });

    var resultado = new PollResult({
        idEncuesta: req.params.id,
        respuestas: respuestas
    });
    resultado.save();
    res.json(
        {
            mensaje: "Insertado con exito el resultado de la encuesta"
        }
    );
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