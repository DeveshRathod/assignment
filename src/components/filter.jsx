import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function SelectSmall({ setSelected, selected }) {
  const handleChange = (event) => {
    event.preventDefault();
    setSelected(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small-label">Price</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={selected}
        label="price"
        onChange={handleChange}
      >
        <MenuItem value={0}>None</MenuItem>
        <MenuItem value={1}>{"<"} 400</MenuItem>
        <MenuItem value={2}>400 - 600</MenuItem>
        <MenuItem value={3}>{">"} 600</MenuItem>
      </Select>
    </FormControl>
  );
}
