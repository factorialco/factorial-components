// @flow
import companies from './companies'
import users from './users'
import employees from './employees'
import emailSettings from './emailSettings'
import features from './features'
import * as knowYourCompany from './KnowYourCompany'
import documents from './documents'
import leaves from './leaves'
import variableCompensations from './variableCompensations'
import timeBooks from './timeBooks'
import teams from './teams'
import memberships from './memberships'

export {
  companies,
  users,
  employees,
  features,
  knowYourCompany,
  leaves,
  teams,
  memberships,
  timeBooks,
  variableCompensations,
  documents,
  emailSettings
}

// Expose to global for convenience
global.__collections = module.exports
