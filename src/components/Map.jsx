import React from 'react'
import { MapContainer, TileLayer, Popup, Marker, Polyline } from 'react-leaflet'
import {useMap} from 'react-leaflet/hooks'


const Map = ({position, _polyline}) => {
   
    console.log(_polyline)

// const limeOptions = { color: 'blue' }


function MyComponent() {
    const map = useMap()
    // map.setView(position.defaultCoordinate)
   map.setView(position.complited?position.receivedCoordinate[0]:position.defaultCoordinate)
    return null
  }
  
  
    return (
      <MapContainer center={position.defaultCoordinate} zoom={13} scrollWheelZoom={true} >
        <MyComponent />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker  position={position.complited?position.receivedCoordinate[0]:position.defaultCoordinate}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
        </Marker>
        <Marker  position={position.complited?position.receivedCoordinate[1]:position.defaultCoordinate}>

        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
        </Marker>
        {position.complited?<Polyline positions={_polyline.map(data=>data.reverse())}/> :''}

        

        
    </MapContainer>
        
  
    );
}
 
export default Map;