import React, { Component } from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {auth} from '../store'

class HomePage extends Component {
  render(){
    return(<div>
      <h2>Home Page</h2>
      <hr />
    </div>)
  }
}


const MapState = () => {
  return {

  }
}

export default connect(MapState)(HomePage)
