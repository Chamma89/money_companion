import Header from './Header'
import Main from './Main'
import React from 'react'
import PasswordInput from './PasswordInput'
import { Link } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import logo from './Photos/mcLogo.png'


export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      user: {name: 'Loading...'}
    }
  } 

  componentDidMount() {
    fetch('http://localhost:9000/api/mc')
      .then(res => res.json())
      // .then(res => console.log(res))
      .then(res => this.setState({ user: res.user}))
  }


  render() {
    
    const user = this.state.user
    
    return (<div>
      <img src={logo} />
      <Header className="header"/>
      <Main />
      <p className="footer">&copy; 2018 Fouad Chamma. All rights reserved. Money Companion developer.</p>
    </div>)
  }
}


