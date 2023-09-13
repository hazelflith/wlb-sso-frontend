import React from 'react'
import {UserLoggedInProfileWrapper} from '../job-portal/JobPortalStyles'
import {getCookie} from '../../utils/helpers'

const customStyle = {
  usernameLabel: {
    color: '#252525',
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 8,
  },

  posisitionLabel: {
    color: '#a9a8a8',
    fontSize: 13,
    marginTop: 8,
  },
}

export const UserLoggedIn = () => {
  const data = getCookie('userData') && JSON.parse(getCookie('userData'))

  return (
    <UserLoggedInProfileWrapper>
      <img
        alt="user-logged-icon"
        src={
          data.avatar ? data.avatar : require('../../assets/slicing/hendra.jpg')
        }
        height="120"
        width="120"
        style={{
          borderRadius: '50%',
        }}
      />
      <label style={customStyle.usernameLabel}>{data && data.name}</label>
      <label style={customStyle.posisitionLabel}>
        {data && data.biography}
      </label>
    </UserLoggedInProfileWrapper>
  )
}
