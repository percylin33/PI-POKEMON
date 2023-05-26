import style from "./CarsContainer.module.css";
import Cars from "../Cars/Cars";
import { useSelector } from "react-redux"
const CarsContainer = () => {
	const arrayPokemons = useSelector(state=>state.pokemons)
 


    return (
		<div className= {style.CarsContainer}>
       { arrayPokemons.map(poke=> {
            return <Cars
            
            image = {poke.image}
            name= {poke.name}
            //types= {poke.types}
            
            />

        })}
		</div>
    )
}

export default CarsContainer;