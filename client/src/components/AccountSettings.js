import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'

export default class AccountSettings extends Component {
    state = {
        user: {
            username: '',
            password: ''
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

    deleteUser = async(id) => {
        const response = await axios.delete(`/api/users/${id}`)
        
    }

render(){
    if (this.state.successful) {
        return <h1>Your update was successful!</h1>
    }
    return(
        <div>
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
<button onClick={this.deleteUser}>Delete Your Account</button>

        </div>
    )
}
}