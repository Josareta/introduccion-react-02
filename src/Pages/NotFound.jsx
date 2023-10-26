import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div>
      <h1>Error 404 - Página no encontrada</h1>
      <Link to="/">Volver al inicio</Link>
    </div>
  )
}