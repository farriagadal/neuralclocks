import React, { useState } from 'react';
import TimePicker from '@mui/lab/TimePicker';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';

const InputTimer = () => {
  const [timeValue, setTimeValue] = useState(null);

  const handleTimeChange = (newValue: any) => {
    setTimeValue(newValue)
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <TimePicker
        ampm={false} // Cambia a 'true' si deseas utilizar AM/PM en lugar de un formato de 24 horas.
        openTo="hours"
        views={['hours', 'minutes']}
        inputFormat="HH:mm"
        mask="__:__"
        label="Seleccione hora y minuto"
        value={timeValue}
        onChange={handleTimeChange}
        renderInput={(params: any) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
}

export default InputTimer
