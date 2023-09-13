import styled from 'styled-components'
import {Typography} from '@material-ui/core'

export const ContainerLogin = styled.div`
  display: flex;
  flex-direction: row;
  overflow-x: hidden;
  overflow-y: hidden;
  height: 100vh;
`

export const SidebarLogin = styled.div`
  min-width: 65vw;
  min-height: 95vh;
  background: linear-gradient(130deg, #014a62, rgba(2, 121, 130, 0.68));
  color: white;
  padding-top: 100px;
  padding-left: 100px;
  overflow: hidden;
`

export const ContentLogin = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 20vw;
  height: 100vh;
  background-color: #fff;
  align-items: center;
  align-self: center;
  justify-content: center;
  overflow: hidden;
  padding-left: 1.5vw;
`

export const Loading = styled.div`
  .lds-grid {
    display: inline-block;
    position: fixed;
    width: 80px;
    height: 80px;
    left: 50%;
    /* margin-left: -400px; */
    z-index: 100;
    top: 50%;
    background: linear-gradient(130deg, #02798F, rgba(2, 121, 130, 0.68));
    margin-top: -100px;
    border-radius: 20px;
    /* opacity: 0.8; */
  }
  .lds-grid div {
    position: absolute;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: #fff;
    animation: lds-grid 1.2s linear infinite;
  }
  .lds-grid div:nth-child(1) {
    top: 8px;
    left: 8px;
    animation-delay: 0s;
  }
  .lds-grid div:nth-child(2) {
    top: 8px;
    left: 32px;
    animation-delay: -0.4s;
  }
  .lds-grid div:nth-child(3) {
    top: 8px;
    left: 56px;
    animation-delay: -0.8s;
  }
  .lds-grid div:nth-child(4) {
    top: 32px;
    left: 8px;
    animation-delay: -0.4s;
  }
  .lds-grid div:nth-child(5) {
    top: 32px;
    left: 32px;
    animation-delay: -0.8s;
  }
  .lds-grid div:nth-child(6) {
    top: 32px;
    left: 56px;
    animation-delay: -1.2s;
  }
  .lds-grid div:nth-child(7) {
    top: 56px;
    left: 8px;
    animation-delay: -0.8s;
  }
  .lds-grid div:nth-child(8) {
    top: 56px;
    left: 32px;
    animation-delay: -1.2s;
  }
  .lds-grid div:nth-child(9) {
    top: 56px;
    left: 56px;
    animation-delay: -1.6s;
  }
  @keyframes lds-grid {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
  }
`

export const TextHeader = styled(Typography)`
  font-family: Roboto;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.32;
  letter-spacing: normal;
  text-align: left;
  color: #02798F;
  @media only screen and (max-width: 600px) {
  }
`

export const InfoStyled = styled.div`
  .desktop {
    display: block;
  }
  .mobile {
    display: none;
  }
  @media only screen and (max-width: 480px) {
    .desktop {
      display: none;
    }
    .mobile {
      display: block;
    }
  }
`

export const TextSubHeader = styled(Typography)`
  font-family: Roboto;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 20px;
  font-size: 16px;
  letter-spacing: normal;
  text-align: left;
  color: #a9a8a8;
  @media only screen and (max-width: 600px) {
  }
`

export const HeaderWrapper = styled.div`
  padding-left: 45px;
  padding-top: 56px;
  display: flex;
  flex-direction: column;
  position: absolute;
  z-index: 1;
  max-width: 414px;
  gap: 10px;
  @media only screen and (max-width: 768px) {
    padding-left: 20px;
    padding-top: 24px;
  }
  @media only screen and (max-width: 640px) {
    padding: 25px;
    max-width: unset;
  }
`

export const BerAKHLAKContainer = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    width: 271px;

    @media only screen and (max-width: 600px) {
      width: 182px;  
    }
  }

`

