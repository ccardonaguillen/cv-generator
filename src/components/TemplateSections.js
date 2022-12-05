// import '../styles/PersonalInfoSection.css';
import React, { Component } from 'react';
import SectionHeader from './SectionHeader';
import * as form from './SectionForms';
import uniqid from 'uniqid';

function addItem() {
    const id = uniqid();

    this.setState({
        [this.props.sectionKey]: this.state[this.props.sectionKey].concat({ id, item: {} }),
    });
}

function removeItem(delId) {
    this.setState({
        [this.props.sectionKey]: this.state[this.props.sectionKey].filter(({ id }) => id !== delId),
    });
}

function updateItem({ newId, newItem }) {
    this.setState(
        {
            [this.props.sectionKey]:
                newId === undefined
                    ? newItem
                    : this.state[this.props.sectionKey].map(({ id, item }) =>
                          id === newId ? { id, item: newItem } : { id, item }
                      ),
        },
        () => this.props.onChange(this.state)
    );
}

// function componentDidMount() {
//     this.addItem();
// }

class PersonalInfo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            [this.props.sectionKey]: {
                fullName: '',
                email: '',
                phone: '',
                address: '',
                github: '',
                linkedin: '',
            },
        };

        this.updatePersonalInfo = updateItem.bind(this);
    }

    updatePersonalInfo({ newItem }) {
        this.setState({ personalInfo: newItem }, () => this.props.onChange(this.state));
    }

    render() {
        return (
            <div className="section" id="personal-info">
                <SectionHeader text="Personal Information" />
                <form.PersonalInfoForm onChange={this.updatePersonalInfo} />
            </div>
        );
    }
}

class Experience extends Component {
    constructor(props) {
        super(props);

        this.state = { [this.props.sectionKey]: [] };

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
                <SectionHeader text="Work Experience" />
                {this.state.workExp.map((item) => (
                    <form.ExperienceForm
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
    render() {
        return (
            <div className="section" id="education">
                <SectionHeader text="Education" />
                <form.EducationForm />
                <button id="new-education">Add</button>
            </div>
        );
    }
}

class Skills extends Component {
    render() {
        return (
            <div className="section" id="skills">
                <SectionHeader text="Skills" />
                <form.SkillsForm />
                <button id="new-skill">Add</button>
            </div>
        );
    }
}

export { PersonalInfo, Experience, Education, Skills };
