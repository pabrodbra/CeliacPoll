var mongoose = require('mongoose'),
    Schema   = mongoose.Schema;

var pollResultSchema = mongoose.Schema({
    idEncuesta: Number,
    scoreFinal: Number,
    respuestas: [{
        texto: String,
        respuesta: String
    }
  ],
  resultado: Number
}, { collection: 'pollresults' });

module.exports = mongoose.model('PollResult', pollResultSchema);
