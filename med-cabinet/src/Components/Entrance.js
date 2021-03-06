import React from 'react';
import FormikSignIn from "./SignIn";
import FormikSignUp from "./SignUp";
import styled from "styled-components";
import '../Entrance.css'
import { Image } from "semantic-ui-react";
import { Route, BrowserRouter } from 'react-router-dom';




const EntraDiv = styled.div`
display: flex;
height: 20em;
width: 80%;
`;

const EntranDiv = styled.div`
display: flex;
flex-direction: column;
margin: auto;
align-items:center;
justify-content: space-evenly;
max-width: 1000px;
height: 100vh;
border-radius: 12px;

`;


function Entrance(props) {

  function pushIt(){
  
    props.history.push('/profile')
  }

  return (
    <EntranDiv className="trial">     
      <Image className="logo" src='/Logo.png' alt="Med Cab Logo" />
    <EntraDiv>
      <FormikSignUp {...props} />
      <FormikSignIn {...props} />
    </EntraDiv>
    </EntranDiv>
  );
}

export default Entrance;
