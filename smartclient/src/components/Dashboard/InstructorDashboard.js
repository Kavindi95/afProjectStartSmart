import React from "react";
import { Container, Button, ButtonGroup } from "reactstrap";

const InstructorDashboard = props => {
  return (
    <Container>
      <ButtonGroup>
        <Button size="md" color="warning">
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
    </Container>
  );
};

export default InstructorDashboard;
