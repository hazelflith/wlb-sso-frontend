import React from 'react'
import {Header} from '../../components/header/HeaderComponent'
import {UserLoggedIn} from '../../components/user-logged-in/UserLoggedInComponent'
import {AccessToAnotherModule} from '../../components/access-to-another-module/AccessToAnotherModuleComponent'
import {
  MainWrapper,
  VacancyListsMainArea,
  LeftSideWrapper,
} from '../../components/job-portal/JobPortalStyles'

const HomePage = () => {
  return (
    <div>
      <Header />
      <MainWrapper>
        <LeftSideWrapper>
          <UserLoggedIn />
          <AccessToAnotherModule />
        </LeftSideWrapper>
        <VacancyListsMainArea></VacancyListsMainArea>
      </MainWrapper>
    </div>
  )
}

export default HomePage
