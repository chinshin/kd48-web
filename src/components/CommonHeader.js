import React, { useState } from 'react';
import { withTranslation } from 'react-i18next';

import {
  Fade16, Settings16, Dashboard16,
} from '@carbon/icons-react';
import {
  HeaderContainer,
  // Content,
  Header,
  HeaderMenuButton,
  HeaderName,
  HeaderNavigation,
  // HeaderMenu,
  HeaderMenuItem,
  // HeaderGlobalBar,
  // HeaderGlobalAction,
  // HeaderPanel,
  // HeaderSideNavItems,
  SkipToContent,
  SideNav,
  // Temporarily comment these out until they are needed again
  // SideNavHeader,
  // SideNavDetails,
  // SideNavSwitcher,
  SideNavItems,
  SideNavLink,
  // SideNavMenu,
  // SideNavMenuItem,
  // Switcher,
  // SwitcherItem,
  // SwitcherDivider,
} from 'carbon-components-react';

import constantVal from '../constant';


const CommonHeader = (props) => {
  const { t } = props;
  const [selectedNav, setSelectedNav] = useState('SETTING_PAGE');

  const onNavLinkClick = (navItem) => {
    const event = new CustomEvent('page.nav.change', { detail: navItem });
    document.dispatchEvent(event);
    setSelectedNav(navItem);
  };

  return (
    <div className="kd48-web-container">
      <HeaderContainer
        render={({ isSideNavExpanded, onClickSideNavExpand }) => (
          <>
            <Header aria-label={t('commonHeader')}>
              <SkipToContent />
              <HeaderMenuButton
                aria-label={t('openMenu')}
                isCollapsible
                onClick={onClickSideNavExpand}
                isActive={isSideNavExpanded}
              />
              <HeaderName href="#" prefix="CHINSHIN">
                {t('kd48WebTool')}
              </HeaderName>
              <HeaderNavigation aria-label={`CHINSHIN${t('kd48WebTool')}${t('version')}`}>
                <HeaderMenuItem href={constantVal.githubLink} target="_blank">{t('githubLink')}</HeaderMenuItem>
                {/* <HeaderMenuItem onClick={() => {}}>
                  {t('importSettings')}
                </HeaderMenuItem>
                <HeaderMenuItem onClick={() => {}}>
                  {t('exportSettings')}
                </HeaderMenuItem> */}
              </HeaderNavigation>
              <SideNav
                aria-label={t('sideNavigation')}
                isRail
                expanded={isSideNavExpanded}
              >
                <SideNavItems>
                  <SideNavLink
                    renderIcon={Settings16}
                    aria-current={selectedNav === 'SETTING_PAGE' ? 'page' : ''}
                    href="#"
                    onClick={() => onNavLinkClick('SETTING_PAGE')}
                  >
                    {t('settings')}
                  </SideNavLink>
                  <SideNavLink
                    renderIcon={Dashboard16}
                    aria-current={selectedNav === 'DASHBOARD' ? 'page' : ''}
                    href="#"
                    onClick={() => onNavLinkClick('DASHBOARD')}
                  >
                    {t('dashboard')}
                  </SideNavLink>
                  <SideNavLink renderIcon={Fade16} href="#">
                    Link
                  </SideNavLink>
                  <SideNavLink renderIcon={Fade16} href="#">
                    Link
                  </SideNavLink>
                  <SideNavLink renderIcon={Fade16} href="#">
                    Link
                  </SideNavLink>
                </SideNavItems>
              </SideNav>
            </Header>
          </>
        )}
      />
    </div>
  );
};

export default withTranslation()(CommonHeader);
