// import '../styles/PersonalInfoSection.css';
import React, { Component } from 'react';
import * as block from './InputBlock';

function updateSection(e) {
    const inputTarget = e.target.id;
    const inputValue = e.target.value;

    const newState = {};
    newState[inputTarget] = inputValue;

    this.props.id === undefined
        ? this.props.onChange({ newItem: newState })
        : this.props.onChange({ newId: this.props.id, newItem: newState });
}

class PersonalInfoForm extends Component {
    updatePersonalInfo = updateSection.bind(this);

    render() {
        return (
            <div className="section-form">
                <form>
                    <block.InputBlock
                        id="fullName"
                        type="text"
                        label="Full Name"
                        onChange={this.updatePersonalInfo}
                    />
                    <block.InputBlock
                        id="email"
                        type="email"
                        label="Email"
                        onChange={this.updatePersonalInfo}
                    />
                    <block.InputBlock
                        id="phone"
                        type="tel"
                        label="Phone"
                        onChange={this.updatePersonalInfo}
                    />
                    <block.InputBlock
                        id="address"
                        type="text"
                        label="Address"
                        onChange={this.updatePersonalInfo}
                    />
                    <block.InputBlock
                        id="github"
                        type="text"
                        label="Github"
                        onChange={this.updatePersonalInfo}
                    />
                    <block.InputBlock
                        id="linkedin"
                        type="text"
                        label="LinkedIn"
                        onChange={this.updatePersonalInfo}
                    />
                </form>
            </div>
        );
    }
}

class ExperienceForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            company: '',
            position: '',
            startDate: '',
            endDate: '',
            location: '',
            details: '',
        };

        this.updateWorkExp = updateSection.bind(this);
    }

    render() {
        const { id, onDelBtnClick } = this.props;
        return (
            <div className="section-form">
                <form>
                    <block.InputBlock
                        id="company"
                        type="text"
                        label="Company"
                        onChange={this.updateWorkExp}
                    />
                    <block.InputBlock
                        id="position"
                        type="text"
                        label="Position"
                        onChange={this.updateWorkExp}
                    />
                    <block.InputBlock
                        id="startDate"
                        type="number"
                        label="From"
                        onChange={this.updateWorkExp}
                    />
                    <block.InputBlock
                        id="endDate"
                        type="number"
                        label="To"
                        onChange={this.updateWorkExp}
                    />
                    <block.InputBlock
                        id="location"
                        type="text"
                        label="Location"
                        onChange={this.updateWorkExp}
                    />
                    <block.TextAreaBlock id="details" label="Details" />
                    {/* <button type="submit" className="edit-work-exp">
                        Edit
                    </button> */}
                </form>
                <button className="delete-item" onClick={() => onDelBtnClick(id)}>
                    Delete
                </button>
            </div>
        );
    }
}

class EducationForm extends Component {
    render() {
        return (
            <div className="section-form">
                <form>
                    <block.InputBlock id="institution" type="text" label="Institution" />
                    <block.InputBlock id="degree" type="text" label="Degree / Course" />
                    <block.InputBlock id="startDate" type="number" label="From" />
                    <block.InputBlock id="endDate" type="number" label="To" />
                    <block.InputBlock id="location" type="text" label="Location" />
                    <block.InputBlock id="extra-info" type="text" label="Additional Information" />
                    {/* <button type="submit" className="edit-education">
                        Edit
                    </button> */}
                    <button className="delete-item">Delete</button>
                </form>
            </div>
        );
    }
}

class SkillsForm extends Component {
    render() {
        return (
            <div className="section-form">
                <form>
                    <block.InputBlock id="category" type="text" label="Category" />
                    <block.InputBlock id="details" type="text" label="Details" />
                    {/* <button type="submit" className="edit-skill">
                        Edit
                    </button> */}
                    <button className="delete-item">Delete</button>
                </form>
            </div>
        );
    }
}

export { PersonalInfoForm, ExperienceForm, EducationForm, SkillsForm };
