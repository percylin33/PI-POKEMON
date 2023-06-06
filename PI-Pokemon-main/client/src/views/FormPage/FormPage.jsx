import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTypes } from "../../redux/actions";
import style from "./FormPage.module.css";

function FormPage() {
  const dispatch = useDispatch();
  const dataType = useSelector((state) => state.types);
  const url = "http://localhost:3001/";

  const [arrayTypes, setArrayTypes] = useState([]);

  const handlerSelect = (data) => {
    if (!arrayTypes.includes(data)) {
      setArrayTypes([...arrayTypes, data]);
    }
  };

  useEffect(() => {
    setForm({ ...form, tipos: arrayTypes });
  }, [arrayTypes]);

  useEffect(() => {
    dispatch(getTypes());
  }, []);

  const [form, setForm] = useState({
    name: "",
    imagen: "",
    vida: "",
    fuerza: "",
    defensa: "",
    velocidad: "",
    altura: "",
    peso: "",
    tipos: [],
  });

  const [errors, setErrors] = useState({
    name: "",
    imagen: "",
    vida: "",
    fuerza: "",
    defensa: "",
    velocidad: "",
    altura: "",
    peso: "",
    tipos: "",
  });

  const validateName = (name) => {
    if (typeof name !== "string" || name.trim() === "" || !isNaN(parseFloat(name))) {
      return "Name is required";
    }
    return "";
  };

  const validateNumericField = (value) => {
    value = Number(value);
    
    if (typeof value !== "number" || isNaN(value) || value <= 0) {
      return "Please enter a valid number";
    }
    return "";
  };

  const validate = (form) => {
    const { name, imagen, vida, fuerza, defensa, velocidad, altura, peso } = form;
    const nameError = validateName(name);
    const imagenError = validateName(imagen);
    const vidaError = validateNumericField(vida);
    const fuerzaError = validateNumericField(fuerza);
    const defensaError = validateNumericField(defensa);
    const velocidadError = validateNumericField(velocidad);
    const alturaError = validateNumericField(altura);
    const pesoError = validateNumericField(peso);

    setErrors({
      ...errors,
      name: nameError,
      imagen: imagenError,
      vida: vidaError,
      fuerza: fuerzaError,
      defensa: defensaError,
      velocidad: velocidadError,
      altura: alturaError,
      peso: pesoError,
    });
  };

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
    validate({ ...form, [name]: value });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (Object.values(errors).every((error) => error === "")) {
      axios
        .post(`${url}pokemons`, form)
        .then((res) => {
          return alert(res.data.info);
        })
        .catch((err) => alert(err));
    } else {
      alert("Los valores ingresados no son válidos");
    }
  };

  const getInputClassName = (fieldName) => {
    return errors[fieldName] ? `${style.impu} ${style.errorInput}` : style.impu;
  };

 

  return (
    <div className={style.conte}>
      <form className={style.form} onSubmit={submitHandler}>
        <h2 className={style.h2}>CREATE A POKEMON</h2>
        <div className={style.containerLabel}>
          <label className={style.label}>Name: </label>
          <input
            className={getInputClassName("name")}
            type="text"
            value={form.name}
            onChange={changeHandler}
            name="name"
            placeholder="Has to be string"
          />
          
        </div>

        <div className={style.containerLabel}>
          <label className={style.label}>Image: </label>
          <input
            className={getInputClassName("imagen")}
            type="text"
            value={form.imagen}
            onChange={changeHandler}
            name="imagen"
            placeholder="Has to be string"
          />
          
        </div>

        <div className={style.containerLabel}>
          <label className={style.label}>Life: </label>
          <input
            className={getInputClassName("vida")}
            type="text"
            value={form.vida}
            onChange={changeHandler}
            name="vida"
            placeholder="It has to be number"
          />
          
          
        </div>

        <div className={style.containerLabel}>
          <label className={style.label}>Attack: </label>
          <input
            className={getInputClassName("fuerza")}
            type="text"
            value={form.fuerza}
            onChange={changeHandler}
            name="fuerza"
            placeholder="It has to be number"
          />
          
          
        </div>

        <div className={style.containerLabel}>
          <label className={style.label}>Defending: </label>
          <input
            className={getInputClassName("defensa")}
            type="text"
            value={form.defensa}
            onChange={changeHandler}
            name="defensa"
            placeholder="It has to be number"
          />
          
          
        </div>

        <div className={style.containerLabel}>
          <label className={style.label}>Speed: </label>
          <input
            className={getInputClassName("velocidad")}
            type="text"
            value={form.velocidad}
            onChange={changeHandler}
            name="velocidad"
            placeholder="It has to be number"
          />
         
         
        </div>

        <div className={style.containerLabel}>
          <label className={style.label}>Height: </label>
          <input
            className={getInputClassName("altura")}
            type="text"
            value={form.altura}
            onChange={changeHandler}
            name="altura"
            placeholder="It has to be number"
          />
          
          
        </div>

        <div className={style.containerLabel}>
          <label className={style.label}>Weight: </label>
          <input
            className={getInputClassName("peso")}
            type="text"
            value={form.peso}
            onChange={changeHandler}
            name="peso"
            placeholder="It has to be number"
          />
          
          
        </div>

        <div className={style.type}>
          <label className={style.label}>Type: </label>
          <select
            name="tipos"
            onChange={(event) => handlerSelect(event.target.value)}
             className={style.select}
          >
            {dataType.map((ele) => (          
               <option key={ele.id} value={ele.id}>
                {ele.type}
               </option>
            ))}
           </select>
          <ul className={style.ul}>
             {arrayTypes.map((ele) => {
              const nombre = dataType.filter((el) => el.id === Number(ele));
               return <li key={nombre[0].id}>{nombre[0].type}</li>;
             })}
           </ul>
        </div>


        <button className={style.boton} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default FormPage;


