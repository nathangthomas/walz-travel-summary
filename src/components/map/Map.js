import React from "react";
import styled from 'styled-components'
import '../../styles/map/map.css'
import Banner from "./Banner";
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
      <MapBackground>
          <Banner/>
          <USMap/>
          <PlaceList/>
      </MapBackground>
  );
};

export default Map;
