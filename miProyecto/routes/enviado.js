var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
const info = {
nombre: 'Roberto Cogollo',
correo: 'Backend basico'
}
res.render('correo', info );
});

module.exports = router;