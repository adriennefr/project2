let sequelize = require("sequelize");


module.exports = function (sequelize, DataTypes) {
    let User = sequelize.define("User", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 20]
            }
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 15]
            }
        },

        hashed: {
            type: DataTypes.TEXT,
            allowNull: false,
        },

        salt: {
            type: DataTypes.TEXT,
            allowNull: false,
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




