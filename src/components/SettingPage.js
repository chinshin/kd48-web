/* eslint-disable arrow-body-style */
import React, { useState, useEffect } from 'react';
import { withTranslation } from 'react-i18next';

import {
  // eslint-disable-next-line no-unused-vars
  FormGroup, Form, RadioButton, TextInput, Button,
  Toggle, NumberInput, InlineLoading,
} from 'carbon-components-react';

const SettingPage = (props) => {
  const {
    t,
    fetchKd48Token,
    updateSettings,
    user: {
      requestKdTokenInProgress,
      // requestKdTokenError,
      token,
      mobile,
      pwd,
    },
    idol: {
      name,
      userId,
      roomId,
    },
  } = props;

  const [idolInfoName, setIdolInfoName] = useState();
  const [idolInfoUserId, setIdolInfoUserId] = useState();
  const [idolInfoRoomId, setIdolInfoRoomId] = useState();
  const [userMobile, setUserMobile] = useState();
  const [userPassword, setUserPassword] = useState();
  const [userToken, setUserToken] = useState();
  const [roomListenerToggle, setRoomListenerToggle] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [roomListenerInterval, setRoomListenerInterval] = useState(5);
  const [qqGroupToggle, setQqGroupToggle] = useState(false);
  const [qqGroupList, setQqGroupList] = useState([]);
  const [wbToggle, setWbToggle] = useState(false);
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);

  useEffect(() => {
    if (token) setUserToken(token);
  }, [token]);

  useEffect(() => {
    if (
      idolInfoName && idolInfoUserId && idolInfoRoomId && userMobile && userPassword && userToken
    ) {
      setIsSubmitDisabled(false);
    } else {
      setIsSubmitDisabled(true);
    }
  }, [idolInfoName, idolInfoUserId, idolInfoRoomId, userMobile, userPassword, userToken]);

  const onFetchTokenBtnClick = () => {
    fetchKd48Token(userMobile, userPassword);
  };

  const onResetBtnClick = () => {
    setIdolInfoName(name);
    setIdolInfoUserId(userId);
    setIdolInfoRoomId(roomId);
    setUserMobile(mobile);
    setUserPassword(pwd);
    setUserToken(token);
  };

  const onSubmitBtnClick = () => {
    updateSettings({
      user: {
        token: userToken,
        mobile: userMobile,
        pwd: userPassword,
      },
      idol: {
        name: idolInfoName,
        userId: idolInfoUserId,
        roomId: idolInfoRoomId,
      },
    });
    setIsSubmitDisabled(true);
  };

  const renderIdolInfo = () => {
    return (
      <FormGroup legendText={t('idolInfo')} className="setting-form-group idol-info">
        <TextInput
          id="idol-name"
          size="sm"
          className="idol-info-input"
          labelText={t('idolName')}
          onChange={({ target: { value = '' } = {} }) => {
            setIdolInfoName(value);
          }}
        />
        <TextInput
          id="idol-user-id"
          size="sm"
          className="idol-info-input"
          labelText={t('idolUserId')}
          onChange={({ target: { value = '' } = {} }) => {
            setIdolInfoUserId(value);
          }}
        />
        <TextInput
          id="idol-room-id"
          size="sm"
          className="idol-info-input"
          labelText={t('idolRoomId')}
          onChange={({ target: { value = '' } = {} }) => {
            setIdolInfoRoomId(value);
          }}
        />
      </FormGroup>
    );
  };
  const renderUserInfo = () => {
    return (
      <FormGroup legendText={t('userInfo')} className="setting-form-group user-info">
        <TextInput
          id="user-mobile"
          size="sm"
          className="user-info-input"
          labelText={t('userMobile')}
          onChange={({ target: { value = '' } = {} }) => {
            setUserMobile(value);
          }}
        />
        <TextInput
          id="user-password"
          type="password"
          size="sm"
          className="user-info-input"
          labelText={t('userPassword')}
          onChange={({ target: { value = '' } = {} }) => {
            setUserPassword(value);
          }}
        />
        {requestKdTokenInProgress
          ? <InlineLoading description={t('fetchTokenInProgress')} />
          : (
            <Button
              kind="primary"
              className="user-info-btn"
              onClick={onFetchTokenBtnClick}
              disabled={!!requestKdTokenInProgress}
            >
              {t('fetchToken')}
            </Button>
          )}
        <TextInput
          id="user-token"
          size="sm"
          className="user-info-input"
          labelText={t('userToken')}
          value={userToken}
          onChange={({ target: { value = '' } = {} }) => {
            setUserToken(value);
          }}
        />
      </FormGroup>
    );
  };
  const renderRoomListener = () => {
    return (
      <FormGroup legendText={t('roomListener')} className="setting-form-group room-listener">
        <Toggle
          id="room-listener-toggle"
          className="setting-form-toggle room-listener-toggle"
          onToggle={setRoomListenerToggle}
          disabled
        />
        {roomListenerToggle && (
          <>
            <NumberInput
              id="room-listener-interval"
              className="setting-form-number-input room-listener-number-input"
              min={5}
              max={60}
              defaultValue={5}
              step={1}
              label={t('roomListenerInterval')}
              invalidText={t('roomListenerIntervalInvalidDesc')}
              onChange={({ target: { value = '' } = {} }) => {
                setRoomListenerInterval(value);
              }}
            />
          </>
        )}
      </FormGroup>
    );
  };
  const renderQQGroupBroadcast = () => {
    const onGroupListInputChange = (arr) => {
      if (arr) {
        const newArray = arr.split(';');
        setQqGroupList(newArray);
      } else {
        setQqGroupList([]);
      }
    };
    return (
      <FormGroup legendText={t('qqGroupBrodcast')} className="setting-form-group group-broadcast">
        <Toggle
          id="group-broadcast-toggle"
          className="setting-form-toggle group-broadcast-toggle"
          onToggle={setQqGroupToggle}
          disabled
        />
        {qqGroupToggle && (
          <>
            <TextInput
              id="group-broadcast-group-list"
              size="sm"
              className="group-broadcast-group-input"
              labelText={t('qqGroupList')}
              value={qqGroupList}
              onChange={({ target: { value = '' } = {} }) => {
                onGroupListInputChange(value);
              }}
            />
          </>
        )}
      </FormGroup>
    );
  };
  const renderWbMonitor = () => {
    return (
      <FormGroup legendText={t('wbMonitor')} className="setting-form-group wb-monitor">
        <Toggle
          id="wb-monitor-toggle"
          className="setting-form-toggle wb-monitor-toggle"
          onToggle={setWbToggle}
          disabled
        />
        {wbToggle && (
          <>
            <div />
          </>
        )}
      </FormGroup>
    );
  };
  const renderFotterBtns = () => {
    return (
      <>
        <Button
          type="reset"
          kind="secondary"
          className="setting-reset-btn"
          onClick={onResetBtnClick}
        >
          {t('reset')}
        </Button>
        <Button
          type="submit"
          kind="primary"
          className="setting-submit-btn"
          disabled={isSubmitDisabled}
          onClick={onSubmitBtnClick}
        >
          {t('save')}
        </Button>
      </>
    );
  };

  return (
    <div className="main-content">
      {renderIdolInfo()}
      {renderUserInfo()}
      {renderRoomListener()}
      {renderQQGroupBroadcast()}
      {renderWbMonitor()}
      {renderFotterBtns()}
    </div>
  );
};

export default withTranslation()(SettingPage);
