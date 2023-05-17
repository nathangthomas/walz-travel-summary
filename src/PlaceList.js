import React from "react";
import styled from "styled-components";
import './styles/placeList.css'

const PlaceList = () => {
  return (
    <PlaceListContainer>
    </PlaceListContainer>
  );
};

export default PlaceList;

const PlaceListContainer = styled.div`
width: 100%;
outline-style: solid;
outline-width: 20px;
outline-color: white;
height: 250px;
background-color: var(--not-visited-fill);
margin-top: -40px;
`