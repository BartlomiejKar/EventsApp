import React from 'react';
import { Grid } from "semantic-ui-react"
import DashBoardList from './DashboardList';


const Dashboard = () => {
    return (
        <Grid>
            <Grid.Column width={10}>
                <DashBoardList />
            </Grid.Column>
            <Grid.Column width={6}>
                <h2>Right column</h2>
            </Grid.Column>
        </Grid>
    )
}

export default Dashboard;