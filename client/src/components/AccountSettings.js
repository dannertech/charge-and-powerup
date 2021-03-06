import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'

export default class AccountSettings extends Component {
    state = {
        user: {
            username: '',
            password: '',
            id: 0
        },
        successful: false
    }

    async componentDidMount(){
        const userId = this.props.match.params.id
const user = await this.fetchUser(userId)
this.setState({ user })

    }

    fetchUser = async(id) => {
const response = await axios.get(`/api/users/${id}`)
return response.data
    }
    handleChange = (event) => {
        const updatedUser = {...this.state.user}
        updatedUser[event.target.name] = event.target.value
        this.setState({user:updatedUser})
      
   
    }

    handleSubmit = async(event) => {
        event.preventDefault()
        const currentUser = {...this.state.user}
        const userId = this.props.match.params.id
        await axios.put(`/api/users/${userId}`, currentUser)
this.setState({ successful: true})
    }

    deleteUser = async(event) => {
const userId = this.props.match.params.id
await axios.delete(`/api/users/${userId}`)
        
    }

render(){
    if (this.state.successful) {
        return <h1>Your update was successful!</h1>
    }
    return(
        <div>
            <Link to={`/users/${this.state.user.id}`}>Back to HomePage</Link>
            <h1>Settings Page</h1>
<form onSubmit={this.handleSubmit}>
<label>Username</label>
<br></br>
<input type="text" name="username" value={this.state.user.username} onChange={this.handleChange}/>
<br></br>
<label>Password</label>
<br></br>
<input type="text" name="password" value={this.state.user.password} onChange={this.handleChange}/>
<br></br>
<button type="submit">Submit</button>
</form>
<button onClick={(event)=> this.deleteUser(event)}>Delete Your Account</button>

        </div>
    )
}
}