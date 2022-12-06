import React, { Component } from 'react';

class InputBlock extends Component {
    render() {
        const { id, type, label, value } = this.props.attr;
        const { onChange } = this.props;

        return (
            <div className="input-block">
                {/* <label htmlFor={id}>{label}:</label> */}
                {type === 'textarea' ? (
                    <textarea id={id} placeholder={label} defaultValue={value} onInput={onChange} />
                ) : (
                    <input
                        id={id}
                        type={type}
                        placeholder={label}
                        defaultValue={value}
                        autoComplete="off"
                        onChange={onChange}
                    />
                )}
            </div>
        );
    }
}

export default InputBlock;
