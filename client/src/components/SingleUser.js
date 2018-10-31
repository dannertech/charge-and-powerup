import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default class SingleUser extends Component {
    state = {
        user: {},
        cars: []
    }

    async componentDidMount(){
        const userId = this.props.match.params.id
const cars = await this.fetchCars(userId)
        const user = await this.fetchUser(userId)
        this.setState({ user,cars })
    }

    fetchUser = async(id) => {
const response = await axios.get(`/api/users/${id}`)
return response.data

    }

    fetchCars = async(id) => {
        const response = await axios.get(`/api/users/${id}/cars`)
        return response.data
    }

    render() {
        const user = this.state.user

        const allCars = this.state.cars.map((car, i) => {
            return (
                <div key={i}>
                <h1>{car.nickname}</h1>
                <h1>{car.charge}</h1>
                </div>
            )
        })
        return (
            <div>
            <h1>Hi {user.username}</h1>
          {allCars}
            </div>
        )
    }
}