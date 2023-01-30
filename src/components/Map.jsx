import React from 'react'
import { MapContainer, TileLayer, Popup, Marker, Polyline } from 'react-leaflet'
import {useMap} from 'react-leaflet/hooks'


const Map = ({position, statusData}) => {
   
console.log(statusData.data, statusData.complited)
// const limeOptions = { color: 'blue' }


function MyComponent() {
    const map = useMap()
    // map.setView(position.defaultCoordinate)
    // map.fitBounds(position.complited?position.receivedCoordinate:position.defaultCoordinate)
  //  map.setView(statusData.complited?statusData.data[statusData.data.length/2]:position.defaultCoordinate)
  map.setView(statusData.complited?statusData.data[1]:position.defaultCoordinate)

  return null
  }

  function Bounds(){
    const map = useMap()
    map.fitBounds(position.receivedCoordinate)
    return null
  }
  
  
    return (
      <MapContainer center={position.defaultCoordinate} zoom={13} scrollWheelZoom={true} >
        {/* <MyComponent /> */}
       {statusData.complited?<Bounds/> : ''} 
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {statusData.complited
      ?<Marker  position={position.complited?position.receivedCoordinate[0]:position.defaultCoordinate}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
      </Marker>
      :''
    }
      {statusData.complited
      ?<Marker  position={position.complited?position.receivedCoordinate[1]:position.defaultCoordinate}>

      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
      </Marker>
      :''
    }
        
        {statusData.complited?<Polyline positions={statusData.data.map(data=>data.reverse())}/> :''}

        

        
    </MapContainer>
        
  
    );
}
 
export default Map;