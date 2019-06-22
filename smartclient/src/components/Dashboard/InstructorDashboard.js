import React, { Component } from "react";
import { Container, Button, ButtonGroup } from "reactstrap";
import Addassignmentdashboard from "../../components/Instructor/addAssignment/addAssignment"

export default class InstructorDashboard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      visibleAA: false,
    };
   
  }

  

  render(){
    return(
      <Container>
      <ButtonGroup>
        <Button size="md" color="warning" onClick={() => {
                this.setState({ visibleAA:!this.state.visibleAA });
              }}>
          Add Assignments
        </Button>{" "}
        <Button size="md" color="warning">
          Add Examinations
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button size="md" color="warning">
          Manage Assignments
        </Button>
        <br />
        <Button size="md" color="warning">
          Manage Exams
        </Button>
      </ButtonGroup>{" "}
      <ButtonGroup>
        <Button size="md" color="warning">
          Mark Assignments
        </Button>
        <br />
        <Button size="md" color="warning">
          Mark Exams
        </Button>
      </ButtonGroup>{" "}
      <div>
      {this.state.visibleAA ? (
              <Addassignmentdashboard />
            ) : (
              <div> Launch to View Student Activities </div>
            )}
      </div>
      <div>
      </div>
    </Container>  
    );
  }
}



