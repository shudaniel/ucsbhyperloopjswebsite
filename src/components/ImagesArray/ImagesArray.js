import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './ImagesArray.css';

import Lightbox from 'react-images'
import Gallery from 'react-photo-gallery'


class ImagesArray extends Component{
    constructor(props) {
        super(props);

        this.state = {
            lightboxIsOpen: false,
            currentImage: 0,
        };

        this.closeLightbox = this.closeLightbox.bind(this);
        this.gotoNext = this.gotoNext.bind(this);
        this.gotoPrevious = this.gotoPrevious.bind(this);
        this.openLightbox = this.openLightbox.bind(this);
    }

    openLightbox(event, obj) {
        
        this.setState({
            currentImage: obj.index,
            lightboxIsOpen: true,
        });
    }
    closeLightbox() {
        this.setState({
            currentImage: 0,
            lightboxIsOpen: false,
        });
    }
    gotoPrevious() {
        this.setState({
            currentImage: this.state.currentImage - 1,
        });
    }
    gotoNext() {
        this.setState({
            currentImage: this.state.currentImage + 1,
        });
    }



    render() {

        return (
            <div>
                <Gallery photos={this.props.imagesArray} onClick={this.openLightbox} columns={this.props.numColumns} />
                <Lightbox
                images={this.props.imagesArray}
                isOpen={this.state.lightboxIsOpen}
                onClickPrev={this.gotoPrevious}
                onClickNext={this.gotoNext}
                currentImage={this.state.currentImage}
                onClose={this.closeLightbox}
                />
            </div>
            
        );
    }

}

ImagesArray.defaultProps = {
    imagesArray: [],
    numColumns: 3
};

export default ImagesArray;