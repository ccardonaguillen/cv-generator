import { Component } from 'react';
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

class Sidebar extends Component {
    render() {
        const { content } = this.props;
        const items = [
            { icon: 'envelope', name: 'Email', type: 'email', text: content.email },
            {
                icon: ['fab', 'github'],
                name: 'Github',
                type: 'link',
                text: content.github,
                href: 'https://github.com/' + content.github,
            },
            {
                icon: ['fab', 'linkedin'],
                name: 'LnkedIn',
                type: 'link',
                text: content.linkedin,
                href: 'https://www.linkedin.com/in/' + content.linkedin,
            },
            { icon: 'phone', name: 'Phone', type: 'text', text: content.phone },
            { icon: 'home', name: 'Address', type: 'text', text: content.address },
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
}

class Header extends Component {
    render() {
        const { content } = this.props;
        return (
            <div id="header">
                <h1>{content.fullName}</h1>
                <p>
                    <strong>About me.</strong> {content.about}
                </p>
            </div>
        );
    }
}

class Section extends Component {
    render() {
        const { title, content } = this.props;

        return (
            <div className="preview-section">
                <div className="section-header">
                    <h2>{title}</h2>
                    <div className="preview-hsep"></div>
                </div>
                <div className="section-content">
                    {content.items.map((item, idx) => (
                        <SectionItem key={idx} item={item.item} />
                    ))}
                </div>
            </div>
        );
    }
}

export { Section, Sidebar, Header };

class SidebarItem extends Component {
    render() {
        const { icon, name, type, text, href } = this.props.attr;
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
}

class SectionItem extends Component {
    render() {
        // console.log(this.props.item);
        const { item } = this.props;
        return (
            <div className="section-item">
                <div>
                    <strong>{item.position || item.degree}</strong>
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
}
