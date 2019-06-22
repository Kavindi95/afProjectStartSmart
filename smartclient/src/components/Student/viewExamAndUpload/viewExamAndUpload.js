import React, { Component } from 'react';
import ExamFileUpload from './examFileUpload';
import axios from 'axios';

class ViewExamAndUpload extends Component{

    constructor(){
        super();
        this.state = {
            exam: []
        }
    }

    componentDidMount(){
        //e.preventDefault();
        axios.get('http://localhost:5000/addassignment').then(response => {
            //console.log(response.data.assignment);
            this.setState({
                exam: response.data.assignment
            })
        })
    }

    render() {
        let exam = this.state.exam.map((exam) => {
            return(
                <tr class="table-primary" key={exam.id}>
                <td>{exam.cname}</td>
                <td>{exam.subname}</td>
                <td>{exam.assignment}</td>
                <td>{exam.date}</td>
                </tr>
        )
        });
        return (
            <div className="container">
            <h2> Available Exams</h2>
            <table className="table table-hover">
            <thead>
            <tr className="table-secondary">
            <th scope="col">Course Name</th>
            <th scope="col">Subject Name</th>
            <th scope="col">Available Assignment</th>
            <th scope="col">Due Date</th>
            </tr>
        </thead>
        <tbody>
        {exam}
        </tbody>
        </table>
        <div className="container mt-4">
            <h2 className="display-4 text-center mb-4">
            Upload Exam Answers
            </h2>
            <ExamFileUpload />
            </div>
            </div>
    );
    }
}
export default ViewExamAndUpload;