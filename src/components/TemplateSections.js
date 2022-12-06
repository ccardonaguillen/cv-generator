// import '../styles/PersonalInfoSection.css';
import React, { Component } from 'react';
import TemplateSectionHeader from './TemplateSectionHeader';
import SectionForm from './SectionForms';
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

async function updateItem({ itemId, newInfo }) {
    const newState =
        itemId === undefined
            ? newInfo
            : {
                  items: this.state.items.map(({ id, item }) =>
                      id === itemId ? { id, item: { ...item, ...newInfo } } : { id, item }
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

class StandardSection extends Component {}

class ExpandableSection extends Component {}
class PersonalInfo extends Component {
    constructor(props) {
        super(props);

        this.state = {};

        this.updatePersonalInfo = updateItem.bind(this);
    }

    render() {
        return (
            <div className="section" id="personal-info">
                <TemplateSectionHeader text="Personal Information" />
                <SectionForm
                    onChange={this.updatePersonalInfo}
                    fields={[
                        { id: 'fullName', type: 'text', label: 'Full Name' },
                        { id: 'email', type: 'email', label: 'Email' },
                        { id: 'phone', type: 'tel', label: 'Phone' },
                        { id: 'address', type: 'text', label: 'Address' },
                        { id: 'github', type: 'text', label: 'Github' },
                        { id: 'linkedin', type: 'text', label: 'LinkedIn' },
                        { id: 'about', type: 'textarea', label: 'About' },
                    ]}
                />
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
                    <SectionForm
                        key={item.id}
                        id={item.id}
                        onChange={this.updateItem}
                        onDelBtnClick={this.removeItem}
                        fields={[
                            { id: 'company', type: 'text', label: 'Company' },
                            { id: 'position', type: 'text', label: 'Position' },
                            { id: 'startDate', type: 'number', label: 'From' },
                            { id: 'endDate', type: 'number', label: 'To' },
                            { id: 'location', type: 'text', label: 'Location' },
                            { id: 'details', type: 'textarea', label: 'Details' },
                        ]}
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
                    <SectionForm
                        key={item.id}
                        id={item.id}
                        onChange={this.updateItem}
                        onDelBtnClick={this.removeItem}
                        fields={[
                            { id: 'institution', type: 'text', label: 'Institution' },
                            { id: 'degree', type: 'text', label: 'Degree / Course' },
                            { id: 'startDate', type: 'number', label: 'From' },
                            { id: 'endDate', type: 'number', label: 'To' },
                            { id: 'location', type: 'text', label: 'Location' },
                            { id: 'details', type: 'textarea', label: 'Additional Info' },
                        ]}
                    />
                ))}
                <button id="new-education" onClick={this.addItem}>
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
                    <SectionForm
                        key={item.id}
                        id={item.id}
                        onChange={this.updateItem}
                        onDelBtnClick={this.removeItem}
                        fields={[
                            { id: 'category', type: 'text', label: 'Category' },
                            { id: 'details', type: 'textarea', label: 'Details' },
                        ]}
                    />
                ))}
                <button id="new-skill" onClick={this.addItem}>
                    Add
                </button>{' '}
            </div>
        );
    }
}

export { PersonalInfo, Experience, Education, Skills };
