import React from 'react'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
  OptionLinkIcon,
  SearchForm,
} from '../header/HeaderStyles'

export const Header = () => (
  <HeaderContainer>
    <LogoContainer>
      <img
        alt="wlb-logo"
        src="http://canary.worklifebeyond.com/assets/images/logos/wlb-combined-green.svg"
        height="19.2"
        width="78.4"
      />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to={'/'}>Category</OptionLink>
      <SearchForm placeholder="Search" />
    </OptionsContainer>
    <OptionsContainer right>
      <OptionLinkIcon to={'/'}>
        <img
          alt="home-icon"
          src="assets/icons/home/outline-home-24px.svg"
          height="20"
          width="20"
        />
      </OptionLinkIcon>
      <OptionLinkIcon left to={'/'}>
        <img
          alt="home-icon"
          src="assets/icons/work/outline-work_outline-24px.svg"
          height="20"
          width="20"
        />
      </OptionLinkIcon>
      <OptionLinkIcon left to={'/'}>
        <img
          alt="home-icon"
          src="assets/icons/favorite/outline-favorite_border-24px.svg"
          height="20"
          width="20"
        />
      </OptionLinkIcon>
      <OptionLinkIcon left to={'/'}>
        <img
          alt="home-icon"
          src="assets/icons/list/outline-list_alt-24px.svg"
          height="20"
          width="20"
        />
      </OptionLinkIcon>
      <OptionLinkIcon left to={'/'}>
        <img
          alt="home-icon"
          src="assets/icons/notification/outline-notifications-24px.svg"
          height="20"
          width="20"
        />
      </OptionLinkIcon>
      <OptionLinkIcon left to={'/'}>
        <img
          alt="user-logged-icon"
          src="https://avatars1.githubusercontent.com/u/12992413?s=460&v=4"
          height="20"
          width="20"
          style={{
            borderRadius: '50%',
          }}
        />
      </OptionLinkIcon>
    </OptionsContainer>
  </HeaderContainer>
)
