import React from 'react'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import MUICheckbox from '@material-ui/core/Checkbox'

const Checkbox = ({ title, field, value, handleChange, disabled }) => {
  return (
    <div>
      <FormControlLabel
        disabled={disabled}
        control={<MUICheckbox style={{ marginLeft: 10 }} checked={value} />}
        label={title}
        labelPlacement="start"
        onChange={() => handleChange(field, !value)}
      />
    </div>
  )
}

export default Checkbox
