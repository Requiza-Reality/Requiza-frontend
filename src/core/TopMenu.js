import React,{useState,useEffect} from "react"
import {Link} from "react-router-dom"
import {BsSearch} from "react-icons/bs"
import {Navbar,Container,Form,Nav,NavDropdown,FormControl,Button} from "react-bootstrap"



const TopMenu=()=>{

    const theme='#191919'


    const [search,setSearch]=useState("")

    const handleSearchChange=(e)=>{
        setSearch(e.target.value)
        
      }

    const topNav=()=>(
        <div>
          <Navbar bg="" expand="lg" variant="dark" fixed="top" style={{backgroundColor:theme,opacity:"0.9"}} className="shadow-lg p-0">
            <Container fluid>
              <Navbar.Brand href="/" className="">
                <img src="/logo-2.png" className="rounded" alt="" width="200px" height="60px" style={{borderRadius:"15px"}} />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll" className="text-warning me-3 flex-wrap border-0" style={{fontSize:"0.8em"}} />
              <Navbar.Collapse id="navbarScroll" className="">
      
                <Form className="d-none d-md-flex mx-auto col-6" >
                  <FormControl
                    type="search"
                    placeholder="Search"
                    value={search}
                    onChange={handleSearchChange}
                    className="me-2 mx-auto d-flex col-6 border border-2 border-warning"
                    aria-label="Search"
                  />
                  <Link to={`/projects/search/${search}`}><Button variant="outline-warning" ><BsSearch /></Button></Link>
                </Form>
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
      const mobSearch=()=>(
        <div className="d-block d-md-none col-9 mx-auto m-0" >
            <Form className="d-flex mx-auto p-2">
                    <FormControl
                      type="search"
                      placeholder="Search"
                      value={search}
                      onChange={handleSearchChange}
                      className="me-2 mx-auto d-flex border border-2 border-warning"
                      aria-label="Search"
                    />
                   <Link to={`/projects/search/${search}`}> <Button variant="outline-warning" ><BsSearch /></Button></Link>
            </Form>
        </div>
        )
      
    return(
        <div>
           <div>{topNav()}</div>
           <br/><br/><br/>
           <div style={{backgroundColor:theme,opacity:"0.9"}}>{mobSearch()}</div>

        </div>
    )
}

export default TopMenu;