import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios'
import styled from 'styled-components'

const Background = styled.div`

`


const UserDiv = styled.div`

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
                <UserDiv key={i}>
                    <h1>{user.username}</h1>
                    <Link to={`/users/${user.id}`} >{user.id}</Link>
                </UserDiv>
            )
        })
    return (
        
        <Background id="landingBody">
       <body>
           {/*}
            <h1>Hello</h1>
           <h1> {allUsers} </h1>
           <Link to={`/users/new`}>Sign Up</Link>
    */}
           </body>
        </Background>
    
    )
    }
}