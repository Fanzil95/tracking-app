import React from 'react';
import { Table } from 'antd';

const columns = [
    {
      title: 'Номер заявки',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Координаты от Lat',
      dataIndex: 'fromLat',
      key: 'fromLat',
    },
    {
      title: 'Координаты от Lng',
      dataIndex: 'fromLng',
      key: 'fromLng',
    },
    {
      title: 'Координаты до Lat',
      dataIndex: 'toLat',
      key: 'toLat',
    },
    {
      title: 'Координаты до Lng',
      dataIndex: 'toLng',
      key: 'toLng',
    },
  ];
  
const _Table = ({dataSource, getCoordinates, getDataApi, handleRow}) => {

  function getDataCoordinates(f,t, id){
    handleRow(id)
    const urlApi = {url: `http://router.project-osrm.org/route/v1/driving/${f};${t}?alternatives=false&steps=false&geometries=geojson&overview=full&annotations=false`}
    console.log(urlApi.url)
    getCoordinates(f,t)

    fetch(urlApi.url)
.then(response => response.json())
.then(poly => {
 poly.routes.map(route=>getDataApi(route.geometry.coordinates))
  })


  }
    return (
        <Table 
        dataSource={dataSource} 
        columns={columns}
        rowClassName={record=>record.complited?'row':''}
        onRow={(record)=>{ //record - объект с координатными  данными. onRow 
            return {
                onClick: ()=>{getDataCoordinates([record.fromLng,record.fromLat], [record.toLng, record.toLat], record.id)}
            }
        }}
        />
    );
}
 
export default _Table;