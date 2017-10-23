import React, { Component } from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {auth} from '../store'
import { UserIdForm } from './index'
import { UsersList } from './index'

class HomePage extends Component {
  render(){
    return(<div>
      <h2>Home Page</h2>
      <hr />
      <UserIdForm />
      {
        this.props.users ? <UsersList users={this.props.users} /> : null
      }
    </div>)
  }
}


const MapState = (state) => {
  return {
    users: state.similarUsers
  }
}

export default connect(MapState)(HomePage)
