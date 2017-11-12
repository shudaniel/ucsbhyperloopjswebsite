import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './NavBar.css';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import ToolbarGroup from 'material-ui/Toolbar';
import FlatButton from 'material-ui/FlatButton';


class NavBar extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <AppBar showMenuIconButton={false}>
                <Toolbar style={{ width: "100%", backgroundColor: "inherit" }}>
                    
                    <h5>UCSB Hyperloop</h5>
                    <ToolbarGroup style={{ backgroundColor: "#ffce34" }}>
                        <a href="#team" color="#ffce34">
                            <FlatButton label="Team" primary={true}>
                            </FlatButton>
                        </a>
                    </ToolbarGroup>
                </Toolbar>
            </AppBar>
        );
    }


}

export default NavBar;
