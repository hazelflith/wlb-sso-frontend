//Custom role lib utilizing for many purposes such as redirect to module after auth from gateway
import {getGlobalRoles, getOrgRoles, Roles} from 'wlb-role-helper'

export function redirectToModuleAfterLogin(role) {
  const globalRoles = getOrgRoles(role)
  switch (globalRoles) {
    case globalRoles.includes(Roles.STUDENT): //TODO: redirect here to learning module
  }
}

export function availableModuleAfterLogin(role) {
  //TODO:create one page which contains available modules
}

module.exports = {
  availableModuleAfterLogin,
  redirectToModuleAfterLogin,
}
