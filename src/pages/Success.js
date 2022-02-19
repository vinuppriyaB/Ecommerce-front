import React from 'react';
import styled from  "styled-components";


const Container=styled.div`
height: 100vh;
width: 100vw;
display: flex;
justify-content: center;
align-items: center;
font-size: 25px;

`

const Success = () => {
    return (
        <Container>
            <div>Paid
            </div>
            <div>Successfully</div>
        </Container>
    )
}

export default Success
