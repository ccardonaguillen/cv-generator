import React, { Component } from 'react';

class InputBlock extends Component {
    render() {
        const { id, type, label, onChange } = this.props;

        return (
            <div className="input-block">
                {/* <label htmlFor={id}>{label}:</label> */}
                {type === 'textarea' ? (
                    <textarea id={id} placeholder={label} onInput={onChange} />
                ) : (
                    <input id={id} type={type} placeholder={label} onChange={onChange} />
                )}
            </div>
        );
    }
}

export default InputBlock;
