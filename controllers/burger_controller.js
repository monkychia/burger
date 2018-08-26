
var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');

router.get('/', function(req,res){
	burger.selectAll(function(data){
		res.render('index', {burger: data});
	});
});

router.post('/create', function(req, res){
	var payload = req.body.payload;
	burger.insertOne(payload, false, function(result){
		res.render('index');
	});
});

router.put("/update/:id", function(req, res){
	console.log('req.params.id ', req.params.id);

	burger.updateOne(req.params.id, function(data){
		if (data.changedRows === 0){
			// no rows are updated, throw 404
			return res.status(404).end();
		} else {
			res.render('index');
		}
	});
});

module.exports = router;