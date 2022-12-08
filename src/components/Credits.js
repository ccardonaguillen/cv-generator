import React from 'react';
import '../styles/Credits.css';
import githubIcon from '../assets/github.svg';

export default function Credits(props) {
    return (
        <div id="credits">
            <div>
                <p>Design and code</p>
                <a href="https://github.com/ccardonaguillen">Carlos Cardona</a>
            </div>
            <a href={'https://github.com/ccardonaguillen/' + props.project}>
                <img src={githubIcon} alt="Github" id="github-logo" />
            </a>
        </div>
    );
}
