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
              <th>No</th>
              <th>Department</th>
              <th>Rating</th>
              <th>Timestamp</th>
            </tr>
          </thead>
          <tbody >
            <tr>
              <td>1</td>
              <td>Admin Department</td>
              <td>Satisfied</td>
              <td>18.8.2019</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Investment Section 1</td>
              <td>Satisfied</td>
              <td>18.8.2019</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Investment Section 2</td>
              <td>Satisfied</td>
              <td>18.8.2019</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Policy and Legal Division</td>
              <td>Satisfied</td>
              <td>18.8.2019</td>
            </tr>
            <tr>
              <td>5</td>
              <td>Company Registration</td>
              <td>Satisfied</td>
              <td>18.8.2019</td>
            </tr>
          </tbody>
        </Table>
        <div>
          <a href="#">
            <button className="btn btn-success" onClick={this.saveTable}>
              Generate Report
            </button>
          </a>
        </div>
      </div>
    );
  }
}

export default ProgressTable;
