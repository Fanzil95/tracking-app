// import { polyline } from 'leaflet-css';
import React, {useState} from 'react';
import Map from './components/Map';
import Table from './components/Table';


function App() {
const [stateData, setStateData] = useState({complited:false, data:''})
const[stateMap, setStateMap] = useState({
  receivedCoordinate:[],
  defaultCoordinate:[59.9386, 30.3141],
  complited:false,
})
function getDataApi(data){
  setStateData({complited:true, data:data})
}
// async function fetchJson () {

//   try{
//   const response = await fetch(stateMap.url)
//   const poly = await response.json()
//   poly.routes.map(route=>setStateData({data:route.geometry.coordinates}))
//   }
//   catch(error){
//     console.log(error)
//   }
//   finally{
//     setStateJson(true)
//   }
  
  
// fetch(stateUrl.url)
// .then(response => response.json())
// .then(poly => {
//   console.log(poly)
//  poly.routes.map(route=>setStateUrl({receivedCoordinate:[f,t], defaultCoordinate:[59.57, 30.19],complited: true, data:route.geometry.coordinates}))
//   })


function getCoordinates (f,t){
    setStateMap(
    {
      receivedCoordinate:[f.reverse(),t.reverse()],
      defaultCoordinate:[59.57, 30.19],
      complited:true,
    })
  }
    


    

// console.log(stateUrl.data.map(data=>data.reverse()))
 
  return (
        <div className='mapContainer'>
      <Table getDataApi={getDataApi} getCoordinates={getCoordinates}/> 
      <Map position={stateMap}  statusData={stateData}/> 
    </div>
  );
}

export default App;
