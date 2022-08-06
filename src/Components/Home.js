import React from 'react';

import { ChartPick } from "./ChartPick/ChartPick.js";


// [...state, [action.name, action.number] ]
// Datas: state.Datas.filter(data => data.id !== action.payload.id )
// const [ { chartData, Datas }, dispatch ] = useReducer( reducer, { chartData: [], Datas: [] });


function Home() {

  //console.log(data)
  return (
    <>
      Charts are nice way of data visualiation so i hope this can help you build your preferable chart will this work?
      <ChartPick />
        
    
    </>
  );
}

export default Home;