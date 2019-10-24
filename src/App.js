// create your App component here
import React from 'react'

export default class App extends React.Component {

    state = {
        astros: []
    }

    render(){
        return(
            <div>
                {/* MAP AND KEY TO LIST IN LI */}
               <ul> {this.state.astros.map(astro => 
                <li key={astro.name}> {astro.name} </li>)} 
               </ul> 
                
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