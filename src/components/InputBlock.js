import React, { Component } from 'react';

class InputBlock extends Component {
    render() {
        const { id, type, label, value } = this.props.attr;
        const { renderDefault, onChange } = this.props;

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
}

export default InputBlock;
