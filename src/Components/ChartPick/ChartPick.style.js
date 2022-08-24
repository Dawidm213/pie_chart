import styled from "styled-components";

export const Container = styled.div`
    float: left;

    a{
        text-decoration: none;
        color: black;
    }
`
export const Name = styled.p`
    font-weight: bold;
    font-size: 20px;
    font-family: Arial;
    margin-top: 0;
`
export const Container2 = styled.div`
    background-color: white;
    padding: 1rem;
    margin: 1rem;
    text-align: center;
    border-radius: .7rem;
    border: 3px solid transparent;
    &:hover {
        border: 3px solid lightblue;
        transition-duration: .4s;
        
    }
    img{
        height: 150px;
        width: 150px;
    }

`