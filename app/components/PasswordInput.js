import React from 'react'
import passwordMeter from '../../lib/passwordMeter'
import './PasswordInput.scss'

export default class PasswordInput extends React.Component {

  constructor(props) {
    super(props)
    this.onTextAreaChange = this.onTextAreaChange.bind(this)
    this.getMonth = this.getMonth.bind(this)
    this.addInfo = this.addInfo.bind(this)
    this.state = {
      user: 'djksjdslk',
      content: '',
      month: 'January'
    }
  }

  onTextAreaChange(event){
    this.setState({
      content: event.target.value
    })
    console.log(this.state.content)
  }

  getMonth(e) {
    this.setState({month: e.target.value})
  }

  componentDidMount(){
    console.log('its working')
  }


  addInfo(event){
    let url = 'http://localhost:9000/api/mc/update'
    let data = {
      currentbalance: this.refs.currentbalance.value,
      income: this.refs.income.value,
      closingbalance: this.refs.closingbalance.value,
      month: this.state.month
    }
    
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
    return (<div className="main">
      <form ref="incomeForm" onSubmit={this.addInfo}>
        <select name="months" onChange={this.getMonth}>
          <option value="January">January</option>
          <option value="February">February</option>
          <option value="March">March</option>
          <option value="April">April</option>
          <option value="May">May</option>
          <option value="June">June</option>
          <option value="July">July</option>
          <option value="August">August</option>
          <option value="September">September</option>
          <option value="October">October</option>
          <option value="November">November</option>
          <option value="December">Decemeber</option>
        </select> <br />
        <input type="text" ref="currentbalance" placeholder="opening balance"/><br />
        <input type="text" ref="income" placeholder="income" /><br />
        <input type="number" ref="closingbalance" placeholder="closing balance" /><br />
        <button>Calculate</button>
      </form>
    </div>)
  }
}

