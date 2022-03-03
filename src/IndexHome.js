import React,{useState,useEffect,useRef} from "react"
import { Link } from "react-router-dom"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from "react-responsive-carousel"
import {listProjects,getSearchProject} from "./core/apicalls"


import {Navbar,Container,Form,Nav,NavDropdown,FormControl,Button} from "react-bootstrap"
import Marquee from "react-fast-marquee";
import {MdTravelExplore,MdLocationOn,MdOutlineCall,MdMarkEmailRead} from "react-icons/md"
import {FaBuilding,FaPhone,FaHandshake} from "react-icons/fa"

const IndexHome=(props)=>{
    const theme='#191919'

    const [projects,setProjects]=useState([])


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
        <div>
          <Navbar bg="" expand="lg" variant="dark" fixed="top" style={{backgroundColor:theme,opacity:"0.9"}} className="shadow-lg p-0">
            <Container fluid>
              <Navbar.Brand href="/" className="">
                <img src="/logo-2.png" className="rounded" alt="" width="100%" height="60px" style={{borderRadius:"15px"}} />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll" className="text-warning" />
              <Navbar.Collapse id="navbarScroll" className="">
      
                
                <Nav
                  className="me-2 mx-auto my-2 my-lg-0 d-flex"
                  style={{ maxHeight: '100px'}}
                  navbarScroll
                >
                  <Nav.Link href="/" className="text-warning">Home</Nav.Link> 
              <Nav.Link href="/projects" className="text-warning">Projects</Nav.Link>             
              <Nav.Link href="/aboutus" className="text-warning">About Us</Nav.Link>
                  
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
      )

      const topCarousel=()=>(
        <div style={{height:"auto"}}>
          <Carousel interval={2000} autoPlay={true} infiniteLoop={true}> 
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
                <div>
                    <img src="/images/bg-2.jpg" />
                    
                </div>
            </Carousel>
        </div>
      )

     const sec1=()=>(
       <div className="mt-5" style={{backgroundImage:"url('/images/bg-1.jpg')",height:"auto"}}>
         <div style={{backgroundColor:theme,opacity:"0.9",height:"auto"}}>
           <div className="row mt-5 p-3">
             <div className="col-12 col-md-6 mx-auto text-center">
              
               <h1 className="text-white text-center mt-5" style={{fontFamily: 'Lobster'}}>Requiza Reality</h1>
               <p className="text-white">
               Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
               </p>
               <Link to="/projects" ><button className="btn btn-lg btn-warning ">View All Projects</button></Link>
             </div>
             <div className="col-10 col-md-4 mx-auto">
               <img src="/images/d1.jpg" className="rounded mt-5" width="100%"></img>
             </div>
           </div>
         </div>
       </div>
     )

     const process=()=>(
       <div className="mt-5" style={{backgroundImage:"url('/images/bg-2.jpg')",height:"auto"}}>
         <div style={{backgroundColor:theme,opacity:"0.9",height:"auto"}}>
           <h1 className="text-center mt-5 p-5 text-white" style={{fontFamily:"Lobster"}}>Our Process</h1>
           <div className="row p-5">
             <div className="col-6 col-md-3 text-center">
                <div className="col-12 col-md-6 mx-auto bg-warning p-5 rounded-circle"><MdTravelExplore className="h1 text-white text-center" /></div>
                <div className="h2 text-white text-center" style={{fontFamily:"Lobster"}}>Client Requirement & Budget</div>
             </div>
             <div className="col-6 col-md-3 text-center">
                <div className="col-12 col-md-6 mx-auto bg-warning p-5 rounded-circle"><FaBuilding className="h1 text-white text-center" /></div>
                <div className="h2 text-white text-center" style={{fontFamily:"Lobster"}}>Project tour & Site visit</div>

             </div>
             <div className="col-6 col-md-3 text-center">
                <div className="col-12 col-md-6 mx-auto bg-warning p-5 rounded-circle"><FaPhone className="h1 text-white text-center" /></div>
                <div className="h2 text-white text-center" style={{fontFamily:"Lobster"}}>Meet & Agree</div>

             </div>
             <div className="col-6 col-md-3 text-center">
                <div className="col-12 col-md-6 mx-auto bg-warning p-5 rounded-circle"><FaHandshake className="h1 text-white text-center" /></div>
                <div className="h2 text-white text-center" style={{fontFamily:"Lobster"}}>Deliver & Possesion</div>

             </div>
           </div>
         </div>
       </div>
     )

     const ourProjectsMarquee=()=>(
       <div className="" style={{backgroundImage:"url('/images/bg-3.jpg')",}} >
       <div style={{backgroundColor:theme,opacity:"0.9"}}>
       <h2 className="text-warning text-center p-5" style={{fontFamily:"Lobster"}}>Our Projects</h2>
        <div className="col-12 col-md-9 mx-auto">
        <Marquee className="col-9 mx-auto" gradient={false} speed={50}>
          {projects.map((p,i)=>(
            <div className="p-4">
              <img src={p.thumbnail} className="rounded border border-white" height="200px" width="200px"></img>
              <p className="h4 text-white text-center" style={{fontFamily:"Lobster"}}>{p.name}</p>
            </div>
          ))}
        </Marquee>
        </div>
        <div className="text-center p-5"><Link to="/projects"><button className="btn btn-warning">View All Projects</button></Link></div>
       </div>
       </div>
       
     )

     const testimonials=()=>(
       <div style={{backgroundImage:"url('/images/bg-4.jpg')"}}>
          <div style={{backgroundColor:theme,opacity:"0.8"}}>
              <h2 className="text-center p-3 text-warning" style={{fontFamily:"Lobster"}}>What our Clients Say?</h2>
              <div className="row">
              <div className="col-12 col-md-6 my-auto ">
               <div className="col-9 mx-auto rounded p-2" >
               <div className="card p-3 shadow-lg" style={{backgroundColor:"#000000",opacity:"1"}}>
                  <p className="text-white ">"From the very start moment that we talked with the team, the staff were young , cool and innovative. Although we were unsure of the exact direction to go, they listened to us and guided all the way through it was done. What a wonderful experience.."</p>
                  <p className="text-white h6">-Anil Sharma</p>
                 
                </div>
                
               </div>

               <div className="col-9 mx-auto rounded p-2" >
               <div className="card p-3 shadow-lg" style={{backgroundColor:"#000000",opacity:"1"}}>
                  <p className="text-white ">"From the very start moment that we talked with the team, the staff were young , cool and innovative. Although we were unsure of the exact direction to go, they listened to us and guided all the way through it was done. What a wonderful experience.."</p>
                  <p className="text-white h6">-Anil Sharma</p>
                 
                </div>
                
               </div>

               <div className="col-9 mx-auto rounded p-2" >
               <div className="card p-3 shadow-lg" style={{backgroundColor:"#000000",opacity:"1"}}>
                  <p className="text-white ">"From the very start moment that we talked with the team, the staff were young , cool and innovative. Although we were unsure of the exact direction to go, they listened to us and guided all the way through it was done. What a wonderful experience.."</p>
                  <p className="text-white h6">-Anil Sharma</p>
                 
                </div>
                
               </div>

              </div>
              <div className="col-12 col-md-6 my-auto">
              
              <div className="col-9 mx-auto rounded p-2" >
               <div className="card p-3 shadow-lg" style={{backgroundColor:"#000000",opacity:"1"}}>
                  <p className="text-white ">"From the very start moment that we talked with the team, the staff were young , cool and innovative. Although we were unsure of the exact direction to go, they listened to us and guided all the way through it was done. What a wonderful experience.."</p>
                  <p className="text-white h6">-Anil Sharma</p>
                 
                </div>
                
               </div>

               <div className="col-9 mx-auto rounded p-2" >
               <div className="card p-3 shadow-lg" style={{backgroundColor:"#000000",opacity:"1"}}>
                  <p className="text-white ">"From the very start moment that we talked with the team, the staff were young , cool and innovative. Although we were unsure of the exact direction to go, they listened to us and guided all the way through it was done. What a wonderful experience.."</p>
                  <p className="text-white h6">-Anil Sharma</p>
                 
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
           <div className="row p-2 ">
            <div className="p-2  col-12 col-md-5">
            <div className="  rounded shadow-lg " style={{backgroundColor:theme,opacity:"0.9"}}>
               <div className="col-8 mx-auto" ><img src="/logo-2.png" width="100%" height="100px"></img></div>
               <div className="col-10 mx-auto text-center text-white p-4 h5" style={{fontFamily:"serif"}}>WHY WE ARE THE BEST!<br/>
Interior design is a process that provides its customers with a set of aesthetically pleasing but efficient solutions for a better use of the space in question. The goal of interior design is to improve the user experience by better managing the space available in the intervened environment.</div>
             </div>
            </div>



             <div className="col-12 col-md-3  p-2" style={{backgroundColor:theme,opacity:"0.9",fontFamily:"Lobster"}}>
               <p className="text-center text-warning h2 p-4">Offices</p>
               <div className="p-2">
               <div className="row p-2">
                 <div className="col-2"><MdLocationOn className="text-warning h1" /></div>
                 <div className="col-10"><p className=" text-white h4">Mumbai</p></div>

               </div>
               <div className="text-center" ><img src="/images/m.jpg" className="rounded" width="150px" height="120px"></img></div>
               <div className="row p-2">
                 <div className="col-2"><MdLocationOn className="text-warning h1" /></div>
                 <div className="col-10"><p className=" text-white h4">Pune</p></div>

               </div>
               <div className="text-center" ><img src="/images/p.jpg" className="rounded" width="150px" height="120px"></img></div>

               <div className="row p-2">
                 <div className="col-2"><MdLocationOn className="text-warning h1" /></div>
                 <div className="col-10"><p className=" text-white h4">Dubai</p></div>

               </div>
               <div className="text-center" ><img src="/images/d.jpg" className="rounded" width="150px" height="120px"></img></div>
               </div>

             </div>



             <div className="p-2 col-12 col-md-4">
             <div className="" style={{backgroundColor:theme,opacity:"0.9",fontFamily:"Lobster"}}>
               <p className="h3 text-center text-warning p-4" style={{fontFamily:"Lobster"}}>Contact Us</p>
               <div className="p-5">
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
         <div style={{backgroundColor:theme}}><p className="text-center text-warning p-3 h6">Copyright © 2022 Requiza Realities</p></div>
       </div>

     )
    
    return (
        <div>
            <div>{topNav()}</div>         
            <div>{topCarousel()}</div>
            <div>{sec1()}</div>
            <div>{process()}</div>
            <div>{ourProjectsMarquee()}</div>
            <div>{testimonials()}</div>
            <br/><br/>
            <div>{footer()}</div>
        </div>
    )
}

export default IndexHome