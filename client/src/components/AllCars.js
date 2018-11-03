import React, {Component} from 'react'
import styled from 'styled-components'
import axios from 'axios'


export default class AllCars extends Component {
    state = {
        user: {},
        cars: []
    }

    async componentDidMount(){
       const userId = this.props.match.params.id
       const cars = await this.fetchCars(userId)
       const user = await this.fetchUser(userId)
       this.setState({ user,cars})
    }

    fetchCars = async(id) => {
const response = await axios.get(`/api/users/${id}/cars`)
return response.data
    }

    fetchUser = async(id) => {
        const response = await axios.get(`/api/users/${id}`)
        return response.data
    }
render(){
    return(
<div>
    <h1>Hello this is the all cars page</h1>
</div>
    )
}
}