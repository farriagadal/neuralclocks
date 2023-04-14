
import { Container, ListSessions } from './styles'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import ClockTimer from '@/components/ClockTimer'
import { useState } from 'react'

const Routine = () => {
  const { id } = useParams()
  const routine = useSelector((state: any) => state.routines.routines.find((routine: any) => routine.id === id))
  const [indexSession, setIndexSession] = useState(0)
  const currentSession = routine.sessions[indexSession]

  const handleTimerEnd = () => {
    if (indexSession < routine.sessions.length - 1) {
      setIndexSession(indexSession + 1)
    } else {
      alert('Terminaste la rutina')
    }
  }

  return (
    <Container>
      <h1>Rutina</h1>
      {routine.name}
      {currentSession.duration}
      <ClockTimer duration={currentSession.duration} onTimerEnd={() => { handleTimerEnd() }} />
      <ListSessions>
        {routine.sessions.map((session: any, index: number) => (
          <li key={index} className={session.id === currentSession.id ? 'active' : ''}>
            {session.type.name}
            {session.duration}
          </li>
        ))}
      </ListSessions>
    </Container>
  )
}

export default Routine
