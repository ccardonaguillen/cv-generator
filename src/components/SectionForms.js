// import '../styles/PersonalInfoSection.css';
import React from 'react';
import InputBlock from './InputBlock';

export default function SectionForm(props) {
    function updateItem(e) {
        const { id, onChange } = props;
        const name = e.target.id;
        const value = e.target.value;

        onChange({ id, field: { [name]: value } });
    }

    return (
        <div>
            <form className="section-form">
                {props.fields.map((attr, idx) => (
                    <InputBlock
                        key={idx}
                        attr={attr}
                        onChange={updateItem}
                        renderDefault={props.renderDefault}
                    />
                ))}
            </form>
        </div>
    );
}
