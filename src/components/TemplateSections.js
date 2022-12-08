/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useReducer } from 'react';
// import TemplateSectionHeader from './TemplateSectionHeader';
import SectionForm from './SectionForms';
import uniqid from 'uniqid';

function itemReducer(items, action) {
    switch (action.type) {
        case 'add':
            return items.concat({ id: uniqid(), item: {} });
        case 'delete':
            return items.filter(({ id }) => id !== action.id);
        case 'update':
            return action.id === undefined
                ? { ...items, ...action.field }
                : items.map(({ id, item }) =>
                      id === action.id ? { id, item: { ...item, ...action.field } } : { id, item }
                  );
        default:
            throw Error('Unknown action: ' + action.type);
    }
}

function StandardSection(props) {
    const { id, title, fields, onChange } = props;
    const [item, dispatch] = useReducer(
        itemReducer,
        fields.reduce((acc, field) => ({ ...acc, [field.id]: field.value }), {})
    );

    useEffect(() => {
        // console.log(item);
        onChange({ [id]: item });
    }, []);

    useEffect(() => {
        onChange({ [id]: item });
    }, [item]);

    return (
        <div id={id}>
            <TemplateSectionHeader title={title} />
            <SectionForm
                onChange={({ field }) => dispatch({ type: 'update', field })}
                fields={fields}
                renderDefault={true}
            />
        </div>
    );
}

function ExpandableSection(props) {
    const { id, title, fields, onChange } = props;

    const [items, dispatch] = useReducer(itemReducer, [
        {
            id: uniqid(),
            item: fields.reduce((acc, field) => ({ ...acc, [field.id]: field.value }), {}),
            renderDefault: true,
        },
    ]);

    useEffect(() => {
        onChange({ [id]: items });
    }, []);

    useEffect(() => {
        onChange({ [id]: items });
    }, [items]);

    return (
        <div className="template-section" id={id}>
            <TemplateSectionHeader title={title} />
            {items.map(({ id, renderDefault }) => (
                <div className="template-section-item" key={id}>
                    <SectionForm
                        id={id}
                        onChange={({ id, field }) => dispatch({ type: 'update', id, field })}
                        fields={fields}
                        renderDefault={renderDefault}
                    />
                    <button className="del-item" onClick={() => dispatch({ type: 'delete', id })}>
                        Delete Item
                    </button>
                </div>
            ))}
            <button className="new-item" onClick={() => dispatch({ type: 'add' })}>
                Add Item
            </button>
        </div>
    );
}
export { StandardSection, ExpandableSection };

function TemplateSectionHeader(props) {
    return (
        <div className="template-section-header">
            <h1>{props.title}</h1>
            <div className="template-hsep"></div>
        </div>
    );
}
