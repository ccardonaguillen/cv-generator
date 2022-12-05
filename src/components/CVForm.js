import '../styles/CVForm.css';
import React, { Component } from 'react';
import * as section from './TemplateSections';
class CVForm extends Component {
    render() {
        const { onChange } = this.props;

        return (
            <div id="cv-form">
                <section.PersonalInfo onChange={onChange} sectionKey="personalInfo" />
                <section.Experience onChange={onChange} sectionKey="workExp" />
                <section.Education onChange={onChange} sectionKey="education" />
                <section.Skills onChange={onChange} sectionKey="skills" />
            </div>
        );
    }
}

export default CVForm;
