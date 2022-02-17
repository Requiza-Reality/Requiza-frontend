import React from "react"
import {Navbar,Container,Form,Nav,NavDropdown,FormControl,Button} from "react-bootstrap"


const AboutUs=()=>{

    const theme='#545b5b'


    const topNav=()=>(
        <div>
          <Navbar bg="" expand="lg" variant="dark" fixed="top" style={{backgroundColor:theme,zIndex:"0"}} className="shadow-lg ">
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
                  <Nav.Link href="/aboutus" className="text-warning">About Us</Nav.Link>
                  <Nav.Link href="/" className="text-warning">Contact Us</Nav.Link>
                  
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
      )

      const text=()=>(
          <div className="" style={{fontFamily:"serif"}}>
              <p className="h5 text-muted">Menka Rajpoot is an Architect . She established the company in 2009 with the vision to expand the business .Youngblood with passionate dreams. She is also stepping towards the digital markets to establish greater heights and bring wonders to the existing empire.</p>
               <br/>
              <p className="h5 text-muted">Mrs Menka Rajpoot belong to business community from North India. She began her career with humble roots and worked her way up with her hard work, Genuineness and Dedication. She worked with various companies in Production and Sales. She started her Real Estate Consultant career as an CP .
Eventually she founded her own company in the year 2009 and now serving her clients and investors with great zeal and enthusiasm. She cherishes assembly unused individuals, building relations, managing with complicated issues and overseeing group. She deals not only in Residential, commercial sector but also in land, warehousing, Bungalow, Plots  etc. All over Mumbai & Pune and helps investors to choose the right path for future investment.
Her combined energy and perseverance has taken the company where it is nowadays as an organization.</p>
              <br/>
              <p className="h5 text-muted">With her excellent marketing skills and wise hospitality, she has been able to pull up a good business. Along with the knowledge of Architecture , interior designing and early exposure to the Real Estate sector she had developed good decisions architectural making skills. Apart from this Mrs Menka Rajpoot has an impressive personality and a calculative mind which is much need in Real Estate business.</p>
               <br/>
              <p className="h5 text-muted">With her youthful energy and amazing business mind, Mrs. Menka Rajpoot will make the future years count for REQUIZA REALITY.</p>
          </div>
      )

      const footer=()=>(
        <div style={{backgroundColor:theme}}>
           <div className="p-5 show-lg"><img src="/logo-long.png" width="100%"></img></div>
        </div>
      )

    return(
        <div className="container" style={{maxWidth:"100vw"}}>
           <div>{topNav()}</div>
           <br/>
           <br/>
           <br/>
           <br/>
           <br/>
           <div className="row">
               <div className="col-5"></div>
               <div className="col-7 overflow-auto" style={{height:"80vh"}}>{text()}</div>
           </div>
           <div className="g-0">{footer()}</div>
        </div>
    )
}

export default AboutUs