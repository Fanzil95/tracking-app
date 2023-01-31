// import { polyline } from 'leaflet-css';
import React, {useState} from 'react';
import Map from './components/Map';
import Table from './components/Table';
import {dataSource} from './components/dataSource'



function App() {
const [stateDataSourse, setStateDataSourse] = useState(dataSource)
const [stateData, setStateData] = useState({complited:false, data:''})
const[stateMap, setStateMap] = useState({
  receivedCoordinate:[],
  defaultCoordinate:[59.9386, 30.3141],
  complited:false,
})
function getDataApi(data){
  setStateData({complited:true, data:data})
}
console.log(stateDataSourse)
function handleRow(id){
setStateDataSourse(
  stateDataSourse.map((data)=>{
    data.complited=false
    if(id===data.id){
      data.complited=true
    }
    return data
  })
)
}

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
      <Table 
      getDataApi={getDataApi} 
      getCoordinates={getCoordinates} 
      dataSource={stateDataSourse}
      handleRow={handleRow}
      /> 
      <Map position={stateMap}  statusData={stateData}/> 
    </div>
  );
}

export default App;
