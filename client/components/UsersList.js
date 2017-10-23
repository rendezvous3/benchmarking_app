import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { UserLine } from './index'

const UsersList = (props) => {
  return(
    <div>
      {props.users.map((user, i) => {
        return(<div key={i}><UserLine user={user}/></div>)}
      )}
    </div>
  )
}

export default UsersList
