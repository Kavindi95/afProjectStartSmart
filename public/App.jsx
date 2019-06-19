import React, { Component } from "react";

import { Container } from "reactstrap";

import Page from "./components/Dashboard/Page";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isEmptyState: true };
    this.state = {
      message: ""
    };
  }

  componentDidMount() {
    fetch("/api/messages", { method: "GET" })
      .then(res => res.json())
      .then(jsonRes => {
        this.setState({ message: jsonRes.message });
      })
      .catch(err => {
        this.setState({ message: "An error occurred" });
      });
  }

  render() {
    return (
      <div>
        <Container>
          <Page />
          <br />

          <br />
        </Container>
      </div>
    );
  }
}
