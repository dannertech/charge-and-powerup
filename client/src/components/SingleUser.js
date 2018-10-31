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
     


        this.setState({ user })

    }

    fetchUser = async(id) => {
const response = await axios.get(`/api/users/${id}`)
return response.data

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