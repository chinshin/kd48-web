const express = require('express');
const bodyParser = require('body-parser');

const kd48API = require('./kd48API');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const router = express.Router();

router.use((req, res, next) => {
  next();
});
router.post('/user/fetchToken', kd48API.fetchToken);
router.post('/search/member', kd48API.searchMember);

app.use('/api', router);
app.listen(3002, () => {
  // TODO
});
