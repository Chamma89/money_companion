import React from 'react'
import App from './App'
import { Component } from 'react'
import { Bar } from 'react-chartjs-2';
import 'chartjs-plugin-datalabels';
import _ from 'lodash'
export default class Savings extends React.Component {

 

    constructor(props) {
      super(props)
      this.state = {
        charData:{
          plugins: {
            datalabels: {
              display: false,
              backgroundColor: 'white'
            }
          },
          labels:['January', 'February', 'March', 'April'],
          datasets:[{          
            label: 'Month',
            strokeColor: "rgba(220,220,220,1)",
            data: ['20000', '12011', '10000', '9000'],
            hoverBackgroundColor: ['rgb(0, 191, 255)', 'rgb(255, 0, 0)', 'rgb(255, 153, 0)', 'rgb(48, 164, 46)'],
            backgroundColor:[
              'rgba(0, 0, 255, 0.3)',
              'rgba(255, 0, 64, 0.5)',
              'rgba(255, 153, 0, 0.5)',
              'rgba(48, 164, 46, 0.5)'
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
            console.log(res.user)



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
            scales: {
              yAxes: [
                {
                  ticks: {
                    fontWeight: 600,
                    beginAtZero: true,
                    fontColor: 'white',
                    callback: function (label, index, labels) {
                      return '$ ' + label;
                    }
                  }
                }
              ],
              xAxes:[{
                ticks:{fontColor: 'white', fontWeight: 800}
              }],
            },
            maintainAspectRatio: true
          }}
          />    
          {console.log(this.state.charData)}
      </div>
    }

}

