import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTypes } from "../../redux/actions";
import style from "./FormPage.module.css";

 function FormPage() {
  const dispatch = useDispatch();
  const dataType = useSelector((state)=> state.types )
  const url = "http://localhost:3001/"

  const[arrayTypes, setArrayTypes]= useState([])
  
  const handlerSelect = (data) => {

    if (!arrayTypes.includes(data)) {
      setArrayTypes([...arrayTypes,data])
    }
   

  }

  useEffect(()=>{
    setForm({...form, tipos: arrayTypes})

  },[arrayTypes])


  useEffect(()=>{
    dispatch(getTypes())

  },[])




    const  [form,setForm] = useState({
        name: "",
        imagen: "",
        vida:"",
        fuerza:"",
        defensa:"",
        velocidad:"",
        altura:"",
        peso:"",
        tipos:[]
    })

   

    const [errors, setErrors] = useState({
        name: "",
        imagen: "",
        vida:"",
        fuerza:"",
        defensa:"",
        velocidad:"",
        altura:"",
        peso:"",
        tipos:""

    })

    
    const changeHanlder = (event) => {
      const property = event.target.name;
      const value = event.target.value;
      setForm({ ...form, [property]: value })
      validate({ ...form, [property]: value })
      // setform =({ ...form,[property]:value})
    }
    
    
    const validate = (form) => {


      const regexLetras = /^[A-Za-z]+$/;
      if (typeof form.name === "string" && form.name.trim() !== "") {
        if (regexLetras.test(form.name)) {
          setErrors({ ...errors,name: "Solo letras"})
          
        } else {
          setErrors({ ...errors,name: "Contiene caracteres no permitidos"})
          
        }
      } else {
        setErrors({ ...errors,name: "Campo esta necesario "})
        
      }

      // if (typeof form.imagen === "string" && form.imagen.trim() !== "") {
      //   if (regexLetras.test(form.imagen)) {
      //     setErrors({ ...errors,imagen: "Solo letras"})
          
      //   } else {
      //     setErrors({ ...errors,imagen: "Contiene caracteres no permitidos"})
          
      //   }
      // } else {
      //   setErrors({ ...errors,imagen: "Campo esta necesario "})
        
      // }


    }

    const submitHandler = (event) => {
      event.preventDefault();
      axios.post(`${url}pokemons`, form)
      .then(res=>{
        
        return alert(res.data.info)
      })
      .catch(err=>alert(err) )
      
    }
    
    return(
        <div className={style.conte}>
        <form className={style.form} onSubmit={submitHandler} >
        <div>
            <label className={style.label} >Name: </label>
            <input  className={style.impu} tipos="text" value={form.name} onChange={changeHanlder} name = "name" />
            {errors.name && <span>{errors.name}</span>}
        </div>

        <div>
          <label className={style.label} >Image: </label>
          <input className={style.impu} tipos="text" value={form.imagen} onChange={changeHanlder} name = "imagen" />

        </div>
        <div>
          <label className={style.label} >Life: </label>
          <input className={style.impu} tipos="text" value={form.vida} onChange={changeHanlder} name = "vida" />
   

        </div>
        <div>
          <label className={style.label} >Attack: </label>
          <input className={style.impu} tipos="text" value={form.fuerza} onChange={changeHanlder} name = "fuerza" />

        </div>
        <div>
          <label className={style.label} >Defending: </label>
          <input className={style.impu} tipos="text" value={form. defensa} onChange={changeHanlder} name = "defensa" />

        </div>
        <div>
          <label className={style.label} >Speed: </label>
          <input className={style.impu} tipos="text" value={form.velocidad} onChange={changeHanlder} name = "velocidad" />

        </div>

        <div>
          <label className={style.label} >Height: </label>
          <input className={style.impu} tipos="text" value={form.altura} onChange={changeHanlder} name = "altura" />

        </div>

        <div>
          <label className={style.label} >Weight: </label>
          <input className={style.impu} tipos="text" value={form.peso} onChange={changeHanlder} name = "peso" />

        </div>

        <div>
          <label className={style.label} >Type: </label>
          <select name="tipos" onChange={(event)=>handlerSelect(event.target.value)} >
            {
              dataType.map((ele)=><option key={ele.id} value={ele.id}>{ele.type}</option> )
            }

          </select >
          <ul>
            {
              arrayTypes.map((ele)=>{
             
                 const nombre= dataType.filter((el)=>el.id === Number(ele) ); 
                
                 return <li key={nombre[0].id}> {nombre[0].type}</li>
              })
            }
          </ul>

        </div>
        <button  className={style.boton} tipos="submit" >SUBMIT</button>
        </form>
        </div>
    )
}
export default FormPage;