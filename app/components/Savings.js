import React from 'react'
import App from './App'
import { Component } from 'react'
import { Bar } from 'react-chartjs-2';
import _ from 'lodash'
export default class Savings extends React.Component {

 

    constructor(props) {
      super(props)
      this.state = {
        charData:{
          labels:['January', 'February', 'March', 'April'],
          datasets:[{
            easing: ['linear'],
            label: 'Months',
            data: ['20000', '1100', '2000', '10000'],
            color: ['white'],
            backgroundColor:[
              'rgba(0, 191, 255, 0.6)',
              'rgba(255, 0, 64, 0.6)',
              'rgba(255, 153, 0, 0.6)',
              'rgba(48, 164, 46, 0.6)'
            ]
          }],

        },
        user: {name: 'Loading..'}
      }
    }

    componentDidMount() {
      fetch('http://localhost:9000/api/mc')
          .then(res => res.json())
          .then(res => {
            let charData = _.merge({}, this.state.charData)
            charData.datasets[0].data[0] = res.user.saving

            

            this.setState({ user: res.user, charData: charData })
          })
    }

    render() {

      const user = this.state.user
      console.log(user)
      return <div>
           
          <p>Saving {user.saving}</p>
          <p>Spending {user.spending}</p>
          {/* <p>Months</p> */}
        <Bar
          data={this.state.charData}
          options={{
            maintainAspectRatio: false
          }}
          />    
          {console.log(this.state.charData)}
      </div>
    }

}