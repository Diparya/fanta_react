import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger)

const Product = () => {
    let mm = gsap.matchMedia();

    mm.add("(min-width: 1280px)", () =>{
        var tl = gsap.timeline({scrollTrigger:{
            trigger: "#two",
            start: "0% 100%",
            end: "70% 50%",
            scrub:true,
            markers:true
            
        }})

        var tl2 = gsap.timeline({scrollTrigger:{
            trigger: "#three",
            start: "5% 95%",
            end: "20% 50%",
            scrub:true,
            markers:true
        }})

        useGSAP(() => {
            tl.to("#fanta",{
                top: "125%",
                left: "2%",
                ease: "power2.inOut",
            },'or')
    
            tl.to("#Orange-slice",{
                top: "165%",
                left: "23%",
                ease: "power2.inOut",
            },'or')
    
            tl.to("#Orange",{
                width: "15%",
                top: "173%",
                right: "10%",
                ease: "power2.inOut",
            },'or')
            
            tl.to("#leaf",{
                top: "105%",
                left: "80%",
                ease: "power2.inOut",
            },'or')
            
            tl.to("#leaf2",{
                top: "110%",
                left: "0%",
                ease: "power2.inOut",
            },'or')
    
            tl2.from('#lemon1',{
                rotate: '-90deg',
                left: '-100%',
                top: '110%',
                ease: "power2.inOut",
            },'ca')
            
            tl2.from('#cocacola',{
                rotate: '-90deg',
                left: '-100%',
                top: '110%',
                ease: "power2.inOut",
            },'ca')
            
            tl2.from('#lemon2',{
                rotate: '90deg',
                left: '100%',
                top: '110%',
                ease: "power2.inOut",
            },'ca')
            
            tl2.from('#pepsi',{
                rotate: '90deg',
                left: '100%',
                top: '110%',
                ease: "power2.inOut",
            },'ca')
            
            tl2.to('#Orange-slice',{
                width: '20%',
                left: '40%',
                top: '204%',
                ease: "power2.inOut",
            },'ca')
            
            tl2.to('#fanta',{
                width: '32%',
                left: '33%',
                top: '217%',
                ease: "power2.inOut",
            },'ca')
        },[])
    })

    mm.add("(min-width: 1024px)", () =>{
        var tl = gsap.timeline({
            scrollTrigger: {
              trigger: "#two",
              start: "0% 95%",
              end: "70% 50%",
              scrub: true,
              markers:false
            }
          });
  
          var tl2 = gsap.timeline({
            scrollTrigger: {
              trigger: "#three",
              start: "5% 95%",
              end: "20% 50%",
              scrub: true,
              markers: false
            }
          });

        useGSAP(() => {
            tl.to("#fanta", {width:"40%", top: "125%", left: "3%", ease: "power2.inOut" }, 'or')
          .to("#Orange-slice", {width:"20%", top: "160%", left: "20%", ease: "power2.inOut" }, 'or')
          .to("#Orange", { width: "18%", top: "170%", right: "12%", ease: "power2.inOut" }, 'or')
          .to("#leaf", { top: "95%", left: "82%", ease: "power2.inOut" }, 'or')
          .to("#leaf2", { top: "115%", left: "2%", ease: "power2.inOut" }, 'or');

        tl2.from('#lemon1', { rotate: '-90deg', left: '-100%', top: '115%', ease: "power2.inOut" }, 'ca')
          .from('#cocacola', { rotate: '-90deg', left: '-100%', top: '115%', ease: "power2.inOut" }, 'ca')
          .from('#lemon2', { rotate: '90deg', left: '100%', top: '115%', ease: "power2.inOut" }, 'ca')
          .from('#pepsi', { rotate: '90deg', left: '100%', top: '115%', ease: "power2.inOut" }, 'ca')
          .to('#Orange-slice', { width: '20%', left: '41%', top: '210%', ease: "power2.inOut" }, 'ca')
          .to('#fanta', { width: '29%', left: '35%', top: '221%', ease: "power2.inOut" }, 'ca');
      
        },[])
    })

    mm.add("(min-width: 768px)", () =>{
        var tl = gsap.timeline({
            scrollTrigger: {
              trigger: "#two",
              start: "0% 95%",
              end: "70% 50%",
              scrub: true,
              markers:false
            }
          });
  
          var tl2 = gsap.timeline({
            scrollTrigger: {
              trigger: "#three",
              start: "5% 95%",
              end: "20% 50%",
              scrub: true,
              markers: false
            }
          });

        useGSAP(() => {
            tl.to("#fanta", {width: "45%", top: "130%", left: "0%", ease: "power2.inOut" }, 'or')
          .to("#Orange-slice", {width: "18%", top: "165%", left: "21%", ease: "power2.inOut" }, 'or')
          .to("#Orange", { width: "18%", top: "173%", right: "12%", ease: "power2.inOut" }, 'or')
          .to("#leaf", { top: "110%", left: "82%", ease: "power2.inOut" }, 'or')
          .to("#leaf2", { top: "115%", left: "2%", ease: "power2.inOut" }, 'or');

        tl2.from('#lemon1', { rotate: '-90deg', left: '-100%', top: '115%', ease: "power2.inOut" }, 'ca')
          .from('#cocacola', { rotate: '-90deg', left: '-100%', top: '115%', ease: "power2.inOut" }, 'ca')
          .from('#lemon2', { rotate: '90deg', left: '100%', top: '115%', ease: "power2.inOut" }, 'ca')
          .from('#pepsi', { rotate: '90deg', left: '100%', top: '115%', ease: "power2.inOut" }, 'ca')
          .to('#Orange-slice', { width: '20%', left: '41%', top: '217%', ease: "power2.inOut" }, 'ca')
          .to('#fanta', { width: '30%', left: '35%', top: '227%', ease: "power2.inOut" }, 'ca');
      
        },[])
    })

    mm.add("(min-width: 640px)", () =>{
        var tl = gsap.timeline({
            scrollTrigger: {
              trigger: "#two",
              start: "0% 95%",
              end: "70% 50%",
              scrub: true,
              markers: false
            }
          });
  
          var tl2 = gsap.timeline({
            scrollTrigger: {
              trigger: "#three",
              start: "5% 95%",
              end: "20% 50%",
              scrub: true,
              markers: false
            }
          });

        useGSAP(() => {
            tl.to("#fanta", { top: "135%", left: "-5%", ease: "power2.inOut" }, 'or')
          .to("#Orange-slice", {width: "22%", top: "166%", left: "22%", ease: "power2.inOut" }, 'or')
          .to("#Orange", { width: "22%", top: "179%", right: "15%", ease: "power2.inOut" }, 'or')
          .to("#leaf", { top: "107%", left: "82%", ease: "power2.inOut" }, 'or')
          .to("#leaf2", { top: "125%", left: "1%", ease: "power2.inOut" }, 'or');

        tl2.from('#lemon1', { rotate: '-90deg', left: '-100%', top: '120%', ease: "power2.inOut" }, 'ca')
          .from('#cocacola', { rotate: '-90deg', left: '-100%', top: '120%', ease: "power2.inOut" }, 'ca')
          .from('#lemon2', { rotate: '90deg', left: '100%', top: '120%', ease: "power2.inOut" }, 'ca')
          .from('#pepsi', { rotate: '90deg', left: '100%', top: '120%', ease: "power2.inOut" }, 'ca')
          .to('#Orange-slice', { width: '20%', left: '41%', top: '220%', ease: "power2.inOut" }, 'ca')
          .to('#fanta', { width: '40%', left: '30%', top: '227%', ease: "power2.inOut" }, 'ca');
      
        },[])
    })

    mm.add("(max-width: 640px)", () =>{
      var tl = gsap.timeline({
          scrollTrigger: {
            trigger: "#two",
            start: "-60% 100%",
            end: "50% 50%",
            scrub: true,
            markers: false
          }
        });

        var tl2 = gsap.timeline({
          scrollTrigger: {
            trigger: "#three",
            start: "0% 95%",
            end: "20% 50%",
            scrub: true,
            markers: false
          }
        });

      useGSAP(() => {
          tl.to("#fanta", { top: "157%", left: "-5%", ease: "power2.inOut" }, 'or')
        .to("#Orange-slice", {width: "22%", top: "152%", left: "21%", ease: "power2.inOut" }, 'or')
        .to("#Orange", { width: "28%", top: "179%", right: "15%", ease: "power2.inOut" }, 'or')
        .to("#leaf", { top: "130%", left: "80%", ease: "power2.inOut" }, 'or')
        .to("#leaf2", {width: "22%", top: "152%", left: "-2%", ease: "power2.inOut" }, 'or');

      tl2.from('#lemon1', { rotate: '-90deg', left: '-100%', top: '120%', ease: "power2.inOut" }, 'ca')
        .from('#cocacola', { rotate: '-90deg', left: '-100%', top: '120%', ease: "power2.inOut" }, 'ca')
        .from('#lemon2', { rotate: '90deg', left: '100%', top: '120%', ease: "power2.inOut" }, 'ca')
        .from('#pepsi', { rotate: '90deg', left: '100%', top: '120%', ease: "power2.inOut" }, 'ca')
        .to('#Orange-slice', { width: '25%', left: '39%', top: '234%', ease: "power2.inOut" }, 'ca')
        .to('#fanta', { width: '60%', left: '20%', top: '239%', ease: "power2.inOut" }, 'ca');
    
      },[])
  })
    

  return (
    <main className="w-full h-full bg-orange-600 no-scrollbar">
        <div id='one' className="relative no-scrollbar flex items-center justify-center w-[100vw] h-[100vh] bg-gradient-to-r from-orange-400 to-orange-700">
                <h1 className="text-[32vw] xl:text-[25vw]">FANTA</h1>
                <img className="absolute z-20 w-[55%] xl:w-[40%]" alt="fanta" id="fanta" src="Fanta.png"/>
    
                <img className="absolute z-10 w-[20%] xl:w-[15%] top-[37%] sm:top-[16%] lg:top-[-5%] md:top-[5%] xl:top-[9%] left-[34%] xl:left-[37%]" alt="Orange-slice" id="Orange-slice" src="Orange Slice.png"/>
                <img className="absolute z-30 w-[20%] top-[54%] sm:top-[60%] lg:top-[60%] md:top-[62%] xl:top-[56%] right-[32%]" alt="Orange" id="Orange" src="Orange.png"/>
                <img className="absolute w-[18%] top-[40%] sm:top-[27%] lg:top-[20%] md:top-[15%] xl:top-[15%] left-[1%] sm:left-[1%] lg:left-[-4%] xl:left-[5%] transform rotate-45" alt="leaf" id="leaf" src="orange leaf.png"/>
                <img className="absolute w-[20%] top-[53%] sm:top-[55%] lg:top-[57%] xl:top-[58%] left-[82%] xl:left-[80%] transform rotate-[-60deg]" alt="leaf2" id="leaf2" src="orange leaf 2.png"/>
                <img className="absolute w-[30%] xl:w-[20%] top-[0%] right-[0%]" alt="palm" id="palm" src="palm.png"/>
          </div>
    
    
          <div id='two' className="flex w-full h-[100vh] bg-amber-900">
                <div className="flex items-start justify-center flex-col w-[50%] h-[100%]">
                    <svg className=" mt-[50vh] w-[90%] transform rotate-45" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#e2af49" d="M51.4,-58.8C67,-48.2,80.3,-32.3,82.9,-15.1C85.4,2.2,77.1,21,66.2,36.7C55.3,52.3,41.8,64.9,25.8,70.5C9.9,76.2,-8.4,74.8,-24.8,68.6C-41.2,62.4,-55.6,51.4,-62.5,37.2C-69.5,23,-68.8,5.5,-60.4,-5.2C-52,-15.8,-35.8,-19.6,-24.5,-31C-13.1,-42.4,-6.6,-61.3,5.7,-68C17.9,-74.8,35.8,-69.4,51.4,-58.8Z" transform="translate(100 100)" />
                    </svg>
                </div>
                <div className="flex items-start justify-center flex-col w-[50%] h-[100%]">
                    <h1 className=" text-[5vw]">Flavour Updated</h1>
                    <p className=" text-[2vw] sm:text-sm md:text-sm lg:text-sm xl:text-[1vw]  w-[80%]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis dolore magni quidem facilis! Deleniti iure, quae temporibus molestias corporis pariatur! Modi consequatur tempore aperiam perferendis quaerat voluptatibus ullam incidunt cum et distinctio saepe debitis, quo illo fugiat id obcaecati. Quisquam quia cumque et, obcaecati alias similique, error ex nihil corporis atque illum consequatur laudantium nostrum ipsam quibusdam maxime modi! Quod magni sint itaque recusandae sed minima consequatur ab accusamus libero! Voluptatum deserunt impedit sunt iusto expedita magnam ipsam laboriosam aliquid alias temporibus. Libero rem rerum architecto, ullam ducimus nostrum aperiam magnam tempora corrupti officiis quam eum provident nobis cum voluptates?</p>
                </div>
          </div>
    
    
          <div id='three' className="flex items-center justify-center gap-[2vw] xl:gap-[5vw] w-[100%] h-[100vh] bg-red-950">
                <div className=" relative flex items-center justify-center flex-col gap-[2vh] w-[30vw] h-[30vh] sm:w-[40vw] sm:h-[50vh] lg:w-[50vw] lg:h-[60vh] xl:w-[25vw] xl:h-[70vh] mt-[10vh] rounded-lg bg-red-300">
                    <img id="lemon1" className=" absolute top-[-15%] w-[24vw]" src="lemon-slice.png" alt="lemon"/>
                    <img className=" absolute top-[-23%] size-[103%] object-cover" id="cocacola" src="Coke.png" alt="cocacola"/>
                    <h1 className=" mt-[19vh] sm:mt-[30vh] lg:mt-[35vh] xl:mt-[40vh] text-[4vw] lg:text-[3vw] xl:text-[3vw]">Coca-Cola</h1>
                    <button className=" text-[2vw] lg:text-sm xl:text-[1vw] rounded-xl border-none bg-orange-400 py-[1vw] px-[2vw]">Buy Now</button>
                </div>
                <div className=" relative flex items-center justify-center flex-col gap-[2vh] w-[30vw] h-[30vh] sm:w-[40vw] sm:h-[50vh] lg:w-[50vw] lg:h-[60vh] xl:w-[25vw] xl:h-[70vh] mt-[10vh] rounded-lg bg-orange-300">
                    <h1 className=" mt-[19vh] sm:mt-[30vh] lg:mt-[35vh] xl:mt-[40vh] text-[4vw] lg:text-[3vw] xl:text-[3vw]">Fanta</h1>
                    <button className=" text-[2vw] lg:text-sm xl:text-[1vw] rounded-xl border-none bg-orange-400 py-[1vw] px-[2vw]">Buy Now</button>
                </div>
                <div className=" relative flex items-center justify-center flex-col gap-[2vh] w-[30vw] h-[30vh] sm:w-[40vw] sm:h-[50vh] lg:w-[50vw] lg:h-[60vh] xl:w-[25vw] xl:h-[70vh] mt-[10vh] rounded-lg bg-blue-300">
                    <img id="lemon2" className=" absolute top-[-15%] w-[24vw]" src="lemon-slice.png" alt="lemon"/>
    
                    <img className=" absolute top-[-8%] size-[75%] object-cover" id="pepsi" src="Pepsi.png" alt="pepsi"/>
                    <h1 className=" mt-[19vh] sm:mt-[30vh] lg:mt-[35vh] xl:mt-[40vh] text-[4vw] lg:text-[3vw] xl:text-[3vw]">Pepsi</h1>
                    <button className=" text-[2vw] lg:text-sm xl:text-[1vw] rounded-xl border-none bg-orange-400 py-[1vw] px-[2vw]">Buy Now</button>
                </div>
            </div>
    </main>
  )
}

export default Product