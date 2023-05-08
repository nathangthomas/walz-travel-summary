import React, {useState, useEffect} from 'react'
import { ComposableMap, Geographies, Geography, Annotation, ZoomableGroup, Sphere, Graticule } from "react-simple-maps";
import { scaleLinear } from "d3-scale";

const geoUrl = "https://raw.githubusercontent.com/lotusms/world-map-data/main/world.json";

const colorScale = scaleLinear().domain([0,6300000]).range(["#a72bb5", "#0376db"])

const  Map = () =>  {

  const [ countries, setCountries ] = useState([])
  const [ continent, setContinents ] = useState([])
  const [ position, setPosition ] = useState({coordinates: [0,0], zoom: 1})

  const handleMoveEnd = (position) => {
    setPosition(position)
  }

  const getData = () => {
    fetch('http://localhost:3001/countries', {
      header:{
        'Content-Type': 'application/json', 
        'Accept': 'application/json'
      }
    })
    .then((res) => res.json()) 
    .then((data) => {setCountries(data)})
  }

  const getContData = () => {
    fetch('http://localhost:3001/continent', {
      header:{
        'Content-Type': 'application/json', 
        'Accept': 'application/json'
      }
    })
    .then((res) => res.json()) 
    .then((data) => {setContinents(data)})
  }

  useEffect(() => {
    getData()
    getContData()
  }, [])

  return (
    <div className="App">
      <div style={{width: "50vw", height: "50vh" }}>
        <ComposableMap
          width = {900}
          height = {400}
          pojectConfig={{
            rotate:[-10, 0, 0], 
            scale: 147, 
          }}>
            { countries.length > 0 
              ? 
                <ZoomableGroup
                  zoom = {position.zoom}
                  center = {position.coordinates}
                  onMoveEnd = {handleMoveEnd}
                >
                  <Sphere stroke="#000" strokeWidth={0.3}/>
                  <Graticule  stroke="#000" strokeWidth={0.3}/>
                  <Geographies geography = {geoUrl}>
                    {({geographies}) =>
                      geographies.map((geo, index) => {
                        const isos = countries.find((s) => s.ISO3 === geo.id)
                        return (
                          <>
                            <Geography
                              key={index}
                              geography={geo}
                              fill={isos ? colorScale(isos["population_density"]) : "#333"} 
                            />
                            <Annotation
                              subject={[-100.4173, 38.9071]}
                              dx={70}
                              dy={-40}
                              connectorProps={{
                                stroke:"#999",
                                strokeWidth: 1
                            }}>
                              <rect
                                width="65"
                                height="30"
                                style={{
                                  x:2,
                                  y: -17,
                                  fill: "rgb(0,0,0)",
                                  fillOpacity: 0.01,
                                  stroke: "rgb(0,0,0",
                                  strokeWidth: 1, 
                                  strokeOpacity: 0.03
                                  }} 
                              />
                              <text 
                                x="8"
                                textAnchor="start"
                                alignmentBaseline="middle"
                                style={{
                                  fontSize: 15, 
                                  fill: "#C1C0CB",
                                  fontFamily: 'barlow',
                                  fontWeight: 100, 
                                  backgroundColor: "#000",
                                  width: 200, 
                                  height: 40
                                }}>
                                  {continent[0].name}, {`${(continent[0].average)}%`}
                                </text>
                            </Annotation>
                          </>
                        )
                      })
                    }
                  </Geographies>
                </ZoomableGroup>
              :
                <p>Loading...</p>
            }
        </ComposableMap>
      </div>
    </div>
  );
};

export default Map;
