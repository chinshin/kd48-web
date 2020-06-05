const fetchJson = require('fetch-json');
const utf8 = require('utf8');
const crypto = require('crypto');

const util = require('./util');
const constant = require('./constant');

const { commonHeader, endpoint } = constant;
const { loginURL } = endpoint;


const fetchToken = (req, res) => {
  const { mobile, pwd } = req.body;
  const resources = {
    mobile,
    pwd,
  };
  const options = {
    method: 'POST',
    headers: commonHeader,
  };
  fetchJson.post(loginURL, resources, options)
    .then((data) => {
      const { content: { token } = {} } = data || {};
      res.json({ token });
    })
    .catch((e) => {
      res.json(e);
    });
};

module.exports = {
  fetchToken,
};
