var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
const info = {
nombre: 'Roberto Cogollo',
curso: 'Backend basico'
}
res.render('perfil', info );
});

module.exports = router;