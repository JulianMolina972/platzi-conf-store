import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { FaMapMarkerAlt} from 'react-icons/fa';
// import { Icon } from 'leaflet'
import '../styles/components/Map.css';

const position = [21.505, -0.09]

export const Map = () => {
    return (
        <MapContainer center={position} zoom={13}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position} >
                <Popup icon={<FaMapMarkerAlt/>}>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>

            </Marker>
        </MapContainer>

    );
};
