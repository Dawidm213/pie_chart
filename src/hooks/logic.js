import { Action } from 'history';
import React, { useState, useReducer } from 'react';

export const ACTION = {
    ADD_CHARTDATA: 'addChartData',
    CHECK_ADD_CHARTDATA: 'checkChartData',
    DELETE_CHARTDATA: 'deleteChartData',
    TESTING_STUFF: 'testingStuff',
    ON_CHANGE: 'onChange',
    ON_CHANGE2: 'onChange2'
  };


export function newTodo(data) {
return { id: Date.now(), data: data }
};
export function newTodo2(data) {
  return { id: Date.now(), data: data }
  };


function reducer( state, action ){
    switch(action.type){
      case ACTION.ADD_CHARTDATA:
        return [...state, newTodo(['', ''])]
        
      case ACTION.DELETE_CHARTDATA:
        return state.filter(data => data.id !== action.payload.id )
      case ACTION.ON_CHANGE:{
        const list = [...state];
        list[action.payload.index][action.payload.name.name][0] = action.payload.name.value;
        return list    
      }
      case ACTION.ON_CHANGE2:{
        const list = [...state];
        list[action.payload.index][action.payload.number.name][1] = action.payload.number.valueAsNumber;
        return list
        
      }
        
      
        
      default:
        return state
    }
  }


export const Logic = () => {
    const [ chartData, dispatch ] = useReducer( reducer, []);
    const [ name, setName ] = useState('');
    const [ number, setNumber ] = useState(1);
    const [inputList, setInputList] = useState([]);
    const [ empty, setEmpty ] = useState(false);
    const [ checked, setChecked ] = useState(false);
    const [ NewData, setNewData ] = useState([])
    const [ Cos, setCos ] = useState([])



    return {chartData, dispatch, name, setName, number, setNumber, inputList, setInputList, empty, setEmpty, checked, setChecked, NewData, setNewData, Cos, setCos}
}