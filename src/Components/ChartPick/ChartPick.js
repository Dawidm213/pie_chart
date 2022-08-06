import React from "react";
import { Container, Name, Container2 } from "./ChartPick.style";
import { BrowserRouter as Router, Switch, Route, Link, useParams } from "react-router-dom";


export const ChartPick = () => {


    return(
        <Container>
            <Link to='/pieChart'>
                <Container2>
                    <Name>
                        PIE CHART
                    </Name>
                    <img src='https://cdn.pixabay.com/photo/2013/07/12/15/21/pie-chart-149727__340.png' alt='piechartImg' />
                </Container2>
            </Link>
        </Container>
    )
}