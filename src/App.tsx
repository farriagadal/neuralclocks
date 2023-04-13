import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './views/Home'

function OtherPage () {
  return (
    <div>
      <h2>Other Page</h2>
    </div>
  )
}

function App () {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="*" Component={OtherPage} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
