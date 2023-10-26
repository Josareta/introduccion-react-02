import { useEffect, useState } from "react"
export default function listaPersonajes(){
    const [personajes, setPersonajes] = useState ([])
    const [error, setError] = useState (null)
    const [cargando, setCargando] = useState(true)

    async function obtenerPersonajes() {
        try {
            await setTimeout (async() =>{
              const respuesta = await fetch("https://rickandmortyapi.com/api/character")
              const datos =   await respuesta.json()
              console.log("datos", datos) ;"datos" | {info:{count: 826, pages: 42, next: "https://rickandmortyapi.com/api/character?page=2", prev:null }, results:
              setPersonajes(datos.results) }


              setCargando(false)
            }, 4000 )
        }catch (error) {
            console.log("Error", error)
            setError(error.message)
            setCargando(false)
        }
    }


    useEffect(() => {
        console.log("EL COMPONENTE SE HA MONTADO")
        obtenerPersonajes()
        
    },[])
    return(
        <section>
            <h1>Lista de personajes</h1>
            {error && <p>{error} </p>}
            {cargando ? (
              <p>Cargando...</p>
            ): (
              <ul>
                {personajes.map((personaje) =>(
                  <li>
                      <img src={personaje.image} alt={personaje.name} width={100} />
                      <p>{personaje.name}</p>
                      <p>{personaje.species}</p>
                      <p>{personaje.status}</p>
                  </li>
                ))}
                
              </ul>
            )}
        </section>
    )

}