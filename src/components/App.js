import { Component } from 'react';
import '../styles/App.css';
import CVForm from './CVForm';
import Preview from './Preview';

class App extends Component {
    constructor() {
        super();
        this.state = {
            personal: {},
            experience: { items: [] },
            education: { items: [] },
            skills: { items: [] },
        };

        this.updateCV = this.updateCV.bind(this);
    }

    updateCV(newState) {
        console.log(newState);
        this.setState(newState);
    }

    render() {
        return (
            <div id="app">
                <div id="hero">
                    <h1>CV Generator</h1>
                    <h3>Create you CV by filling out the form provided in the left panel</h3>
                </div>

                <div id="app-container">
                    <CVForm onChange={this.updateCV} />
                    <Preview info={this.state} />
                </div>
            </div>
        );
    }
}

export default App;
