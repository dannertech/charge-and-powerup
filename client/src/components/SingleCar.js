import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'


export default class SingleCar extends Component {
    state = {
        car : {}
    }
   componentDidMount(){
    this.fetchCar()
    console.log(this.state)
    }

    fetchCar = async() => {
const carId = this.props.match.params.id
const userId = this.props.match.params.userId
const response = await axios.get(`/api/users/${userId}/cars/${carId}`)

this.setState ({ car: response.data })
    }
    deleteCar = async(event) => {
        //change this to match users id
        const userId = this.props.match.params.userId
        const carId = this.props.match.params.id
        await axios.delete(`/api/users/${userId}/cars/${carId}`)
    }
    render(){
        return(
<div>
    <button onClick={(event) => this.deleteCar(event)}>Delete Car</button>
            <h1>You are at your single car page</h1>
            <h1>{this.state.car.nickname}</h1>
            </div>
        )
    }
}