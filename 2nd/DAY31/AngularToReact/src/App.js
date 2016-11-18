import React, { Component } from 'react';
import './App.css';

import React_Basic from './react-basic'
import React_Basic_Accordian from './react-basic-accordian'

class App extends Component {
  constructor(){
    super(...arguments);
    this.state = {
      route: window.location.hash.substr(1)
    };
  }

  componentDidMount(){
    window.addEventListener('hashchange', () => {
      this.setState({
        route: window.location.hash.substr(1)
      });
    });
  }

  render() {
    let Child;
    switch(this.state.route){
      case '/react-basic': Child = React_Basic; 
        break;
      case '/react-basic-accordian': Child = React_Basic_Accordian; 
        break;
    }

    if(Child)
    {
      return (<Child defaultValue="false" app_name="React App" />);
    }
    else
    {
      return (
        <ul>
          <li><a href="#/react-basic">react basic</a></li>
          <li><a href="#/react-basic-accordian">react basic accordian</a></li>
        </ul>
      );
    }
  }
}

export default App;
