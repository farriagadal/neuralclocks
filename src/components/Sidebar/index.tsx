import { Container, ToggleBtn, List, Logo } from './styles'
import { NavLink, useLocation } from 'react-router-dom'
import MenuOpenRoundedIcon from '@mui/icons-material/MenuOpenRounded'
import StickyNote2OutlinedIcon from '@mui/icons-material/StickyNote2Outlined'
import { useState } from 'react'
import AddBoxIcon from '@mui/icons-material/AddBox'

const Sidebar = () => {
  const [open, setOpen] = useState<boolean>(false)
  const location = useLocation()

  const menu = [
    {
      name: 'Mis Rutinas',
      path: '/',
      icon: <StickyNote2OutlinedIcon />,
      activeClassName: 'active'
    },
    { name: 'Crear Rutina', path: '/create', icon: <AddBoxIcon />, activeClassName: 'active' }
  ]

  const isLinkActive = (path: string) => {
    if (path === '/' && location.pathname.startsWith('/routines/')) {
      return true
    }
    return location.pathname === path
  }

  return (
    <Container open={open}>
      <ToggleBtn onClick={() => { setOpen(!open) }} open={open}>
        <MenuOpenRoundedIcon />
      </ToggleBtn>
      <Logo open={open} src="/logo.png" alt="logo" />
      <List open={open}>
        {menu.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className={isLinkActive(item.path) ? item.activeClassName : ''}
          >
            {item.icon}
            <p>{item.name}</p>
          </NavLink>
        ))}
      </List>
    </Container>
  )
}

export default Sidebar
