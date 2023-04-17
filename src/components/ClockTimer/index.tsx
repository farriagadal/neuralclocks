import { CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import { Container, Buttons } from './styles'
import { useState, useEffect } from 'react'
import Button from '@mui/material/Button'
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded'
import PauseRoundedIcon from '@mui/icons-material/PauseRounded'
import ReplayRoundedIcon from '@mui/icons-material/ReplayRounded'
import { dateFormatted } from '@/utils/date'

type ClockTimerProps = {
  duration: number // in seconds
  onTimerEnd: () => void
}

const ClockTimer = ({ duration, onTimerEnd }: ClockTimerProps) => {
  const [timeLeft, setTimeLeft] = useState(duration)
  const [paused, setPaused] = useState(true)

  useEffect(() => {
    let timer: NodeJS.Timeout
    if (!paused) {
      timer = setInterval(() => {
        setTimeLeft((timeLeft) => timeLeft - 1)
      }, 1000)
    }
    return () => {
      clearInterval(timer)
    }
  }, [paused])

  useEffect(() => {
    if (timeLeft === 0) {
      setPaused(true)
      setTimeout(() => {
        onTimerEnd()
      }, 1000)
    }
  }, [timeLeft, onTimerEnd])

  // Reset timeLeft when duration changes
  useEffect(() => {
    setTimeLeft(duration)
  }, [duration])

  const handlePauseResumeClick = () => {
    setPaused((paused) => !paused)
  }

  const handleResetClick = () => {
    setPaused(false)
    setTimeLeft(duration)
  }

  return (
    <Container>
      <CircularProgressbar
        value={(duration - timeLeft) / duration * 100}
        text={dateFormatted(timeLeft)}
      />
      <Buttons>
        <Button
          variant="contained"
          endIcon={paused ? <PlayArrowRoundedIcon /> : <PauseRoundedIcon />}
          size="large"
          onClick={handlePauseResumeClick}
        >
          {paused ? 'Iniciar' : 'Pausar'}
        </Button>
        <Button
          variant="contained"
          endIcon={<ReplayRoundedIcon />}
          size="large"
          onClick={handleResetClick}
        >
          Reiniciar
        </Button>
      </Buttons>
    </Container>
  )
}

export default ClockTimer
