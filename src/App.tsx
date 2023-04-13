import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

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
      <Routes>
        <Route path="/" Component={OtherPage} />
        <Route path="/route" Component={OtherPage} />
        <Route path="*" Component={OtherPage} />
      </Routes>
    </Router>
  )
}

export default App
