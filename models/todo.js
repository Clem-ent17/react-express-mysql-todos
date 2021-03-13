module.exports = function(sequelize, DataTypes) {
    var Todo = sequelize.define("Todo", {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        completed: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    });
    return Todo;
  };
  