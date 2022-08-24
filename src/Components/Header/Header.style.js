import styled from "styled-components";

export const Container = styled.div`
    height: 100px;
    width: 100%;
    background-color: #262626;
    font-family: Arial;
    color: white;
    font-weight: bold;
    display: flex;
    justify-content: space-around;

    a {
        color: white;
        text-decoration: none; /* no underline */
        font-size: 20px;
    }

    li a:hover{
        color: black;
    }
    h1{
        margin: 2rem 1rem;
        font-size: 40px;
    }
    ul{
        list-style: none;
        display: flex;
    }
    li{
        margin: 1.5rem 1rem;
        cursor: pointer;
    }
`