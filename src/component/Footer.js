import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile, tablet, tab } from "../responsive";

const Container = styled.div`
  display: flex;
  ${tablet({ flexDirection: "column" })}
  background-color: darkslategray;
  color: white;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
  ${tab({ display: "none" })}
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  ${tab({ flexDirection: "column" })}
`;
const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="E60023">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>

      <Right>
        <ContactItem>
          <>Contact:</>
        </ContactItem>

        <ContactItem>
          <Room style={{ marginRight: "10px" }} />
          6/34 wabjkd,jhbckjfc 677865
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} />
          +91 78788 834343
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: "10px" }} />
          mail2us@pretty.in
        </ContactItem>
      </Right>
    </Container>
  );
};

export default Footer;
