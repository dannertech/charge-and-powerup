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

  async componentDidMount(){
const response = await axios.get(`/api/users`)
this.setState({ users: response.data })

    }

    handleChange = (event) => {
        const new_user = {...this.state.newUser}
        new_user[event.target.name] = [event.target.value]
        this.setState({ newUser: new_user})
    }
    handleSubmit = async(event) => {
event.preventDefault()
await axios.post('/api/users', this.state.newUser)
console.log(this.state.users)
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
                <input type="text" name="password" value={this.state.newUser.password} onChange={this.handleChange} />
                <br></br>
                <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}