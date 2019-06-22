import React, { Component } from 'react';

class AddAssignment extends Component{

    render(){
        return(
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
export default AddAssignment;