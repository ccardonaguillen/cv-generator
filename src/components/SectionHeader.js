// import '../styles/SectionHeader.css';
import React, { Component } from 'react';

class SectionHeader extends Component {
    render() {
        return (
            <div className="section-header">
                <h1>{this.props.text}</h1>
                <div className="horizontal-sep"></div>
            </div>
        );
    }
}

export default SectionHeader;
