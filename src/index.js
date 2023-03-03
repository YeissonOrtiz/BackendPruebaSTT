const routerApi = require('./routes/index')
const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;
const whitelist = ['http://localhost:8080', 'http://localhost:5173'];
const option = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin) || !origin) {
      callback(null, true);
    } else {
      throw new Error('Not allowed by CORS');
    }
  }
}

app.use(express.json())
app.use(cors(option));

routerApi(app);

app.get('/', (req, res) => res.json('ve a /api/users'));

app.listen(port, () => console.log(`Listening on port ${port}`));