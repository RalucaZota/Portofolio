import React from "react"
import "../../Styles/Portofolio.css"
import './Projects.css'
import Card from "./Card"
import ProjectApi from "./ProjectsAPI"

function Projects() {
  return (
    <>
      <section className='Portfolio Project' id='project'>
        <div className='container top'>
          <div className='heading text-center'>
            <h1>MY PROJECTS</h1>
          </div>

          <div className='content grid'>
            {ProjectApi.map((value, index) => {
              return <Card key={index} image={value.image} date={value.date} title={value.title} desc={value.desc} desc_two={value.desc_two}/>
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default Projects