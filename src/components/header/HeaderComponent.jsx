import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
  faHome,
  faUsers,
  faEnvelope,
  faBell,
} from '@fortawesome/free-solid-svg-icons'
import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLinkIcon,
  SearchForm,
  Dropwdown,
  HoverCustom,
  DropwdownItem,
} from './HeaderStyles'
import {getCookie} from '../../utils/helpers'

const options = {
  followCursor: false,
}

export const Header = () => {
  const data = getCookie('userData') && JSON.parse(getCookie('userData'))

  return (
    <>
      <HeaderContainer>
        <LogoContainer to={'/'}>
          <img
            alt="wlb-logo"
            src={
              'http://canary.worklifebeyond.com/assets/images/logos/wlb-combined-green.svg'
            }
            height="19.2"
            width="78.4"
          />
        </LogoContainer>
        <OptionsContainer>
          <SearchForm placeholder="Search" />
        </OptionsContainer>
        <OptionsContainer right>
          <OptionLinkIcon to={'/'}>
            <FontAwesomeIcon
              icon={faHome}
              style={{
                color: '#a9a8a8',
                cursor: 'pointer',
                height: 20,
                width: 20,
              }}
            />
          </OptionLinkIcon>
          <OptionLinkIcon left="true" to={'/'}>
            <FontAwesomeIcon
              icon={faUsers}
              style={{
                color: '#a9a8a8',
                cursor: 'pointer',
                height: 20,
                width: 20,
              }}
            />
          </OptionLinkIcon>
          <OptionLinkIcon left="true" to={'/'}>
            <FontAwesomeIcon
              icon={faEnvelope}
              style={{
                color: '#a9a8a8',
                cursor: 'pointer',
                height: 20,
                width: 20,
              }}
            />
          </OptionLinkIcon>

          <OptionLinkIcon left="true" to={'/notification'}>
            <FontAwesomeIcon
              icon={faBell}
              style={{
                cursor: 'pointer',
                height: 20,
                width: 20,
                color: '#a9a8a8',
              }}
            />
          </OptionLinkIcon>
          <OptionLinkIcon left="true" to={'/'}>
            <HoverCustom options={options}>
              <HoverCustom.Trigger type="trigger">
                <img
                  alt="user-logged-icon"
                  src={
                    data.avatar
                      ? data.avatar
                      : require('../../assets/slicing/hendra.jpg')
                  }
                  height="20"
                  width="20"
                  style={{
                    borderRadius: '50%',
                  }}
                />
              </HoverCustom.Trigger>
              <HoverCustom.Hover type={'hover'}>
                <Dropwdown>
                  <div>
                    <img
                      alt="user-logged-icon"
                      src={
                        data.avatar
                          ? data.avatar
                          : require('../../assets/slicing/hendra.jpg')
                      }
                      height="50"
                      width="50"
                      style={{
                        borderRadius: '50%',
                      }}
                    />
                    <h3>{data && data.name}</h3>
                  </div>
                  <DropwdownItem>Logout</DropwdownItem>
                </Dropwdown>
              </HoverCustom.Hover>
            </HoverCustom>
          </OptionLinkIcon>
        </OptionsContainer>
      </HeaderContainer>
    </>
  )
}
