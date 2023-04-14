import { CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import { Container } from './styles'
import { useState, useEffect } from 'react'

type ClockTimerProps = {
  duration: number // in seconds
  onTimerEnd: () => void
}

const ClockTimer = ({ duration, onTimerEnd }: ClockTimerProps) => {
  const [timeLeft, setTimeLeft] = useState(duration)
  const [paused, setPaused] = useState(false)

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
      onTimerEnd()
    }
  }, [timeLeft, onTimerEnd])

  const handlePauseResumeClick = () => {
    setPaused((paused) => !paused)
  }

  const handleResetClick = () => {
    setPaused(false)
    setTimeLeft(duration)
  }

  const minutes = Math.floor(timeLeft / 60)
    .toString()
    .padStart(2, '0')
  const seconds = (timeLeft % 60).toString().padStart(2, '0')

  return (
    <Container>
      <CircularProgressbar
        value={(duration - timeLeft) / duration * 100}
        text={`${minutes}:${seconds}`}
      />
      <div>
        <button onClick={handlePauseResumeClick}>{paused ? 'Resume' : 'Pause'}</button>
        <button onClick={handleResetClick}>Reset</button>
      </div>
    </Container>
  )
}

export default ClockTimer
