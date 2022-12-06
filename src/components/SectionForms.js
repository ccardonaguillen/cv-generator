// import '../styles/PersonalInfoSection.css';
import React, { Component } from 'react';
import InputBlock from './InputBlock';

function updateItem(e) {
    const { id, onChange } = this.props;
    const field = e.target.id;
    const value = e.target.value;

    onChange({ itemId: id, newInfo: { [field]: value } });
}

class SectionForm extends Component {
    updateItem = updateItem.bind(this);

    render() {
        return (
            <div className="section-form">
                <form>
                    {this.props.fields.map(({ id, type, label }, idx) => (
                        <InputBlock
                            key={idx}
                            id={id}
                            type={type}
                            label={label}
                            onChange={this.updateItem}
                        />
                    ))}
                </form>
            </div>
        );
    }
}

export default SectionForm;
