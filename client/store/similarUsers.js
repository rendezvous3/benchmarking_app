import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const FETCH_SIMILAR_USERS = 'FETCH_SIMILAR_USERS'

/**
 * INITIAL STATE
 */
const similarUsers = []

/**
 * ACTION CREATORS
 */
const fetchSimilarUsersAction = users => ({type: FETCH_SIMILAR_USERS, users})

const areSimilarCompanies = (company1, company2) => {
  return Math.abs(company1['fractal_index'] - company2['fractal_index']) < 0.15
}

const getSimilarUsers = (userId, users) => {
  let userComparing = users.filter(user => Number(user.candidate_id) === Number(userId))[0]
  return users.filter(user => areSimilarCompanies(userComparing.company, user.company))
  .filter(user => userComparing.title === user.title)
  .filter(user => Number(user.candidate_id) !== Number(userId))
}


/**
 * THUNK CREATORS
 */
export const fetchSimilarUsers = (userId) =>
  dispatch => {
    //return axios.get(`/api/users/${userId}`)
    return axios.get(`/api/users`)
    .then(res => res.data)
    .then(users => {
      let similarUsers = getSimilarUsers(userId,users)
      dispatch(fetchSimilarUsersAction(similarUsers))
      }
    )
    .catch(err => console.log(err))
  }
 /**
 * REDUCER
 */
export default function (state = similarUsers, action) {
  switch (action.type) {
    case FETCH_SIMILAR_USERS:
      return action.users
    default:
      return state
  }
}
