import React, {useState} from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import useInputState from '../../hooks/userInputState'
import {API_URL} from '../../utils/globals'
import axios from 'axios'

const ForgotForm = ({doLoading, doLogin}) => {
  const [emailValue, handleEmailValueChange] = useInputState('')
  const [error, setError] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleForgotPassword = async (e) => {
    e.preventDefault()
    try {
      doLoading(true)
      setError(error)
      await axios
        .post(`${API_URL}/global/accounts/forgotpwd`, {
          email: emailValue,
        })
        .then(() => {
          doLoading(false)
          setError(false)
          setSuccess(true)
        })
    } catch (error) {
      doLoading(false)
      setError(true)
      setSuccess(false)
    }
  }

  const handleLogin = () => {
    doLogin(true)
  }

  return (
    <div className="w-full">
      <form
        name="ForgotForm"
        noValidate
        onSubmit={(e) => handleForgotPassword(e)}
      >
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
          className="mb-4 w-full border-blue-400"
        />

        <div>
          {error && (
            <Typography style={{color: 'red', marginBottom: '12px'}}>
              Atur Ulang Kata Sandi Gagal, Email Tidak Benar, Coba lagi
            </Typography>
          )}
          {success && (
            <Typography style={{color: '#024c62', marginBottom: '12px'}}>
              Silahkan cek email kamu untuk informasi lebih lengkap.
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
            className="w-full mt-2 mb-4 text-white transform-none text"
            type="submit"
          >
            Kirim Ulang Tautan
          </Button>
        </div>
        <div className="flex flex-row">
          <Typography
            className="mb-2 text-gray-500 font-medium"
            style={{
              fontSize: '14px',
            }}
          >
            Ingat Kata Sandi?{' '}
            <span
              className="cursor-pointer"
              onClick={() => handleLogin()}
              style={{
                color: '#02798F',
              }}
            >
              Masuk{' '}
            </span>
          </Typography>
        </div>
      </form>
    </div>
  )
}

export default ForgotForm
