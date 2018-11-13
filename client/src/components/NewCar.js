import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import Logo from '../images/circle-car-image.png'
import { Link } from 'react-router-dom'


const Form = styled.div`
margin: 10%;
border-radius: 15px;
background-color: black;
box-shadow: 10px 5px 5px rgba(0,0,0,25%);
`

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

export default class NewCar extends Component {
    state = {
        user: {},
        cars: [], 
        newCar: {}
      
    }



    async componentDidMount(){
       const userId = this.props.match.params.id
       const cars = await this.fetchCars(userId)
       const user = await this.fetchUser(userId)
     
       this.setState({ user,cars})
       console.log(this.state.cars)
    }

    handleNewCar = (event) => {
        const attributeName = event.target.name
        const attributeValue = event.target.value

        const newCar = {...this.state.newCar}
        newCar[attributeName] = attributeValue

        this.setState({ newCar })
    }

    addNewCar = async (event) => {
        const user = this.state.user
        event.preventDefault()
        const response = await axios.post(`/api/users/${user.id}/cars`, this.state.newCar)
        const cars = [...this.state.cars]
        cars.push(response.data)
        this.setState({ cars })

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

   <Form>
    <form class="col s12" onSubmit={this.addNewCar}>
      <div class="row">
        <div class="input-field col s6">
          <input name="make" id="make" type="text" class="validate" onChange={this.handleNewCar}></input>
          <label for="Make">Make</label>
        </div>
        <div class="input-field col s6">
          <input name="model" id="model" type="text" class="validate" onChange={this.handleNewCar}></input>
          <label for="model">Model</label>
        </div>
        <div class="input-field col s6">
          <input name="charge" id="charge" type="text" class="validate" onChange={this.handleNewCar}></input>
          <label for="Charge">Charge</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input name="nickname" id="nickname" type="text" class="validate" onChange={this.handleNewCar}></input>
          <label for="Nickname">Nickname</label>
        </div>
      </div>
      <button id="formSubmit" type="submit">Submit</button>
    </form>
    </Form>
  </div>
  

       
        )
    }
}