let sequelize = require("sequelize");


module.exports = function (sequelize, DataTypes) {
    let User = sequelize.define("User", {
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 15]
            }
        },

        hash: {
            type: DataTypes.TEXT,
            allowNull: false,
        },

        salt: {
            type: DataTypes.TEXT,
            allowNull: false,
        },

        avatar: {
            type: DataTypes.TEXT,
            allowNUll: false,
        },

        total_wins: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                len: [1, 1000]

            }
        },
    
    });

    return User;
};




