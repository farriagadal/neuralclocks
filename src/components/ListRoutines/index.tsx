
import { Container, Table, Empty } from './styles'
import { useSelector } from 'react-redux'
import AddBoxIcon from '@mui/icons-material/AddBox'
import { useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button'
import { type Routine } from '@/models/Routine'

const ListRoutines = () => {
  const navigate = useNavigate()
  const { routines } = useSelector((state: any) => state.routines)

  return (
    <Container>
      <h1>Tus rutinas</h1>
      {routines.length === 0  
        ? <Empty>Aún no has añadido ninguna rutina</Empty>
        : <Table>
            <thead>
              <tr>
                <th>#</th>
                <th>Nombre</th>
                <th>Sesiones</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {routines.map((routine: Routine, index: number) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{routine.name}</td>
                  <td>{routine.sessions.length}</td>
                  <td>
                  <Button
                      variant="contained"
                      size="large"
                      onClick={() => { navigate(`/routines/${routine.id}`) }}
                    >
                      Ir
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
      }
      <Button variant="contained" endIcon={<AddBoxIcon />} size="large" onClick={() => { navigate('/create') }}>
        Nueva rutina
      </Button>
    </Container>
  )
}

export default ListRoutines
