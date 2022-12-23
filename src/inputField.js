import {TextField} from "@mui/material";
import * as React from "react";

const InputField = (props) => {
    const { handleChange, label, name, type, value, rows } = props;
    return (
        <div className="mb-5">
            <TextField value={value} onChange={handleChange}  htmlFor={name} label={name} variant="outlined" name={name} rows={rows} fullWidth required /></div>
    )
}

export default InputField