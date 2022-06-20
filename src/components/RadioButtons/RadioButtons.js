import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

export default function RadioButtons(props) {
  const handleChange = (event) => {
    props.setValue(event.target.value);
  };

  return (
    <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">
        {props.title}
      </FormLabel>
      <RadioGroup
        row={props.row ? props.row : false}
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        value={props.value}
        onChange={handleChange}
      >
        {props.RadioButtons?.map((item, index) => {
          return (
            <FormControlLabel
              key={index}
              value={item.value}
              control={<Radio />}
              label={item.label}
            />
          );
        })}
      </RadioGroup>
    </FormControl>
  );
}
