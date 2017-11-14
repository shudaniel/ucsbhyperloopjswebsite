import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './NavBar.css';

import { AppBar, Tabs, Tab, Toolbar, ToolbarGroup, FlatButton } from 'material-ui';


class NavBar extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        var myTabs = (
            <Tabs tabItemContainerStyle={{ width: "100%", backgroundColor: "inherit" }} inkBarStyle={{ backgroundColor: "inherit" }}>
                <Tab className="navbar-tab" label="Pod" href="#pod" />
                <Tab className="navbar-tab" label="Team" href="#team" />
                <Tab className="navbar-tab" label="Sponsors" href="#sponsors" />
                <Tab className="navbar-tab" label="Competition" href="#competition" />
                <Tab className="navbar-tab" label="Support Us" href="#supportUs" />
            </Tabs>
        );
        return (
            <AppBar showMenuIconButton={false}
                title={<img src="assets/logo-inverted.png" height = "50px"/>}
                iconElementRight={
                    <ToolbarGroup style={{ width: "100%", backgroundColor: "inherit" }}>{myTabs}</ToolbarGroup>
                }
                
                style={{ position: "fixed", backgroundColor: "#18335d" }}>
                
                
            </AppBar>
        );
    }


}


export default NavBar;
