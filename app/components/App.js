import React from 'react'
import PasswordInput from './PasswordInput'

export default class App extends React.Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
      fetch('http://localhost:5000/api/peeps', {
        method: 'POST',
        body: JSON.stringify({ content: this.state.content }),
        headers: {
          'content-type': 'application/json'
        }
      })
  }

  render() {
    return <div>
      <h1>Money Companion</h1>
      <PasswordInput />
    </div>
  }

}
