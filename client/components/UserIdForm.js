import React, { Component } from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {auth} from '../store'

class UserIdForm extends Component {
  render(){
    return (<form>
              <h4>Enter your Id</h4>
              <hr/>
              <input type="text" />
            </form>)
  }
}

const MapState = () => {
  return {

  }
}

export default connect(MapState)(UserIdForm)
