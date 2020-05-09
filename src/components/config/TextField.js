import React from 'react'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import MUITextField from '@material-ui/core/TextField'

const TextField = ({ title, field, value, handleChange, disabled }) => {
  return (
    <div>
      <FormControlLabel
        disabled={disabled}
        control={<MUITextField style={{ marginLeft: 10 }} value={value} />}
        label={title}
        labelPlacement="start"
        onChange={e => handleChange(field, e.target.value)}
      />
    </div>
  )
}

export default TextField
