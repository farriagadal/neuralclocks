import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Create from './views/Create'
import Home from './views/Home'
import Routine from './views/Routine'

function Page404 () {
  return (
    <div>
      <h2>404 NOT FOUND</h2>
    </div>
  )
}

function App () {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/create" Component={Create} />
          <Route path="/routines/:id" Component={Routine} />
          <Route path="*" Component={Page404} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
