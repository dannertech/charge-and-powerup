import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Logo from '../images/circle-car-image.png'

const NavBarLinks = styled.div`
display: flex;
flex-direction: row;
margin: 0% 5% 0% 0%;

`
const LogoDiv = styled.div`
`


const NavBar = styled.div`
box-shadow: 10px 5px 5px rgba(0,0,0,25%);
color: black;
display: flex
flex-direction: row;
background: white;
justify-content: space-between


`


export default class SingleCar extends Component {
    state = {
        user: {},
        car : {}
    }
   componentDidMount(){
    this.fetchCar()
    this.fetchUser()
    console.log(this.state.user)
    }

    fetchCar = async() => {
const carId = this.props.match.params.id
const userId = this.props.match.params.userId
const response = await axios.get(`/api/users/${userId}/cars/${carId}`)

this.setState ({ car: response.data })
    }
    fetchUser = async() => {
        const userId = this.props.match.params.userId
        const response = await axios.get(`/api/users/${userId}`)
        this.setState({ user: response.data })
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
<NavBar>
            <LogoDiv>
                <img id="CarLogo" src={Logo}></img>
            </LogoDiv>
            <NavBarLinks>
    <h5 class="links"><Link class="navBarLinks" to={`/users/${this.state.user.id}`}>Homepage</Link></h5>
    <br></br>
    <h5 class="links"><b>|</b></h5>
    <h5 class="links"><Link class="navBarLinks" to={`/users/${this.state.user.id}/settings`}>Settings</Link></h5>
    </NavBarLinks>
    </NavBar>

            <h2>{this.state.user.username}'s Cars</h2>
            <h1>{this.state.car.nickname}</h1>
            <button onClick={(event) => this.deleteCar(event)}>Delete Car</button>
            <Link to={`/users/${this.state.user.id}/cars`}>Back to All Cars</Link>
            </div>
        )
    }
}