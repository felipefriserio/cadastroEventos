module.exports = function (app) {
    var valida = require('./../middlewares/valida');
    var eventos = app.controllers.eventos;

    app.get('/menu', valida, eventos.menu);
    app.get('/cadUsuario', valida, eventos.cadastroUsuario);
    app.get('/cadEvento', valida, eventos.cadastroEvento);
    app.get('/listaEventos', valida, eventos.listaEventos);

    app.post('/novoEvento', eventos.novoEvento);
};