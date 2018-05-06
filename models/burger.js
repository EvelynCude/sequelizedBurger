module.exports = function(sequelize, Sequelize){
    var Burger = sequelize.define("burgers",{
        burger_name: Sequelize.STRING,
        devoured:{
            type: Sequelize.BOOLEAN,
            defaultValue: false
        }
    });
    return Burger;
};