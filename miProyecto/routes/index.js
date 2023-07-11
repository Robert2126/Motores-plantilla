var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Curso Backend', descripcion: 'Este es mi pimera plantilla' });
});

module.exports = router;
