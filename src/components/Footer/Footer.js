import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Footer.css';

class Footer extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className = "sb-blue"><center><font color="white">
            	Follow Us:&nbsp; 
            		<a href="https://www.facebook.com/ucsbhyperloop/"><font color="white">Facebook</font></a> 
            	&nbsp;|&nbsp;
            		<a href="https://twitter.com/ucsbhyperloop?lang=en"><font color="white">Twitter</font></a>
            	&nbsp;|&nbsp;
            		<a href="https://www.linkedin.com/company/ucsb-hyperloop/"><font color="white">LinkedIn</font></a>
            </font></center></div>
            
            );
    }
}


export default Footer;



