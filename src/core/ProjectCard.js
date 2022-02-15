import React,{useState,useEffect} from "react"

const ProjectCard=({project})=>{
    const theme='#545b5b'


    return(
        <div className="card  shadow-lg rounded border" style={{minHeight:"500px",textDecoration:"none"}}>
          <div className="card-header h5 text-center text-warning" style={{backgroundColor:theme,color:"#dca43f"}} >{project.name}</div>
           <div className="p-3">
               <img src={project.thumbnail} width="100%" height="" style={{maxHeight:"300px"}}></img>
           </div>
           <div className="card-body" style={{fontFamily:"serif"}}>
               <div className=" text-muted">{project.location}</div>
               <div className="h6 lead text-warning" style={{color:""}}>Starting from {project.options[0].price}Cr.</div>
               <ul className="list-group list-group-horizontal-sm ">
               {project.options.map((o,i)=>(
                   <li className="list-group-item">{o.propertyType}</li>
                   ))}
               </ul>
           </div>

        </div>
    )
}
export default ProjectCard