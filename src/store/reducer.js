import {dataSource} from '../components/dataSource'

const defaultStates = {
    dataSource: dataSource,
    apiData: {complited:false, data:''},
    mapData: {
        receivedCoordinate:[],
        defaultCoordinate:[59.9386, 30.3141],
        complited:false,
      }
}

const TABLE_RENDER = "TABLE_RENDER"
const GET_DATA_API = "GET_DATA_API"
const MAP_RENDER =  "MAP_RENDER"

export const reducer = (state=defaultStates, action) => {
    switch(action.type){
        case TABLE_RENDER:
            return{...state, dataSource:action.payload}
        case GET_DATA_API:
            return{...state, apiData: action.payload }
        case MAP_RENDER:
            return{...state, mapData:action.payload}
        default:
            return state
    }
}

export const tableRenderAction = (payload) => ({type:TABLE_RENDER, payload})
export const getDataApiAction = (payload) => ({type:GET_DATA_API, payload})
export const mapRenderAction = (payload) => ({type:MAP_RENDER, payload})