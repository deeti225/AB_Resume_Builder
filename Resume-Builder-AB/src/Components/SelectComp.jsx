import React from 'react'
import "../Styles/SelectComp.css"
import { FormControl, FormHelperText } from "@mui/material";


function SelectComp(props) {
    return (
        <div className="select-Component">
            <p className="select-title"> {props.title}</p>
            <FormControl fullWidth error={props.error}>
                {props.children}
                <FormHelperText>{props.errorMessage}</FormHelperText>
            </FormControl>
        </div>
    )
}

export default SelectComp