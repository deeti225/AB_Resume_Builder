import React, { useState } from 'react';
import NavBar from '../Components/NavBar/NavBar';
import FillDetailsSidebar from '../Components/FillDetailsSidebar';
import WorkExperienceComponent from '../Components/WorkExpComp';
import EducationComp from '../Components/EducationComp';
import "../Styles/Fill_Details.css";
import KeySkillComp from '../Components/keySkillComp';
import PersonalInfoComp from '../Components/PersonalInfoComp';
import PreviewComp from '../Components/PreviewComp';
import FootBar from '../Components/NavBar/FootBar';







const FillDetails = (props) => {
    const [tab, setTab] = useState(0);
    return (
        <div className="fillDetails">
            <NavBar active={""} />
            {tab === 4 ? null : (
                <div className="details-filling">
                    <FillDetailsSidebar tab={tab} setTab={setTab} />
                    {tab === 0 ? (
                        <PersonalInfoComp setTab={setTab} tab={tab} />
                    ) : null}
                    {tab === 3 ? < KeySkillComp setTab={setTab} tab={tab} /> : null}
                    {tab === 1 ? (
                        <WorkExperienceComponent setTab={setTab} tab={tab} />
                    ) : null}
                    {tab === 2 ? <EducationComp setTab={setTab} tab={tab} /> : null}
                </div>
            )}
            {tab === 4 ? <PreviewComp setTab={setTab} tab={tab} /> : null}
            <FootBar />
        </div>
    )
}
export default FillDetails;