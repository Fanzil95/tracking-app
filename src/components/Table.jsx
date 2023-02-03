import React from 'react';
import { Table } from 'antd';
import { getListGoordinates } from '../api/api';
import { useSelector } from 'react-redux';
import { columns } from './columns';


  
const _Table = ({getCoordinates, createListDataApi, handleRow}) => {

const dataSource = useSelector(state=>state.dataSource)

//f-fromCoordinate, t-toCoordinate
function getDataCoordinates(f,t, id){
  handleRow(id)
  getListGoordinates(f,t, createListDataApi)
  getCoordinates(f,t)
}
    return (
        <Table 
        dataSource={dataSource} 
        columns={columns}
        rowClassName={record=>record.complited?'row rowRed':'row'}
        onRow={(record)=>{ //record - объект с координатными  данными. onRow 
            return {
                onClick: ()=>{getDataCoordinates([record.fromLng,record.fromLat], [record.toLng, record.toLat], record.id)}
            }
        }}
        />
    );
}
 
export default _Table;