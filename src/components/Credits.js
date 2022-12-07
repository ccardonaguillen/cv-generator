import { Component } from 'react';
import '../styles/Credits.css';
import githubIcon from '../assets/github.svg';

class Credits extends Component {
    render() {
        return (
            <div id="credits">
                <div>
                    <p>Design and code</p>
                    <a href="https://github.com/ccardonaguillen">Carlos Cardona</a>
                </div>
                <a href="https://github.com/ccardonaguillen/weather-app">
                    <img src={githubIcon} alt="Github" id="github-logo" />
                </a>
            </div>
        );
    }
}

export default Credits;
