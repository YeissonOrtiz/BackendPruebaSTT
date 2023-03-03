const { models } = require('../libs/sequelize')

class CommentsService {
  constructor () {}

  async createComment(data){
    console.log(data)
    const newComment = await models.Comment.create(data)
    return newComment
  }

  async findComments(){
    const [data] = await models.Comment.findAll()
    console.log(data)
    return { data }
  }
}

module.exports = CommentsService