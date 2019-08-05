import React, { Component } from 'react';
import {Pie} from 'react-chartjs-2';
class PieCo extends Component {
    // state = {  }
    render() { 
        var chartData = {
            labels: ['Very Unsatisfied','Unsatisfied','Netural','Satisfied','Very Satisfied'],
            datasets: [
                {
                    label: 'Customer Satisfaction Survey',
                    data: ['111','222','333','444','555'],
                    backgroundColor: ['rgb(255,99,132)','rgb(71, 34, 174)','rgb(6, 190, 86)','rgb(176, 200, 21)','rgb(33, 213, 207)'],
                },
            ],

        }

        return (
            <div className="Chart">
                <Pie
                    data={chartData}
                    options={{}}
                />
            </div>
         );
    }
}
 
export default PieCo;