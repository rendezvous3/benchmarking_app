import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { UserLine } from './index'

const UsersList = (props) => {
  return(
    <div className="col-sm-10 col-sm-offset-1">
      {props.users.map((user, i) => {
        return(<div key={i}><UserLine user={user}/></div>)}
      )}
    </div>
  )
}

export default UsersList
