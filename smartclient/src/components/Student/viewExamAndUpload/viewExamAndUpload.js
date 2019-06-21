import React, { Component } from 'react';
//import axios from 'axios';

class ViewExamAndUpload extends Component{

    constructor(){
        super();
    }

    render() {
        return(
            <div className="container">
            <h1>Exam</h1>
            <ol>
                <li>Question 01</li>
                <li>Question 02</li>
                <li>Question 03</li>
            </ol>
        </div>
    )
    }
}
export default ViewExamAndUpload;