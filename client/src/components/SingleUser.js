import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'
import FrontCarSlice from '../images/front-car-slice.png'
import WholeCarSlice from '../images/whole.car-slice.png'
import HalfCarSlice from '../images/car-circle-slice.png'

const Links = styled.div`
display: flex;
flex-direction: column;
`

const BodyContent = styled.div`
display: flex;
flex-direction: column;
`

const Image = styled.img`
width: 70%;
height: 100%;
`

const ImageHeader = styled.div`
display: flex;
justify-content: flex-end;
`

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
            <BodyContent>
               
                <WelcomeHeader>
            <p id="HeaderTextDiv">Hi <b id="UserHeaderText">{user.username}</b></p>
            
<Links>
<h5 class="links"><Link class="navBarLinks" to={`/charging-stations`}>Search for Stations</Link></h5>
<h5 class="links"><Link class="navBarLinks" to={`/users/${this.state.user.id}/cars`}>Go to Cars</Link></h5>
<h5 class="links"><Link class="navBarLinks" to={`/users/${user.id}/settings`}>Settings</Link></h5>
</Links>
</WelcomeHeader>
<ImageHeader>
<Image src={HalfCarSlice}></Image>
</ImageHeader>

            </BodyContent>
        )

    }
}