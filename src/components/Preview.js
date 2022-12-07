import '../styles/Preview.css';
import React, { Component } from 'react';
import * as section from './PreviewSection';

class CVPreview extends Component {
    render() {
        const { info } = this.props;

        return (
            <div id="preview">
                <section.Sidebar content={info.personal} />
                <div id="preview-vsep"></div>
                <section.Header content={info.personal} />
                <div id="content">
                    <section.Section title="Experience" content={info.experience} />
                    <section.Section title="Education" content={info.education} />
                    <section.Section title="Skills" content={info.skills} />
                </div>
            </div>
        );
    }
}

export default CVPreview;
