import { useState } from 'react'
import dayjs from 'dayjs'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { MobileTimePicker } from '@mui/x-date-pickers/MobileTimePicker'

type InputTimerProps = {
  onChange?: (value: number) => void
  label?: string
  initialValue?: number
}

const InputTimer = ({ label, onChange, initialValue }: InputTimerProps) => {
  // convert initialValue in seconds to a dayjs object
  const initialDayjs = initialValue
    ? dayjs('2000-01-01T00:00:00Z').add(initialValue, 'seconds')
    : dayjs('2000-01-01T00:00:00Z')

  const [timeValue, setTimeValue] = useState(initialDayjs)

  const handleTimeChange = (newValue: any) => {
    setTimeValue(newValue)
    // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
    const seconds = newValue.minute() * 60 + newValue.second()
    onChange?.(seconds)
  }

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <MobileTimePicker
          label={label}
          ampm={false}
          format="mm:ss"
          value={timeValue}
          onChange={handleTimeChange}
          openTo="minutes" // Agrega esta línea para abrir directamente en minutos
          views={['minutes', 'seconds']} // Agrega esta línea para deshabilitar la selección de horas
        />
      </LocalizationProvider>
    </>
  )
}

export default InputTimer
