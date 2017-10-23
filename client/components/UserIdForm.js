import React, { Component } from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import { fetchSimilarUsers } from '../store'

class UserIdForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      userId: null,
    }

    this.handleChangeId = this.handleChangeId.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChangeId(evt){
    const userId = Number(evt.target.value)
    this.setState({ userId })
  }

  handleSubmit(evt){
    evt.preventDefault()
    console.log(this.state.userId)
  }

  render(){
    console.log(this.state)
    return (<form onSubmit={this.handleSubmit}>
              <h4>Enter your Id</h4>
              <hr/>
              <input type="text" onChange={this.handleChangeId}/>
              <button>Find</button>
            </form>)
  }
}

const MapState = (state) => {
  return {

  }
}

const MapDispatch = (dispatch) => {
  return {
    getSimilarUsers: (user_id) => {
      dispatch(fetchSimilarUsers(user_id))
    }
  }
}

export default connect(MapState, MapDispatch)(UserIdForm)
