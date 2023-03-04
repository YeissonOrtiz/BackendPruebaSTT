const { models } = require('../libs/sequelize')

class CommentsService {
  constructor () {}

  async createComment(data){
    console.log(data)
    const newComment = await models.Comment.create(data)
    return newComment
  }

  async findAllComments(){
    const { data } = await models.Comment.findAll()
    return data
  }

  async findCommentsByCharacter(id){
    const data = 
      await models.Comment.findAll({
        where: {
          character_id: id
        }
      })
    return { data }
  }
}

module.exports = CommentsService