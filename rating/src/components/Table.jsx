import React, { Component } from "react";
import jsPDF from "jspdf";
import "jspdf-autotable";
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.css";
class ProgressTable extends Component {
  //   state = {};
  saveTable() {
    const doc = new jsPDF();
    doc.autoTable({ html: "#mytable" });
    doc.save("file.pdf");
  }
  render() {
    return (
      <div className="mt-5">
        <Table striped bordered hover id="mytable" size="sm">
          <thead className="">
            <tr>
              <th>Rating Level</th>
              <th>Count Person</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Very Poor</td>
              <td>15</td>
            </tr>
            <tr>
              <td>Poor</td>
              <td>15</td>
            </tr>
            <tr>
              <td>Average</td>
              <td>20</td>
            </tr>
            <tr>
              <td>Good</td>
              <td>50</td>
            </tr>
            <tr>
              <td>Excellent</td>
              <td>100</td>
            </tr>
          </tbody>
        </Table>
        <div>
          <p>The average progress rating : </p>
        </div>
        <div>
          <a href="#">
            <button className="btn btn-primary mb-5" onClick={this.saveTable}>
              Generate Report
            </button>
          </a>
        </div>
      </div>
    );
  }
}

export default ProgressTable;
