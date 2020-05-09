import React from 'react'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import MenuItem from '@material-ui/core/MenuItem'
import MUISelect from '@material-ui/core/Select'

function Select({ title, data, handleChange }) {
  return (
    <div>
      <FormControlLabel
        label={title}
        labelPlacement="start"
        control={
          <MUISelect
            onChange={e => handleChange(title, e.target.value)}
            value={data.value}
            style={{ marginLeft: 10 }}
          >
            {data.options.map((option, index) => (
              <MenuItem key={index} value={option}>
                {option}
              </MenuItem>
            ))}
          </MUISelect>
        }
      />
    </div>
  )
}

export default Select
