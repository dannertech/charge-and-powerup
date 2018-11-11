import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'

export default class ChargingStations extends Component {
    state = {
        stations: [],
        filteredStations: [],
        citySearch: ''
    }

async componentDidMount(){
    this.getStations()
  

}

getStations = async() => {
    const response = await axios.get('https://api.openchargemap.io/v2/poi')
    console.log(response)
    this.setState({ stations: response.data}) 
    
}

    render() {

        return (
            <h1>This is the charging stations page</h1>

        )
    }
}