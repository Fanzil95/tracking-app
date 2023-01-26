// import { polyline } from 'leaflet-css';
import React, {useState} from 'react';
import Map from './components/Map';
import Table from './components/Table';


function App() {
//  const [position, setPosition] = useState({defaultCoordinate:[59.57, 30.19],receivedCoordinate:[],complited: false})
 const [stateUrl, setStateUrl]=useState({
  receivedCoordinate:[],
  defaultCoordinate:[59.57, 30.19],
  complited:false, 
  url:'',
  data:[]
})

function getUrl (f,t){
  setStateUrl(
    {
      url: `http://router.project-osrm.org/route/v1/driving/${f};${t}?alternatives=false&steps=false&geometries=geojson&overview=full&annotations=false`,
      receivedCoordinate:[f.reverse(),t.reverse()],
      defaultCoordinate:[59.57, 30.19],
      complited:true,
      // url: `http://router.project-osrm.org/route/v1/driving/${f};${t}?overview=false`,
      data: [],
    }
    )
  fetch(stateUrl.url)
  .then(response => response.json())
  .then(poly => {
    console.log(poly)
   poly.routes.map(route=>setStateUrl({receivedCoordinate:[f,t], defaultCoordinate:[59.57, 30.19],complited: true, data:route.geometry.coordinates}))
    })

}

// console.log(stateUrl.data.map(data=>data.reverse()))
 
  return (
    
    <div className='mapContainer'>
      <Table onChangePoly={getUrl}    
      /> 
      <Map position={stateUrl} _polyline={stateUrl.data} /> 
    </div>
  );
}

export default App;
