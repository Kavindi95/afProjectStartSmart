import React, { Component } from 'react';

class markAssignment extends Component{

    entermarks(e){

        e.preventDefault();
        console.log(this.refs.cname.value);
        console.log(this.refs.subname.value);
        console.log(this.refs.std.value);
        console.log(this.refs.assnum.value);
        console.log(this.refs.marks.value);

    }

    render(){
        return(
            <div>
            <div>
            <h1>Assign Marks</h1>
            </div>
            <div className="container">
            <form className="form">
            <div className="form-group">
            <label>Course Name</label>
        <input
        type="text"
        name="coursename"
        className="form-control" 
        ref="cname"
            />
            </div>
            <div className="form-group">
            <label>Subject Name</label>
        <input
        type="text"
        name="subjectname"
        className="form-control"
        ref="subname"
            />
            </div>
            <div className="form-group">
            <label>Student ID number</label>
        <input
        type="text"
        name="subjectname"
        className="form-control"
        ref="std"
            />
            </div>
            
            <div className="form-group">
            <label>Assignment Number</label>
        <input
        type="text"
        name="subjectname"
        className="form-control"
        ref="assnum"
            />
            </div>
            <div className="form-group">
            <label>Marks</label>
        <input
        type="text"
        name="subjectname"
        className="form-control"
        ref="marks"
            />
            </div>

            <div className="form-group">
            <button
                type="button"
                className="btn btn-warning btn-block"
                onClick={this.entermarks.bind(this)}
              >
                Enter Marks
              </button>
            </div>
            </form>
            </div>
            </div>
    )
    }
}
export default markAssignment;