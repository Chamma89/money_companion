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
            
            datalabels: {
              align: 'end',
              anchor: 'end',
              color: ['rgb(77, 137, 85)', 'rgb(77, 137, 85)', 'rgb(77, 137, 85)', 'rgb(77, 137, 85)']
            },          
            label: 'Month',
            strokeColor: "rgba(220,220,220,1)",
            data: ['20000', '-12000', '0', '0'],
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
      let herokuDomain = 'https://money-companion.herokuapp.com'
      let localDomain = 'http://localhost:9000'
      fetch(`${herokuDomain}/api/mc`)
          .then(res => res.json())
          .then(res => {
            let charData = _.merge({}, this.state.charData)
            charData.datasets[0].data[0] = res.user[0].saving
            charData.datasets[0].data[1] = res.user[1].saving
            charData.datasets[0].data[2] = res.user[2].saving
            charData.datasets[0].data[3] = res.user[3].saving
            console.log(res)
            this.setState({ user: res.user, charData: charData })
          })
    }

    render() {

      const user = this.state.user
      console.log(user)
      return <div className="chart">
           
          
        <Bar
          data={this.state.charData}
          options={{
            scales: {
              yAxes: [
                
                {
                  gridLines: {
                    display: true,
                    color: "rgba(255, 255, 255, 0.3)"
                  },
                  ticks: {
                    fontWeight: 600,
                    beginAtZero: true,
                    fontColor: 'white',
                    callback: function (label, index, labels) {
                      return '$ ' +label;
                    }
                  }
                }
              ],
              xAxes:[{
                gridLines: {
                  display: true,
                  color: "rgba(255, 255, 255, 0.3)"
                },
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

