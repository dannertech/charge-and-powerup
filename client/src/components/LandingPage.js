import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios'
import styled from 'styled-components'
import HeaderImage from '../images/Header.png'


const PowerupHeader = styled.div`
display: flex;
justify-content: center;
align-content: center;
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
        <img id="headerImage" src={HeaderImage}></img>
    </PowerupHeader>

           {/*
            <h1>Hello</h1>
           <h1> {allUsers} </h1>
           <Link to={`/users/new`}>Sign Up</Link>
    */}
         
        </Background>
       
      
    
    )
    }
}