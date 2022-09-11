import React from "react";
import { BrowserRouter as Router, Switch, Route, Link, useParams } from "react-router-dom";
import { Container } from './Header.style.js'

export const Header = () => {
    return(
        <Container>
            <h1>ChartWebsite</h1>
            <ul>
                <li><Link to='/https://dawidm213.github.io/pie_chart'>Home</Link></li>
                <li><Link to='/Charts'>Charts</Link></li>
                <li><Link to='/About'>About</Link></li>
            </ul>
        </Container>
    )
}