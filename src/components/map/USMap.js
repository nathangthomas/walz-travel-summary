import React from "react";
import styled from "styled-components";
import '../../styles/variables.css'
import {
  ComposableMap,
  Geographies,
  Geography,
} from "react-simple-maps";

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

const visited = ["Colorado", "Utah"]

const USMap = () => {
  return (
    <MapWrapper>
        <ComposableMap projection="geoAlbers">
        <Geographies geography={geoUrl}>
            {({ geographies }) => (
            <>
                {geographies.map(geo => (
                    visited.includes(geo.properties.name) ?
                        <Geography
                            key={geo.rsmKey}
                            stroke= 'var(--background-color)'
                            strokeWidth="2"
                            geography={geo}
                            fill="var(--visited-fill"
                            style={{
                                default: { outline: "none" },
                                hover: { outline: "none" },
                                pressed: { outline: "none" },
                              }}
                        />
                    :
                        <Geography
                            key={geo.rsmKey}
                            stroke= 'var(--background-color)'
                            strokeWidth="2"
                            geography={geo}
                            fill="var(--not-visited-fill"
                            style={{
                                default: { outline: "none" },
                                hover: { outline: "none" },
                                pressed: { outline: "none" },
                              }}
                        />
                ))}
            </>
            )}
        </Geographies>
        </ComposableMap>
    </MapWrapper>
  );
};

export default USMap;

const MapWrapper = styled.div`
width: 90%;
padding: 0px 0px 0px 0px;
position: relative;
display: inline-block;
margin: 0 auto;
`
