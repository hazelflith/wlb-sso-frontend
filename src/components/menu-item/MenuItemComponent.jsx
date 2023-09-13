import React from 'react'
import {withRouter} from 'react-router-dom'

import {
  MenuItemContainer,
  ContentContainer,
  ContentTitle,
  ContentSubtitle,
} from './MenuItemStyles'

const MenuItem = ({title, size, history, linkUrl, match}) => (
  <MenuItemContainer
    size={size}
    onClick={() => {
      window.location.href = linkUrl
    }}
  >
    <ContentContainer className="content">
      <ContentTitle>{title.toUpperCase()}</ContentTitle>
      <ContentSubtitle>Module</ContentSubtitle>
    </ContentContainer>
  </MenuItemContainer>
)

export default withRouter(MenuItem)
