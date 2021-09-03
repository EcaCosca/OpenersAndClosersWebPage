import React, { useState, useRef } from 'react'
import { MapContainer, LogoMarker, TextContainer, ConctactH2 } from './MapElements'
import ReactMapGL, { Marker, FlyToInterpolator } from "react-map-gl";
import Logo from '../../images/Logo_OC_Cuca.png'

const REACT_APP_MAPBOX_TOKEN = 'pk.eyJ1IjoiZW5yaXF1ZW9wY2wiLCJhIjoiY2t0MnBtMzJjMG1wbzJ6czJ1ZTVrdm00YSJ9.Z7iBF0UFAyh3c-UTwbKhnw';

const MapApp = () => {
    const [viewport, setViewport] = useState ({
        latitude: 41.392100,
        longitude: 2.033520,
        width: 600,
        height: 600,
        zoom: 14,
    });

    const mapRed = useRef();

    return (
        <MapContainer>
            <TextContainer>
                <ConctactH2>
                    Openers & Closers
                </ConctactH2>
                <ConctactH2>
                    Horario oficina
                </ConctactH2>
            </TextContainer>
            <ReactMapGL 
                {...viewport}
                maxZomm={20}
                onViewportChange={setViewport}
                mapboxApiAccessToken={REACT_APP_MAPBOX_TOKEN}
            >
                <Marker
                    latitude={41.392100}
                    longitude={2.033520}
                 >
                    <LogoMarker src={Logo} alt="OPCL" />
                </Marker>
            </ReactMapGL>
        </MapContainer>
    )
}

export default MapApp
