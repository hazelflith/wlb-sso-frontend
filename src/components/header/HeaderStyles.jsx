import styled from 'styled-components'
import {Link} from 'react-router-dom'
import ReactHover from 'react-hover'

export const HeaderContainer = styled.div`
  height: ${props => (props.right ? '67.5px' : '41px')};

  width: 100%;
  display: flex;
  @media (max-width: 500px) {
    flex-direction: column;
    align-items: center;
  }
  background: #fff;
  font-family: ${props => props.theme.font};
  z-index: 1;
`

export const SubHeaderContainer = styled.div`
  height: ${props => (props.right ? '67.5px' : '41px')};
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f6f8f9;
  padding: 10px;
  @media (max-width: 500px) {
    flex-direction: column;
    align-items: center;
  }
  font-family: ${props => props.theme.font};
  border-radius: 3px;
  box-shadow: 0 4px 2px -2px black;
  border-style: solid;

  border-top-color: transparent;
  border-right-color: transparent;
  border-left-color: transparent;

  border-bottom-width: 1px;
  border-bottom-color: #a9a8a8;
`
export const SubHeaderContainerLabel = styled.label`
  margin: 20px;
  color: ${props => (props.active === true ? '#039be5' : '#a9a8a8')};
  font-size: 13px;
  cursor: pointer;
`

export const HeaderContainer2 = styled.div`
  height: '67.5px';
  width: 100%;
  display: flex;
  flex-direction: row;
  @media (max-width: 500px) {
    flex-direction: column;
  }
  background: #fff;
  font-family: ${props => props.theme.font};
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.16);
  padding: 12px 0px;
  justify-content: space-around;
  align-items: center;
  z-index: 1;
`

export const LogoContainer = styled(Link)`
  padding: 11.7px 0 0 67.5px;
  @media (max-width: 500px) {
    flex-direction: column;
    align-items: center;
    padding: 11.7px 0 0 0px;
  }
`

export const OptionsContainer = styled.div`
  z-index: 1;
  display: flex;
  padding-right: ${props => props.right && '67.5px'};
  justify-content: ${props => props.right && 'flex-end'};
  width: 100%;
  @media (max-width: 500px) {
    /* flex-direction: column;
    align-items: center; */
    display: none;
  }
`

export const OptionLink = styled(Link)`
  padding-top: 11.7px;
  font-style: normal;
  font-stretch: normal;
  cursor: pointer;
  text-decoration: none;
  color: ${props => props.theme.fontPrimaryColor};
  margin-left: 39.3px;
  font-size: 12px;
  font-weight: bolder;
  @media (max-width: 600px) {
    display: none;
  }
`

export const OptionLinkIcon = styled(Link)`
  padding-top: 11.7px;
  font-style: normal;
  font-stretch: normal;
  cursor: pointer;
  text-decoration: none;
  color: ${props => props.theme.fontPrimaryColor};
  margin-left: 39.3px;
  font-size: 12px;
  font-weight: bolder;
`
export const SearchForm = styled.input`
  background: white;
  border-style: solid;
  border-color: grey;
  border-radius: 3px;
  border-width: 1px;
  margin-left: 31.5px;
  margin-top: 7.5px;
  margin-bottom: 7.5px;
  text-indent: 12.5px;
  width: 100%;
  @media (max-width: 800px) {
    display: none;
  }
`

export const HoverCustom = styled(ReactHover)`
  z-index: 20;
`

export const Dropwdown = styled.div`
  background: white;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 160px;
  width: 180px;
  margin-left: -115px;
  margin-right: 90px;
  border-radius: 3px;
  margin-top: 8px;
  align-self: center;
  padding: 3px;
  h3 {
    color: #039be5;
  }
`

export const DropwdownItem = styled.div`
  display: flex;
  flex-direction: row;
  height: 20px;
  font-size: 14px;
  text-align: center;
  width: 100%;
  color: #4a4a4a;
  align-self: center;
  justify-content: center;
  padding: 8px;
  &:hover {
    background: #f6f8f9;
  }
`
