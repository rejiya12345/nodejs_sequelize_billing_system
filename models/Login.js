'use strict';

console.log("Login model got used");
module.exports = function(sequelize, DataTypes) {
var Login = sequelize.define('Login', {

       
        email: {

            type: DataTypes.STRING,

            allowNull: false,

            unique: true

        },
        


        password: {

            type: DataTypes.STRING,

            allowNull: false,

            unique: true

        },

               

            }, {

                tableName: 'Login',

                freezeTableName: true,

                timestamps: true,

                underscored: true

            });

            Login.sync();

            return Login;

        };