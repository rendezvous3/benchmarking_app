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

const computePercentages = (value1, value2) => {
  let negative = false
  if (value1 > value2) {
    // https://stackoverflow.com/questions/16201656/how-to-swap-two-variables-in-javascript
    value2 = [value1, value1 = value2][0];
    negative = true
  }
  let percentage = ((value2 - value1) / value2) * 100
  return negative ? percentage : percentage * -1
}

// const computePercentages1 = (value1, value2) => {
//   let my1percent = value1 / 100;
//   let otherPercentage = value2 / my1percent
//   let percentage = otherPercentage - value1
//   return percentage * -1
// }

const getSimilarUsers = (userId, users) => {
  let userComparing = users.filter(user => Number(user.candidate_id) === Number(userId))[0]
  return users.filter(user => areSimilarCompanies(userComparing.company, user.company))
  .filter(user => userComparing.title === user.title)
  .filter(user => Number(user.candidate_id) !== Number(userId))
  .map(user => {
    let comPercent = computePercentages(Number(userComparing.communication_score), Number(user.communication_score))
    let codePercent = computePercentages(Number(userComparing.coding_score), Number(user.coding_score))
    return Object.assign({}, user, {
      comPercent: comPercent,
      codePercent: codePercent
    })
  })
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
