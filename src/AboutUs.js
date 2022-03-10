import React from "react"
import {Navbar,Container,Form,Nav,NavDropdown,FormControl,Button} from "react-bootstrap"
import {MdTravelExplore,MdLocationOn,MdOutlineCall,MdMarkEmailRead} from "react-icons/md"
import TopMenu from "./core/TopMenu"
import Footer from "./core/footer"


const AboutUs=()=>{

    const theme='#191919'


    const topNav=()=>(
        <div>
          <Navbar bg="" expand="lg" variant="dark" fixed="top" style={{backgroundColor:theme,zIndex:"0",opacity:"0.9"}} className="shadow-lg ">
            <Container fluid>
              <Navbar.Brand href="/">
                <img src="/logo-2.png" className="rounded" alt="" width="100%" height="60px" style={{borderRadius:"15px"}} />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll" className="text-light" />
              <Navbar.Collapse id="navbarScroll" className="text-light">
      
                <Nav
                  className="me-2 mx-auto my-2 my-lg-0 d-flex"
                  style={{ maxHeight: '100px' }}
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

      const text=()=>(
          <div className="" style={{fontFamily:"serif"}}>
              <p className="h5 text-white" >Menka Rajpoot is an Architect . She established the company in 2009 with the vision to expand the business .Youngblood with passionate dreams. She is also stepping towards the digital markets to establish greater heights and bring wonders to the existing empire.</p>
               <br/>
              <p className="h5 text-white">Mrs Menka Rajpoot belong to business community from North India. She began her career with humble roots and worked her way up with her hard work, Genuineness and Dedication. She worked with various companies in Production and Sales. She started her Real Estate Consultant career as an CP .
Eventually she founded her own company in the year 2009 and now serving her clients and investors with great zeal and enthusiasm. She cherishes assembly unused individuals, building relations, managing with complicated issues and overseeing group. She deals not only in Residential, commercial sector but also in land, warehousing, Bungalow, Plots  etc. All over Mumbai & Pune and helps investors to choose the right path for future investment.
Her combined energy and perseverance has taken the company where it is nowadays as an organization.</p>
              <br/>
              <p className="h5 text-white">With her excellent marketing skills and wise hospitality, she has been able to pull up a good business. Along with the knowledge of Architecture , interior designing and early exposure to the Real Estate sector she had developed good decisions architectural making skills. Apart from this Mrs Menka Rajpoot has an impressive personality and a calculative mind which is much need in Real Estate business.</p>
               <br/>
              <p className="h5 text-white">With her youthful energy and amazing business mind, Mrs. Menka Rajpoot will make the future years count for REQUIZA REALITY.</p>
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
     

    return(
        <div className="container" style={{maxWidth:"100vw",backgroundColor:theme}}>
           <div><TopMenu /></div>

          
           <div className="row">
               <div className="col-12 col-md-5 my-auto">
               
               <img src="images/about-img.jpeg" className="rounded border border-3 border-warning" width="100%" height="100%">
               </img>
               <p className="h4 text-center text-warning mb-0" style={{fontFamily:"'Aref Ruqaa', serif"}}>Mrs Menka Rajpoot</p>
               <p className="h6 text-center text-white mt-0" style={{fontFamily:"'Aref Ruqaa', serif"}}>Director , Requiza Reality</p>
               </div>
               <br/><br/>
               <div className="col-12 col-md-7 mt-5 mt-md-0 overflow-auto " >
               <h3 className="text-center text-warning mb-3 " style={{fontFamily:"'Aref Ruqaa', serif"}}>Get To Know Our Director</h3>
               <div className="my-auto col-12  col-xl-9 mx-auto">{text()}</div>
               <div className="mt-5 mx-auto d-flex justify-content-center">
                 <iframe
                  className="border border-5 border-warning "
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.5622221657577!2d73.00419986540547!3d19.08297605671098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c13a61d8a4f9%3A0x4835fbf744b50938!2sSatra%20Plaza%2C%20Phase%202%2C%20Sector%2019D%2C%20Vashi%2C%20Navi%20Mumbai%2C%20Maharashtra%20400703!5e0!3m2!1sen!2sin!4v1646935416929!5m2!1sen!2sin" width="600" height="300"></iframe>
               </div>
               </div>
           </div>
           <div id="contact" className="g-0"><Footer /></div>
        </div>
    )
}

export default AboutUs