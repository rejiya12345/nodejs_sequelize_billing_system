                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= //
// usersController
// This will contain routes related to editing of user profiles
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= //
var express = require('express');
var usersController = express.Router();
var config = require(__dirname + '/../config/config');
var env = config.env;
var baseDir = __dirname + "/../";
var models = require(baseDir + 'models');
var _ = require('underscore');
var request = require('request');
var logger = require('../utils/logger');
var util = require('util');
var mysql= require('mysql');
var Sequelize=require('sequelize');



// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= //
// Users First Invest Page
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= //





 
usersController.post('/profiledata', function(req, res) {
 findAllUsers(function(err, result){
   if(err){

    return res.status(500).send(err);

  }
  return res.send(result);

 });

});
  


 function createAllUsers(callback){

 return models.User.create({
  name:req.body.data.name,
  address:req.body.data.address,
  phone_number:req.body.data.phone,
  serial_number:req.body.data.serial,
  product:req.body.data.product,
  quantity:req.body.data.quantity,
  rate:req.body.data.rate,
  total:req.body.data.total,
  discount:req.body.data.discount,
  gross:req.body.data.gross,
  rate2:req.body.data.ratepercent

 }).then(function(result) {
    res.render('layouts/data_table', {
      user: result
      
    });
  });
};

   

   
module.exports = usersController;