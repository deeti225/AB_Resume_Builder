import React from 'react'
import "../Styles/TemplateHeader.css";



const TemplateHeader = (props) => {

    const NoPic = props.personalInfo.firstName[0] + (props.personalInfo.lastName.length > 0 ? props.personalInfo.lastName[0] : " ");

    return (
        <>
            <div style={{ backgroundColor: props.bgColor }}>
                <div className="template-header">
                    <div className="template-header-first">
                        {props.personalInfo.profileImg.length > 0 ? (
                            <div className="template-image-comp">
                                <img className='template-profile-img'
                                    src={props.personalInfo.profileImg} alt="Profile" />
                            </div>
                        ) : (
                            <div
                                className="template-image-comp" style={{ backgroundColor: props.primaryColor }}>
                                <p className='template-img-text' style={{ color: props.bgColor }}>
                                    {NoPic}

                                </p>
                            </div>
                        )}


                        <div className="template-user-details-comp">
                            <h2 className="template-user-name" style={{ color: props.primaryColor }}>
                                {props.personalInfo.firstName + " " + props.personalInfo.lastName}
                            </h2>
                            <p className="template-user-designation" style={{ color: props.secondaryColor }}>
                                {props.workExperience[0].jobTitle}
                            </p>
                        </div>
                    </div>
                    <p style={{ color: props.primaryColor }} className="template-header-second">
                        {props.personalInfo.address + " " + props.personalInfo.city + " " + props.personalInfo.state}
                    </p>


                </div>
                <p className="template-user-objective" style={{ color: props.secondaryColor, paddingBottom: "5px" }}>
                    {props.personalInfo.objective}
                </p>



            </div>
        </>
    )
}

export default TemplateHeader;