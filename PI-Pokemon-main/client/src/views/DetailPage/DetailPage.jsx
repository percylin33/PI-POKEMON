import { useSelector, useDispatch } from "react-redux";
import { useEffect, useRef } from "react";
import { getPokemon } from "../../redux/actions";
import { useParams } from "react-router-dom";
import styles from "./DetailPage.module.css";
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import precentacion from "../../access/audio/precentacion.mp3";
import charizard from "../../access/audio/charizard.mp3";
import charmander from "../../access/audio/charmander.mp3";
import charmeleon from "../../access/audio/charmeleon.mp3";
import ivysaur from "../../access/audio/ivysaur.mp3";
import metapod from "../../access/audio/metapod.mp3";
import squirtle from "../../access/audio/squirtle.mp3";
import wortortle from "../../access/audio/wortortle.mp3";
import bulbasaur from "../../access/audio/bulbasaur.mp3";
import blastoise from "../../access/audio/blastoise.mp3";
import butterfree from "../../access/audio/butterfree.mp3";
import atras from "../../access/atras.png";
import pokebola from "../../access/pokebola.png";
import vida   from "../../access/iconos/vida.png";
import altura   from "../../access/iconos/altura.png";
import ataque   from "../../access/iconos/ataque.png";
import defenza   from "../../access/iconos/defenza.png";
import peso   from "../../access/iconos/peso.png";
import velocidad   from "../../access/iconos/velocida.png";
import altavoz from "../../access/iconos/altavoz.png";

const DetailPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const detailPoke = useSelector((state) => state.pokemon);
  const [isPlaying, setIsPlaying] = useState(false);
  const [userInteracted, setUserInteracted] = useState(false);
  const [audioFile, setAudioFile] = useState(precentacion);
  const audioPlayerRef = useRef(null);

  useEffect(() => {
    dispatch(getPokemon(id));
  }, [dispatch, id]);

  const handleClick = () => {
    setIsPlaying((prevIsPlaying) => !prevIsPlaying);

    if (!userInteracted) {
      setUserInteracted(true);
    }
  };

  useEffect(() => {
    if (userInteracted) {
      const audioPlayer = audioPlayerRef.current;

      if (isPlaying) {
        audioPlayer.play();
      } else {
        audioPlayer.pause();
      }
    }
  }, [userInteracted, isPlaying]);

  useEffect(() => {
    if (detailPoke && detailPoke.name) {
      let newAudioFile = precentacion; // Valor predeterminado

      if (detailPoke.name === "charmeleon") {
        newAudioFile = charmeleon;
      } else if (detailPoke.name === "squirtle") {
        newAudioFile = squirtle;
      } else if (detailPoke.name === "charizard") {
        newAudioFile = charizard;
      } else if (detailPoke.name === "charmander") {
        newAudioFile = charmander;
      } else if (detailPoke.name === "ivysaur") {
        newAudioFile = ivysaur;
      } else if (detailPoke.name === "metapod") {
        newAudioFile = metapod;
      } else if (detailPoke.name === "wartortle") {
        newAudioFile = wortortle;
      } else if (detailPoke.name === "blastoise") {
        newAudioFile = blastoise;
      } else if (detailPoke.name === "bulbasaur") {
        newAudioFile = bulbasaur;
      } else if (detailPoke.name === "butterfree") {
        newAudioFile = butterfree;
      }

      setAudioFile(newAudioFile);
    }
  }, [detailPoke]);

  useEffect(() => {
    audioPlayerRef.current = new Audio(audioFile);
    audioPlayerRef.current.src = audioFile;

    return () => {
      // Tarea de limpieza: Detener el audio al desmontar el componente
      audioPlayerRef.current.pause();
      audioPlayerRef.current = null;
    };
  }, [audioFile]);
  
  return (
<div className={styles.container}>
  <Link to={"/home"}>
    <img className={styles.imAtras} src={atras} alt="boton atras" />
  </Link>
  <div className={styles.detailConte}>
    <div className={styles.display}>
      <img
        className={styles.pokebola}
        src={pokebola}
        alt="Pokebola"
      />
    </div>
    <div className={styles.rod}>
      <img className={styles.poke} src={detailPoke.img} alt="imgPoke" />
      <button className={styles.lastOne} id="resultado" onClick={handleClick}>
        DESCRIPTION  <img className={styles.altavoz} src={altavoz} alt="altavoz" />
      </button>
    </div>
    
    <div className={styles.secondD}>
      <p><strong>Id:</strong> {detailPoke.id} </p>
      <p><strong>Name:</strong> {detailPoke.name}</p>
      <p> <img className={styles.icono} src={vida} alt="vida" /> <strong> Life:</strong> {detailPoke.vida}</p>
      <p> <img className={styles.icono} src={ataque} alt="ataque" /><strong> Attack:</strong> {detailPoke.fuerza}</p>
      <p> <img className={styles.icono} src={defenza} alt="defenza" /><strong> Defending:</strong> {detailPoke.defensa}</p>
      <p> <img className={styles.icono} src={velocidad} alt="velocidad" /><strong> speed:</strong> {detailPoke.velocidad}</p>
      <p> <img className={styles.icono} src={altura} alt="altura" /><strong> height:</strong> {detailPoke.height}</p>
      <p> <img className={styles.icono} src={peso} alt="peso" /><strong> weight:</strong> {detailPoke.weight}</p>
      <p><strong>Types:</strong> {detailPoke.type && detailPoke.type.join(", ")}</p>      
      
     
    </div>

  </div>

</div>
  );
};

export default DetailPage;