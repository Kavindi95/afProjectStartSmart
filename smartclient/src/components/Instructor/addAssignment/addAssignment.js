import React, { Component } from 'react';
import { Container, Button, ButtonGroup } from "reactstrap";
import axios from "axios";

class AddAssignment extends Component{
    
    addassignmentss(e){
        e.preventDefault();
     
  
        axios.get("http://localhost:5000/addassignment").then(response => {
    

      console.log(response.data);
    });
 
    }
    render(){
        return(
            <Container>
            <div>
            <h1>Generate Assignment</h1>
            </div>
            <div className="container">
                <form className="form">
                    <div className="form-group">
                    <label>Course Name</label>
                    <input
                        type="text"
                        name="coursename"
                        className="form-control"
                        />
                    </div>
                    <div className="form-group">
                    <label>Subject Name</label>
                    <input
                        type="text"
                        name="subjectname"
                        className="form-control"
                    />
                    </div>
                    <div className="form-group">
                    <label>Assignment Number</label>
                    <input
                        type="text"
                        name="assignmentnumber"
                        className="form-control"
                    />
                    </div>
                    <div className="form-group">
                    <label>Due Date</label>
                    <input
                        type="text"
                        name="duedate"
                        className="form-control"
                        />
                    </div>
                    <div className="form-group">
                    <button
              type="button"
              className="btn btn-warning btn-block"
              onClick={this.addassignmentss.bind(this)}
              
            >
              Generate Assignments
            </button>
                    </div>
                </form>
            </div>
            </Container>
        )
    }
}
export default AddAssignment;