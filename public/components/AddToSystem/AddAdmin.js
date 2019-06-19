import React from "react";
import {
  Container,
  Col,
  Row,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText
} from "reactstrap";

export default class AddAdmin extends React.Component {
  render() {
    return (
      <Container>
        <Form>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input
                  type="email"
                  name="email"
                  id="exampleEmail"
                  placeholder="Enter Email"
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="examplePassword">Password</Label>
                <Input
                  type="password"
                  name="password"
                  id="examplePassword"
                  placeholder="Enter a Password"
                />
              </FormGroup>
            </Col>
          </Row>
          <FormGroup>
            <Label for="exampleAddress"> Name</Label>
            <Input type="text" name="Name" id="Name" placeholder="Enter Name" />
          </FormGroup>
          <FormGroup>
            <Label for="exampleAddress2">Prefered User Name</Label>
            <Input
              type="text"
              name="userName"
              id="userName"
              placeholder="Enter a Prefered User Name"
            />
          </FormGroup>

          <Button color="success">ADD</Button>
        </Form>
      </Container>
    );
  }
}
