import React from "react";
import { Container, Button, ButtonGroup } from "reactstrap";

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
          Mark Exams
        </Button>
      </ButtonGroup>{" "}
    </Container>
  );
};

export default InstructorDashboard;
