import React from "react";
import { Container, Row, Col } from "shards-react";

import PageTitle from "../components/common/PageTitle";
import UserDetails from "../components/user-profile-lite/UserDetails";
import UserAccountDetails from "../components/user-profile-lite/UserAccountDetails";

const UserProfileLite = () => (
  <Container fluid className="main-content-container px-4 py-4 ">
    <Row>
      <PageTitle>setting</PageTitle>
    </Row>
    <Row>
      <Col lg="8">
        <UserDetails />
      </Col>
      <Col lg="4">
        <UserAccountDetails />
      </Col>
    </Row>
  </Container>
);

export default UserProfileLite;
