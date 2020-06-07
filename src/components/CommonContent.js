import React, { useState, useEffect } from 'react';
import { withTranslation } from 'react-i18next';

import SettingContainer from '../container/SettingContainer';

const CommonContent = (props) => {
  const [selectedNav, setSelectedNav] = useState('SETTING_PAGE');
  useEffect(() => {
    const handleNavChange = ({ detail: navItem }) => {
      setSelectedNav(navItem);
    };
    document.addEventListener('page.nav.change', handleNavChange);
  }, []);
  switch (selectedNav) {
    case 'SETTING_PAGE':
      return <SettingContainer {...props} />;
    case 'DASHBOARD':
      return <div>DASHBOARD</div>;
    default:
      return <div />;
  }
};

export default withTranslation()(CommonContent);
