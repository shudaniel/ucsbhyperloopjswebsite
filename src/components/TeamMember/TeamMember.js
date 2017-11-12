import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './TeamMember.css'

class TeamMember extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="team-member">
                <img className="avatar" src={this.props.image} alt="Profile Picture" />
                <span className="caption"><b>{this.props.name}</b></span>
                <span className="caption">{this.props.role}</span>
            </div>
        );
    }

}

export default TeamMember;