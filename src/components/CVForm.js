import '../styles/CVForm.css';
import React, { Component } from 'react';
import { StandardSection, ExpandableSection } from './TemplateSections';
class CVForm extends Component {
    render() {
        const { onChange } = this.props;

        return (
            <div id="cv-form">
                <StandardSection
                    onChange={onChange}
                    id="personal"
                    title="Personal Details"
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
                <ExpandableSection
                    onChange={onChange}
                    id="experience"
                    title="Work Experience"
                    fields={[
                        { id: 'company', type: 'text', label: 'Company' },
                        { id: 'position', type: 'text', label: 'Position' },
                        { id: 'startDate', type: 'number', label: 'From' },
                        { id: 'endDate', type: 'number', label: 'To' },
                        { id: 'location', type: 'text', label: 'Location' },
                        { id: 'details', type: 'textarea', label: 'Details' },
                    ]}
                />
                <ExpandableSection
                    onChange={onChange}
                    id="education"
                    title="Education"
                    fields={[
                        { id: 'institution', type: 'text', label: 'Institution' },
                        { id: 'degree', type: 'text', label: 'Degree / Course' },
                        { id: 'startDate', type: 'number', label: 'From' },
                        { id: 'endDate', type: 'number', label: 'To' },
                        { id: 'location', type: 'text', label: 'Location' },
                        { id: 'details', type: 'textarea', label: 'Additional Info' },
                    ]}
                />
                <ExpandableSection
                    onChange={onChange}
                    id="skills"
                    title="Other Skills"
                    fields={[
                        { id: 'category', type: 'text', label: 'Category' },
                        { id: 'details', type: 'textarea', label: 'Details' },
                    ]}
                />
            </div>
        );
    }
}

export default CVForm;
