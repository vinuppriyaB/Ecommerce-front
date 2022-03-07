import React, { useState } from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { login } from "../redux/apiCalls";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: lightcyan;
  /* background:linear-gradient(
    rgba(225,255,255,.5),
    rgba(255,255,255,.5)
    ),
     url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHHzQgW8GVD4ZbithB0jActCLyhMHQ2-ZReIlx75bfy4wO_feueS6Dlo9ZbJ9SvnOFJYI&usqp=CAU") ;
     background-size:cover;
     */
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const Input = styled.input`
  height: 40px;
  max-width: 90%;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 3px 5px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin: 20px 10px 0px 0px;
`;
const Link = styled.a`
  margin: 20px 10px 0px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;
const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleLoginClick = (e) => {
    e.preventDefault();
    login(dispatch, { email, password });
  };

  return (
    <Container>
      <Wrapper>
        <Title> SIGN IN </Title>
        <Form>
          <Input
            placeholder="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <Input
            type="password"
            placeholder="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />

          <Button onClick={(e) => handleLoginClick(e)}>LOGIN</Button>
          <Link>DO NOT REMEMBER THE PASSWORD?</Link>
          <Link onClick={() => history.push("/register")}>
            CREATE A NEW ACCOUNT
          </Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
