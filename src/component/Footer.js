import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from '@material-ui/icons';
import React from 'react';
import styled from  "styled-components";
import {mobile} from "../responsive";


const Container=styled.div`
display: flex;
${mobile({flexDirection:"column"})}

    
`
const Left=styled.div`
flex:1;
display: flex;
flex-direction: column;
padding:20px;

    
`
const Logo=styled.h1`

    
`
const Desc=styled.p`
margin:20px 0px;
    
`
const SocialContainer=styled.div`
display: flex;
    
`
const SocialIcon=styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
color:white;
background-color:#${props=>props.color}; ;
display: flex;
align-items: center;
justify-content: center;
margin-right: 20px;

    
`
const Center=styled.div`
flex:1;
padding:20px;
${mobile({display:"none"})}
    
`

const Title= styled.div`
margin-bottom: 30px;
`
const List= styled.ul`
margin:0px;
padding:0;
list-style: none;
display: flex;
flex-wrap:Wrap;


`
const ListItem= styled.li`

width: 50%;
margin-bottom: 10px;


`
const Right=styled.div`
flex:1;
padding:20px; 
${mobile({backgrroundColor:"#fff8f8"})} 
`
const ContactItem= styled.div`
margin-bottom: 20px;
display:flex;
align-items: center;

`



const Footer = () => {
    return (
        <Container>
        <Left>
        <Logo>PRETTY</Logo>
        <Desc>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </Desc>
        <SocialContainer>
        <SocialIcon color="3B5999">
        <Facebook />
        </SocialIcon>
        <SocialIcon color="E4405F">
        <Instagram />
        </SocialIcon>
        <SocialIcon color="55ACEE">
        <Twitter/>
        </SocialIcon>
        <SocialIcon color="E60023">
        <Pinterest/>
        </SocialIcon>
        </SocialContainer>
        </Left>
        <Center>
        <Title>Usefull Link</Title>
        <List>
        <ListItem>Home</ListItem>
        <ListItem>Cart</ListItem>
        <ListItem>Man Fashion</ListItem>
        <ListItem>Woman Fashion</ListItem>
        <ListItem>Accessories</ListItem>
        <ListItem>My Account</ListItem>
        <ListItem>Order Tracking</ListItem>
        <ListItem>Wishlist</ListItem>
        <ListItem>Terms</ListItem>
        </List>
        </Center>
        <Right>
        <Title>Contact</Title>
        <ContactItem>
        <Room style={{marginRight:"10px"}} />
        6/34 wabjkd,jhbckjfc 677865
        </ContactItem>
        <ContactItem>
        <Phone style={{marginRight:"10px"}}/>
        +91 78788 834343
        </ContactItem>
        <ContactItem>
        <MailOutline style={{marginRight:"10px"}}/>
            mail2us@pretty.in
        </ContactItem>

        </Right>
            
        </Container>
    )
}

export default Footer
