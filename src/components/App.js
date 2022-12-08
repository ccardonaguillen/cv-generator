import { Component, useState } from 'react';
import '../styles/App.css';
import CVForm from './CVForm';
import Preview from './Preview';
import Credits from './Credits';

export default function App(props) {
    const [content, setContent] = useState({
        personal: { item: '' },
        experience: { items: [] },
        education: { items: [] },
        skills: { items: [] },
    });

    function updateCV(newContent) {
        // console.log(newState);
        setContent({ ...content, ...newContent });
    }

    return (
        <div id="app">
            <div id="hero">
                <h1>CV Generator</h1>
                <h3>Create your CV by filling out the form provided in the left panel</h3>
            </div>

            <div id="app-container">
                <CVForm onChange={updateCV} />
                <div id="preview"></div>
                {/* <Preview info={this.state} /> */}
            </div>
            <Credits project="cv-generator" />
        </div>
    );
}
