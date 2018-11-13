import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'


const WelcomeHeader = styled.div`

`

export default class SingleUser extends Component {
    state = {
        user: {},
        cars: [],
        loading: true
    }


    async componentDidMount(){
        const userId = this.props.match.params.id
const cars = await this.fetchCars(userId)
        const user = await this.fetchUser(userId)
        this.setState({loading: false})
        this.setState({ user,cars })
    }

    fetchUser = async(id) => {

const response = await axios.get(`/api/users/${id}`)
return response.data

    }

    fetchCars = async(id) => {
        const response = await axios.get(`/api/users/${id}/cars`)
        return response.data
    }

    render() {
        const user = this.state.user

    
      
        return (
            <div>
                <Link to={`/users/${user.id}/settings`}>Settings</Link>
                <WelcomeHeader>
            <h3>Hi <b>{user.username}</b></h3>
            </WelcomeHeader>
<h2>Choose An Action</h2>
<h5 class="links"><Link class="navBarLinks" to={`/charging-stations`}>Search for Stations</Link></h5>
<h5 class="links"><Link class="navBarLinks" to={`/users/${this.state.user.id}/cars`}>Go to Cars</Link></h5>
            </div>
        )

    }
}