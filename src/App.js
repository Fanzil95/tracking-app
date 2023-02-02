// import { polyline } from 'leaflet-css';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Map from './components/Map';
import Table from './components/Table';



function App() {
  const dispatch = useDispatch()
  const stateDataSourse = useSelector(state=>state.dataSource)
  const stateMap = useSelector(state=>state.mapData)
  const stateDataApi = useSelector(state=>state.apiData)
// const [stateDataSourse, setStateDataSourse] = useState(dataSource)
// const [stateData, setStateData] = useState({complited:false, data:''})
// const[stateMap, setStateMap] = useState({
//   receivedCoordinate:[],
//   defaultCoordinate:[59.9386, 30.3141],
//   complited:false,
// })

function getDataApi(data){
  dispatch({
    type:"get data api",
    paylod:{complited:true, data:data}
  })
}
// function getDataApi(data){
//   setStateData({complited:true, data:data})
// }

// console.log(stateDataSourse)
function handleRow(id){
  dispatch({type:"table render", paylod:stateDataSourse.map((data)=>{
    data.complited=false
    if(id===data.id){
      data.complited=true
    }
    return data
  })}
    
  )
  }
// function handleRow(id){
// setStateDataSourse(
//   stateDataSourse.map((data)=>{
//     data.complited=false
//     if(id===data.id){
//       data.complited=true
//     }
//     return data
//   })
// )
// }
function getCoordinates (f,t){
      dispatch({
        type:"map render",
        paylod:{
          receivedCoordinate:[f.reverse(),t.reverse()],
          defaultCoordinate:[59.57, 30.19],
          complited:true,
        }
      })
    }
      
  

// function getCoordinates (f,t){
//     setStateMap(
//     {
//       receivedCoordinate:[f.reverse(),t.reverse()],
//       defaultCoordinate:[59.57, 30.19],
//       complited:true,
//     })
//   }
    


    

 
  return (
        <div className='mapContainer'>
      <Table 
      getDataApi={getDataApi} 
      getCoordinates={getCoordinates} 
      dataSource={stateDataSourse}
      handleRow={handleRow}
      /> 
      <Map position={stateMap}  statusData={stateDataApi}/> 
    </div>
  );
}

export default App;
