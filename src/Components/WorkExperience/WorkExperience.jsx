import React from 'react'
import Achievements from './WorkExperienceAPI'
import Card from './Card'
import './WorkExperience.css'

const WorkExperience = () => {
    return (
        <>
            <section className='Resume' id='resume'>
                <div className="container top">
                    <div className="heading text-center">
                        <h1>Education and Work Experience</h1>
                    </div>
                    <div className="content-section mtop d_flex">
                        <div className="left">
                            <div className="heading">
                                <h4 >2014-2022</h4>
                                <h1 >Education</h1>
                            </div>
                            <div className="content">
                                {Achievements.map((ach, index) => {
                                    if (ach.category === 'education') {
                                        return (
                                            <Card key={index} title={ach.title} year={ach.year} rate= {ach.rate} description={ach.description} prof={ach.prof}/>
                                        )
                                    }
                                    return null; 
                                })}
                            </div>
                        </div>
                        <div className="left">
                            <div className="heading">
                                <h4>2021-2023</h4>
                                <h1>Work Experience</h1>
                            </div>
                            <div className="content">
                                {Achievements.map((ach, index) => {
                                    if (ach.category === 'experience') {
                                        return (
                                            <Card key={index} title={ach.title} year={ach.year} rate= {ach.rate} description={ach.description} prof={ach.prof}/>
                                        )
                                    }
                                    return null;
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
      )
}

export default WorkExperience