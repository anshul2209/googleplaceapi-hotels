var express = require('express');
var router = express.Router();

var hotelJson = require('../public/resources/hoteldata.json');
router.get('/gethotels', function(req, res) {
	var search = req.query.data;
	var hoteldata = hotelJson.filter(function(hotel){
		return (hotel.name.toLowerCase().indexOf(search) > -1);
	});
	res.send({
		'hotels': hoteldata
	});
  // res.render('api', { title: 'Superhero API' });
});

module.exports = router;