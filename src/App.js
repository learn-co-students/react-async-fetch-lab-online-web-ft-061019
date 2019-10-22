import React from 'react';

class App extends React.Component{

    state = {  
        astros: []
     }

     
    componentDidMount(){
            fetch('http://api.open-notify.org/astros.json')
      .then(response => response.json())
      .then(astroData => this.handleAstroData(astroData))
    }

    handleAstroData = astroData => {
        debugger
        this.setState({
           astros: astroData.people
        })
     }
  
     render() { 
        return ( 
           <div>{this.state.astros.map(naut => naut.name)}</div>
        );
     }

}

export default App