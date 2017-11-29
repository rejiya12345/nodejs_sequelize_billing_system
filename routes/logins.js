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


usersController.post('/logindata',function(req,res){


 models.Login.create({
    email:req.body.email,
    password:req.body.password

  }).then(function() {

        res.redirect('/');    
        
        
    });
});

 

   
module.exports = usersController;