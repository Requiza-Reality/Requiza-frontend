import React,{useState,useEffect} from "react"
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

  const theme='#545b5b'

  const Bounce=styled.div`animation:6s ${keyframes`${ani}`}`

 const listSearchProjects=()=>{
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
   setLoading(true)
   setTimeout(()=>{
     setLoading(false)
   },6000)
   setTimeout(()=>{
    setShowLeadForm(true)
   },10000)
  },[props])

  const topNav=()=>(
    <div>
      <Navbar bg="" expand="lg" variant="dark" fixed="top" style={{backgroundColor:theme}} className="shadow-lg">
        <Container fluid>
          <Navbar.Brand href="/">
            <img src="/logo-2.png" className="rounded" alt="" width="100%" height="70px" style={{borderRadius:"15px"}} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" className="text-light" />
          <Navbar.Collapse id="navbarScroll" className="text-light">
  
            <Form className="d-flex mx-auto col-6">
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
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="/" className="text-light">About Us</Nav.Link>
              <Nav.Link href="/" className="text-light">Contact Us</Nav.Link>
              
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
                className="me-2 mx-auto d-flex col-12"
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
            <div className="">
           {topNav()}
           
           {showLeadForm?(<LeadForm/>):null}
           <br/>
           <br/>
           <br/>
           <br/>
           
           <div className="col-12 m-0 p-0" style={{backgroundColor:theme,width:"100vw"}}>{mobSearch()}</div>
          <div className="row  d-flex justify-content-center">
          {project.map((p,i)=>(
            <div className=" col-11 col-md-4 p-3"> <Link to={`/projects/${p._id}`} style={{textDecoration:"none"}}><ProjectCard project={p} style={{textDecoration:"none"}}></ProjectCard></Link></div>
           ))}
          </div>
          <div>{footer()}</div>
        </div>
          )}
        </div>
    )
}

export default Home;

