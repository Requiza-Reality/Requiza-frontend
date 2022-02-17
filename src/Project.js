import React,{useEffect,useState} from "react"
import {Navbar,Container,Form,Nav,NavDropdown,FormControl,Button} from "react-bootstrap"
import { readProject } from "./core/apicalls"
import {useParams,Link} from "react-router-dom"
import ImageViewer from "react-simple-image-viewer";
import {Table,Toast,ToastContainer} from "react-bootstrap"
import LeadForm from "./core/LeadForm"


import{BsImages,BsBuilding,BsWhatsapp} from "react-icons/bs"


const Project=(props)=>{

    const theme='#545b5b'

    const[project,setProject]=useState({})
    const [isViewerOpen, setIsViewerOpen] = useState(false);
    const [showLeadForm,setShowLeadForm]=useState(false)


 
    const {projectId}=useParams();


    const openImageViewer = () => {
      setIsViewerOpen(true);
    }
  
    const closeImageViewer = () => {
      setIsViewerOpen(false);
    };

    useEffect(()=>{
       
        readProject(projectId).then(data=>{
            if(data.error)
            {
                console.log(data.error);
            }
            else{
                console.log(data);
                setProject(data)
            }
        })
      },[props])

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


    const optionsTable=()=>(
      <div style={{borderRadius:"10px"}}>
        <Table striped bordered hover style={{borderRadius:"20px"}}>
          <thead>
            <tr>
              <th>#</th>
              <th>Property Type</th>
              <th>Price</th>
              
            </tr>
          </thead>
          <tbody>
            {project.options && project.options.map((o,i)=>(
              <tr>
              <td>{i+1}</td>
              <td>{o.propertyType}</td>
              <td>{o.price} Cr</td>
              
            </tr>
            ))}
          </tbody>
        </Table>
      </div>
    )

    const amenities=()=>(
     <div className="col-12" style={{backgroundColor:theme}}>
         <h3 className="text-light text-center p-3">Ammenities</h3>
        <div  className="row">
          {project.ammenities && project.ammenities.map((a,i)=>(
            <div className=" col-6 col-md-4 p-3 ">
            <span className="h5 text-light"><BsBuilding/></span>
            <span className="h6 text-warning p-2">{a}</span>
            </div>
          ))}
      </div>
     </div>
    )

    const scrollingImages=()=>(
      <div>
        <div className="row flex-nowrap">
          {project.photos && project.photos.map((p,i)=>(
            <div className="w-auto  p-4">
              <img src={p} width="300px" height="250px"></img>
            </div>
          ))}
        </div>
      </div>
    )

    const whatsappToast=()=>(
      <span className="d-flex justify-content-end p-3 ">
      <a target="_blank" href="https://wa.me/+919694318893"><span className="bg-success p-4 rounded-circle"><BsWhatsapp className="h1 text-white  " /></span></a>
      </span>
    )
    {/*
       <ToastContainer position="bottom-end">
        <Toast  bg="success" >
          <Toast.Header>
            <BsWhatsapp className="h4 text-success"/>
          </Toast.Header>
          <Toast.Body className="text-white"><a target="_blank" href="https://wa.me/+919694318893" className="text-white">Click Here </a> to connect with us on Whatsapp.</Toast.Body>
        </Toast>
        </ToastContainer>
     */}
    const footer=()=>(
      <div style={{backgroundColor:theme}}>
         <div className="p-5 show-lg"><img src="/logo-long.png" width="100%"></img></div>
      </div>
    )

    const embedmap=()=>(
      <div className="mx-auto d-flex justify-content-center">
        <iframe src={project.gmapurl} width="600" height="350"></iframe>
      </div>
    )

    return(
        <div className=" col-12 m-0" style={{maxWidth:"100vw"}}>
         <div>{topNav()}</div>
         {showLeadForm?(<LeadForm/>):null}
         <br/>
           <br/>
           <br/>
           <br/>
           <br/>
           <div className="mx-auto text-center" style={{height:""}}> 
           <img src={project.thumbnail} width="90%" className="rounded" style={{height:"50vh"}}></img>
           </div>
           <div className="col-12 p-3" >
               <div className="float-right col-12 text-end"><BsImages className="h1 text-secondary " onClick={openImageViewer} /></div>

               <div className="h1 text-center text-warning" style={{fontFamily:"serif",color:""}}>{project.name}</div>
           </div>
           <div className="col-12 col-md-8 mx-auto p-4">
               <div className="text-center text-muted">{project.description}</div>
           </div>
           {isViewerOpen && (
             <ImageViewer
               src={project.photos}
               currentIndex={0}
               onClose={closeImageViewer}
               disableScroll={true}
               backgroundStyle={{
                 backgroundColor: "rgba(0,0,0,0.9)"
               }}
               closeOnClickOutside={true}
               style={{zIndex:"99999"}}
             />
           )}
           <div className="m-0">{amenities()}</div>
           <div className="col-10 col-md-8 mx-auto shadow-lg mt-5 rounded">{optionsTable()}</div>
           <div className="overflow-auto" onClick={openImageViewer}>{scrollingImages()}</div>
           <div className="p-4 text-center"><button onClick={()=>{setShowLeadForm(true)}} className="btn btn-lg btn-secondary text-warning" >Request a Call Back.</button></div>

           <div className="p-4 " style={{backgroundColor:theme}}>{embedmap()}</div>
           <br/>
           <br/>
           <div className="fixed-bottom">{whatsappToast()}</div>
           <div>{footer()}</div>
        </div>

       
    )
}

export default Project