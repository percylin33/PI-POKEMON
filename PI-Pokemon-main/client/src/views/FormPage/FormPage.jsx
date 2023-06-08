
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTypes, createPoke } from "../../redux/actions";
import style from "./FormPage.module.css";
import { validateForm } from "./formValidation";

function FormPage() {
  const dispatch = useDispatch();
  const dataType = useSelector((state) => state.types);

 

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

  const validate = (form) => {
    const errors = validateForm(form);
    setErrors(errors);
  };

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
    validate({ ...form, [name]: value });
    setErrors({ ...errors, [name]: "" }); // Restablecer el error del campo actual
  };

  // const changeHandler = (event) => {
  //   const { name, value } = event.target;
  //   setForm({ ...form, [name]: value });
  //   validate({ ...form, [name]: value });
  // };

  const submitHandler = (event) => {
    event.preventDefault();
    const formErrors = validateForm(form);
  
    if (Object.values(formErrors).every((error) => error === "")) {
      dispatch(createPoke(form))
        .then((res) => {
          alert(res.payload.info);
        })
        .catch((err) => {
          alert(err);
        });
    } else {
      alert("Los valores ingresados no son válidos");
      setErrors(formErrors);
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
          {!errors.name ? null : <p className={style.err}>{errors.name}</p>}
          
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
          {!errors.imagen ? null : <p className={style.err}>{errors.imagen}</p>}
          
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
          {!errors.vida ? null : <p className={style.err}>{errors.vida}</p>}
          
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
          {!errors.fuerza ? null : <p className={style.err}>{errors.fuerza}</p>}
          
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
          {!errors.defensa ? null : <p className={style.err}>{errors.defensa}</p>}
          
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
          {!errors.velocidad ? null : <p className={style.err}>{errors.velocidad}</p>}
         
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
          {!errors.altura ? null : <p className={style.err}>{errors.altura}</p>}
          
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
          {!errors.peso ? null : <p className={style.err}>{errors.peso}</p>}
          
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
            <button className={style.bot} type="button" onClick={() => setArrayTypes([])}>x</button>
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


