import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger)

ScrollTrigger.defaults({
  toggleActions:'play none none reverse'
})

const Hero = () => {

    useGSAP(() => {
        gsap.to('#cta', { opacity: 1, y: 80, delay: 2 })

        gsap.to('#img-container',{
          scale:52,
          ease:'ease',
          scrollTrigger:{
              trigger:'#video-section',
              scrub:1,
              start:'top top',
              end:'bottom',
              pin:true
          }
      })

      }, [])


  return (
    <section className='h-[100vh] w-full relative overflow-hidden bg-gradient-to-r from-orange-400 to-orange-700' id="video-section">
            <video className=" absolute top-0 pointer-events-none h-[80vh] w-full object-cover" autoPlay muted loop>
                <source src='fanta.mp4' type="video/mp4"/>
            </video> 
            <div className=" absolute top-0 h-[100vh] w-[100vw] overflow-hidden" id="img-container">
              <img className=" object-cover h-[100%] w-[100%]" src="window.png" alt="window" />
            </div>
            
        

        <div id="cta" className="z-10 absolute opacity-0 bottom-64 xl:bottom-72 lg:bottom-64 sm:bottom-64 left-[50%] translate-y-20">
            <a href="#" className='px-5 py-2 rounded-3xl bg-orange-500 my-5 hover:bg-transparent border border-transparent hover:border hover:text-orange-400 hover:border-orange-400'>Buy</a>
        </div>
    </section>
  )
}

export default Hero