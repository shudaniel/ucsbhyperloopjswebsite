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
            <div className="cardImage"><center><img src={imageSrc} alt="Picture" width="500px" height="500px"/></center></div>
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
                <div>
                    <Columns columns={2} gap="20px">
                        {this.renderText(this.props.title, this.props.text)}
                        {this.renderPicture(this.props.image)}
                    </Columns>
                </div>
                );
        }
        else {
            return (
                <div>
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