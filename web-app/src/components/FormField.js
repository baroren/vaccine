import React from 'react';

const FormField = ({ label, type, name, value, onChange, required }) => {
    return (
        <div>
            <label>{label}</label>
            <input
                type={type}
                name={name}
                value={value}
                onChange={(e) => onChange(e.target.name, e.target.value)}
                required={required}
            />
        </div>
    );
};

export default FormField;
