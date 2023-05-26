import CarsContainer from "../../Components/CarsContainer/CarsContainer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPokemons } from "../../redux/actions";

const HomePage = () => {
    const dispatch = useDispatch();

useEffect(()=>{
    dispatch(getPokemons())

},[])

    return(
        <div>
       <CarsContainer/>
        </div>
    )
}
export default HomePage;