import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
const Container = styled.div`
  height: 100px;
  background-color: darkslategray;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: 500;
`;

const Announcement = () => {
  return <Container>Super Deal ! Shop Now</Container>;
};

export default Announcement;
