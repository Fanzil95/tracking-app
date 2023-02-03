import React from 'react'
import { MapContainer, TileLayer, Marker, Polyline } from 'react-leaflet'
import {useMap} from 'react-leaflet/hooks'
import { useSelector } from 'react-redux'


const Map = () => {
  const position = useSelector(state=>state.mapData)
  const listCoordinates = useSelector(state=>state.apiData)

  function Bounds(){
    const map = useMap()
    map.fitBounds(position.receivedCoordinate)
    return null
    }
    return (
      <MapContainer center={position.defaultCoordinate} zoom={13} scrollWheelZoom={true} attributionControl = {false} >
      {listCoordinates.complited?<Bounds/> : ''} 
        <TileLayer
          
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {listCoordinates.complited
        ? <Marker  position={position.complited?position.receivedCoordinate[0]:position.defaultCoordinate}>
           
          </Marker>
        : ''
        }
        {listCoordinates.complited
        ? <Marker  position={position.complited?position.receivedCoordinate[1]:position.defaultCoordinate}>
           
            </Marker>
        :''
        }
        {listCoordinates.complited?<Polyline positions={listCoordinates.data.map(data=>data.reverse())}/> :''}
      </MapContainer>
      );
}
 
export default Map;