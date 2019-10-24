// create your App component here
import React from 'react'

export default class App extends React.Component {

    state = {
        astros: []
    }

    render(){
        return(
            <div>
               <span> {this.state.astros.map(astro => astro.name)} </span> 
                
            </div>
        )
    }

    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
        .then(resp => resp.json())
        .then(data => {
            this.setState({
                astros: data.people
            })
        })  
    }
}