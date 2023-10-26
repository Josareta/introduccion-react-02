import { Link } from 'react-router-dom'
export default function About() {
    return (
      <div>
        <h1>Página sobre nosotros</h1>
        <Link to="/">Inicio</Link>
        <br />
        <Link to="/contact">Contacto</Link>
      </div>
    )
  }