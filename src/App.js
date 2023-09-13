import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Homepage from './pages/homepage/HomepageComponent'
import LoginPage from './pages/login/LoginComponent'
import NotFoundComponent from './pages/error/NotFoundComponent'
import PrivateRoute from './pages/private/PrivateRoute'
import {ThemeProvider} from 'styled-components'
import {ApolloProvider} from '@apollo/react-hooks'
import client from './graphql/connector'
import {createMuiTheme, MuiThemeProvider} from '@material-ui/core'
import * as Sentry from '@sentry/browser'
import {SENTRY_ENV, SENTRY_URL} from './utils/globals'

const theme = createMuiTheme({
  font: 'muli',
  borderColor: 'rgb(204, 204, 204)',
  palette: {
    primary: {
      main: '#055469',
    },
    secondary: {
      main: '#B42B2D',
    },
  },
  typography: {
    fontFamily: ['muli'],
    button: {
      textTransform: 'capitalize',
    },
  },
})

Sentry.init({
  dsn: SENTRY_URL,
  environment: SENTRY_ENV,
})

const App = () => {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <MuiThemeProvider theme={theme}>
          <Switch>
            <PrivateRoute exact path="/" component={Homepage} />
            <Route exact path="/login" component={LoginPage} />
            <Route component={NotFoundComponent} />
          </Switch>
        </MuiThemeProvider>
      </ThemeProvider>
    </ApolloProvider>
  )
}

/*const mapStateToProps = createStructuredSelector({})

const mapDispatchToProps = dispatch => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App)*/
export default App
