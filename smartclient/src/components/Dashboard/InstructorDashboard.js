import React, { Component } from "react";
import { Container, Button, ButtonGroup } from "reactstrap";
import Addassignmentdashboard from "../../components/Instructor/addAssignment/addAssignment";
import Addexamdashboard from "../../components/Instructor/addExam/addExam";
import Updateassignment from "../../components/Instructor/updateAssignment/updateAssignment";
import Updateexam from "../../components/Instructor/updateExam/updateExam";
import Markassignment from "../../components/Instructor/marksAssignment/markassignment";
import Markexam from "../../components/Instructor/markExam/markexam";

<<<<<<< HEAD
export default class InstructorDashboard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      visibleAA: false,
      visibleAE:false,
      visibleUA:false,
      visibleUE:false,
      visibleMA:false,
      visibleME:false
    };
   
  }

  

  render(){
    return(
      <Container>
      
        <Button size="md" color="warning" onClick={() => {
                this.setState({ visibleAA:!this.state.visibleAA });
              }}>
          Add Assignments
        </Button><br/>
        <Button size="md" color="warning" onClick={() => {
                this.setState({ visibleAE:!this.state.visibleAE });
              }}>
          Add Examinations
        </Button><br/>
      
      
        <Button size="md" color="warning" onClick={() => {
                this.setState({ visibleUA:!this.state.visibleUA });
              }}>
          Manage Assignments
        </Button>
        <br />
        <Button size="md" color="warning" onClick={() => {
                this.setState({ visibleUE:!this.state.visibleUE });
              }}>
          Manage Exams
        </Button>
        <br/>
      
        <Button size="md" color="warning" onClick={() => {
                this.setState({ visibleMA:!this.state.visibleMA });
              }}>
          Mark Assignments
        </Button>
        <br />
        <Button size="md" color="warning" onClick={() => {
                this.setState({ visibleME:!this.state.visibleME });
              }}>
=======
const InstructorDashboard = props => {
  return (
    <Container>
      <ButtonGroup>
        <Button size="md" color="info">
          Add Assignments
        </Button>{" "}
        <Button size="md" color="info">
          Add Examinations
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button size="md" color="info">
          Manage Assignments
        </Button>
        <br />
        <Button size="md" color="info">
          Manage Exams
        </Button>
      </ButtonGroup>{" "}
      <ButtonGroup>
        <Button size="md" color="info">
          Mark Assignments
        </Button>
        <br />
        <Button size="md" color="info">
>>>>>>> 9e6108eb600947832311667f8ff9215e7394b28f
          Mark Exams
        </Button>
        <br/>
      <div>
      {this.state.visibleAA ? (
              <Addassignmentdashboard />
            ) : (
              <div>  </div>
            )}
             {this.state.visibleAE ? (
              <Addexamdashboard />
            ) : (
              <div>  </div>
            )}
            {this.state.visibleUA ? (
              <Updateassignment />
            ) : (
              <div>  </div>
            )}
            {this.state.visibleUE ? (
              <Updateexam />
            ) : (
              <div>  </div>
            )}
            {this.state.visibleMA ? (
              <Markassignment />
            ) : (
              <div>  </div>
            )}
            {this.state.visibleME ? (
              <Markexam />
            ) : (
              <div>  </div>
            )}
      </div>
      <div>
      </div>
    </Container>  
    );
  }
}



