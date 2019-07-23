import React, { Component } from 'react'
import api from '../../services/api'

export default class Main extends Component {

    componentDidMount() {
        this.loadClans();
    }

    loadClans = async () => {
        const response = await api.get('/clan/2CCCP')
        
        console.log(response)
    }

    render() {
        return <h1>Cards</h1>
    }
}