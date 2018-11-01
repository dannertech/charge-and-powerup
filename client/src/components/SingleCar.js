import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'


export default class SingleCar extends Component {
    state = {
        car : {}
    }
  async  componentDidMount(){
      const userId = this.props.match.params.id
//const post = await this.fetchPost(userId)

        const response = await axios.get(`/api/users/`)
    }
    render(){
        return(
<div>
            <h1>You are at your single car page</h1>
            </div>
        )
    }
}