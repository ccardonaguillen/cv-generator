// import '../styles/PersonalInfoSection.css';
import React, { Component } from 'react';
import * as block from './InputBlock';

function updateSection(e) {
    const { id, onChange } = this.props;
    const field = e.target.id;
    const value = e.target.value;

    onChange({ newId: id, newInfo: { [field]: value } });
}

class PersonalInfo extends Component {
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
                    <block.TextAreaBlock
                        id="about"
                        label="About"
                        onChange={this.updatePersonalInfo}
                    />
                </form>
            </div>
        );
    }
}

class Experience extends Component {
    updateWorkExp = updateSection.bind(this);

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
                    <block.TextAreaBlock
                        id="details"
                        label="Details"
                        onChange={this.updateWorkExp}
                    />
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

class Education extends Component {
    updateEducation = updateSection.bind(this);

    render() {
        const { id, onDelBtnClick } = this.props;
        return (
            <div className="section-form">
                <form>
                    <block.InputBlock
                        id="institution"
                        type="text"
                        label="Institution"
                        onChange={this.updateEducation}
                    />
                    <block.InputBlock
                        id="degree"
                        type="text"
                        label="Degree / Course"
                        onChange={this.updateEducation}
                    />
                    <block.InputBlock
                        id="startDate"
                        type="number"
                        label="From"
                        onChange={this.updateEducation}
                    />
                    <block.InputBlock
                        id="endDate"
                        type="number"
                        label="To"
                        onChange={this.updateEducation}
                    />
                    <block.InputBlock
                        id="location"
                        type="text"
                        label="Location"
                        onChange={this.updateEducation}
                    />
                    <block.InputBlock
                        id="extra-info"
                        type="text"
                        label="Additional Information"
                        onChange={this.updateEducation}
                    />
                    {/* <button type="submit" className="edit-education">
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

class Skills extends Component {
    updateSkill = updateSection.bind(this);

    render() {
        const { id, onDelBtnClick } = this.props;
        return (
            <div className="section-form">
                <form>
                    <block.InputBlock
                        id="category"
                        type="text"
                        label="Category"
                        onChange={this.updateSkill}
                    />
                    <block.InputBlock
                        id="details"
                        type="text"
                        label="Details"
                        onChange={this.updateSkill}
                    />
                    {/* <button type="submit" className="edit-skill">
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

export { PersonalInfo, Experience, Education, Skills };
