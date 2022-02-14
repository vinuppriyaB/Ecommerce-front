import React from 'react'
import styled from  "styled-components";
import {mobile} from "../responsive";


const Container=styled.div`
width:100vw;
height: 100vh;
background-color:lightcyan;
/* background:linear-gradient(
    rgba(225,255,255,.5),
    rgba(255,255,255,.5)
    ),
     url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHHzQgW8GVD4ZbithB0jActCLyhMHQ2-ZReIlx75bfy4wO_feueS6Dlo9ZbJ9SvnOFJYI&usqp=CAU") ;
     */
  display:flex;
  align-items: center;
  justify-content: center;
`
const Wrapper=styled.div`
width:30%;
padding:20px;
background-color: white;
${mobile({width:"75%"})}

    
`
const Title=styled.h1`
font-size: 24px;
font-weight: 300;
    
`
const Form=styled.form`

    display: flex;
    flex-direction: column;

`
const Input=styled.input`

height:40px;
max-width: 90%;
min-width: 40%;
margin:20px 10px 0px 0px;
padding:3px 5px;
`
const Agreement=styled.span`
font-size: 12px;
margin:20px 0px;
    
`
const Button=styled.button`

    width:40%;
    border:none;
    padding:15px 20px;
    background-color: teal;
    color:white;
    cursor: pointer;
    `
const Register = () => {
    return (
        <Container>
        <Wrapper>
        <Title> CREATE AN ACCOUNT </Title>
        <Form>
        <Input placeholder="first name" />
        <Input placeholder="last name" />
        <Input placeholder="email" />
        <Input placeholder="password" />
        <Input placeholder="confirm password" />
        <Agreement>
        By creating an account, I consent to the processing of my personal
        data in accordance with the <b>PRIVACY POLICY</b>
        </Agreement>
        <Button>CREATE</Button>
        </Form>

        </Wrapper>

            
        </Container>
    )
}

export default Register


