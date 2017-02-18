import React from 'react';

import Navbar from './components/Navbar.jsx';

import Jumbotron from './components/Jumbotron.jsx';

import Homepage from './components/Homepage.jsx';

import Aboutpage from './components/Aboutpage.jsx';

import Footer from './components/Footer.jsx';

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      title: "ReactJs Component",
      menus: [
                {
                    title: "Home"
                },
                {
                    title: "About-Us"
                },
                {
                    title: "Contact Us"
                }
            ],
      copyRight: "Power by Lester."  
    }
  }
    render(){
        return(
          <div>
            <Navbar title= {this.state.title} menus = {this.state.menus}></Navbar>

            <Jumbotron></Jumbotron>

            <Homepage></Homepage>

            <Aboutpage></Aboutpage>

            <Footer copyRight = {this.state.copyRight}></Footer>
          </div>
        );
    }
}

export default App;