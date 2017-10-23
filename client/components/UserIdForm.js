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
    this.props.getSimilarUsers(this.state.userId)
  }

  render(){
    return (<div className="container">
              <div className="row">
              <div className="col-sm-6 col-sm-offset-3">
              <h4 className="text-center">Enter your Id</h4>
                <form onSubmit={this.handleSubmit}>
                <div id="custom-search-input">
                <div className="input-group col-md-12">
                  <input className="form-control input-lg" placeholder="enter your candidate_id" type="text" onChange={this.handleChangeId}/>
                  <span className="input-group-btn">
                  <button className="btn btn-info btn-lg"><i className="glyphicon glyphicon-search"></i></button>
                  </span>
                  </div>
                </div>
                </form>
                </div>
              </div>
            </div>)
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
