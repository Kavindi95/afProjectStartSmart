import React, { Component } from 'react';
import FileUpload from './fileUpload';
import axios from 'axios';

class ViewAssignmentAndUpload extends Component{

    constructor(){
        super();
    }

    render() {
        return(
            <div className="container mt-4">
            <h1>Assignment</h1>
                <ol>
                    <li>Question 01</li>
                    <li>Question 02</li>
                    <li>Question 03</li>
                </ol>
            <h4 className="display-4 text-center mb-4">
            <i className="fab fa-react"></i>Upload
            </h4>
            <FileUpload />
            </div>
        )
    }
}
export default ViewAssignmentAndUpload;