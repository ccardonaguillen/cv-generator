import React from 'react';

export default function InputBlock(props) {
    const { id, type, label, value } = props.attr;
    const { renderDefault, onChange } = props;

    return (
        <div className="input-block">
            {/* <label htmlFor={id}>{label}:</label> */}
            {type === 'textarea' ? (
                <textarea
                    id={id}
                    placeholder={label}
                    defaultValue={renderDefault ? value : ''}
                    onInput={onChange}
                />
            ) : (
                <input
                    id={id}
                    type={type}
                    placeholder={label}
                    defaultValue={renderDefault ? value : ''}
                    autoComplete="off"
                    onChange={onChange}
                />
            )}
        </div>
    );
}
