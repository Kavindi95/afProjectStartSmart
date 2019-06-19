import React from "react";
import { Container, Button, ButtonGroup } from "reactstrap";

const StudentDashboard = props => {
  return (
    <Container>
      <ButtonGroup>
        <Button size="md" color="warning">
          View Course Details
        </Button>
        <Button size="md" color="warning">
          Join to Courses
        </Button>{" "}
      </ButtonGroup>
      <ButtonGroup>
        <Button size="md" color="warning">
          Upload Assignments
        </Button>
        <br />
        <Button size="md" color="warning">
          Upload Exams
        </Button>
      </ButtonGroup>{" "}
    </Container>
  );
};

export default StudentDashboard;
