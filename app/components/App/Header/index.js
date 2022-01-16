/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/**
 *
 * Header
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import './Header.css';
import {
  FiUser,
  FiCodesandbox,
  FiSettings,
  FiMoon,
  FiSun,
} from 'react-icons/fi';

import { isEmpty } from 'lodash';
import { config } from '../../../../config';
import { SideMenuAction } from '../../../containers/App/actions';
import { DarkModeAction } from '../../../containers/App/actions';
import { modal } from '../../shared/ModalContainer/index';


function Header({ app, dispatch }) {
  const darkMode = app.darkMode ? 'dark-mode bg-g-header-dark' : 'bg-g-header';
  return (
    <div className={`header-outer  ${darkMode}`}>
      <div className="flex align-items-center">
        <div
          className="menu-icon-holder mr-2 ml-2"
          onClick={() => {
            if (!isEmpty(app.user)) dispatch(SideMenuAction(!app.sideMenu));
          }}
        >
          <FiCodesandbox className="menu-icon" />
        </div>
        <div className="header-title">{config.siteTitle}</div>
      </div>
      <div className="right-holder">
        <div className="icon-holder">
          {app.darkMode ? (
            <FiSun
              onClick={() => {
                dispatch(DarkModeAction(!app.darkMode));
              }}
            />
          ) : (
            <FiMoon
              onClick={() => {
                dispatch(DarkModeAction(!app.darkMode));
              }}
            />
          )}
        </div>
        <div className="icon-holder">
          <FiSettings />
        </div>
        <div className="icon-holder">
          <FiUser
            onClick={() => {
              // dispatch(UserSideBarAction(!app.userSidebar));
            }}
          />
        </div>
      </div>
    </div>
  );
}

Header.propTypes = {
  app: PropTypes.object,
  dispatch: PropTypes.func,
};

export default memo(Header);
