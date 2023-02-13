import { Outlet } from 'react-router-dom'
import './App.css'
import { Footer } from './components/footer/Footer'
import { Navbar } from './components/navbar/Navbar'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="container text-center d-flex align-items-center my-3" style={{minHeight: '90vh'}}>
        <Outlet></Outlet>
      </div>
      <Footer/>
    </div>
  )
}

export default App
