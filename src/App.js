// create your App component here
import React, { Component } from 'react';

class App extends Component {
   state = {  
      astros: []
   }
   
   componentDidMount() {
      fetch("http://api.open-notify.org/astros.json")
         .then(resp => resp.json())
         .then(astroData => this.handleAstroData(astroData));   
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
 
export default App;