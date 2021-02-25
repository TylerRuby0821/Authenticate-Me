'use strict';
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    title: DataTypes.STRING,
    text: DataTypes.TEXT,
    userId: DataTypes.INTEGER,
    blogId: DataTypes.INTEGER
  }, {});
  Post.associate = function(models) {
    Post.belongsTo(models.User, { foreignKey: 'userId'})
    Post.belongsTo(models.Blog, { foreignKey: 'blogId'})
  };
  return Post;
};
