import React, { Component } from 'react';

class Input extends Component {
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

class TextArea extends Component {
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

export { Input, TextArea };
