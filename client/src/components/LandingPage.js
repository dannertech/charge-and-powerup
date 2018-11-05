import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import Axios from 'axios'
import styled from 'styled-components'
import HeaderTextImage from '../images/Header.png'
import HeaderCarImage from '../images/circle-car-image.png'

const FormControl = styled.div`
display: flex;
align-content: center;
justify-content: space-around;
margin: 0% 5% 0% 0%;

`

const Form = styled.div`

width: 80vw;

color: black;
display: flex;
justify-content: center;
align-content: center;
margin: 7% 0% 0% 7%;
`

const PowerupHeader = styled.div`

display: flex;
justify-content: center;
align-content: center;
flex-wrap: wrap;
`

const Background = styled.div`

`



export default class LandingPage extends Component {
    state = {
        users : [],
        currentUser: {
            username: ''
        },
        onLogin: true,
        newUser: {
            username: '',
            email: ''
        },
        redirect: false
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

  

    handleChange = (event) => {
        const new_user = {...this.state.newUser}
        new_user[event.target.name] = event.target.value
        this.setState({ newUser: new_user })
    }

    handleSubmit = async(event) => {
        event.preventDefault()
        await Axios.post(`api/users`, this.state.newUser)
        console.log("successful")
        

        this.setState({ redirect: true })
    }

 fetchUsers = async() => {
const response = await Axios.get('/api/users')
this.setState({ users: response.data})

}
    render() {
if(this.state.redirect){
    return (

        <Redirect to={`/`}></Redirect>
        
    )
}
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
<button onClick={this.changeForm}>Login</button>

<button>Sign Up</button>
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
       <button>Submit</button>
      </form>
    </div>
          
      </Form>
      :
      <Form>

      <div class="row">
        <form class="col s12">
          <div class="row">
            <div class="input-field col s12">
              <input id="username" type="text" class="validate" value={this.state.currentUser.username}></input>
              <label for="username">Username</label>
            </div>
    
          </div>
         
       
        </form>
      </div>
            
        </Form>}
   
         
        </Background>
     
       
      
    
    )
    }
}