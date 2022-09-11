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
            <Link to='/donutChart'>
                <Container2>
                    <Name>
                        DONUT CHART
                    </Name>
                    <img src='https://www.tibco.com/sites/tibco/files/media_entity/2022-01/doughnut-chart-example.svg' alt='donutChart' />
                </Container2>
            </Link>
            <Link to='/diffPieChart'>
                <Container2>
                    <Name>
                        DIFF PIE CHART
                    </Name>
                    <img src='https://patmartin.gitbooks.io/dex-docs/content/tasks/visualization/google/DiffPieChart_Screen1.png' alt='Diff Pie Chart' />
                </Container2>
            </Link>
        </Container>
    )
}