import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import Axios from 'axios'
import styled from 'styled-components'
import HeaderTextImage from '../images/Header.png'
import HeaderCarImage from '../images/circle-car-image.png'

const FormControl = styled.div`
display:flex;
justify-content: center;
align-content: center;
`

const Form = styled.div`


border-radius: 25px;
color: white;
display: flex;
flex-direction: row;

`

const PowerupHeader = styled.div`


`

const Background = styled.div`
display: flex;
flex-direction: column;
border-radius: 25px;
background-color: rgb(255,218,0);
margin: 0% 0% 0% 0%;
box-shadow: 10px 5px 5px rgba(0,0,0,25%);
text-align: center;
`

const FormBorder = styled.div`

`
const HeaderAndForm = styled.div`


`


export default class LandingPage extends Component {
    state = {
        users : [],
        currentUser: {
        },
        userUsernameInput: {
username: ''
        },
        onLogin: false,
        newUser: {
            username: '',
            email: ''
        },
        redirectToUsersPage: false,
        redirectBackToLogin: false
    }

    changeForm = () => {
        const reverseIt = !this.state.onLogin
        this.setState({onLogin: reverseIt})

    }

   async componentDidMount(){
await this.fetchUsers()
const response = await Axios.get(`/api/users`)
this.setState({ users: response.data})
    }

    handleLoginChange = (event) => {
        const usernameLogin = {...this.state.userUsernameInput}
        usernameLogin[event.target.name] = event.target.value
        this.setState({ userUsernameInput: usernameLogin })
    }

  

    handleChange = (event) => {
        const new_user = {...this.state.newUser}
        new_user[event.target.name] = event.target.value
        this.setState({ newUser: new_user })
    }

    handleLoginSubmit = (event) => {
event.preventDefault()
//loop through users to check for username match

for(var i = 0; i < this.state.users.length; i++){
    if(this.state.users[i].username === this.state.userUsernameInput.username){
        this.setState({ currentUser: this.state.users[i] })
        // console.log(this.state.currentUser)
        this.setState({ redirectToUsersPage: true})
    }
}
    }

    handleSubmit = async(event) => {
        event.preventDefault()
        await Axios.post(`api/users`, this.state.newUser)
        console.log("successful")
        

        this.setState({ redirectBackToLogin: true })
    }

 fetchUsers = async() => {
const response = await Axios.get('/api/users')
this.setState({ users: response.data})

}
    render() {
if(this.state.redirectBackToLogin){
    return (

        <Redirect to={`/`}></Redirect>
        
    )
}
if(this.state.redirectToUsersPage){
    return(
        <Redirect to={`/users/${this.state.currentUser.id}`}></Redirect>
    )
}
    return (
       
       <div>
        <Background id="landingBody">
        
    <PowerupHeader>
        <img id="headerCarImage" src={HeaderCarImage}></img>
        </PowerupHeader>
        <HeaderAndForm>
        <img id="headerImage" src={HeaderTextImage}></img>
        </HeaderAndForm>
        </Background>
<FormBorder>
    <FormControl>
<button class="formControl" onClick={this.changeForm}><h4>Login</h4></button>

<button class="formControl" onClick={this.changeForm}><h4>Sign Up</h4></button>
    </FormControl>
{this.state.onLogin ?  <Form>

    <div class="row">
      <form class="col s12" onSubmit={this.handleSubmit}>
        <div class="row">
        <div class="col s12">
          <div class="input-field inline">
            <input name="username" id="username" value={this.state.newUser.username} type="text" class="validate" onChange={this.handleChange}></input>
            <label for="username">Username</label>
          </div>
          </div>
          </div>
 
        <div class="row">

          <div class="input-field col s12">
            <input name="email" id="email" value={this.state.newUser.email} type="email" class="validate" onChange={this.handleChange}></input>
            <label for="email">Email</label>
          </div>
          
        </div>
       <button id="landingSubmit">Submit</button>
      </form>
    </div>
          
      </Form>
      :
      <Form>

      <div class="row">
        <form class="col s12" onSubmit={this.handleLoginSubmit}>
          <div class="row">
          <div class="col s12">
            <div class="input-field inline">
              <input name="username" id="username" type="text" class="validate" value={this.state.userUsernameInput.username} onChange={this.handleLoginChange}></input>
              <label for="username">Username</label>
            </div>
            </div>
          </div>
         
       <button id="landingSubmit" >Submit</button>
        </form>
      </div>
            
        </Form>}
   
         </FormBorder>
     
        
         </div>
       
      
    
    )
    }
}