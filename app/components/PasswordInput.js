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
      currentbalance: this.refs.currentbalance.value,
      income: this.refs.income.value,
      closingbalance: this.refs.closingbalance.value,
      month: this.refs.month.value




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
        <select name="months">
          <option ref="month" value="January">January</option>
          <option ref="month" value="February">February</option>
          <option ref="month" value="March">March</option>
          <option ref="month" value="April">April</option>
          <option ref="month" value="May">May</option>
          <option ref="month" value="June">June</option>
          <option ref="month" value="July">July</option>
          <option ref="month" value="August">August</option>
          <option ref="month" value="September">September</option>
          <option ref="month" value="October">October</option>
          <option ref="month" value="November">November</option>
          <option ref="month" value="December">Decemeber</option>
        </select> <br />
        <input type="text" ref="currentbalance" placeholder="opening balance"/><br />
        <input type="text" ref="income" placeholder="income" /><br />
        <input type="number" ref="closingbalance" placeholder="closing balance" /><br />
        <button onClick={this.addInfo.bind(this)}>Calculate</button>
      </form>

      
    </div>)
  }
}
