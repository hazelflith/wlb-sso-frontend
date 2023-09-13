import React from 'react'
import {Redirect, Route} from 'react-router-dom'
import {getCookie} from '../../utils/helpers'
import {BASE_APP_URL, isDevelopmentUse} from '../../utils/globals'

function redirectToBaseApp() {
  window.location = BASE_APP_URL
}

const PrivateRoute = ({component: Component, ...props}) => (
  <Route
    {...props}
    render={(props) =>
      !isDevelopmentUse && getCookie('userData') ? (
        redirectToBaseApp()
      ) : (
        <Redirect
          to={{
            pathname: '/login',
            state: {from: props.location},
          }}
        />
      )
    }
  />
)

export default PrivateRoute
