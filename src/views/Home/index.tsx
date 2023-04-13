
import { Container } from './styles'
import { useSelector } from 'react-redux'

const Home = () => {
  const store = useSelector((state: any) => state.resources)

  return (
    <Container>
      asdasd
    </Container>
  )
}

export default Home
