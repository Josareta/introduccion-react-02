import Ejercicio1 from '../components/Ejercicio1/Ejercicio1'
  import Ejercicio2 from '../components/Ejercicio2/Ejercicio2'
  import Ejercicio3 from '../components/Ejercicio3/Ejercicio3'
  import Ejercicio4 from "../components/Ejercicio4/Ejercicio4"
  import Footer from '../components/Footer'
  import Header from '../components/Header'
  import TituloPrincipal from '../components/TituloPrincipal'
 
  export default function Home() {
    return (
      <>
        <Header />
        <main>
          <TituloPrincipal />
          <Ejercicio1 />
          <Ejercicio2 />
          <Ejercicio3 />
          <Ejercicio4/>
          

          
        </main>
        <Footer />
      </>
    )
  }