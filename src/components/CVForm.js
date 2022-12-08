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
                        {
                            id: 'fullName',
                            type: 'text',
                            label: 'Full Name',
                            value: 'Homer J. Simpson',
                        },
                        {
                            id: 'email',
                            type: 'email',
                            label: 'Email',
                            value: 'homerjsimpson@outlook.com',
                        },
                        { id: 'phone', type: 'tel', label: 'Phone', value: '(555) 555-555' },
                        {
                            id: 'address',
                            type: 'text',
                            label: 'Address',
                            value: '123 Fake Street, Springfield, IL',
                        },
                        { id: 'github', type: 'text', label: 'Github', value: 'homerjsimpson' },
                        { id: 'linkedin', type: 'text', label: 'LinkedIn', value: 'homerjsimpson' },
                        {
                            id: 'about',
                            type: 'textarea',
                            label: 'About',
                            value:
                                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ' +
                                'incididunt ut labore et dolore magna aliqua. Tempus imperdiet nulla malesuada ' +
                                'pellentesque elit eget gravida cum. Pellentesque dignissim enim sit amet venenatis ' +
                                'urna cursus eget. Aliquet risus feugiat in ante metus.',
                        },
                    ]}
                />
                <ExpandableSection
                    onChange={onChange}
                    id="experience"
                    title="Work Experience"
                    fields={[
                        {
                            id: 'company',
                            type: 'text',
                            label: 'Company',
                            value: 'Springfield Nuclear Power Plant',
                        },
                        {
                            id: 'position',
                            type: 'text',
                            label: 'Position',
                            value: 'Safety inspector',
                        },
                        { id: 'startDate', type: 'text', label: 'From', value: 'Dec 1989' },
                        { id: 'endDate', type: 'text', label: 'To' },
                        {
                            id: 'location',
                            type: 'text',
                            label: 'Location',
                            value: 'Springfield (IL)',
                        },
                        {
                            id: 'details',
                            type: 'textarea',
                            label: 'Details',
                            value:
                                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ' +
                                'incididunt ut labore et dolore magna aliqua. Tempus imperdiet nulla malesuada ' +
                                'pellentesque elit eget gravida cum. Pellentesque dignissim enim sit amet venenatis ' +
                                'urna cursus eget. Aliquet risus feugiat in ante metus.',
                        },
                    ]}
                />
                <ExpandableSection
                    onChange={onChange}
                    id="education"
                    title="Education"
                    fields={[
                        {
                            id: 'institution',
                            type: 'text',
                            label: 'Institution',
                            value: 'Springfield University',
                        },
                        {
                            id: 'degree',
                            type: 'text',
                            label: 'Degree / Course',
                            value: 'Nuclear Physics',
                        },
                        { id: 'startDate', type: 'number', label: 'From', value: 1993 },
                        { id: 'endDate', type: 'number', label: 'To', value: 1993 },
                        {
                            id: 'location',
                            type: 'text',
                            label: 'Location',
                            value: 'Springfield (IL)',
                        },
                        {
                            id: 'details',
                            type: 'textarea',
                            label: 'Additional Info',
                            value: 'Graduted with distinction',
                        },
                    ]}
                />
                <ExpandableSection
                    onChange={onChange}
                    id="skills"
                    title="Other Skills"
                    fields={[
                        { id: 'category', type: 'text', label: 'Category', value: 'Languages' },
                        {
                            id: 'details',
                            type: 'textarea',
                            label: 'Details',
                            value: 'American (mother tongue)',
                        },
                    ]}
                />
            </div>
        );
    }
}

export default CVForm;
