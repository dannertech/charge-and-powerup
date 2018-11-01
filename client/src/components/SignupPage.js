import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'


export default class SignupPage extends Component {
    state = {
        users: [],
        newUser: {
            password: '',
            username: ''
        }
    }
    render(){
        return(
            <div>
                <h1>This is the Signup Page</h1>
                <form onSubmit={this.handleSubmit}>
                <label> Username </label>
                <br></br>
                <input type="text" name="username" value={this.state.newUser.username} onChange={this.handleChange} />
                <br></br>
                <label>Password</label>
                <br></br>
                <input type="text" name="password" value={this.state.newUser.password} onClick={this.handleChange} />
                </form>
            </div>
        )
    }
}