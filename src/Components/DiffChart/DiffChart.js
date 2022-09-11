import React, { useState, useReducer } from "react";
import  ChartData  from "./ChartData.diffChart.js";
import { ChartBuild3 } from "../Chart/ChartBuild.js";
import { DataContainer, Container } from '../PieChartBuild/PieChart.style.js';
import { ACTION } from "../../hooks/logic";

import { Logic, newTodo } from '../../hooks/logic';

//{chartData && chartData.map(data => {
//    return <ChartData key={data.id} chartData={data} dispatch={dispatch} /> 
//})}
//return {...state, currentOperand: `${state.currentOperand || ''}${action.payload.digit}`}

//const [{ currentOperand, previousOperand, operation }, dispatch] = useReducer(reducer , {})


export const DiffChart = () => {

    const { chartData, dispatch, name, setName, number, setNumber,
         inputList, setInputList, empty, setEmpty, checked, setChecked,
          NewData, setNewData, Cos, setCos } = Logic();

  
    function handleCreate(){
      const newArr = [ newTodo([ 'not', 'important' ]) , ...chartData.slice(0)];
      console.log(newArr)
      //newArr.forEach(e => console.log(e.name))
      setInputList( <ChartBuild3 chartData={newArr} /> );
      
    }

    function handleCos(){
      const copyofArray = [...chartData];
      setCos(copyofArray);
    }

    return(
        <Container>
            <span style={{display: empty ? 'block': 'none'}}> Name can't be empty </span>
            <button onClick={handleCreate}> Create </button>
            <button onClick={() => dispatch({type: ACTION.ADD_CHARTDATA })}>Add</button>
            <DataContainer data={chartData.length}>

              <ChartData chartData={chartData} dispatch={dispatch} /> 
              

            </DataContainer>
            {inputList}
            
        </Container>
    )
}