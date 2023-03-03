const CommentsRouter = require('../routes/commentsRouter')
const express = require('express');

function routerApi(app) {
  const router = express.Router();
  app.use('/api', router);
  router.use('/comments', CommentsRouter);
  return router
}

module.exports = routerApi