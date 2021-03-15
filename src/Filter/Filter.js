import React, { useState } from 'react';
import {FormControl, FormGroup, FormLabel, Checkbox, FormControlLabel} from "@material-ui/core";

function Filter(props) {

    const { sport, science } = props.filterState;

    const handleChange = (event) => {
        props.setFilterState({ ...props.filterState, [event.target.name]: event.target.checked });
    };

    return (
        <div style={{marginTop: "1rem"}}>
            <FormControl>
                <FormLabel>Filter by label</FormLabel>
                <FormGroup>
                    <FormControlLabel
                        control={<Checkbox checked={sport} onChange={handleChange} name="sport" />}
                        label="Sport"
                    />
                    <FormControlLabel
                        control={<Checkbox checked={science} onChange={handleChange} name="science" />}
                        label="Science"
                    />
                </FormGroup>
            </FormControl>
        </div>
    );
}

export default Filter;