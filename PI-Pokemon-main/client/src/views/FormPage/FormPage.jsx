import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTypes } from "../../redux/actions";

 function FormPage() {
  const dispatch = useDispatch();
  const dataType = useSelector((state)=> state.types )


  const[arrayTypes, setArrayTypes]= useState([])
  
  const handlerSelect = (data) => {

    if (!arrayTypes.includes(data)) {
      setArrayTypes([...arrayTypes,data])
    }
   

  }

  useEffect(()=>{
    setForm({...form, tipos: arrayTypes})

  },[arrayTypes])

console.log(arrayTypes);
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

      //const  regexNumeros = /^\d+$/;
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
      axios.post("http://localhost:3001/pokemons", form)
      .then(res=>{
        console.log(res.data);
        return alert(res.data.info)
      })
      .catch(err=>alert(err) )
      
    }
    
    return(
        <form onSubmit={submitHandler} >
        <div>
            <label>Name: </label>
            <input tipos="text" value={form.name} onChange={changeHanlder} name = "name" />
            {errors.name && <span>{errors.name}</span>}
        </div>

        <div>
          <label >Image: </label>
          <input tipos="text" value={form.imagen} onChange={changeHanlder} name = "imagen" />

        </div>
        <div>
          <label >Life: </label>
          <input tipos="text" value={form.vida} onChange={changeHanlder} name = "vida" />
          {/* {errors.vida && <span>{errors.vida}</span>} */}

        </div>
        <div>
          <label >Attack: </label>
          <input tipos="text" value={form.fuerza} onChange={changeHanlder} name = "fuerza" />

        </div>
        <div>
          <label >Defending: </label>
          <input tipos="text" value={form. defensa} onChange={changeHanlder} name = "defensa" />

        </div>
        <div>
          <label >Speed: </label>
          <input tipos="text" value={form.velocidad} onChange={changeHanlder} name = "velocidad" />

        </div>

        <div>
          <label >Height: </label>
          <input tipos="text" value={form.altura} onChange={changeHanlder} name = "altura" />

        </div>

        <div>
          <label >Weight: </label>
          <input tipos="text" value={form.peso} onChange={changeHanlder} name = "peso" />

        </div>

        <div>
          <label >Type: </label>
          <select name="tipos" onChange={(event)=>handlerSelect(event.target.value)} >
            {
              dataType.map((ele)=><option value={ele.id}>{ele.type}</option> )
            }

          </select>
          <ul>
            {
              arrayTypes.map((ele)=>{
                console.log(ele);
                 const nombre= dataType.filter((el)=>el.id === Number(ele) ); 
                 console.log(nombre);
                 return <li key={nombre[0].id}> {nombre[0].type}</li>
              })
            }
          </ul>

        </div>
        <button tipos="submit" >SUBMIT</button>
        </form>
    )
}
export default FormPage;