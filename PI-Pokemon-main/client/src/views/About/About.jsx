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
  Estoy lleno de alegría y emoción al completar este proyecto con éxito.{"\n"}
  Quiero expresar mi más profundo agradecimiento al equipo de Henry por su incansable trabajo, dedicación y compromiso hacia los alumnos.{"\n"}
  Durante todo este proceso de aprendizaje, hemos explorado y utilizado diversas tecnologías y herramientas, como React, Redux, JavaScript, NodeJS, CSS, Github y PostgreSQL, que nos han llevado a crecer y convertirnos en desarrolladores full-stack.{"\n"}
  Ha sido un privilegio ser parte de la maravillosa comunidad que se ha formado en Henry.{"\n"}
  ¡Gracias por su apoyo constante y por brindarnos una experiencia de aprendizaje inigualable!
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