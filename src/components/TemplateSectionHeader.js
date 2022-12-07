// import '../styles/SectionHeader.css';
import React, { Component } from 'react';

class TemplateSectionHeader extends Component {
    render() {
        return (
            <div className="template-section-header">
                <h1>{this.props.title}</h1>
                <div className="template-hsep"></div>
            </div>
        );
    }
}

export default TemplateSectionHeader;
