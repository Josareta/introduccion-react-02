import { useState } from 'react'
import TituloEjercicio from '../TituloEjercicio'
import Personajes from './Personajes'
import ListaPersonajes from './listaPersonajes'

export default function Ejercicio4() {
  return (
    <section className="caja-ejercicio">
      <TituloEjercicio>Este es el ejercicio 4</TituloEjercicio>
      <ListaPersonajes/>
      <Personajes/>
    </section>
  )
}