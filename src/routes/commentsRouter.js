const CommentsService = require('../services/commentsService')
const express = require('express');
const CommentsRouter = express.Router();
const CommentsMethods = new CommentsService();


CommentsRouter.get('/', async (req, res) => {
  const data = await CommentsMethods.findComments()
  return res.status(200).json(data)
})

CommentsRouter.post('/create', async (req, res) => {
  const comment = await CommentsMethods.createComment(req.body)
  return res.status(201).json(comment)
})

module.exports = CommentsRouter