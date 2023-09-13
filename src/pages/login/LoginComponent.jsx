import React, {useState} from 'react'
import {
  Loading,
  TextHeader,
  TextSubHeader,
  HeaderWrapper,
  BerAKHLAKContainer,
} from './LoginStyles'
import LoginForm from './LoginForm'
import ForgotForm from './ForgotForm'
import Partners from './Partners'

const Login = () => {
  const [isLogin, setIsLogin] = useState(true)
  const [loading, setLoading] = useState(false)
  const handleLoading = (isLoad) => {
    setLoading(isLoad)
  }

  const handleForgot = () => {
    setIsLogin(false)
  }

  const handleLogin = () => {
    setIsLogin(true)
  }

  const partner1 = [
    {img: require('../../assets/slicing/smartAsn-logos-panrb.png'), alt: 'PANRB'},
    {img: require('../../assets/slicing/smartAsn-logos-BKN.svg'), alt: 'BKN'},
  ]
  const partner2 = [
    {img: require('../../assets/slicing/smartAsn-logos-LAN.svg'), alt: 'LAN'},
    {img: require('../../assets/slicing/smartAsn-logos-KASN.svg'), alt: 'KASN'},
    {img: require('../../assets/slicing/smartAsn-logos-kominfo.svg'), alt: 'KOMINFO'},
    {img: require('../../assets/slicing/smartAsn-logos-BRIN.svg'), alt: 'BRIN'},
    {img: require('../../assets/slicing/smartAsn-logos-bssn.svg'), alt: 'BSSN'},
    {img: require('../../assets/slicing/smartAsn-logos-BNI.svg'), alt: 'BNI'},
  ]

  return (
    <>
      {loading && (
        <Loading className="lds-grid">
          <div className="lds-grid">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </Loading>
      )}
      <div className="flex lg:flex-row flex-col sm:flex-row w-full m-0 relative overflow-x-hidden h-screen">
        <HeaderWrapper>
          <img
            src={require('../../assets/slicing/smartAsn-logo.svg')}
            alt="smartasn-logo"
            className="mb-4 w-40 sm:w-full"
            style={{maxWidth: '276px'}}
          />
          <TextHeader className="text md:text-2xl lg:text-2xl">
            <span className="font-bold">
              Platform Digital <br /> Pengelolaan dan Kolaborasi ASN
            </span>
          </TextHeader>
          <TextSubHeader>
            Satu platform yang menjadi wadah kolaborasi ASN untuk memperoleh
            layanan kepegawaian dan pengembangan human capital dalam ekosistem
            digital
          </TextSubHeader>
        </HeaderWrapper>
        <div
          className="hidden sm:flex sm:w-4/5 md:w-full"
          style={{
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <img
            src={require('../../assets/slicing/smartAsn-login.svg')}
            alt=""
            style={{
              position: 'absolute',
              width: '80%',
              textAlign: 'center',
              bottom: 0,
            }}
          />
        </div>
        <div
          style={{backgroundColor: '#fff', zIndex: 2, width: '100%'}}
          className="sm:w-6/12 md:w-8/12 lg:w-6/12 xl:5/12 flex flex-col p-6 pt-0 sm:p-6 sm:pl-2 md:p-12 md:pl-2 lg:p-12 lg:pl-0 lg:pr-16 h-auto absolute bottom-0 lg:relative md:relative sm:relative xl:max-w-md"
        >
          {isLogin ? (
            <div className="flex flex-row mb-8">
              <TextHeader className="text md:text-2xl lg:text-2xl">
                <span className="font-bold">Selamat Datang,</span> silahkan
                masuk ke akun Anda!
              </TextHeader>
            </div>
          ) : (
            <div className="flex flex-row mb-8">
              <TextHeader className="text md:text-2xl lg:text-2xl">
                <span className="font-bold">Lupa kata sandi?</span> Instruksi
                akan dikirim ke email Anda
              </TextHeader>
            </div>
          )}
          {isLogin ? (
            <LoginForm doLoading={handleLoading} doForgot={handleForgot} />
          ) : (
            <ForgotForm doLoading={handleLoading} doLogin={handleLogin} />
          )}
          <div className="mt-auto">
            <BerAKHLAKContainer>
              <img
                src={require('../../assets/slicing/smartAsn-berAKHLAK.svg')}
                alt="BerAKHLAK"
                className="my-5 sm:my-16 "
              />
            </BerAKHLAKContainer>
            <TextHeader
              className="mb-4 text text-gray-500 text-sm"
              align="center"
            >
              Dikelola secara kolaboratif oleh:
            </TextHeader>
            <div className="flex flex-row sm:flex-col justify-center md:justify-between gap-x-2">
              <Partners data={partner1} />
              <Partners data={partner2} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
