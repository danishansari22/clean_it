import React ,{useEffect} from 'react'
import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'
import { useMap } from 'react-leaflet/hooks'
import L from 'leaflet';
import { Popup } from 'react-leaflet'
import { Marker } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

export default function Map() {
    const [latitude,setLatitude]=React.useState('');
    const [longitude,setLongitude]=React.useState('');
    useEffect(()=>{
        navigator.geolocation.getCurrentPosition((position)=>{
            setLatitude(position.coords.latitude);
            setLongitude(position.coords.longitude);
        })
    })
    const position = [latitude, longitude]
    const position1=[20.2960,85.8240]
    const position2=[20.2950,85.8233]
    return ( 
        <MapContainer center={position1} zoom={13} scrollWheelZoom={false} style={{ height: '100vh', width: '100wh' }}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
                <Popup>
                    Yourlocation <br /> is at {latitude},{longitude}.
                </Popup>
            </Marker>
            <Marker position={position1}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
            <Marker position={position2}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        </MapContainer>
    )
}
