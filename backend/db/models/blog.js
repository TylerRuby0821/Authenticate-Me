'use strict';
module.exports = (sequelize, DataTypes) => {
  const Blog = sequelize.define('Blog', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 30],
      },
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: 'Users' },
    }
  }, {});
  Blog.associate = function(models) {
    Blog.belongsTo(models.User, { foreignKey: 'userId'})
    Blog.hasMany(models.Post, { foreignKey: 'blogId'})
  };
  return Blog;
};
