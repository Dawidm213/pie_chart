import styled from 'styled-components'



export const DataContainer = styled.div`
   height: 300px;
   width: 75%;
   border: 1px solid black;
   margin: 0 auto;
   background-color: #f1f1f1;
   overflow: auto;
   padding: 20px;
   display: grid;
   justify-content: center;
   align-items: center;
   grid-template-columns: repeat(6, 16.6%);
   grid-template-rows: repeat(calc(${(props) => props.data} / 6 + 1), 6rem);
`

export const Container = styled.div`
   input::-webkit-outer-spin-button,
   input::-webkit-inner-spin-button {
   -webkit-appearance: none;
   margin: 0;
   
}
   color: white;
`