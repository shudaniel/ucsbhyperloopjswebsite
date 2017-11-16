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
            <div className="cardImage"><center><img src={imageSrc} style={{borderRadius: "10px"}} alt="Picture" width="250px" height="200px"/></center></div>

            );
    }
    renderText(title, text){
        return (
            <div>
                <h3>{title}</h3>
                <p>{text}</p>
            </div>
        );
    }

    render() {
        if (this.props.index % 2 == 0) {
            return (
                <div className="staggeredCard">
                    <Columns columns={2} gap="20px">
                        {this.renderText(this.props.title, this.props.text)}
                        {this.renderPicture(this.props.image)}
                    </Columns>
                </div>
                );
        }
        else {
            return (
                <div className="staggeredCard">
                    <Columns columns={2} gap="20px">
                        {this.renderPicture(this.props.image)}
                        {this.renderText(this.props.title, this.props.text)}
                        
                    </Columns>
                </div>
            );
        }
    };

}

export default StaggeredCard