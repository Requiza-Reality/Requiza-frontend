import React,{useState,useEffect,useRef} from "react"
import { Link } from "react-router-dom"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from "react-responsive-carousel"
import {listProjects,getSearchProject} from "./core/apicalls"
import { zoomIn} from 'react-animations';
import styled, { keyframes } from 'styled-components';
import TopMenu from "./core/TopMenu"
import Footer from "./core/footer"

import {Navbar,Container,Form,Nav,NavDropdown,FormControl,Button} from "react-bootstrap"
import Marquee from "react-fast-marquee";
import {MdTravelExplore,MdLocationOn,MdOutlineCall,MdMarkEmailRead} from "react-icons/md"
import {FaBuilding,FaPhone,FaHandshake} from "react-icons/fa"

const IndexHome=(props)=>{
    const theme='#191919'

    const [projects,setProjects]=useState([])


    const ZoomIn=styled.div`animation:3s ${keyframes`${zoomIn}`}`



    const listAllProjects=()=>{
      listProjects().then(data=>{
        if(data.error)
        {
          console.log(data.error);
        }
        else{
          setProjects(data)
        }
      })
     }

     useEffect(()=>{
      listAllProjects()
    },[props])

    const topNav=()=>(
        <div style={{maxWidth:"100vw"}}>
          <Navbar bg="" expand="lg" variant="dark" fixed="top" style={{backgroundColor:theme,opacity:"0.9"}} className="shadow-lg p-0">
            <Container fluid>
              <Navbar.Brand href="/" className="">
                <img src="/logo-2.png" className="rounded" alt="" width="100%" height="60px" style={{borderRadius:"15px"}} />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll" className="text-warning " />
              <Navbar.Collapse id="navbarScroll" className="">
      
                
                <Nav
                  className="me-2 mx-auto my-2 my-lg-0 d-flex"
                  style={{ maxHeight: '100px'}}
                  navbarScroll
                >
                  <Nav.Link href="/" className="text-warning">Home</Nav.Link> 
              <Nav.Link href="/projects" className="text-warning">Projects</Nav.Link>             
              <Nav.Link href="/aboutus" className="text-warning">About Us</Nav.Link>
              <Nav.Link href="#contact" className="text-warning">Contact Us</Nav.Link>
 
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
      )

      const topCarousel=()=>(
        <div style={{height:"auto"}}>
          <Carousel interval={2000} autoPlay={true} infiniteLoop={true} showThumbs={false} stopOnHover={false}> 
                <div>
                    <img src="/images/c1.jpg" width="" height="" />
                   
                </div>
                <div>
                    <img src="/images/c2.jpg" height="" width="" />
                   
                </div>
                <div>
                    <img src="/images/c3.jpg" />
                   
                </div>
                <div>
                    <img src="/images/c4.jpg" />
                   
                </div>
                <div>
                    <img src="/images/c5.jpg" />
                    
                </div>
                
               
            </Carousel>
        </div>
      )

     const sec1=()=>(
       <div className="mt-5" style={{backgroundImage:"url('/images/bg-1.jpg')",height:"auto"}}>
         <div style={{backgroundColor:theme,opacity:"0.9",height:"auto"}}>
           <div className="row mt-5 p-3">
             <div className="col-12 col-md-6 mx-auto text-center">
              
               <h1 className="text-white text-center mt-5" style={{fontFamily:"'Aref Ruqaa', serif"}}>Requiza Reality</h1>
               <p className="text-white">
               Buying a home is one of the most crucial decisions and the most significant financial outlay in anybody's life. The REQUIZA REALITY makes your home journey simple by providing relevant information that helps you make an informed decision. From real estate news to the legalities of home buying to taxation and tips on home designing and improvement, this is your go-to source for everything real estate.               </p>
               <Link to="/projects" ><button className="btn btn-lg btn-warning ">View All Projects</button></Link>
             </div>
             <div className="col-10 col-md-4 mx-auto">
               <img src="/images/d1.jpg" className="rounded mt-5" width="100%"></img>
             </div>
           </div>
           <br/>
           <br/>
         </div>
       </div>
     )

     const process=()=>(
       <div className="mt-5" style={{backgroundImage:"url('/images/bg-2.jpg')",height:"auto"}}>
         <div style={{backgroundColor:theme,opacity:"0.9",height:"auto"}}>
           <h1 className="text-center mt-5 p-5 text-white" style={{fontFamily:"'Aref Ruqaa', serif"}}>Our Process</h1>
           <div className="row p-5 " >
             <div className="col-12 col-md-3 text-center p-2">
                <div className=" mx-auto bg-warning  rounded-circle row align-items-center" style={{height:"150px",width:"150px"}}><MdTravelExplore className="h1 text-muted  text-center display-1 " style={{fontSize:"5em"}} /></div>
                <div className="h2 text-white text-center" style={{fontFamily:"'Aref Ruqaa', serif"}}>Requirement & Budget</div>
             </div>
             <div className="col-12 col-md-3 text-center p-2">
                <div className=" mx-auto bg-warning  rounded-circle row align-items-center" style={{height:"150px",width:"150px"}}><FaBuilding className="h1 text-muted text-center" style={{fontSize:"5em"}} /></div>
                <div className="h2 text-white text-center" style={{fontFamily:"'Aref Ruqaa', serif"}}>Project Site visit</div>

             </div>
             <div className="col-12 col-md-3 text-center p-2">
                <div className=" mx-auto bg-warning  rounded-circle row align-items-center" style={{height:"150px",width:"150px"}}><FaPhone className="h1 text-muted text-center" style={{fontSize:"5em"}} /></div>
                <div className="h2 text-white text-center" style={{fontFamily:"'Aref Ruqaa', serif"}}>Meet & Agree</div>

             </div>
             <div className="col-12 col-md-3 text-center p-2">
                <div className=" mx-auto bg-warning  rounded-circle row align-items-center" style={{height:"150px",width:"150px"}}><FaHandshake className="h1 text-muted text-center" style={{fontSize:"5em"}} /></div>
                <div className="h2 text-white text-center" style={{fontFamily:"'Aref Ruqaa', serif"}}>Deliver & Possesion</div>

             </div>
           </div>
         </div>
       </div>
     )

     const ourProjectsMarquee=()=>(
       <div className="" style={{backgroundImage:"url('/images/bg-3.jpg')",}} >
       <div style={{backgroundColor:theme,opacity:"0.9"}}>
       <h2 className="text-warning text-center p-5" style={{fontFamily:"'Aref Ruqaa', serif"}}>Our Properties</h2>
        <div className="col-12 col-md-9 mx-auto text-decoration-none">
        <Marquee className="col-9 mx-auto" gradient={false} speed={50}>
          {projects.map((p,i)=>(
            <Link to={`/projects/${p._id}`} className="text-decoration-none">
            <div className="p-4 text-decoration-none" >
              <img src={p.thumbnail} className="rounded border border-white" height="300px" width="300px"></img>
              <p className="h4 text-white text-center text-decoration-none" style={{fontFamily:"'Aref Ruqaa', serif"}}>{p.name}</p>
              <p className="h6 text-warning text-center text-decoration-none"> Starting from {p.options[0].price} Cr</p>
            </div>
            </Link>
          ))}
        </Marquee>
        </div>
        <div className="text-center p-5"><Link to="/projects"><button className="btn btn-warning">View All Properties</button></Link></div>
       </div>
       </div>
       
     )

     const ourServices=()=>(
       <div style={{backgroundImage:"url('/images/bg-5.jpg')",}} >
         <div style={{backgroundColor:theme,opacity:"0.9"}}>
           <div className="text-center h2 text-warning" style={{fontFamily:"'Aref Ruqaa', serif"}}><h2>Our Services</h2></div>
           <div className="row p-4">
               <div className="col">
                 <div className="text-center "><img src="images/residential.jpg" className="border border-5 border-warning" width="200px" height="200px"></img></div>
                 <div className="text-center h4 text-white p-2" style={{fontFamily:"'Aref Ruqaa', serif"}}>Residential Property</div>
               </div>
               <div className="col">
                 <div className="text-center "><img src="images/commercial.jpg" className="border border-5 border-warning" width="200px" height="200px"></img></div>
                 <div className="text-center h4 text-white p-2" style={{fontFamily:"'Aref Ruqaa', serif"}}>Commercial Property</div>
               </div>
               <div className="col">
                 <div className="text-center "><img src="images/land.jpg" className="border border-5 border-warning" width="200px" height="200px"></img></div>
                 <div className="text-center h4 text-white p-2" style={{fontFamily:"'Aref Ruqaa', serif"}}>Land & other Property</div>
               </div>
           </div>
         </div>
       </div>
     )

     const testimonials=()=>(
       <div style={{backgroundImage:"url('/images/bg-4.jpg')"}}>
          <div style={{backgroundColor:theme,opacity:"0.8"}}>
              <h2 className="text-center p-3 text-warning" style={{fontFamily:"'Aref Ruqaa', serif"}}>What our Clients Say?</h2>
              <div className="row">
              <div className="col-12 col-md-6 my-auto ">
               <div className="col-9 mx-auto rounded p-2" >
               <div className="card p-3 shadow-lg" style={{backgroundColor:"#000000",opacity:"1"}}>
                  <p className="text-center h6 text-warning" style={{fontFamily:"'Aref Ruqaa', serif"}}>Good Selection of Properties</p>
                  <p className="text-white ">"Requiza Reality® are a very professional real estate agency in whole Mumbai with good selection of places. More importantly, they spend time with the client to show variety of options. We ended up taking another place – yet, if ever a need arises, we trust to contact Menka again!"</p>
                  <p className="text-white h6">– Pratik Bhide </p>
                 
                </div>
                
               </div>

               <div className="col-9 mx-auto rounded p-2" >
               <div className="card p-3 shadow-lg" style={{backgroundColor:"#000000",opacity:"1"}}>
               <p className="text-center h6 text-warning" style={{fontFamily:"'Aref Ruqaa', serif"}}>I didn’t expect such a friendly Agent!</p>

                  <p className="text-white ">"Menka and her team were the first real estate agents I met when I arrived from Vietnam in Mumbai, India. She arranged all the visits in a day, she showed really good options. She does really understand our needs. She picked me up at my hotel with her car and spent the whole day with me. She even paid for the snacks and drinks. I didn’t expect such a friendly agent. I feel like a queen with her and I didn’t feel the time go by because we were talking all the time. I really recommend her and her team for their professionalism and sympathy."</p>
                  <p className="text-white h6">-Anil Sharma</p>
                 
                </div>
                
               </div>

               <div className="col-9 mx-auto rounded p-2" >
               <div className="card p-3 shadow-lg" style={{backgroundColor:"#000000",opacity:"1"}}>
               <p className="text-center h6 text-warning" style={{fontFamily:"'Aref Ruqaa', serif"}}>Authentic, Clear and Professional</p>

                  <p className="text-white ">"Requiza Reality…true to their name reflect their commitment to the vision of their client. They are authentic genuine and honest in their dealing….their clarity ensures that you do not end up wasting your time on futile trips in your property search….last but not the least, they are professional and Heartful in good measure. My Good wishes to them."</p>
                  <p className="text-white h6">-Nita Anant</p>
                 
                </div>
                
               </div>

              </div>
              <div className="col-12 col-md-6 my-auto">
              
              <div className="col-9 mx-auto rounded p-2" >
               <div className="card p-3 shadow-lg" style={{backgroundColor:"#000000",opacity:"1"}}>
               <p className="text-center h6 text-warning" style={{fontFamily:"'Aref Ruqaa', serif"}}>Helped us locate the right luxury apartment in Mumbai</p>

                  <p className="text-white ">"Requiza Reality understood our requirements and helped us locate the right luxury apartment in Mumbai. They provided us excellent service, and continue to help us with property consulting in Mumbai on an ongoing basis. Appreciate all their hard work and happy to be associated with them."</p>
                  <p className="text-white h6">-Vasanthi Balasubramanian</p>
                 
                </div>
                
               </div>

               <div className="col-9 mx-auto rounded p-2" >
               <div className="card p-3 shadow-lg" style={{backgroundColor:"#000000",opacity:"1"}}>
               <p className="text-center h6 text-warning" style={{fontFamily:"'Aref Ruqaa', serif"}}>They served as our eyes and ears, with us in California, USA</p>

                  <p className="text-white ">"Menka and Raj are an excellent resource for narrowing down the numerous choices in real estate purchase in Mumbai. We were looking for a plot to invest and being California residents could not really narrow down our options without actually looking at the sites. Menka and Raj served as our eyes and ears and helped us in selection and we made sure that when we visited Mumbai, we only had to complete the paperwork and formalities. They are very helpful and do a good job of understanding your unique and specific needs – all of this via phone and email. We are very pleased with their service levels and we wish them all the best for their future endeavours. We definitely recommend their services, especially for NRIs."</p>
                  <p className="text-white h6">-Archana and Natraj Iyer, Bay Area, California</p>
                 
                </div>
                
               </div>
                  

              </div>
             
              </div>
          </div>
       </div>
     )

     const footer=()=>(
       <div  style={{backgroundImage:"url('/images/bg-6.jpg')"}}>
         <div >
           <div className="row p-2 col-md-8 mx-auto ">
            <div className="p-2  col-12 col-md-6">
            <div className="  rounded shadow-lg " style={{backgroundColor:theme,opacity:"0.9"}}>
               <div className="col-8 mx-auto" ><img src="/logo-2.png" width="100%" height="100px"></img></div>
               <div className="col-10 mx-auto text-center text-white p-4 h5" style={{fontFamily:"serif"}}>WHY WE ARE THE BEST!<br/>
Interior design is a process that provides its customers with a set of aesthetically pleasing but efficient solutions for a better use of the space in question. The goal of interior design is to improve the user experience by better managing the space available in the intervened environment.</div>
             </div>
            </div>



             


             <div className="p-2 col-12 col-md-6">
             <div className="rounded" style={{backgroundColor:theme,opacity:"0.9",fontFamily:"'Aref Ruqaa', serif"}}>
               <p className="h3 text-center text-warning p-2" style={{fontFamily:"'Aref Ruqaa', serif"}}>Contact Us</p>
               <div className="p-3">
                 <div className="row mb-3">
                   <div className="col-2"><MdOutlineCall className="h1 text-warning rounded-circle bg-white " /></div>
                   <div className="col-10">
                     <p className="text-white h5">Call Us</p>
                     <p className="text-warning h5">+919694318893</p>
                   </div>
                 </div>

                 <div className="row mb-3">
                   <div className="col-2"><MdMarkEmailRead className="h1 text-warning rounded-circle bg-white " /></div>
                   <div className="col-10">
                   <p className="text-white h5">Email Us</p>
                     <p className="text-warning h5">requizareality@gmail.com</p>
                   </div>
                 </div>

                 <div className="row mb-3">
                   <div className="col-2"><MdMarkEmailRead className="h1 text-warning rounded-circle bg-white " /></div>
                   <div className="col-10">
                     <p className="text-white h5">Sales and Marketting</p>
                     <p className="text-warning h5">sales@requizareality.com</p>
                   </div>
                 </div>

               </div>
             </div>
             </div>

           </div>
         </div>
         <div className="text-white text-center h3" style={{fontFamily:"'Aref Ruqaa', serif"}}>Mumbai | Pune | Dubai</div>
         <div style={{backgroundColor:theme}}><p className="text-center text-warning p-3 h6">Copyright © 2022 Requiza Realities</p></div>
       </div>

     )
    
    return (
        <div className="g-0" style={{maxWidth:"100vw"}}>
            <div><TopMenu /></div> 
                 
            <div className="container-fluid ">
            <div>{topCarousel()}</div>
            <div>{sec1()}</div>
            <div>{ourProjectsMarquee()}</div>
            <div>{process()}</div>
           
            <div>{ourServices()}</div>
            <div>{testimonials()}</div>
            <br/><br/>
            <div id="contact"><Footer /></div>
            </div>
        </div>
    )
}

export default IndexHome