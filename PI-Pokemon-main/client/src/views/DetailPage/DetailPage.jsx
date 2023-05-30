import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPokemon } from "../../redux/actions";
import { useParams } from "react-router-dom";
import  styles from "./DetailPage.module.css";



const DetailPage = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const detailPoke = useSelector((state) => state.pokemon);
    console.log(detailPoke);
useEffect(()=>{
    dispatch(getPokemon(id))

},[dispatch, id])

  return (
    <div className={ styles.container }>
    <div className={styles.left}>
      <div className={styles.display}>
       
            <img className={styles.logoPokemon} src="https://cdn.discordapp.com/attachments/824092983099261029/824110721263730688/Pokemon-Logo.png" alt="Logo de Pokemon" />
       
      
      </div>
      <div className={styles.rod}>
        <button className={styles.lastOne} id="resultado">resultado</button>
      </div>
    </div>

    <div className={styles.right}>
      <div className={styles.secondD}>
        <img style={{ display: 'none' }} alt="Imagen oculta" />
        <dl>
          <dt>Tipo:{detailPoke.type && detailPoke.type.join(", ")} </dt>
          <dd></dd>
          <dt>Altura:{detailPoke.height} </dt>
          <dd></dd>
          <dt>Peso: <p> {detailPoke.weight}</p></dt>
          <dd></dd>
        </dl>
      </div>

      <div className={styles.twt}>
        <ul id="pokemonsSuportados">
          <li className={styles.listPokemon}>Pikachu</li>
          <li className={styles.listPokemon}>Squirtle</li>
          <li className={styles.listPokemon}>Charmander</li>
          <li className={styles.listPokemon}>Ratata</li>
          <li className={styles.listPokemon}>Bulbasaur</li>
        </ul>
      </div>
    </div>

    <img className={styles.ima} src="https://cdn.discordapp.com/attachments/823289762022162472/823955102858870795/para_gabriel.png" alt="Imagen de Pokemon" />
  </div>
  );
};

export default DetailPage;