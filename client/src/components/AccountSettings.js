import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'

export default class AccountSettings extends Component {
    state = {
        user: {}
    }
    handleChange = (event) => {
        const updatedUser = {...this.state.user}
        updatedUser[event.target.name] = event.target.value
        this.setState({user:updatedUser})
    }

    handleSubmit = (event,updatedUser) => {
        event.preventDefault()
        const currentUser = {...this.state.user}
        currentUser.username = updatedUser.username
       

 
    }


render(){
    return(
        <div>
            <h1>Settings Page</h1>
<form onSubmit={this.handleSubmit}>
<input type="text" name="username" value={this.state.user.username} />
<br></br>
<input type="text" name="password" value={this.state.user.password} />
<br></br>
</form>
        </div>
    )
}
}