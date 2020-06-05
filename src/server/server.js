const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const router = express.Router();

router.use((req, res, next) => {
  next();
});

router.get('/user/list', (req, res) => {
  const userList = [];
  res.json(userList);
});

app.use('/api', router);

app.listen(3002, () => {
  // TODO
});
