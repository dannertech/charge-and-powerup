import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios'
import styled from 'styled-components'
import HeaderTextImage from '../images/Header.png'
import HeaderCarImage from '../images/circle-car-image.png'

const FormControl = styled.div`

`

const Form = styled.div`
background-color: black;
width: 80vw;
border-radius: 25px;
`

const PowerupHeader = styled.div`

display: flex;
justify-content: center;
align-content: center;
flex-wrap: wrap;
`

const Background = styled.div`
background-color: white;
overflow: hidden;
`



export default class LandingPage extends Component {
    state = {
        users : []
    }

   async componentDidMount(){
await this.fetchUsers()
    }

 fetchUsers = async() => {
const response = await Axios.get('/api/users')
this.setState({ users: response.data})

}
    render() {

        const allUsers = this.state.users.map((user, i) => {
            return (
                <div key={i}>
                    <h1>{user.username}</h1>
                    <Link to={`/users/${user.id}`} >{user.id}</Link>
                </div>
            )
        })
    return (
       
        <Background id="landingBody">
    <PowerupHeader>
        <img id="headerCarImage" src={HeaderCarImage}></img>
        
        <img id="headerImage" src={HeaderTextImage}></img>
    </PowerupHeader>

           {/*
            <h1>Hello</h1>
           <h1> {allUsers} </h1>
           <Link to={`/users/new`}>Sign Up</Link>
    */}
    <FormControl>

    </FormControl>

    <Form>

  <div class="row">
    <form class="col s12">
      <div class="row">
        <div class="input-field col s6">
          <input placeholder="Placeholder" id="first_name" type="text" class="validate"></input>
          <label for="first_name">First Name</label>
        </div>
        <div class="input-field col s6">
          <input id="last_name" type="text" class="validate"></input>
          <label for="last_name">Last Name</label>
        </div>
      </div>
     
      <div class="row">
        <div class="input-field col s12">
          <input id="password" type="password" class="validate"></input>
          <label for="password">Password</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input id="email" type="email" class="validate"></input>
          <label for="email">Email</label>
        </div>
      </div>
     
    </form>
  </div>
        
    </Form>
         
        </Background>
       
      
    
    )
    }
}