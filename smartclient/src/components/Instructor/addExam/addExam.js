import React, { Component } from 'react';

class AddExam extends Component{

    render(){
        return(
            <div>
                <h1>Generate Exam</h1>
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
            <div className="form-group>
            <label>Subject Name</label>
        <input
        type="text"
        name="subjectname"
        className="form-control"
            />
            </div>
            <div className="form-group">
            <label>Exam Type</label>
        <input
        type="text"
        name="examType"
        className="form-control"
            />
            </div>
            <div className="form-group">
            <label>Due Date</label>
            <input
                type="text"
                name="dueDate"
                className="form-control"
            />
            </div>
            <div className="form-group">
            <label>Description</label>
        <input
        type="text"
        name="description"
        className="form-control"
            />
            </div>
            <div className="form-group">
            <input
        type="submit"
        name="submitAssignment"
        value="Submit"
            />
            </div>
            </form>
            </div>
    )
    }
}
export default AddExam;