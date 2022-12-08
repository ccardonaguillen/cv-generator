// import '../styles/PersonalInfoSection.css';
import React, { useEffect, useState } from 'react';
import TemplateSectionHeader from './TemplateSectionHeader';
import SectionForm from './SectionForms';
import uniqid from 'uniqid';

function StandardSection(props) {
    const { id, title, fields, onChange } = props;
    const [item, setItem] = useState({});

    useEffect(() => {
        onChange({ [id]: item });
    }, [item]);

    function updateSection({ newInfo }) {
        setItem(newInfo);
    }

    return (
        <div id={id}>
            <TemplateSectionHeader title={title} />
            <SectionForm onChange={updateSection} fields={fields} renderDefault={true} />
        </div>
    );
}

function ExpandableSection(props) {
    const [items, setItems] = useState([]);
    const { id, title, fields, onChange } = props;

    useEffect(() => {
        onChange({ [id]: items });
    }, [items]);

    function addItem() {
        setItems(items.concat({ id: uniqid(), item: {} }));
    }

    function deleteItem(itemId) {
        setItems(items.filter(({ id }) => id !== itemId));
    }

    function updateSection({ itemId, newInfo }) {
        setItems(
            items.map(({ id, item }) =>
                id === itemId ? { id, item: { ...item, ...newInfo } } : { id, item }
            )
        );
    }

    return (
        <div className="template-section" id={id}>
            <TemplateSectionHeader title={title} />
            {items.map(({ id, renderDefault }) => (
                <div className="template-section-item" key={id}>
                    <SectionForm
                        id={id}
                        onChange={updateSection}
                        fields={fields}
                        renderDefault={renderDefault}
                    />
                    <button className="del-item" onClick={() => deleteItem(id)}>
                        Delete Item
                    </button>
                </div>
            ))}
            <button className="new-item" onClick={addItem}>
                Add Item
            </button>
        </div>
    );
}
export { StandardSection, ExpandableSection };
