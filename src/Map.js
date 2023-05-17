import React from "react";
import styled from 'styled-components'
import './styles/map.css'
import Banner from "./Banner";
import Form from "./Form";
import USMap from "./USMap";
import PlaceList from "./PlaceList";

const MapBackground = styled.div`
    background-color: var(--background-color);
    height: 100%;
    width: 100%;
    outline-style: solid;
    outline-width: 20px;
    outline-color: white;
    text-align: center;
`

const Map = () => {
  return (
    <Form></Form>
        
            // <MapBackground>
            //     <Banner/>
            //     <USMap/>
            //     <PlaceList/>
            // </MapBackground>
  );
};

export default Map;
