
import { Container, ItemCreate, Empty } from './styles'
import { useDispatch, useSelector } from 'react-redux'
import InputTimer from '@/components/InputTimer'
import DeleteIcon from '@mui/icons-material/Delete'
import TextField from '@mui/material/TextField'
import InputSelect from '@/components/InputSelect'
import Button from '@mui/material/Button'
import { useState } from 'react'
import { type Session } from '@/models/Session'
import { type SessionType } from '@/models/SessionType'
import { addRoutine } from '@/store/slices/routines'
import AddBoxIcon from '@mui/icons-material/AddBox'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useNavigate } from 'react-router-dom'

const sessionTypes: SessionType[] = [
  { id: 1, name: 'Trabajo' },
  { id: 2, name: 'Descanso' }
]

const Home = () => {
  const routines = useSelector((state: any) => state.routines)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [name, setName] = useState<string>('')
  const [sessions, setSessions] = useState<Session[]>([])
  const [newSession, setNewSession] = useState<Session | null>({
    type: sessionTypes[0],
    duration: 1500
  })

  const handleAddSession = () => {
    if (newSession?.type && newSession.duration && newSession.duration > 0) {
      setSessions([...sessions, newSession])
    } else {
      toast.error('Debes seleccionar un tipo de sesión y una duración', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: true,
        theme: 'colored'
      })
    }
  }

  const handleChangeSession = (index: number, session: Session) => {
    const newSessions = [...sessions]
    newSessions[index] = session
    setSessions(newSessions)
  }

  const handleRemoveSession = (index: number) => {
    const newSessions = [...sessions]
    newSessions.splice(index, 1)
    setSessions(newSessions)
  }

  const saveRoutine = () => {
    if (name && sessions.length > 0) {
      let slug = name.toLowerCase().replace(/ /g, '-')

      const exists = routines.routines.find((routine: any) => routine.id === slug)
      if (exists) {
        let i = 1
        while (routines.routines.find((routine: any) => routine.id === `${slug}-${i}`)) {
          i++
        }
        slug = `${slug}-${i}`
      }

      dispatch(addRoutine({ id: slug, name, sessions }))
      // go to routine
      navigate(`/routines/${slug}`)
    } else {
      toast.error('Debes ingresar un nombre y al menos una sesión', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: true,
        theme: 'colored'
      })
    }
  }

  return (
    <Container>
      <h1>Crea tu rutina</h1>
      <TextField label="Ingresa un nombre" variant="outlined" onChange={(event) => { setName(event.target.value) }} />
      <h2>Añade sesiones</h2>
      <ItemCreate>
        <InputSelect
          options={sessionTypes}
          onChange={(value) => { setNewSession({ ...newSession, type: value }) }}
          label="Tipo de sesión"
          initialValue={newSession?.type}
        />
        <InputTimer
          label="Duración"
          onChange={(value) => { setNewSession({ ...newSession, duration: value }) }}
          initialValue={newSession?.duration}
        />
        <Button
          variant="contained"
          endIcon={<AddBoxIcon />}
          size="large"
          onClick={() => { handleAddSession() }}
        >
          Añadir
        </Button>
      </ItemCreate>

      <h2>Tu rutina</h2>
      {sessions.length === 0 && <Empty>Aún no has añadido ninguna sesión</Empty>}
      { sessions.map((session, index) => (
        <ItemCreate key={index}>
          {/* <label>{index + 1}</label> */}
          <InputSelect
            label="Tipo de sesión"
            options={sessionTypes}
            onChange={(value) => { handleChangeSession(index, { ...session, type: value }) }}
            initialValue={session.type}
          />
          <InputTimer
            label="Duración"
            onChange={(value) => { handleChangeSession(index, { ...session, duration: value }) }}
            initialValue={session.duration}
          />
          <Button variant="contained" endIcon={<DeleteIcon />} size="large" onClick={() => { handleRemoveSession(index) }}>
            Elminar
          </Button>
        </ItemCreate>
      ))}
      <Button variant="contained" endIcon={<AddBoxIcon />} size="large" onClick={() => { saveRoutine() }}>
        Crear
      </Button>
      <ToastContainer />
    </Container>
  )
}

export default Home
