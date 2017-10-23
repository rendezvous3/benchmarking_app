import React, { Component } from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

const UsersList = (props) => {
  return(
    <div>
      {props.users.map((user, i) => {
        return(<div key={i}>
                <h5>{user.candidate_id}</h5>
                <p>Communication Score percentage: {user.comPercent.toFixed(2)}</p>
                <p>Code Score percentage: {user.codePercent.toFixed(2)}</p>
                <hr />
              </div>)}
      )}
    </div>
  )
}

export default UsersList
