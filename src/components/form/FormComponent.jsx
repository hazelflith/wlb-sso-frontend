import React from 'react'
import {connect, useDispatch} from 'react-redux'
//import {loginAction} from '../../redux/auth/store/actions'
import * as AuthAction from '../../redux/auth/store/actions'

// import {createStructuredSelector} from 'reselect'
// import MenuItem from '../menu-item/MenuItemComponent'
import {FormMenuContainer, FormInput} from './FormStyles'
import {Title} from '../typography/TypographyStyles'
import {Button} from '../button/ButtonStyles'
import useInputState from '../../hooks/userInputState'

const Form = () => {
  const [emailValue, handleEmailValueChange] = useInputState('')
  const [passwordValue, handlePasswordValueChange] = useInputState('')
  const login = useDispatch(value => AuthAction.loginAction(value))

  const handleAuthLogin = () => {
    login({
      type: '[MODULE] AUTH LOGIN',
      payload: {
        email: emailValue,
        password: passwordValue,
      },
    })
  }

  return (
    <FormMenuContainer height={window.innerHeight}>
      <Title>SSO WLB</Title>
      <FormInput
        placeholder="Email"
        type="email"
        onChange={handleEmailValueChange}
      />
      <FormInput
        placeholder="Password"
        type="password"
        onChange={handlePasswordValueChange}
      />
      <Button onClick={handleAuthLogin}>Submit</Button>
    </FormMenuContainer>
  )
}

function authLogin(state) {
  return {userData: state}
}

export default connect(authLogin)(Form)
