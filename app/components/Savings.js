import React from 'react'
import App from './App'

export default class Savings extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
          user: {name: 'Loading..'}
        }
    }

    componentDidMount() {
      fetch('http://localhost:9000/api/mc')
          .then(res => res.json())
          // .then(res => console.log(res))
          .then(res => this.setState({ user: res.user }))
    }

    render() {

      const user = this.state.user
      return <div>
          <span>You are in savings!</span>  
          <p>Saving {user.saving}</p>
          <p>Spending {user.spending}</p>         
      </div>
    }

}