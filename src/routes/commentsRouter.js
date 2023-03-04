const CommentsService = require('../services/commentsService')
const express = require('express');
const CommentsRouter = express.Router();
const CommentsMethods = new CommentsService();

CommentsRouter.post('/:id/comments', async (req, res) => {
  const comment = await CommentsMethods.createComment(req.body)
  return res.status(201).json(comment)
})

CommentsRouter.get('/:id/comments', async (req, res) => {
  const data = await CommentsMethods.findCommentsByCharacter(req.params.id)
  return res.status(200).json(data)
})

module.exports = CommentsRouter