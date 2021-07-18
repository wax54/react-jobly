import React, { useState } from "react";

const SimpleForm = ( {className, INITIAL_STATE, onSubmit, submitText="Submit", errors=[]} ) => {
    
    const [formData, setFormData] = useState(INITIAL_STATE);
    const handleChange = evt => setFormData(data => ({...data, [evt.target.name] : evt.target.value}))
    const handleSubmit = evt => {
        evt.preventDefault(); 
        onSubmit(formData);
    }
    return (
        <form className={className} onSubmit={handleSubmit}>
            {errors.map(message => 
                <div key={message} className={`${className}-error`}>
                    {message}
                </div> 
            )}
            {Object.keys(INITIAL_STATE).map(name => (
                <span key={name}>
                    <label htmlFor={name}> {name} </label>
                    <input
                        type="text"
                        name={name}
                        id={name}
                        value={formData[name]}
                        onChange={handleChange} 
                    />
                </span>
            ))}
            <button>{submitText}</button>
        </form> 
    )
};
export default SimpleForm