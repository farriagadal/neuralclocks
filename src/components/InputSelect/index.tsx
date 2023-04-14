import { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { type SelectChangeEvent } from '@mui/material/Select'

type Option = {
  id: number
  name: string
}

type InputSelectProps = {
  label?: string
  options: Option[]
  onChange?: (value: any) => void
  initialValue?: Option
}

const InputSelect = ({ label, options, initialValue, onChange }: InputSelectProps) => {
  const [value, setValue] = useState<any>(initialValue?.id ?? '')

  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value)
    onChange?.(options.find((option) => option.id === parseInt(event.target.value)))
  }

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="select-label">{label}</InputLabel>
        <Select
          labelId="select-label"
          value={value}
          label={label}
          onChange={handleChange}
        >
          {
            options.map((option, index) => (
              <MenuItem key={index} value={option.id}>{option.name}</MenuItem>
            ))
          }
        </Select>
      </FormControl>
    </Box>
  )
}

export default InputSelect
