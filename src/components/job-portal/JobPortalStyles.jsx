import styled from 'styled-components'

export const MainWrapper = styled.div`
  width: 100wh;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: row;
  @media (max-width: 835px) {
    flex-direction: column;
    align-items: center;
    padding-left: 0px;
  }
  padding: 20px 67.5px 0px 67.5px;
  background-color: #f7f8f9;
  font-family: ${props => props.theme.font};
`

export const LeftSideWrapper = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
`

export const UserLoggedInProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-family: ${props => props.theme.font};
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.16);
  background-color: #ffffff;
  @media (max-width: 850px) {
    display: none;
  }
  margin-bottom: 20px;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding-top: 40px;
  padding-bottom: 40px;
`
export const CandidateInHiringWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-family: ${props => props.theme.font};
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.16);
  background-color: #ffffff;
  @media (max-width: 850px) {
    display: none;
  }
  padding: 30px;
  width: 60%;
`
export const JobAssignedToMeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-family: ${props => props.theme.font};
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.16);
  background-color: #ffffff;
  @media (max-width: 850px) {
    display: none;
  }
  margin-bottom: 20px;

  width: ${props => (props.isFullWidth === true ? '98%' : '40%')};
  margin-left: ${props => (props.isMarginLeft === false ? '0' : '30px')};
`
export const InterestWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-family: ${props => props.theme.font};
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.16);
  background-color: #ffffff;
  @media (max-width: 850px) {
    display: none;
  }
  margin-bottom: 20px;

  width: '100%';
  margin-left: ${props => (props.isMarginLeft === false ? '0' : '30px')};
`
export const LearningWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-family: ${props => props.theme.font};
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.16);
  background-color: #ffffff;
  @media (max-width: 850px) {
    display: none;
  }
  margin-bottom: 20px;

  width: '100%';
  margin-left: ${props => (props.isMarginLeft === false ? '0' : '30px')};
`

export const AccessToAnotherModuleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-family: ${props => props.theme.font};
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.16);
  background-color: #ffffff;
  @media (max-width: 850px) {
    display: none;
  }
  margin-bottom: 20px;

  padding-top: 40px;
  padding-bottom: 40px;
`

export const DetailVacanyMainArea = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;

  font-family: ${props => props.theme.font};
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.16);
  background-color: #ffffff;

  margin-bottom: 20px;
  padding: 0 0 30px 0;
`
export const FavoriteMainArea = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;

  font-family: ${props => props.theme.font};

  margin-bottom: 20px;
  padding: 0 0 30px 0;
`
export const DetailVacanyMainHeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-family: ${props => props.theme.font};
  margin-bottom: 20px;
  padding: 0px 0px 30px 0px;
`
export const DetailVacanyMainHeaderCover = styled.div`
  background-image: url('assets/images/slicing/company-cover.png');
  background-size: cover;
  width: 100%;
  height: 116px;
`
export const DetailVacanyMainHeaderAction = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 14px 30px 24px;
  margin-top: 25px;
  @media (max-width: 850px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 14px 30px 0px;
  }
`
export const DetailVacanyMainHeaderCompanyThumbnail = styled.div`
  width: 96px;
  height: 96px;
  padding: 16px;
  background-color: #fff;
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.16);
  margin: 58px 0 0 24px;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const DetailVacanyMainContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-family: ${props => props.theme.font};
  margin-bottom: 20px;
  padding: 19px 14px 30px 24px;
`
export const SignContractWrapper = styled.div`
  font-family: ${props => props.theme.font};
  border-radius: 2.5px;
  box-shadow: 0 1.5px 3px 0 rgba(0, 0, 0, 0.16);
  margin: ${props => (props.margin ? props.margin : '47px 78px')};
  width: ${props => (props.width ? props.width : 'auto')};
  padding: ${props => (props.padding ? props.padding : 0)};
  text-align: ${props => (props.text_align ? props.text_align : 'initial')};
`
export const DetailVacanyMainContentTitle = styled.label`
  font-size: 15px;
  font-weight: bold;
`
export const DetailVacanyMainContentSubTitle = styled.label`
  font-size: 14px;
  font-weight: bold;
`
export const DetailVacanyMainContentArticle = styled.p`
  font-size: 12px;
`
export const DetailVacanyMainContentArticleGrey = styled.p`
  font-size: 12px;
  color: #a9a8a8;
`
export const HowYouMatchWrapper = styled.div`
  display: flex;
  flex-direction: column;

  font-family: ${props => props.theme.font};
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.16);
  background-color: #ffffff;

  margin-bottom: 20px;
`
export const JobDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;

  font-family: ${props => props.theme.font};
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.16);
  background-color: #ffffff;

  margin-bottom: 20px;
`

export const VacancyListsMainArea = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
`
export const DetailVacancySidebarArea = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
  padding-left: 16px;
  font-family: ${props => props.theme.font};
  @media (max-width: 835px) {
    width: 80%;
    padding-left: 0px;
  }
`
export const VacanyListsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: '20px 20px 20px 0px';

  margin-left: 30px;
`
export const VacanyListsWrapperBox = styled.div`
  width: 100% auto;
  display: flex;
  flex-direction: column;
  padding: 20px;
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.16);
  background-color: #ffffff;
  font-family: ${props => props.theme.font};
  margin-left: 27px;
  margin-right: 27px;
`
export const MyVacancyWrapper = styled.div`
  width: 100% auto;
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.16);
  background-color: #ffffff;
  font-family: ${props => props.theme.font};
  margin-left: 27px;
  margin-right: 27px;
`
export const CandidateInHiringAndJobAssignedToMeWrapper = styled.div`
  display: flex;
  flex-direction: row;

  font-family: ${props => props.theme.font};
  @media (max-width: 680px) {
    flex-direction: column;
  }
  margin-left: 20px;
`

export const VacanciesTotalLabel = styled.label`
  color: grey;
  @media (max-width: 500px) {
    display: none;
  }
`
export const SelectOptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 500px) {
    display: none;
  }
`
export const SelectOptionForm = styled.select``

export const SearchForm = styled.input`
  background: white;
  border-style: solid;
  border-color: grey;
  border-radius: 1.5px;
  border-width: 1px;
  margin-right: 25px;
  margin-top: 3px;

  text-indent: 12.5px;
  width: 200px;
  height: 30px;
  border-radius: 3px;
  @media (max-width: 500px) {
    width: 100%;
  }
`
export const JobVacanciesElementWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 680px) {
    flex-direction: column;
  }
`
export const MyVacancyElementWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  @media (max-width: 680px) {
    flex-direction: column;
  }
`
export const NotificationElementWrapper = styled.div`
  display: flex;
  flex-direction: column;
`
export const NotificationElement = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: 850px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`
