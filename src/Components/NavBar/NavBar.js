import React, { Component } from 'react'
import "./NavBar.css";
import Grid from '@mui/material/Grid';

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div>
                <div className="navbar__barContent">
                    <Grid container>
                        <Grid item xs={2}></Grid>
                        <Grid item xs={6}>
                            csd
                        </Grid>
                        <Grid item xs={4}>
                            dss
                        </Grid>
                    </Grid>
                </div>
            </div>
        );
    }
}

export default NavBar;