import React,{useState,useEffect,useRef} from "react"
import { Link } from "react-router-dom"
import {Navbar,Container,Form,Nav,NavDropdown,FormControl,Button} from "react-bootstrap"
import {listProjects,getSearchProject} from "./core/apicalls"
import ProjectCard from "./core/ProjectCard"
import { bounce ,swing,bounceOut,zoomInRight,flipOutX,merge} from 'react-animations';
import { StyleSheet, css } from 'aphrodite';
import styled, { keyframes } from 'styled-components';
import LeadForm from "./core/LeadForm"
import {BsSearch} from "react-icons/bs"
const ani=merge(zoomInRight,flipOutX)




const Home=(props)=>{

  const [project,setProjects]=useState([])
  const [search,setSearch]=useState("")
  const [loading,setLoading]=useState(false)
  const [showLeadForm,setShowLeadForm]=useState(false)

  const count=useRef(0)

  const theme='#545b5b'

  const Bounce=styled.div`animation:6s ${keyframes`${zoomInRight}`}`

 const listSearchProjects=(e)=>{
   e.preventDefault()
   getSearchProject(search).then(data=>{
     if(data.error)
     {
       console.log(data.error);
     }
     else{
       setProjects(data)
     }
   })
 }

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

 const handleSearchChange=(e)=>{
   setSearch(e.target.value)
   if(e.target.value=="")
   {
     listAllProjects()
   }
 }

  useEffect(()=>{
   listAllProjects()
   
   setTimeout(()=>{
     setLoading(false)
   },7000)
   setTimeout(()=>{
    setShowLeadForm(true)
   },10000)
 },[])

  const topNav=()=>(
    <div>
      <Navbar bg="" expand="lg" variant="dark" fixed="top" style={{backgroundColor:theme}} className="shadow-lg p-0">
        <Container fluid>
          <Navbar.Brand href="/" className="">
            <img src="/logo-2.png" className="rounded" alt="" width="100%" height="60px" style={{borderRadius:"15px"}} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" className="text-warning" />
          <Navbar.Collapse id="navbarScroll" className="">
  
            <Form className="d-flex mx-auto col-6" onSubmit={listSearchProjects}>
              <FormControl
                type="search"
                placeholder="Search"
                value={search}
                onChange={handleSearchChange}
                className="me-2 mx-auto d-flex col-6"
                aria-label="Search"
              />
              <Button variant="outline-warning" onClick={listSearchProjects}><BsSearch /></Button>
            </Form>
            <Nav
              className="me-2 mx-auto my-2 my-lg-0 d-flex"
              style={{ maxHeight: '100px'}}
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
  const mobSearch=()=>(
  <div className="d-block d-md-none col-9 mx-auto m-0">
      <Form className="d-flex mx-auto p-2">
              <FormControl
                type="search"
                placeholder="Search"
                value={search}
                onChange={handleSearchChange}
                className="me-2 mx-auto d-flex"
                aria-label="Search"
              />
              <Button variant="outline-warning" onClick={listSearchProjects}><BsSearch /></Button>
      </Form>
  </div>
  )

  const footer=()=>(
    <div style={{backgroundColor:theme}}>
       <div className="p-5 show-lg"><img src="/logo-long.png" width="100%"></img></div>
    </div>
  )
    return(
        <div>
          {loading?
          (
            <div className="d-flex align-items-center" style={{height:"100vh",backgroundColor:theme}}  >
            <Bounce className="col-11 col-md-7 mx-auto">
            <img src="/logo-2.png" className="" width="100%" height="200px" ></img>
            </Bounce>
           </div>
          ):
          (
            <div className=" g-0" style={{maxWidth:"100vw"}}>
            <div>{topNav()}</div>
           
           {showLeadForm?(<LeadForm/>):null}
           <br/>
           <br/>
           <br/>
           <br/>
           
           <div className="col-12 m-0 p-0" style={{backgroundColor:theme}}>{mobSearch()}</div>
          <div className="row justify-content-center col-12 m-0 p-0">
          {project.map((p,i)=>(
            <div className=" col-11 col-md-6 col-lg-4 p-3"> <Link to={`/projects/${p._id}`} style={{textDecoration:"none"}}><ProjectCard project={p} className="" style={{textDecoration:"none"}}></ProjectCard></Link></div>
           ))}
          </div>
          <div className="g-0">{footer()}</div>
        </div>
          )}
        </div>
    )
}

export default Home;

