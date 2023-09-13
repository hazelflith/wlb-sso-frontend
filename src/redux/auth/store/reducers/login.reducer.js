import * as Actions from '../actions'
import axios from 'axios'
import {createCookie} from '../../../../utils/helpers'
import {API_URL, BASE_APP_URL, BASE_AUTH_URL} from '../../../../utils/globals'

const INITIAL_STATE = {
  userData: null,
}

const loginReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Actions.LOGIN:
      const {email, password} = action.payload
      const request = axios.post(`${API_URL}/global/accounts/login`, {
        email,
        password,
      })
      let payload
      let dataUser = {}

      if (email === '' || password === '') {
        console.log('Kolom email atau password tidak boleh kosong')
      }

      return request
        .then(response => {
          payload = response.data
          dataUser = response.data
          return axios.get(BASE_AUTH_URL, {
            headers: {
              Authorization: 'Bearer ' + payload.oauth.access_token,
            },
          })
        })
        .then(res => {
          dataUser.roles = res.data.roles
          dataUser.company_id = res.data.organization_id
          axios
            .get(`${API_URL}/people/profile/${res.data.id}`, {
              headers: {
                Authorization: 'Bearer ' + payload.oauth.access_token,
              },
            })
            .then(respon => {
              dataUser.people_profile = {
                company_profile: respon.data.Placements[0].Company,
                position: respon.data.Placements[0].Position,
              }
              createCookie('userData', JSON.stringify(dataUser), 1)
              localStorage.setItem('userData', JSON.stringify(dataUser))
              window.location = BASE_APP_URL
            })
        })
        .catch(error => {
          return {
            ...state,
            userData: null,
            errorMessage: error,
          }
        })
    default:
      return state
  }
}

export default loginReducer
