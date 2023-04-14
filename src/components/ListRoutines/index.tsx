
import { Container, List, ListItem } from './styles'
import { useSelector } from 'react-redux'
import AddRoundedIcon from '@mui/icons-material/AddRounded'
import { useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button'
import { type Routine } from '@/models/Routine'

const ListRoutines = () => {
  const navigate = useNavigate()
  const { routines } = useSelector((state: any) => state.routines)

  return (
    <Container>
      <h1>Tus rutinas</h1>
      <List>
        {routines.map((routine: Routine, index: number) => (
          <ListItem key={index}>
            <p>{routine.name}</p>
            <Button variant="contained" size="large" onClick={() => { navigate(`/routines/${routine.id}`) }}>
              Ir
            </Button>
          </ListItem>
        ))}
      </List>
      <Button variant="contained" endIcon={<AddRoundedIcon />} size="large" onClick={() => { navigate('/create') }}>
        Crear
      </Button>
    </Container>
  )
}

export default ListRoutines
