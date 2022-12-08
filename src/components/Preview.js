import '../styles/Preview.css';
import React from 'react';
import * as section from './PreviewSection';

export default function Preview(props) {
    const { personal, experience, education, skills } = props.content;
    console.log(experience);

    return (
        <div id="preview">
            <section.Sidebar info={personal} />
            <div id="preview-vsep"></div>
            <section.Header info={personal} />
            <div id="content">
                <section.Section title="Experience" items={experience} />
                <section.Section title="Education" items={education} />
                <section.Section title="Skills" items={skills} />
            </div>
        </div>
    );
}
