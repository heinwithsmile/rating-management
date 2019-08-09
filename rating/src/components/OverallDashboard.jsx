import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';

class OverallDashboard extends Component {
    constructor(props) {
        super(props);
        this.state={
            townshipname:[]
        }
    }
    getTownship(){
        fetch(`http://localhost:5001/api/department/finddepartments`)
        .then(response=>response.json())
        .then(data=>{
            var townships = [];
            data.map(township=>(
                townships.push(township.name_mm)
            ))
            // console.log(townships)
            this.setState({
                townshipname : townships
            })
        })
       
    }
    componentWillMount(){
        this.getTownship();
    }
    render() {
        const { data } = this.props;
        var chartData = {
            labels: this.state.townshipname,
            datasets: [
                {
                    label: 'Customer Satisfaction Survey',
                    data: data,
                    backgroundColor:  ['rgb(255,99,132)','rgb(71, 34, 174)','rgb(6, 190, 86)','rgb(176, 200, 21)','rgb(255,99,132)','rgb(71, 34, 174)','rgb(6, 190, 86)','rgb(176, 200, 21)','rgb(255,99,132)','rgb(71, 34, 174)','rgb(6, 190, 86)','rgb(176, 200, 21)','rgb(255,99,132)','rgb(71, 34, 174)','rgb(6, 190, 86)','rgb(176, 200, 21)','rgb(255,99,132)','rgb(71, 34, 174)','rgb(6, 190, 86)','rgb(176, 200, 21)'],
                },
            ],

        }

        return (
            <div className="Chart">
              <h1 className="text-center mt-3 mb-3">Customer Satisfaction Survey of Overall Departments</h1>
                <Bar
                    data={chartData}
                    options={{}}
                />
            </div>
        );
    }
}
export default OverallDashboard;