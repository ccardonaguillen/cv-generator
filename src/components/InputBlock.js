import React, { Component } from 'react';

class InputBlock extends Component {
    render() {
        const { id, type, label, onChange } = this.props;

        return (
            <div className="input-block">
                <label htmlFor={id}>{label}:</label>
                <input id={id} type={type} onChange={onChange} />
            </div>
        );
    }
}

class TextAreaBlock extends Component {
    render() {
        const { id, label, onChange } = this.props;

        return (
            <div className="input-block">
                <label htmlFor={id}>{label}:</label>
                <textarea id={id} onInput={onChange} />
            </div>
        );
    }
}

export { InputBlock, TextAreaBlock };
