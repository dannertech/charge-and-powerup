import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import Logo from '../images/circle-car-image.png'
import { Link } from 'react-router-dom'
import StationsHeaderBackgroundImage from '../images/Slice (3).png'

const StationsHeaderBackground = {
    display: 'flex',
    backgroundImage: `url(${StationsHeaderBackgroundImage})`,

   
backgroundRepeat: 'no-repeat',
color: 'white',
}

const FormAndTable = styled.div`
dislay: flex;
flex-direction: row;

`
const StationCard = styled.div`
display: flex;
flex-direction: column;
margin: 2% 5%;
box-shadow: 10px 5px 5px rgba(0,0,0,25%);
`

const StationsTable = {
backgroundColor: 'black',
color : 'white',


}


const NavBarLinks = styled.div`
display: flex;
flex-direction: row;
margin: 0% 5% 0% 0%;

`

const LogoDiv = styled.div`

`

const QuickSearch = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-content: center;
`



const NavBar = styled.div`
box-shadow: 10px 5px 5px rgba(0,0,0,25%);
color: black;
display: flex
flex-direction: row;
background: white;
justify-content: space-between


`

export default class ChargingStations extends Component {
    state = {
        stations: [],
        filteredStations: [],
        citySearch: {
            userInput: ''
        }
    }

async componentDidMount(){
    this.getStations()
}

handleSubmit = (event) => {
    event.preventDefault()
    const searchStations = this.state.citySearch.userInput
    const cityList = this.state.stations
    const filteredStations = this.state.filteredStations
    for(var i = 0; i < cityList.length; i++){
        if(cityList[i].AddressInfo.Town == searchStations){
        
            filteredStations.push(cityList[i])
            this.setState({ filteredStations })
            console.log(this.state.filteredStations)
        }
    }
}

handleChange = (event) => {
const citySearch = {...this.state.citySearch}
citySearch[event.target.name] = event.target.value
this.setState({ citySearch })

}
getStations = async() => {
    const response = await axios.get('https://api.openchargemap.io/v2/poi/?output=json&countrycode=US')
    console.log(response)
    this.setState({ stations: response.data}) 
    console.log(this.state.stations[0].AddressInfo.Town)
}

    render() {
       const allStations = this.state.filteredStations.map((station,i) => {
return(
    <StationCard key={i}>
        <h4>{station.AddressInfo.Title}</h4>
        <div style={StationsTable}>
        
        <h5>{station.AddressInfo.Town}</h5>
        <hr></hr>
        <h5>{station.AddressInfo.AddressLine1}</h5>
        <h5>{station.AddressInfo.Postcode}</h5>
   
        </div>
        <h5>{station.AddressInfo.ContactTelephone1}</h5>
        </StationCard>
  
)
       }) 
    
        return (
            <div>
                  <NavBar>
        <LogoDiv>
            <img id="CarLogo" src={Logo}></img>
        </LogoDiv>
        <NavBarLinks>
{/*<h5 class="links"><Link class="navBarLinks" to={`/users/${this.state.user.id}`}>Homepage</Link></h5>
<br></br>
<h5 class="links"><b>|</b></h5>
        <h5 class="links"><Link class="navBarLinks" to={`/users/${this.state.user.id}`}>Settings</Link></h5> */}
</NavBarLinks>
</NavBar>


<div id="StationsHeaderBackground" style={StationsHeaderBackground}>
<p id="HeaderFont">Charging Stations</p>
</div>
      <QuickSearch>
  
        
<button class="atlanta"><p>ATL</p></button>
<button class="miami"><p>MIA</p></button>
<button class="new-york"><p>NYC</p></button>
<button class="los-angeles"><p>LA</p></button>
          </QuickSearch>  
           
    <form id="searchForm" onSubmit={this.handleSubmit} class="col s12">
      <div class="row">
        <div class="col s12">
          Search for Stations:
          <div class="input-field inline">
            <input name="userInput" id="email_inline" class="validate" onChange={this.handleChange}></input>
            <button id="landingSubmit" type="submit">Submit</button>
          </div>
        </div>
      </div>
    </form>
 
    <FormAndTable>
<div>{allStations}</div>


  </FormAndTable>
  </div>

        )
    
    }
    
}