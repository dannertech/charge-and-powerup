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

        const user = await this.fetchUser(userId)
        const cars = await this.fetchCars(userId)


        this.setState({ user,cars})

    }

    fetchUser = async(id) => {
const response = await axios.get(`/api/users/${id}`)
this.setState({user: response.data})
    }

    fetchCars = async(id) => {
        const response = await axios.get(`/api/users/${id}`)
        this.setState({cars: response.data})
    }
    render() {
        const user = this.state.user
        return (
            <div>
            <h1>Hi {user.username}</h1>
            </div>
        )
    }
}