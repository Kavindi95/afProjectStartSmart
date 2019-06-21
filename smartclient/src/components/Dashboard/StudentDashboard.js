import React, {Component} from "react";
import { Container, Button, ButtonGroup, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { BrowserRouter as Router, Route, Link, Switch, Redirect, NavLink } from 'react-router-dom';

import ViewAssignmentAndUpload from "../../components/Student/viewAssignmentAndUpload/viewAssignmentAndUpload";
import ViewExamAndUpload from "../../components/Student/viewExamAndUpload/viewExamAndUpload";
import AddAdmin from "../AddToSystem/AddAdmin";

class StudentDashboard extends Component {

    constructor(){
        super();

    }
 render() {
     return (
         <Router>
            <div>
                <ul>
                    <li>
                        <NavLink to="/" exact activeStyle={
                                { color:"green" }
                        }>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/assignment"} exact activeStyle={
                            { color:"green" }
                     }>Assignments</NavLink>
                    </li>
                     <li>
                         <NavLink to={"/exam"} exact activeStyle={
                         { color:"green" }
                     }>Exams</NavLink>
                     </li>
                </ul>
                <Route path="/assignment" component={ViewAssignmentAndUpload} />
                <Route path="/exam" component={ViewExamAndUpload} />
            </div>
         </Router>
 );
 }
};

export default StudentDashboard;
