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
        {/* TODO [passo 1 do GUIA] trocar o ano fixo por uma expressão JavaScript dentro das chaves {} */}
        <small>Cronômetro de Estudos · {new Date().getFullYear() }</small>
      </footer>
    </>
  )
}

export default Layout
