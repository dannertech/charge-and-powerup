import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'

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

}

handleChange = (event) => {
const userInput = {...this.state.stations}
userInput[event.target.name] = event.target.value
}
getStations = async() => {
    const response = await axios.get('https://api.openchargemap.io/v2/poi')
    console.log(response)
    this.setState({ stations: response.data}) 
    
}

    render() {

        return (
            <div>
            <h1>This is the charging stations page</h1>
            <div class="row">
    <form class="col s12">
      <div class="row">
        <div class="col s12">
          Search for Stations:
          <div class="input-field inline">
            <input name="userInput" id="email_inline" type="email" class="validate"></input>
            <label for="email_inline">City Name</label>
            <button type="submit">Submit</button>
          </div>
        </div>
      </div>
    </form>
  </div>
  </div>
        )
    }
}