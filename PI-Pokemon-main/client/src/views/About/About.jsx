import style from "./About.module.css";
import react from "../../access/imgAbout/react.png";
import redux from "../../access/imgAbout/redux.png";
import js from "../../access/imgAbout/js.png";
import node from "../../access/imgAbout/node.png";
import css from "../../access/imgAbout/css.png";
import postgres from "../../access/imgAbout/postgres.png";
import git from "../../access/imgAbout/git.png";
import percy from "../../access/imgAbout/percy.jpeg";

const About = () => {
    return(
        <div className={style.container} >

           <div className={style.pCon} >
            
              <img className={style.per} src={percy} alt="img de percy" />

              <p className={style.ordenado}>
                I am overjoyed and excited to successfully complete this project.{"\n"}
                I want to express my deepest gratitude to the Henry team for their tireless work, dedication and commitment to the               students.{"\n"}
                Throughout this learning process, we have explored and used various technologies and tools, such as React, Redux,               JavaScript, NodeJS, CSS, Github and PostgreSQL, which have led us to grow and become full-stack developers.{"\n" }
                It has been a privilege to be a part of the wonderful community that has grown at Henry.{"\n"}
                Thank you for your continued support and for providing us with an unmatched learning experience!
              </p>

              <div className={style.i}>
                  <img className={style.img} src={react} alt="imagen de react" />
                  <img className={style.img} src={redux} alt="imagen de redux" />  
                  <img className={style.img} src={js} alt="imagen de js" />  
                  <img className={style.img} src={node} alt="imagen de node" />  
                  <img className={style.img} src={css} alt="imagen de css" />  
                  <img className={style.img} src={postgres} alt="imagen de postgres" />  
                  <img className={style.img} src={git} alt="imagen de git" />    
              </div>

           </div>

        </div>
    )
}

export default About;