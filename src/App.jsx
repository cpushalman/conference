import Home from "./components/Home"
import Payment from "./components/Payment"
import Header from "./components/Header"
import Footer from "./components/Footer"    
import { useEffect } from "react"
import Lenis from "lenis"
import gsap from "gsap"
import ScrollTrigger from "gsap/dist/ScrollTrigger"

function App() {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const lenis = new Lenis();

lenis.on('scroll', ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);
  
   
  }, [])
  
 
  return ( <>
  <Header/>
  
   <Home/>
   <Payment/>

   <Footer/>
   </>
   
  )
}

export default App
