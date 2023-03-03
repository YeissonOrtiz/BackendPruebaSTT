const { Comment, CommentSchema, } = require('./commentModel')

function setupModels(sequelize){
  Comment.init(CommentSchema, Comment.config(sequelize))
}

module.exports = setupModels