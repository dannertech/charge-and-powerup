import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'


const WelcomeHeader = styled.div`

`

export default class SingleUser extends Component {
    state = {
        user: {},
        cars: [],
        loading: true
    }


    async componentDidMount(){
        const userId = this.props.match.params.id
const cars = await this.fetchCars(userId)
        const user = await this.fetchUser(userId)
        this.setState({loading: false})
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
if(this.state.cars.length == 0){
    return (
        <div>
            <h1>You don't have any cars yet</h1>
        </div>
    )
}else{
        const allCars = this.state.cars.map((car, i) => {
            return (
                <div key={i}>
                <h1>
                <Link to={`/users/${user.id}/cars/${car.id}`} >{car.nickname}</Link>
                </h1>
                <h1>{car.charge}</h1>
                </div>
            )
        
        })
    
      
        return (
            <div>
                <Link to={`/users/${user.id}/settings`}>Settings</Link>
                <WelcomeHeader>
            <h3>Hi <b>{user.username}</b></h3>
            </WelcomeHeader>
            <h5>Here are your cars</h5>
          {allCars}
            </div>
        )
}
    }
}