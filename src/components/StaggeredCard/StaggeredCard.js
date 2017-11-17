import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Columns from 'react-columns'

import './StaggeredCard.css'

class StaggeredCard extends Component {

    constructor(props) {
        super(props);
    }

    renderPicture(imageSrc) {
        return (
            <div><center><img src={imageSrc} style={{borderRadius: "10px"}} alt="Picture" width="250px" height="200px"/></center></div>

            );
    }
    renderTextOnRight(title, text, imageSrc){
        return (

                <p>
                    <center><img className="card-image" src={imageSrc} style={{ borderRadius: "10px" }} alt="Picture" align="left" valign="middle" height="200px" width="250px" /></center>
                    {text}
                </p>

        );
    }
    renderTextOnLeft(title, text, imageSrc) {
        return (
 
                <p>
                    {text}
                    <center><img className="card-image" src={imageSrc} style={{ borderRadius: "10px" }} alt="Picture" align="right" valign="middle" height="200px" width="250px" /></center>
                </p>
 
        );
    }

    render() {
        if (this.props.index % 2 == 0) {
            return (
                <div className="staggeredCard">
                    <h3>{this.props.title}</h3>
                    {this.renderTextOnLeft(this.props.title, this.props.text, this.props.image)}
                </div>
                );
        }
        else {
            return (
                <div className="staggeredCard">
                    <h3>{this.props.title}</h3>
                    {this.renderTextOnRight(this.props.title, this.props.text, this.props.image)}
                </div>
            );
        }
    };

}

export default StaggeredCard