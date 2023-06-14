import React, { useEffect } from 'react';
import { setFilters, getTypes, getOrigin } from "../../redux/actions";
import { useSelector, useDispatch } from 'react-redux';
import style from "./Filtros.module.css";

const Filtros = () => {
    
    const dispatch = useDispatch()

    const retypes= useSelector((state)=>state.types)
     // sellene mi options
    useEffect(()=>{

      dispatch(getTypes())
    },[dispatch])

 

  return (
    <div>
      <select  className={style.select} onChange={(e) => dispatch( setFilters(e.target.value))}>
        <option value="All">All Types</option>
        {
          retypes.map((e)=> <option className={style.option} key={e.id} value={e.type} >{e.type}</option>)
        }

      </select>
      
      <select className={style.select} onChange={(e) => dispatch(getOrigin(e.target.value))}>
        <option value="All">All Origins</option>
        <option className={style.option} value="1">API</option>
        <option className={style.option} value="2">Database</option>
      
      </select>
      
    </div>
  );
};

export default Filtros;