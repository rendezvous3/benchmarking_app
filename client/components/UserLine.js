import React, { Component } from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

const UserLine = (props) => {
  let colorCom = props.user.comPercent < 0 ? "red" : "green"
  let colorCode = props.user.codePercent < 0 ? "red" : "green"
  let spanStyleCom = {
    color: colorCom,
    fontWeight: 400,
  }
  let spanStyleCode = {
    color: colorCode,
    fontWeight: 400,
  }
  return(<div>
          <p>
          <img className='profile-img'
               src="https://image.flaticon.com/icons/png/128/149/149071.png"/>
          <span> </span>
          {props.user.candidate_id} |
          Title: {props.user.title} |
          Company idx: {props.user.company.fractal_index} |
          Communication Score difference: % <span style={spanStyleCom}>{props.user.comPercent.toFixed(2)}</span> |
          Code Score difference: % <span style={spanStyleCode}>{props.user.codePercent.toFixed(2)}</span></p>
          <hr />
        </div>)
}

export default UserLine
