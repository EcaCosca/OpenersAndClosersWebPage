import React, { useState, useRef } from 'react'
import { MapContainer, LogoMarker, TextContainer, ConctactH2, ConctactP } from './MapElements'
import ReactMapGL, { Marker, FlyToInterpolator } from "react-map-gl";
import Logo from '../../images/Logo_OC_Cuca.png'
import { AiOutlineClockCircle, AiOutlineHome } from 'react-icons/ai'

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
                    <AiOutlineHome /> Openers & Closers
                </ConctactH2>
                <ConctactP>
                    Calle Agricultura 17, (Nave 12) <br />
                    08980 Sant Feliu de Llobregat, Barcelona<br />
                    <br />
                    <b>Tel.</b> +34 93 408 05 15<br />
                    <b>Fax.</b> +34 93 408 40 38<br />
                </ConctactP>
                <ConctactH2>
                    <AiOutlineClockCircle /> Horario oficina
                </ConctactH2>
                <ConctactP>
                    <b>Lunes a Jueves</b><br />
                    8:00h a 17:30h<br />
                    <br />
                    <b>Viernes</b><br />
                    8:00h a 14:20h<br />
                </ConctactP>
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
