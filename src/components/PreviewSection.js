import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone, faHome } from '@fortawesome/free-solid-svg-icons';
import profilePic from '../assets/hjsimpson.jpg';

library.add(faEnvelope);
library.add(faGithub);
library.add(faLinkedin);
library.add(faPhone);
library.add(faHome);

function Sidebar(props) {
    const { info } = props;
    const items = [
        { icon: 'envelope', name: 'Email', type: 'email', text: info.email },
        {
            icon: ['fab', 'github'],
            name: 'Github',
            type: 'link',
            text: info.github,
            href: 'https://github.com/' + info.github,
        },
        {
            icon: ['fab', 'linkedin'],
            name: 'LnkedIn',
            type: 'link',
            text: info.linkedin,
            href: 'https://www.linkedin.com/in/' + info.linkedin,
        },
        { icon: 'phone', name: 'Phone', type: 'text', text: info.phone },
        { icon: 'home', name: 'Address', type: 'text', text: info.address },
    ];

    return (
        <div id="sidebar">
            <img id="profile-pic" alt="Profile" src={profilePic} />
            <div className="sidebar-header">
                <h2>CONTACT</h2>
                <div className="sidebar-hsep"></div>
            </div>

            <div className="sidebar-item-container">
                {items.map((attr, idx) => (
                    <SidebarItem key={idx} attr={attr} />
                ))}
            </div>
        </div>
    );
}

function Header(props) {
    const { info } = props;
    return (
        <div id="header">
            <h1>{info.fullName}</h1>
            <p>
                <strong>About me.</strong> {info.about}
            </p>
        </div>
    );
}

function Section(props) {
    const { title, items } = props;

    return (
        <div className="preview-section">
            <div className="section-header">
                <h2>{title}</h2>
                <div className="preview-hsep"></div>
            </div>
            <div className="section-content">
                {items.map(({ item }, idx) => (
                    <SectionItem key={idx} item={item} />
                ))}
            </div>
        </div>
    );
}

export { Section, Sidebar, Header };

function SidebarItem(props) {
    const { icon, name, type, text, href } = props.attr;
    return (
        <div className="sidebar-item">
            <div className="sidebar-item-header">
                <FontAwesomeIcon icon={icon} />
                <h3>{name}</h3>
            </div>
            {type === 'text' ? (
                <p className="sidebar-item-text">{text}</p>
            ) : (
                <a href={href || 'mailto:' + text} className="sidebar-item-text">
                    {text}
                </a>
            )}
        </div>
    );
}

function SectionItem(props) {
    const { item } = props;
    return (
        <div className="section-item">
            <div>
                <strong>{item.position || item.degree || item.category}</strong>
                {item.startDate !== undefined && (
                    <strong className="date-range">
                        {item.startDate} &ndash; {item.endDate || 'Present'}
                    </strong>
                )}
            </div>

            {item.location !== undefined && (
                <em className="location">
                    {item.company || item.institution}, {item.location}
                </em>
            )}

            <p>{item.details}</p>
        </div>
    );
}
