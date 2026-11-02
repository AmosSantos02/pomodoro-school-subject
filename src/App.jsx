import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout'
import MateriasPage from './pages/MateriasPage'
import EstudarPage from './pages/EstudarPage'
import HistoricoPage from './pages/HistoricoPage'
import NotFoundPage from './pages/NotFoundPage'


function App() {
  return (
    <Routes>
      {/* Rota "pai" sem path: renderiza o Layout e coloca a página filha no <Outlet /> */}
      <Route element={<Layout />}>
        <Route index element={<Navigate to="/materias" replace />} />
        <Route path="/materias" element={<MateriasPage />} />
        <Route path="/estudar" element={<EstudarPage />} />
        <Route path="/historico" element={<HistoricoPage />} />
        <Route path='*' element={<NotFoundPage />}/>
      </Route>
    </Routes>
  )
}

export default App
