import React from "react";
import Card from "./Card";
import "./Skills.css";
import MySkills from "./SkillsAPI";


function Skills() {
  return (
    <>
      <section className="skills top " id="skills">
        <div className="container">
          <div className="heading">
            <h4>SKILLS</h4>
            <h1>Here are my skills</h1>
          </div>
          <div className="content grid">
            {MySkills.map((skill,index) => {
              return (
                <Card key={index}  image={skill.image} title={skill.title} experience={skill.experience}/>
              )
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default Skills;
