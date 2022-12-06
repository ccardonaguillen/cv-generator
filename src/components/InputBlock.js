import React, { Component } from 'react';

class InputBlock extends Component {
    render() {
        const { id, type, label, onChange } = this.props;

        return (
            <div className="input-block">
                <label htmlFor={id}>{label}:</label>
                {type === 'textarea' ? (
                    <textarea id={id} onInput={onChange} />
                ) : (
                    <input id={id} type={type} onChange={onChange} />
                )}
            </div>
        );
    }
}

export default InputBlock;
