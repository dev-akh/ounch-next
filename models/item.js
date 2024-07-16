module.exports = (sequelize, DataTypes) => {
    const Item = sequelize.define('Item', {
        name: DataTypes.STRING,
        description: DataTypes.STRING
    });
    return Item;
  };
