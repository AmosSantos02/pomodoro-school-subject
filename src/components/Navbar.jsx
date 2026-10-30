import { NavLink } from 'react-router-dom'

function Navbar() {
  // TODO [passo 13 do GUIA] o NavLink já recebe a classe "active" sozinho; confira no CSS (.navbar__links a.active) e teste a navegação
    const nomeApp = 'Cronômetro de Estudos';
  return (
    <header className="navbar">
      <div className="navbar__inner">
        <span className="navbar__brand">{nomeApp}</span>
        <nav className="navbar__links" aria-label="Navegação principal">
          <NavLink to="/materias">Matérias</NavLink>
          <NavLink to="/estudar">Estudar</NavLink>
          <NavLink to="/historico">Histórico</NavLink>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
