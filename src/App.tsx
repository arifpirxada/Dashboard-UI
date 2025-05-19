import './App.css'
import Layout from './layout/Layout'
import Router from './routes/Router'

function App() {
  console.log("App component loaded");
  return (
    <>
      <Layout children={ <Router /> } />
    </>
  )
}

export default App
