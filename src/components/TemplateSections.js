// import '../styles/PersonalInfoSection.css';
import React, { Component } from 'react';
import TemplateSectionHeader from './TemplateSectionHeader';
import * as form from './SectionForms';
import uniqid from 'uniqid';

async function addItem() {
    const id = uniqid();

    await this.setState({
        items: this.state.items.concat({ id, item: {} }),
    });
    updateCVForm(this);
}

async function removeItem(delId) {
    await this.setState({
        items: this.state.items.filter(({ id }) => id !== delId),
    });
    updateCVForm(this);
}

async function updateItem({ newId, newInfo }) {
    const newState =
        newId === undefined
            ? newInfo
            : {
                  items: this.state.items.map(({ id, item }) =>
                      id === newId ? { id, item: { ...item, ...newInfo } } : { id, item }
                  ),
              };

    await this.setState(newState);
    updateCVForm(this);
}

function updateCVForm(section) {
    section.props.onChange({ [section.props.sectionKey]: section.state });
}

// function componentDidMount() {
//     this.addItem();
// }

class PersonalInfo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fullName: '',
            email: '',
            phone: '',
            address: '',
            github: '',
            linkedin: '',
            about: '',
        };

        this.updatePersonalInfo = updateItem.bind(this);
    }

    render() {
        return (
            <div className="section" id="personal-info">
                <TemplateSectionHeader text="Personal Information" />
                <form.PersonalInfo onChange={this.updatePersonalInfo} />
            </div>
        );
    }
}

class Experience extends Component {
    constructor(props) {
        super(props);

        this.state = { items: [] };

        this.addItem = addItem.bind(this);
        this.removeItem = removeItem.bind(this);
        this.updateItem = updateItem.bind(this);
    }

    componentDidMount() {
        this.addItem();
    }

    render() {
        return (
            <div className="section" id="experience">
                <TemplateSectionHeader text="Work Experience" />
                {this.state.items.map((item) => (
                    <form.Experience
                        key={item.id}
                        id={item.id}
                        onChange={this.updateItem}
                        onDelBtnClick={this.removeItem}
                    />
                ))}
                <button id="new-work-exp" onClick={this.addItem}>
                    Add
                </button>
            </div>
        );
    }
}

class Education extends Component {
    constructor(props) {
        super(props);

        this.state = { items: [] };

        this.addItem = addItem.bind(this);
        this.removeItem = removeItem.bind(this);
        this.updateItem = updateItem.bind(this);
    }

    componentDidMount() {
        this.addItem();
    }

    render() {
        return (
            <div className="section" id="education">
                <TemplateSectionHeader text="Education" />
                {this.state.items.map((item) => (
                    <form.Education
                        key={item.id}
                        id={item.id}
                        onChange={this.updateItem}
                        onDelBtnClick={this.removeItem}
                    />
                ))}
                <button id="new-work-exp" onClick={this.addItem}>
                    Add
                </button>{' '}
            </div>
        );
    }
}

class Skills extends Component {
    constructor(props) {
        super(props);

        this.state = { items: [] };

        this.addItem = addItem.bind(this);
        this.removeItem = removeItem.bind(this);
        this.updateItem = updateItem.bind(this);
    }

    componentDidMount() {
        this.addItem();
    }

    render() {
        return (
            <div className="section" id="skills">
                <TemplateSectionHeader text="Skills" />
                {this.state.items.map((item) => (
                    <form.Skills
                        key={item.id}
                        id={item.id}
                        onChange={this.updateItem}
                        onDelBtnClick={this.removeItem}
                    />
                ))}
                <button id="new-work-exp" onClick={this.addItem}>
                    Add
                </button>{' '}
            </div>
        );
    }
}

export { PersonalInfo, Experience, Education, Skills };
