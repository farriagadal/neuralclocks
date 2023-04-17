
import { Container, ListSessions, Item } from './styles'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import ClockTimer from '@/components/ClockTimer'
import { useState } from 'react'
import { dateFormatted } from '@/utils/date'

const Routine = () => {
  const { id } = useParams()
  const routine = useSelector((state: any) => state.routines.routines.find((routine: any) => routine.id === id))
  const [indexSession, setIndexSession] = useState(0)
  const currentSession = routine.sessions[indexSession]

  const handleTimerEnd = () => {
    if (indexSession < routine.sessions.length - 1) {
      alert('Sesión terminada!')
      setIndexSession(indexSession + 1)
    } else {
      alert('Terminaste la rutina!')
    }
  }

  return (
    <Container>
      <h1>Rutina</h1>
      <h2>{routine.name}</h2>
      <ClockTimer key={indexSession} duration={currentSession.duration} onTimerEnd={() => { handleTimerEnd() }} />
      <ListSessions>
        {routine.sessions.map((session: any, index: number) => (
          <Item key={index} active={index === indexSession}>
            <span>{index + 1}</span>
            <span>{session.type.name}</span>
            <span>{dateFormatted(session.duration)}</span>
          </Item>
        ))}
      </ListSessions>
    </Container>
  )
}

export default Routine
