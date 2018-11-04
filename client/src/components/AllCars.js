import React, {Component} from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { Link } from 'react-router-dom'


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
       console.log(this.state.cars)
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
    const allCars = this.state.cars.map((car,i)=>{
        return (
        <div key={i}>
            <h1>{car.nickname}</h1>
            <h1>{car.charge}</h1>
            <h3>{car.model}</h3>
            <h3>{car.make}</h3>
            <Link to={`/users/${this.state.user.id}/cars/${car.id}`}>{car.nickname}</Link>
        </div>
        )
    })
    return(
<div>
    <h1>Hello this is the all cars page</h1>
    <div>{allCars}</div>

<Link to={`/users/${this.state.user.id}`}>Back to Homepage</Link>
</div>
    )
}
}