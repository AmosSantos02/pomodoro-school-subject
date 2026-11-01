import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

function Layout() {
  return (
    <>
      <Navbar />
      <main className="container">
        {/* O Outlet é o "buraco" onde a página da rota atual aparece */}
        <Outlet />
      </main>
      <footer className="footer">
        <small>Cronômetro de Estudos · {new Date().getFullYear() }</small>
      </footer>
    </>
  )
}

export default Layout
