'use strict';

console.log("User model got used");
module.exports = function(sequelize, DataTypes) {
var User = sequelize.define('User', {

      
                name: {

                    type: DataTypes.STRING,
                    allowNull: true
                },

                address: {
                 
                 type: DataTypes.STRING,
                 allowNull: true   
                
                },

                phone_number:{

                    type: DataTypes.STRING,
                    allowNull: true
                },

                serial_number:{
                  
                  type: DataTypes.STRING,
                  allowNull: true  
                },

                product:{
                  
                  type: DataTypes.STRING,
                  allowNull: true  
                },

                quantity:{
                  
                  type: DataTypes.STRING,

                  allowNull: true
                },

                rate:{
                  
                  type: DataTypes.STRING,
                  allowNull: true  
              },

              total:{
                  
                  type: DataTypes.STRING,
                  allowNull: true  
              },

              discount:{
                  
                  type: DataTypes.STRING,
                  allowNull: true   
              },

              gross:{
               
                  type: DataTypes.STRING,
                  allowNull: true   
              },

              rate2:{

                type: DataTypes.STRING,
                  allowNull: true   
              }


          },{

                tableName: 'User',

                freezeTableName: true,

                timestamps: true,

                underscored: true

            });

            User.sync();

            return User;

        };



                