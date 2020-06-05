const utf8 = require('utf8');
const crypto = require('crypto');

const constant = require('./constant');


const stampTimeToStr = (timestamp) => {
  const unixTimestamp = new Date(timestamp * 1000);
  const commonTime = unixTimestamp.toLocaleString();
  return commonTime;
};

const getTimestamp = (isMillisecond = true) => {
  const denominator = isMillisecond ? 1 : 10;
  const stamp = new Date().getTime() / denominator;
  return Math.round(stamp);
};

const getRndInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

const computePA = () => {
  const stamptime = getTimestamp();
  const randomInt = getRndInteger(1000, 9999);
  const { salt } = constant;
  const hashContent = utf8.encode(`${stamptime}${randomInt}${salt}`);
  const hashResult = crypto.createHash('md5').update(hashContent).digest('hex');
  const paContent = utf8.encode(`${stamptime}${randomInt}${hashResult}`);
  const pa = Buffer.from(paContent).toString('base64');
  return pa;
};

module.exports = {
  stampTimeToStr,
  getTimestamp,
  getRndInteger,
  computePA,
};
