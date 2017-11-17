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
                    <img className="card-image" src={imageSrc} style={{ borderRadius: "10px" }} alt="Picture" align="left" valign="middle" height="200px" width="250px" />
                    <span>
                        <h3>{this.props.title}</h3>
                        {text}
                    </span>
                </p>

        );
    }
    renderTextOnLeft(title, text, imageSrc) {
        return (
 
                <p>
                    <span>
                        <h3>{this.props.title}</h3>
                        {text}
                    </span>
                    <img className="card-image" src={imageSrc} style={{ borderRadius: "10px" }} alt="Picture" align="right" valign="middle" height="200px" width="250px" />
                </p>
 
        );
    }

    render() {
        if (this.props.index % 2 == 0) {
            return (
                <div className="staggeredCard">
                    {this.renderTextOnLeft(this.props.title, this.props.text, this.props.image)}
                </div>
                );
        }
        else {
            return (
                <div className="staggeredCard">
                    {this.renderTextOnRight(this.props.title, this.props.text, this.props.image)}
                </div>
            );
        }
    };

}

export default StaggeredCard