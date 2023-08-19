import React from 'react'
import { TextField } from '@mui/material';
import "../Styles/InputComp.css";
import { inputChecks } from "../Utilities/InputChecks"





function InputComp(props) {
    return (
        <div className="input-component">
            <p className="input-title">{props.title}</p>
            <TextField
                {...props.register(props.name, inputChecks(props.type, props.name))}

                multiline={props.multiline}
                rows={5}
                value={props.value}
                onChange={(event) => props.setValue(event.target.value.toString())}

                error={props.error}
                variant='outlined' type={props.type} name={props.name}
                helperText={props.errorMessage ? props.errorMessage : null}>
            </TextField>
        </div>
    )
}

export default InputComp
