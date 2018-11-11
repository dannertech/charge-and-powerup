import React, {Component} from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { Link } from 'react-router-dom'
import BackgroundBlue from '../images/blue-background.png'
import BMW from '../images/bmw.png'
import NotChargingDot from '../images/white-circle.png'
import Info from '../images/info.png'
import Search from '../images/search-icon.png'
import Charge from '../images/charge-icon.png'
import WhiteCircle from '../images/white-loop.png'
import CarsHeaderBackground from '../images/Slice (2).png'
import Logo from '../images/circle-car-image.png'


const NavBarLinks = styled.div`
display: flex;
flex-direction: row;
margin: 0% 5% 0% 0%;

`


const NavBar = styled.div`
box-shadow: 10px 5px 5px rgba(0,0,0,25%);
color: black;
display: flex
flex-direction: row;
background: white;
justify-content: space-between


`

const PageContent = styled.div`
display: flex;
justify-content: center;
align-content: center;
`

const LogoDiv = styled.div`

`

const CarsHeader = {
backgroundImage: `url(${CarsHeaderBackground})`,
backgroundRepeat: 'no-repeat',
backgroundPosition: 'left',
height: '45%',
color: 'white'
}

const CarCharge = {
    backgroundImage: `url(${WhiteCircle})`,
    backgroundRepeat: 'no-repeat',
 backgroundSize: '20%',
 backgroundPosition: 'center'
}


const CarSection = styled.div`
display: flex;
text-align: center


`

const CarCard = {
    backgroundImage: `url(${BackgroundBlue})`,
    backgroundRepeat: 'no-repeat',
   

textAlign: 'center',
backgroundPosition: 'center',
padding: '0%'
    
  
    
}



export default class AllCars extends Component {
    state = {
        user: {},
        cars: []
    }

    async componentDidMount(){
       const userId = this.props.match.params.id
       const cars = await this.fetchCars(userId)
       const user = await this.fetchUser(userId)
       this.setState({ user,cars})
       console.log(this.state.cars)
    }

    fetchCars = async(id) => {
const response = await axios.get(`/api/users/${id}/cars`)
return response.data
    }

    fetchUser = async(id) => {
        const response = await axios.get(`/api/users/${id}`)
        return response.data
    }
render(){
    const allCars = this.state.cars.map((car,i)=>{
        return (
       
    <div id="Card">
            <div id="CardRectangle">
      <img id="ChargingDot" src={NotChargingDot}></img>

        
    <div id="cardDetails">
        <img id="carLogo" src={BMW}></img>
        
        
        <h4><b>{car.nickname}</b></h4>
            <div style={CarCharge}>{car.charge}</div>
            <Link to={`/users/${this.state.user.id}/cars/${car.id}`}>{car.nickname}</Link>
            </div> 
            </div>
    <div id="rectangle">
  <button id="infoButton" ><img id="info" src={Info}></img></button>
  <button id="infoButton" ><img id="info" src={Search}></img></button>
  <button id="infoButton" ><img id="info" src={Charge}></img></button>
  </div>

 

     {/*           
<img id="carLogo" src={BMW}></img>
            <p><b>{car.nickname}</b></p>
            <p>{car.charge}</p>
     
            <Link to={`/users/${this.state.user.id}/cars/${car.id}`}>{car.nickname}</Link>
         */}
 
</div>
        )
    })
    return(
<div>
    <NavBar>
        <LogoDiv>
            <img id="CarLogo" src={Logo}></img>
        </LogoDiv>
        <NavBarLinks>
<h5 class="links"><Link class="navBarLinks" to={`/users/${this.state.user.id}`}>Homepage</Link></h5>
<br></br>
<h5 class="links"><b>|</b></h5>
<h5 class="links"><Link class="navBarLinks" to={`/users/${this.state.user.id}`}>Settings</Link></h5>
</NavBarLinks>
</NavBar>

   <h1 style={CarsHeader}>Cars</h1>
    <PageContent>
    <CarSection>{allCars}</CarSection>
    </PageContent>

<a href="#" class="float">
<i class="fa fa-plus my-float"></i>
</a>
</div>
    )
}
}