import React, { useState, useRef } from 'react'
import { MapContainer } from './MapElements'
import ReactMapGL, { Marker, FlyToInterpolator } from "react-map-gl";

const REACT_APP_MAPBOX_TOKEN = 'pk.eyJ1IjoiZW5yaXF1ZW9wY2wiLCJhIjoiY2t0MnBtMzJjMG1wbzJ6czJ1ZTVrdm00YSJ9.Z7iBF0UFAyh3c-UTwbKhnw';

const MapApp = () => {
    const [viewport, setViewport] = useState ({
        latitude: 41.392100,
        longitude: 2.033520,
        width: 400,
        height: 600,
        zoom: 12
    });

    const mapRed = useRef();

    return (
        <MapContainer>
            <ReactMapGL 
                {...viewport}
                maxZomm={20}
                mapboxApiAccessToken={REACT_APP_MAPBOX_TOKEN}
            >
                <Marker
                    latitude={41.392100}
                    longitude={2.033520}
                 >
                    <h1>OPCL</h1>

                </Marker>
            </ReactMapGL>
        </MapContainer>
    )
}

export default MapApp
