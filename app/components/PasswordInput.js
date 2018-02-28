var _ = require('underscore')
import React from 'react'
import passwordMeter from '../../lib/passwordMeter'
import './PasswordInput.scss'

export default class PasswordInput extends React.Component {

  constructor(props) {
    super(props)
    this.onTextAreaChange = this.onTextAreaChange.bind(this)
    this.state = { 
      user: 'djksjdslk',
      content: '' 
    }
  }

  onTextAreaChange(event){
    this.setState({
      content: event.target.value
    })
    console.log(this.state.content)
  }

  componentDidMount(){
    console.log('its working')
  }

  // getInfo(){
  //   fetch('https://localhost:9000/api/mc', {
  //     method: 'POST',
  //     headers: {
  //       'Accept': 'application/json',
  //     'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       firstParam: 'yourValue',
  //       secondParam: 'yourOtherValue',
  //     })
  //   }).then(res => res.json())
  //     .then(res => this.setState({ user: res.user}))
  // }

  addInfo(event){
    let url = 'http://localhost:9000/api/mc/update'
    let data = {
      name: this.refs.name.value,
      email: this.refs.email.value,
      phone: this.refs.phone.value
    }

    // var request = new Request('http://localhost:9000/api/mc/update',{
    //   method: 'POST',
    //   headers: new Headers({ 'Content-Type': 'application/json'}),
    //   body: JSON.stringify(data)
    // })
  
    console.log('FETCH REQUEST COMING')
    
    fetch(url, {
      method: 'POST',
      headers: new Headers({ 'Content-Type': 'application/json' }),
      body: JSON.stringify(data)
    }).then(function(response){
      response.json().then(function(data){
        console.log(data)
        
      })
    })
  }

  render() {
    return (<div>
      <form ref="incomeForm">
      <label>Current Balance</label>
        <input type="text" ref="name" placeholder="name"/>
        <input type="text" ref="email" placeholder="email" />
        <input type="number" ref="phone" placeholder="phone" />
        <button onClick={this.addInfo.bind(this)}>add info</button>
      </form>



      <input 
      onChange={this.onTextAreaChange}></input>
      <label>Income</label>
      <input
        onChange={this.onTextAreaChange}></input>
      <label>Closing Balance</label>
      <input
        onChange={this.onTextAreaChange}></input>
    </div>)
  }

}

