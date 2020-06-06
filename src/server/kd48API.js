const fetchJson = require('fetch-json');
const utf8 = require('utf8');
const crypto = require('crypto');

const util = require('./util');
const constant = require('./constant');

const { commonHeader, endpoint } = constant;
const {
  loginURL, searchMemberURL, roomMsgByOwnerURL, roomMsgAllURL,
  liveDetailURL, memberListURL, liveHistoryURL, answerDetailURL,
} = endpoint;


const fetchToken = (req, res) => {
  const { mobile, pwd } = req.body;
  const resources = {
    mobile,
    pwd,
  };
  if (!mobile || !pwd) {
    res.json({});
    return;
  }
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

const searchMember = (req, res) => {
  const { memberName } = req.body;
  const resources = {
    name: memberName,
  };
  if (!memberName) {
    res.json({});
    return;
  }
  const options = {
    method: 'POST',
    headers: { ...commonHeader, pa: util.computePA() },
  };
  fetchJson.post(searchMemberURL, resources, options)
    .then((data) => {
      const { content: { data: memberList } = {} } = data || {};
      res.json({ memberList });
    })
    .catch((e) => {
      res.json(e);
    });
};

const fetchRoomMsgByOwner = (req, res) => {
  const {
    ownerId, roomId, nextTime, token,
  } = req.body;
  if (!ownerId || !roomId || !token) {
    res.json({});
    return;
  }
  const resources = {
    ownerId,
    roomId,
  };
  if (nextTime) resources.nextTime = nextTime;
  const options = {
    method: 'POST',
    headers: { ...commonHeader, pa: util.computePA(), token },
  };
  fetchJson.post(roomMsgByOwnerURL, resources, options)
    .then((data) => {
      const { content = {} } = data || {};
      res.json({ ...content });
    })
    .catch((e) => {
      res.json(e);
    });
};

const fetchRoomMsgAll = (req, res) => {
  const {
    ownerId, roomId, nextTime, token,
  } = req.body;
  if (!ownerId || !roomId || !token) {
    res.json({});
    return;
  }
  const resources = {
    ownerId,
    roomId,
  };
  if (nextTime) resources.nextTime = nextTime;
  const options = {
    method: 'POST',
    headers: { ...commonHeader, pa: util.computePA(), token },
  };
  fetchJson.post(roomMsgAllURL, resources, options)
    .then((data) => {
      const { content = {} } = data || {};
      res.json({ ...content });
    })
    .catch((e) => {
      res.json(e);
    });
};

const fetchLiveDetail = (req, res) => {
  const { liveId } = req.body;
  if (!liveId || typeof liveId !== 'string') {
    res.json({});
    return;
  }
  const resources = { liveId };
  const options = {
    method: 'POST',
    headers: { ...commonHeader },
  };
  fetchJson.post(liveDetailURL, resources, options)
    .then((data) => {
      const { content = {} } = data || {};
      res.json({ ...content });
    })
    .catch((e) => {
      res.json(e);
    });
};

const fetchMemberList = (req, res) => {
  const resources = {};
  const options = {
    method: 'POST',
    headers: { ...commonHeader },
  };
  fetchJson.post(memberListURL, resources, options)
    .then((data) => {
      const { content: { starInfo } = {} } = data || {};
      res.json({ starInfo });
    })
    .catch((e) => {
      res.json(e);
    });
};

const fetchLiveHistory = (req, res) => {
  const { lastTime = 0, userId } = req.body;
  if (!userId || typeof userId !== 'string') {
    res.json({});
    return;
  }
  const resources = {
    debug: true,
    userId,
    record: true,
    next: lastTime,
  };
  const options = {
    method: 'POST',
    headers: { ...commonHeader },
  };
  fetchJson.post(liveHistoryURL, resources, options)
    .then((data) => {
      const { content: { liveList, next } = {} } = data || {};
      res.json({ liveList, next });
    })
    .catch((e) => {
      res.json(e);
    });
};

const fetchAnswerDetail = (req, res) => {
  const { answerId, questionId, token } = req.body;
  if (!answerId || !questionId || !token) {
    res.json({});
    return;
  }
  const resources = {
    answerId,
    questionId,
  };
  const options = {
    method: 'POST',
    headers: { ...commonHeader, pa: util.computePA(), token },
  };
  fetchJson.post(answerDetailURL, resources, options)
    .then((data) => {
      const {
        content: {
          question, answer, userName, memberName,
        } = {},
      } = data || {};
      res.json({
        question, answer, userName, memberName,
      });
    })
    .catch((e) => {
      res.json(e);
    });
};

module.exports = {
  fetchToken,
  searchMember,
  fetchRoomMsgByOwner,
  fetchRoomMsgAll,
  fetchLiveDetail,
  fetchMemberList,
  fetchLiveHistory,
  fetchAnswerDetail,
};
