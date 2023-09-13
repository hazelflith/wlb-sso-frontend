import React, {useRef, useState} from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import useInputState from '../../hooks/userInputState'
import {LOGIN} from '../../graphql/queries'
import {useApolloClient} from '@apollo/react-hooks'
import {createCookie} from '../../utils/helpers'
import {
  BASE_APP_URL,
  // API_URL_PCS,
  // API_URL,
  CAPTCHA_SITE_KEY,
  isDevelopmentUse,
} from '../../utils/globals'
// import axios from 'axios'

import IconButton from '@material-ui/core/IconButton'
import InputAdornment from '@material-ui/core/InputAdornment'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'
import ResultPopup from '../shared-components/ResultPopup'
import ReCAPTCHA from 'react-google-recaptcha'

const LoginForm = ({doLoading, doForgot}) => {
  const [emailValue, handleEmailValueChange] = useInputState('')
  const [passwordValue, handlePasswordValueChange] = useInputState('')
  const client = useApolloClient()
  const [error, setError] = useState(false)
  const [alert, setAlert] = useState(false)
  const [alertMessage, setAlertMessage] = useState('')
  const captchaRef = useRef(null)

  const handleAuthLogin = async (e) => {
    const token = captchaRef.current.getValue()

    e.preventDefault()
    if (!token) {
      setAlert(true)
      setAlertMessage('Harap isi captcha.')
    } else {
      try {
        doLoading(true)
        setError(false)
        const {loading, data} = await client.query({
          query: LOGIN,
          variables: {
            email: emailValue,
            password: passwordValue,
          },
        })
        if (!loading) {
          // const dataPost = {
          //   email: emailValue,
          //   password: passwordValue,
          // }
          // try {
          //    await axios.post(`${API_URL_PCS}/auth/login`, dataPost)
          //    const reqChat = await axios.get(`${API_URL}/global/chat/get`, {
          //     headers: {
          //       Authorization: `Bearer ${data.getLogin.oauth.access_token}`,
          //     },
          //   })

          //   data.getLogin.chat = reqChat.data*/
          //   doLoading(false)
          //   setError(false)
          // } catch (error) {
          //   doLoading(false)
          //   setError(false)
          // }
          createCookie('userData', JSON.stringify(data.getLogin), 1)

          if (isDevelopmentUse) {
            window.alert(`Cookie has been created`)
          } else {
            createCookie('userData', JSON.stringify(data.getLogin), 1)
            localStorage.setItem('userData', JSON.stringify(data.getLogin))
            window.location = BASE_APP_URL
          }
        }
      } catch (error) {
        const graphQLErrors = error.graphQLErrors

        console.error(error)

        if (
          graphQLErrors &&
          graphQLErrors[0] &&
          graphQLErrors[0].message === 'NO PLACEMENT'
        ) {
          setAlertMessage(
            'To be able to login. Please make sure you have been placed in a company registered with WLB'
          )
        } else {
          setAlertMessage('Email atau Kata Sandi Salah, Silahkan coba lagi.')
        }

        captchaRef.current.reset()
        doLoading(false)
        setAlert(true)
      }
    }
  }

  const handleForgot = () => {
    doForgot(true)
  }

  const [values, setValues] = useState({
    showPassword: false,
  })

  const handleClickShowPassword = () => {
    setValues({...values, showPassword: !values.showPassword})
  }

  const handleMouseDownPassword = (event) => {
    event.preventDefault()
  }

  const handleAlert = () => {
    setAlert(false)
  }

  return (
    <div className="flex flex-col">
      <form name="loginForm" noValidate onSubmit={handleAuthLogin}>
        <TextField
          label="Email"
          autoFocus
          type="email"
          name="email"
          value={emailValue}
          onChange={handleEmailValueChange}
          variant="outlined"
          required
          fullWidth
          className="mb-4 w-full"
        />

        <TextField
          label="Kata Sandi"
          type={values.showPassword ? 'text' : 'password'}
          value={passwordValue}
          onChange={handlePasswordValueChange}
          className="mb-4 w-full"
          variant="outlined"
          required
          fullWidth
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <ReCAPTCHA sitekey={CAPTCHA_SITE_KEY} ref={captchaRef} />
        <div className="flex flex- mt-4" style={{justifyContent: 'flex-end'}}>
          <Typography
            className="mb-2 cursor-pointer font-medium"
            style={{
              fontSize: '14px',
              color: '#5CC4E9',
            }}
            onClick={() => handleForgot()}
            align="right"
          >
            Lupa Kata Sandi?
          </Typography>
        </div>
        <div>
          {error && (
            <Typography style={{color: 'red', marginBottom: '20px'}}>
              Email atau Kata Sandi Salah, Silahkan coba lagi
            </Typography>
          )}
        </div>
        <div className="flex flex-row">
          <Button
            variant="outlined"
            style={{
              textTransform: 'none',
              background: '#02798F',
              height: 48,
              outline: 'none',
            }}
            className="w-full mt-2 text-white transform-none text"
            type="submit"
          >
            Masuk
          </Button>
          {/* <Button
            variant="outlined"
            className="w-full mt-2 text-primary transform-none"
            style={{
              textTransform: 'none',
              border: '1px solid #024c62',
            }}
          >
            Register
          </Button> */}
        </div>
      </form>
      <ResultPopup
        open={alert}
        handleClose={handleAlert}
        feature={`Gagal Masuk`}
        message={alertMessage}
        type="Back"
        status="notNow"
      />
    </div>
  )
}

export default LoginForm
