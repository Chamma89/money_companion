var _ = require('underscore')
import React from 'react'
import passwordMeter from '../../lib/passwordMeter'
import './PasswordInput.scss'

export default class PasswordInput extends React.Component {

  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this);
    this.state = { 
      password: '' 
    }
  }

  handleChange(e) {
    this.setState({ password: e.target.value })
  }

  render() {
    var test = [1,2,3,4]
    return <div>
      <span>{_.sample(test)}</span>
    </div>
  }

}
