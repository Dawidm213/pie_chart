import React, { useState, useReducer } from "react";
import  ChartData  from "../Chart/ChartData.js";
import { ChartBuild } from "../Chart/ChartBuild.js";
import { DataContainer, Container } from './PieChart.style.js';
import { ACTION } from "../../hooks/logic";

import { Logic, newTodo } from '../../hooks/logic';

//{chartData && chartData.map(data => {
//    return <ChartData key={data.id} chartData={data} dispatch={dispatch} /> 
//})}

export const PieChartBuild = () => {

    const { chartData, dispatch, name, setName, number, setNumber, inputList, setInputList, empty, setEmpty, checked, setChecked } = Logic();
    const [Testing, setTesting] = useState([]);

    function handleSubmit(e){
      e.preventDefault();
      if(name === ''){
        setEmpty(true)
      }else{
        setEmpty(false)
        dispatch({ type: ACTION.ADD_CHARTDATA,  name, number });
        setName('');
        setNumber(1);
      }
      
    }
  
  
    function handleCreate(){
      const newArr = [ newTodo([ 'not', 'important' ]) , ...chartData.slice(0)];
      console.log(newArr)
      //newArr.forEach(e => console.log(e.name))
      setInputList( <ChartBuild chartData={newArr} checked={checked} /> );
      
    }

    const handleCheckbox = (data) =>{
        if(data === '3D'){
            setChecked(!checked)
        }
        
    };
    const handleData = () => {
        dispatch({type: ACTION.ADD_CHARTDATA })
    }

    

    return(
        <Container>
            <input type="checkbox" name='3D' value={checked} onChange={() => handleCheckbox('3D')}/>3D
            <span style={{display: empty ? 'block': 'none'}}> Name can't be empty </span>
            <button onClick={handleCreate}> Create </button>
            <button onClick={handleData}>Add</button>
            <DataContainer data={chartData.length}>

              <ChartData key={chartData.id} chartData={chartData} dispatch={dispatch} /> 
              

            </DataContainer>
            {inputList}
            
        </Container>
    )
}