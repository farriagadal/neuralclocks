
import { Container, ListSessions, Item } from './styles'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import ClockTimer from '@/components/ClockTimer'
import { useState } from 'react'
import { dateFormatted } from '@/utils/date'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Routine = () => {
  const { id } = useParams()
  const routine = useSelector((state: any) => state.routines.routines.find((routine: any) => routine.id === id))
  const [indexSession, setIndexSession] = useState(0)
  const currentSession = routine.sessions[indexSession]

  const handleTimerEnd = () => {
    if (indexSession < routine.sessions.length - 1) {
      toast.info('Sesión terminada!', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: true,
        theme: 'colored'
      })
      setIndexSession(indexSession + 1)
    } else {
      toast.info('Terminaste la rutina!', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: true,
        theme: 'colored'
      })
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
      <ToastContainer />
    </Container>
  )
}

export default Routine
