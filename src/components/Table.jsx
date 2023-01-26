import React from 'react';
import { Table } from 'antd';
import {dataSource} from './dataSource'


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
  
const _Table = ({onChangePoly}) => {
    return (
        <Table 
        dataSource={dataSource} 
        columns={columns}
        onRow={(record)=>{ //record - объект с координатными  данными. onRow 
            return {
                onClick: ()=>{onChangePoly([record.fromLng,record.fromLat], [record.toLng, record.toLat])}
            }
        }}
        />
    );
}
 
export default _Table;