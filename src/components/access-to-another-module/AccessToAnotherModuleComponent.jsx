import React from 'react'
import {AccessToAnotherModuleWrapper} from '../job-portal/JobPortalStyles'
import Divider from '../divider/DividerStyles'
import {NavLink} from 'react-router-dom'

const customStyle = {
  anotherModuleHeadingLabel: {
    color: '#252525',
    fontWeight: 'bold',
    fontSize: 18,
    margin: 20,
  },
  anotherModuleTitleLink: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    cursor: 'pointer',
    textDecoration: 'none',
    marginLeft: 25,
  },
  anotherModuleTitleLabel: {
    color: '#252525',
    fontWeight: 'bold',
    fontSize: 13,
    margin: 20,
    cursor: 'pointer',
  },
}

export const AccessToAnotherModule = () => (
  <AccessToAnotherModuleWrapper>
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <img
        src={require('../../assets/slicing/icon-outline-app.svg')}
        width="20"
        height="20"
        alt="outline-apps-icon"
      />
      <label style={customStyle.anotherModuleHeadingLabel}>HC Ecosystem</label>
    </div>
    <Divider />

    <NavLink to="/" style={customStyle.anotherModuleTitleLink}>
      <img
        src={require('../../assets/slicing/icon-learning.svg')}
        width="15"
        height="15"
        alt="outline-apps-icon"
      />
      <label style={customStyle.anotherModuleTitleLabel}>Learning</label>
    </NavLink>

    <NavLink to="/" style={customStyle.anotherModuleTitleLink}>
      <img
        src={require('../../assets/slicing/icon-business.svg')}
        width="15"
        height="15"
        alt="outline-organization-icon"
      />
      <label style={customStyle.anotherModuleTitleLabel}>Organization</label>
    </NavLink>

    <NavLink to="/" style={customStyle.anotherModuleTitleLink}>
      <img
        src={require('../../assets/slicing/icon-finance.svg')}
        width="15"
        height="15"
        alt="outline-organization-icon"
      />
      <label style={customStyle.anotherModuleTitleLabel}>Finance</label>
    </NavLink>

    <NavLink to="/" style={customStyle.anotherModuleTitleLink}>
      <img
        src={require('../../assets/slicing/icon-learning.svg')}
        width="15"
        height="15"
        alt="outline-organization-icon"
      />
      <label style={customStyle.anotherModuleTitleLabel}>Time</label>
    </NavLink>

    <NavLink to="/" style={customStyle.anotherModuleTitleLink}>
      <img
        src={require('../../assets/slicing/icon-digital-document.svg')}
        width="15"
        height="15"
        alt="outline-organization-icon"
      />
      <label style={customStyle.anotherModuleTitleLabel}>
        Digital Document
      </label>
    </NavLink>

    <NavLink to="/" style={customStyle.anotherModuleTitleLink}>
      <img
        src={require('../../assets/slicing/icon-recruitment.svg')}
        width="15"
        height="15"
        alt="outline-organization-icon"
      />
      <label style={customStyle.anotherModuleTitleLabel}>Recruitment</label>
    </NavLink>

    <NavLink to="/" style={customStyle.anotherModuleTitleLink}>
      <img
        src={require('../../assets/slicing/icon-learning.svg')}
        width="15"
        height="15"
        alt="support-icon"
      />
      <label style={customStyle.anotherModuleTitleLabel}>Support</label>
    </NavLink>

    <NavLink to="/" style={customStyle.anotherModuleTitleLink}>
      <img
        src={require('../../assets/slicing/icon-talent.svg')}
        width="15"
        height="15"
        alt="support-icon"
      />
      <label style={customStyle.anotherModuleTitleLabel}>Talent</label>
    </NavLink>

    <NavLink to="/" style={customStyle.anotherModuleTitleLink}>
      <img
        src={require('../../assets/slicing/icon-reward.svg')}
        width="15"
        height="15"
        alt="reward-icon"
      />
      <label style={customStyle.anotherModuleTitleLabel}>Reward</label>
    </NavLink>

    <NavLink to="/" style={customStyle.anotherModuleTitleLink}>
      <img
        src={require('../../assets/slicing/icon-performance.svg')}
        width="15"
        height="15"
        alt="performance-icon"
      />
      <label style={customStyle.anotherModuleTitleLabel}>Performance</label>
    </NavLink>

    <NavLink to="/" style={customStyle.anotherModuleTitleLink}>
      <img
        src={require('../../assets/slicing/icon-job-portal.svg')}
        width="15"
        height="15"
        alt="job-portal-icon"
      />
      <label style={customStyle.anotherModuleTitleLabel}>Job Portal</label>
    </NavLink>
  </AccessToAnotherModuleWrapper>
)
