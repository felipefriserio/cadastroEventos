module.exports = function (app) {
    var mongoose = require('mongoose');
    var Schema = mongoose.Schema;

    var evento = Schema({
        descricao: { type: String, required: true },
        data: { type: Date },
        responsavel: { type: String }
    });
    
    return mongoose.model('eventos', evento);
};