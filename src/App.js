// create your App component here
import React from 'react'

export default class App extends React.component {

    state = {
        astros: []
    }

    render() {
        return (
        <div>
            <ul>{this.state.astros.map(astro => 
            <li key={astro.name}> {astro.name} </li>)}
            </ul>
            </div>
        )
    }

    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
        .then(res => res.json())
        .then(data => {
            this.setState({
                astros: data.people
            })
        })
    }

}