import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Map from './components/Map';
import Table from './components/Table';
import { getDataApiAction } from './store/reducer';
import { tableRenderAction } from './store/reducer';
import { mapRenderAction } from './store/reducer';


function App() {
  const dispatch = useDispatch()
  const stateDataSourse = useSelector(state=>state.dataSource)
  
//создает список координат с сервера по двух точкам, для созданий полилиний
function createListDataApi(data){
  dispatch(getDataApiAction({complited:true, data:data}))
}
    
  
//активирует строку в красный цвет
function handleRow(id){
  dispatch(tableRenderAction(
    stateDataSourse.map((data)=>{
      data.complited=false
      if(id===data.id){
        data.complited=true
      }
      return data
    })))
}

  

//f-fromCoordinate, t-toCoordinate
function getCoordinates (f,t){
  dispatch(mapRenderAction(
    {
      receivedCoordinate:[f.reverse(),t.reverse()],
      defaultCoordinate:[59.57, 30.19],
      complited:true,
    }
  ))
}

  return (
        <div className='mainContainer'>
      <Table className = {'table'}
      createListDataApi={createListDataApi} 
      getCoordinates={getCoordinates} 
      handleRow={handleRow}
      /> 
      <Map /> 
    </div>
  );
}

export default App;
