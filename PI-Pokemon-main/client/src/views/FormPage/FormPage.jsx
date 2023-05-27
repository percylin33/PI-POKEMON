import axios from "axios";
import { useState } from "react";

 function FormPage() {
    const  [form,setForm] = useState({
        name: "",
        image: "",
        life:"",
        attack:"",
        defending:"",
        speed:"",
        height:"",
        weight:"",
        type:""
    })

    const [errors, setErrors] = useState({
        name: "",
        image: "",
        life:"",
        attack:"",
        defending:"",
        speed:"",
        height:"",
        weight:"",
        type:""

    })

    
    const changeHanlder = (event) => {
      const property = event.target.name;
      const value = event.target.value;
      setForm({ ...form, [property]: value })
      validate({ ...form, [property]: value })
      // setform =({ ...form,[property]:value})
    }
    //const 
    
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

      // if (typeof form.life === "string" && form.life.trim() !== "") {
      //   if (regexNumeros.test(form.life)) {
      //     setErrors({ ...errors,life: "Solo numeros"})
          
      //   } else {
      //     setErrors({ ...errors,life: "Contiene caracteres no permitidos"})
          
      //   }
      // } else {
      //   setErrors({ ...errors,life: "Campo esta necesario "})
        
      // }
    }

    const submitHandler = (event) => {
      event.preventDefault();
      axios.post("http://localhost:3001/pokemons", form)
      .then(res=>{
        console.log(res.data);
        return alert(res.data)
      })
      .catch(err=>alert(err) )
      
    }
    
    return(
        <form onSubmit={submitHandler} >
        <div>
            <label>Name: </label>
            <input type="text" value={form.name} onChange={changeHanlder} name = "name" />
            {errors.name && <span>{errors.name}</span>}
        </div>

        <div>
          <label >Image: </label>
          <input type="text" value={form.image} onChange={changeHanlder} name = "image" />

        </div>
        <div>
          <label >Life: </label>
          <input type="text" value={form.life} onChange={changeHanlder} name = "life" />
          {/* {errors.life && <span>{errors.life}</span>} */}

        </div>
        <div>
          <label >Attack: </label>
          <input type="text" value={form.attack} onChange={changeHanlder} name = "attack" />

        </div>
        <div>
          <label >Defending: </label>
          <input type="text" value={form. defending} onChange={changeHanlder} name = "defending" />

        </div>
        <div>
          <label >Speed: </label>
          <input type="text" value={form.speed} onChange={changeHanlder} name = "speed" />

        </div>

        <div>
          <label >Height: </label>
          <input type="text" value={form.height} onChange={changeHanlder} name = "height" />

        </div>

        <div>
          <label >Weight: </label>
          <input type="text" value={form.weight} onChange={changeHanlder} name = "weight" />

        </div>

        <div>
          <label >Type: </label>
          <input type="text" value={form.type} onChange={changeHanlder} name = "type" />

        </div>
        <button type="submit" >SUBMIT</button>
        </form>
    )
}
export default FormPage;