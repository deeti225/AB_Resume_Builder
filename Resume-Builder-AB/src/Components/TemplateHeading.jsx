import React from 'react';
import "../Styles/TemplateHeading.css";


const TemplateHeading = (props) => {
    return (
        <div>
            <h2 className="professional-experience-heading" style={{ color: props.color }}>
                {props.title}
            </h2>
            <hr className='breakLine' style={{ backgroundColor: props.color }} />
        </div>
    )
}
export default TemplateHeading;
