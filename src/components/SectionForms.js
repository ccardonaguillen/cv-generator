// import '../styles/PersonalInfoSection.css';
import React, { Component } from 'react';
import * as block from './InputBlock';

function updateSection(e) {
    const { id, onChange } = this.props;
    const field = e.target.id;
    const value = e.target.value;

    onChange({ itemId: id, newInfo: { [field]: value } });
}

class SectionForm extends Component {
    updateSection = updateSection.bind(this);

    render() {
        return (
            <div className="section-form">
                <form>
                    {this.fields.map(({ id, type, label }, idx) =>
                        type !== 'textarea' ? (
                            <block.Input
                                key={idx}
                                id={id}
                                type={type}
                                label={label}
                                onChange={this.updateSection}
                            />
                        ) : (
                            <block.TextArea
                                key={idx}
                                id={id}
                                label={label}
                                onChange={this.updateSection}
                            />
                        )
                    )}
                </form>
            </div>
        );
    }
}

class PersonalInfo extends Component {
    updatePersonalInfo = updateSection.bind(this);

    fields = [
        { id: 'fullName', type: 'text', label: 'Full Name' },
        { id: 'email', type: 'email', label: 'Email' },
        { id: 'phone', type: 'tel', label: 'Phone' },
        { id: 'address', type: 'text', label: 'Address' },
        { id: 'github', type: 'text', label: 'Github' },
        { id: 'linkedin', type: 'text', label: 'LinkedIn' },
        { id: 'about', type: 'textarea', label: 'About' },
    ];

    render() {
        return (
            <div className="section-form">
                <form>
                    {this.fields.map(({ id, type, label }, idx) =>
                        type !== 'textarea' ? (
                            <block.Input
                                key={idx}
                                id={id}
                                type={type}
                                label={label}
                                onChange={this.updatePersonalInfo}
                            />
                        ) : (
                            <block.TextArea
                                key={idx}
                                id={id}
                                label={label}
                                onChange={this.updatePersonalInfo}
                            />
                        )
                    )}
                </form>
            </div>
        );
    }
}

class Experience extends Component {
    updateWorkExp = updateSection.bind(this);

    fields = [
        { id: 'company', type: 'text', label: 'Company' },
        { id: 'position', type: 'text', label: 'Position' },
        { id: 'startDate', type: 'number', label: 'From' },
        { id: 'endDate', type: 'number', label: 'To' },
        { id: 'location', type: 'text', label: 'Location' },
        { id: 'details', type: 'textarea', label: 'Details' },
    ];

    render() {
        const { id, onDelBtnClick } = this.props;
        return (
            <div className="section-form">
                <form>
                    {this.fields.map(({ id, type, label }, idx) =>
                        type !== 'textarea' ? (
                            <block.Input
                                key={idx}
                                id={id}
                                type={type}
                                label={label}
                                onChange={this.updateWorkExp}
                            />
                        ) : (
                            <block.TextArea
                                key={idx}
                                id={id}
                                label={label}
                                onChange={this.updateWorkExp}
                            />
                        )
                    )}
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

    fields = [
        { id: 'institution', type: 'text', label: 'Institution' },
        { id: 'degree', type: 'text', label: 'Degree / Course' },
        { id: 'startDate', type: 'number', label: 'From' },
        { id: 'endDate', type: 'number', label: 'To' },
        { id: 'location', type: 'text', label: 'Location' },
        { id: 'details', type: 'textarea', label: 'Additional Info' },
    ];

    render() {
        const { id, onDelBtnClick } = this.props;
        return (
            <div className="section-form">
                <form>
                    {this.fields.map(({ id, type, label }, idx) =>
                        type !== 'textarea' ? (
                            <block.Input
                                key={idx}
                                id={id}
                                type={type}
                                label={label}
                                onChange={this.updateEducation}
                            />
                        ) : (
                            <block.TextArea
                                key={idx}
                                id={id}
                                label={label}
                                onChange={this.updateEducation}
                            />
                        )
                    )}
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

    fields = [
        { id: 'category', type: 'text', label: 'Category' },
        { id: 'details', type: 'textarea', label: 'Details' },
    ];

    render() {
        const { id, onDelBtnClick } = this.props;
        return (
            <div className="section-form">
                <form>
                    {this.fields.map(({ id, type, label }, idx) =>
                        type !== 'textarea' ? (
                            <block.Input
                                key={idx}
                                type={type}
                                label={label}
                                onChange={this.updateSkill}
                            />
                        ) : (
                            <block.TextArea
                                key={idx}
                                id={id}
                                label={label}
                                onChange={this.updateSkill}
                            />
                        )
                    )}
                </form>
                <button className="delete-item" onClick={() => onDelBtnClick(id)}>
                    Delete
                </button>
            </div>
        );
    }
}

export default SectionForm;
export { PersonalInfo, Experience, Education, Skills };
