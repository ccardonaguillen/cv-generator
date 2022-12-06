// import '../styles/PersonalInfoSection.css';
import React, { Component } from 'react';
import TemplateSectionHeader from './TemplateSectionHeader';
import SectionForm from './SectionForms';
import uniqid from 'uniqid';

function addItem() {
    this.setState(
        {
            items: this.state.items.concat({ id: uniqid(), item: {} }),
        },
        () => updateCVForm(this)
    );
}

function deleteItem(itemId) {
    this.setState(
        {
            items: this.state.items.filter(({ id }) => id !== itemId),
        },
        () => updateCVForm(this)
    );
}

function updateSection({ itemId, newInfo }) {
    const newState =
        itemId === undefined
            ? newInfo
            : {
                  items: this.state.items.map(({ id, item }) =>
                      id === itemId ? { id, item: { ...item, ...newInfo } } : { id, item }
                  ),
              };

    this.setState(newState, () => updateCVForm(this));
}

function updateCVForm(section) {
    section.props.onChange({ [section.props.id]: section.state });
}

// function componentDidMount() {
//     this.addItem();
// }

class StandardSection extends Component {
    updateSection = updateSection.bind(this);

    componentDidMount() {
        this.setState(
            this.props.fields.reduce((acc, field) => ({ ...acc, [field.id]: field.value }), {}),
            () => updateCVForm(this)
        );
    }

    render() {
        const { id, title, fields } = this.props;

        return (
            <div className="section" id={id}>
                <TemplateSectionHeader title={title} />
                <SectionForm onChange={this.updateSection} fields={fields} />
            </div>
        );
    }
}

class ExpandableSection extends Component {
    state = { items: [] };

    addItem = addItem.bind(this);
    deleteItem = deleteItem.bind(this);
    updateSection = updateSection.bind(this);

    componentDidMount() {
        this.addItem();
        this.setState(
            {
                items: this.state.items.concat({
                    id: uniqid(),
                    item: this.props.fields.reduce(
                        (acc, field) => ({ ...acc, [field.id]: field.value }),
                        {}
                    ),
                }),
            },
            () => updateCVForm(this)
        );
    }

    render() {
        const { id, title, fields } = this.props;

        return (
            <div className="section" id={id}>
                <TemplateSectionHeader title={title} />
                {this.state.items.map((item) => (
                    <div className="section-item" key={item.id}>
                        <SectionForm id={item.id} onChange={this.updateSection} fields={fields} />
                        <button id="del-item" onClick={() => this.deleteItem(item.id)}>
                            Delete
                        </button>
                    </div>
                ))}
                <button id="new-item" onClick={this.addItem}>
                    Add
                </button>
            </div>
        );
    }
}

export { StandardSection, ExpandableSection };
