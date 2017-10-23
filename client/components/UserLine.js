import React, { Component } from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

const UserLine = (props) => {
  return(<div>
          <p>
          <img className='profile-img'
               src="https://image.flaticon.com/icons/png/128/149/149071.png"/>
          <span> </span>
          {props.user.candidate_id} |
          Communication Score difference: % {props.user.comPercent.toFixed(2)} |
          Code Score difference: % {props.user.codePercent.toFixed(2)}</p>
          <hr />
        </div>)
}

export default UserLine
