import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import Axios from 'axios'
import styled from 'styled-components'
import HeaderTextImage from '../images/Header.png'
import HeaderCarImage from '../images/circle-car-image.png'

const FormControl = styled.div`




`

const Form = styled.div`
background-color: white;
width: 20vw;
border-radius: 25px;
color: white;
text-align: center;


`

const PowerupHeader = styled.div`


`

const Background = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-content: center;
margin: 8% 0% 0% 8%
`

const FormBorder = styled.div`

`
const HeaderAndForm = styled.div`
display: flex;
flex-direction: column;

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
       
       
        <Background id="landingBody">
        
    <PowerupHeader>
        <img id="headerCarImage" src={HeaderCarImage}></img>
        </PowerupHeader>
        <HeaderAndForm>
        <img id="headerImage" src={HeaderTextImage}></img>
    
<FormBorder>
    <FormControl>
<button class="formControl" onClick={this.changeForm}>Login</button>

<button class="formControl" >Sign Up</button>
    </FormControl>
{this.state.onLogin ?  <Form>

    <div class="row">
      <form class="col s12" onSubmit={this.handleSubmit}>
        <div class="row">
          <div class="input-field col s12">
            <input name="username" id="username" value={this.state.newUser.username} type="text" class="validate" onChange={this.handleChange}></input>
            <label for="username">Username</label>
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
            <div class="input-field col s12">
              <input name="username" id="username" type="text" class="validate" value={this.state.userUsernameInput.username} onChange={this.handleLoginChange}></input>
              <label for="username">Username</label>
            </div>
    
          </div>
         
       <button id="landingSubmit" >Submit</button>
        </form>
      </div>
            
        </Form>}
   
         </FormBorder>
         </HeaderAndForm>
        </Background>
     
       
      
    
    )
    }
}