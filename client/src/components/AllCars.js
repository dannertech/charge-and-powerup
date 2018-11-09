import React, {Component} from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { Link } from 'react-router-dom'
import BackgroundBlue from '../images/blue-background.png'

const CarSection = styled.div`


`

const CarCard = {
    backgroundImage: `url(${BackgroundBlue})`,
    backgroundSize: 'cover',
    padding: '20% 10%',
    margin: '10%',
    textAlign: 'center',
    color: 'white'
 
}



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
        <div style={CarCard} id="carCard" key={i}>

            <h3><b>{car.nickname}</b></h3>
            <h5>{car.charge}</h5>
         
            <Link to={`/users/${this.state.user.id}/cars/${car.id}`}>{car.nickname}</Link>
        </div>
        )
    })
    return(
<div>
    <h1>Hello this is the all cars page</h1>
    <CarSection>{allCars}</CarSection>

<Link to={`/users/${this.state.user.id}`}>Back to Homepage</Link>
</div>
    )
}
}