import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPokemon } from "../../redux/actions";
import { useParams } from "react-router-dom";



const DetailPage = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const detailPoke = useSelector((state) => state.pokemon);

useEffect(()=>{
    dispatch(getPokemon(id))

},[dispatch, id])

  return (
    <div>
      <h2>Detalles del Pokémon</h2>
      <div>
        <p>Nombre: {detailPoke.name}</p>
        <p>Tipo: {detailPoke.type && detailPoke.type.join(", ")}</p>
        <img src={detailPoke.img} alt={detailPoke.name} />
        <p>Vida: {detailPoke.vida}</p>
        <p>Fuerza: {detailPoke.fuerza}</p>
        <p>Defensa: {detailPoke.defensa}</p>
        <p>Velocidad: {detailPoke.velocidad}</p>
        <p>Altura: {detailPoke.height}</p>
        <p>Peso: {detailPoke.weight}</p>
      </div>
    </div>
  );
};

export default DetailPage;