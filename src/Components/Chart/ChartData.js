import React from 'react';
import { ACTION } from "../../hooks/logic.js";
import { Data, Container } from '../ChartData.styles.js';



export default function ChartData({ chartData, dispatch }){
//   <Data> <div>{chartData.data[0]}</div> <div>{chartData.data[1]}</div> </Data>
//     <button onClick={() => dispatch({ type: ACTION.DELETE_CHARTDATA, payload: {id: chartData.id} })}>Delete</button>


    return(
        <>
      {chartData.map((x, i) => {
        return (
          <Container>
            <input
              value={x.data[0]}
              name='data'
              placeholder='name'
              onChange={e => dispatch({type: ACTION.ON_CHANGE, payload: {name: e.target, index: i }})}
            />
            <input
              type="number"
              name='data'
              value={x.data[1]}
              placeholder='0'
              onChange={e => dispatch({type: ACTION.ON_CHANGE2, payload: {number: e.target, index: i }})}
            />
            <div className="btn-box">
              <button onClick={() => dispatch({ type: ACTION.DELETE_CHARTDATA, payload: {id: x.id} })}>Remove</button>
            </div>
          </Container>
        );
      })}
            
        </>
    )
}