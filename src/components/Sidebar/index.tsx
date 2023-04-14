import { Container, ToggleBtn, List } from './styles'
import { NavLink } from 'react-router-dom'
import MenuOpenRoundedIcon from '@mui/icons-material/MenuOpenRounded'
import HistoryIcon from '@mui/icons-material/History'
import StickyNote2OutlinedIcon from '@mui/icons-material/StickyNote2Outlined'
import { useState } from 'react'

const Sidebar = () => {
  const [open, setOpen] = useState<boolean>(false)

  const menu = [
    { name: 'Mis Rutinas', path: '/', icon: <StickyNote2OutlinedIcon /> },
    { name: 'Crear Rutina', path: '/create', icon: <HistoryIcon /> }
  ]

  return (
    <Container open={open}>
      <ToggleBtn onClick={() => { setOpen(!open) }} open={open}>
        <MenuOpenRoundedIcon />
      </ToggleBtn>
      <List open={open}>
        {menu.map((item, index) => (
          <NavLink to={item.path} key={index}>
            {item.icon}
            <p>{item.name}</p>
          </NavLink>
        ))}
      </List>
    </Container>
  )
}

export default Sidebar
