import Header from './Header'
import Main from './Main'
import React from 'react'
import PasswordInput from './PasswordInput'
import { Link } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'

export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      user: {name: 'getting user'}
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
      <h1 className="yo">Money Companion</h1>
      <Header />
      <Main />
      <p>{user.email}</p>
    </div>)
  }
}



// {user.keys(this.state.items).forEach(function(key){
//   <p>{key}</p>
// })}