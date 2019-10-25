import React, { Component } from 'react';

export default class App extends Component {
    state = {
        peopleInSpace: []
    }
    
    render() {
        
    }

    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
        .then(response => response.json())
        .then(data => {
            this.setState({
                peopleInSpace: data.people
            })
        })
    }
}