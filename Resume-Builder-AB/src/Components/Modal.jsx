import React from 'react'
import "../Styles/Modal.css"

function Modal(props) {
    return (
        <div className="Modal" id="Modal">
            <div className="modalContainer">
                <div className="RightTickImage">
                    <img style={{ height: "50px", width: "50px" }} src="https://i.pinimg.com/originals/13/f6/bc/13f6bc8a60da4da9513e7a1f5fc57955.png" alt="" />
                </div>
                <div className="Para">
                    <p>Your resume has been saved successfully.</p>
                </div>
            </div>
        </div>
    )
}

export default Modal