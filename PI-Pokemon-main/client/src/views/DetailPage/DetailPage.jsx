import { useSelector, useDispatch } from "react-redux";
import { useEffect, useRef } from "react";
import { getPokemon } from "../../redux/actions";
import { useParams } from "react-router-dom";
import styles from "./DetailPage.module.css";
import React, { useState } from 'react';
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
import { Link } from "react-router-dom";

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

  console.log(detailPoke);
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
        className={styles.logoPokemon}
        src="https://cdn.discordapp.com/attachments/824092983099261029/824110721263730688/Pokemon-Logo.png"
        alt="Logo de Pokemon"
      />
    </div>
    <div className={styles.rod}>
      <img src={detailPoke.img} alt="imgPoke" />
      <button className={styles.lastOne} id="resultado" onClick={handleClick}>
        DESCRIPTION
      </button>
    </div>
    <div className={styles.secondD}>
      <p><strong>Id:</strong> {detailPoke.id}</p>
      <p><strong>Name:</strong> {detailPoke.name}</p>
      <p><strong>Life:</strong> {detailPoke.vida}</p>
      <p><strong>Attack:</strong> {detailPoke.fuerza}</p>
      <p><strong>Defending:</strong> {detailPoke.defenza}</p>
      <p><strong>speed:</strong> {detailPoke.velocidad}</p>
      <p><strong>Altura:</strong> {detailPoke.height}</p>
      <p><strong>Peso:</strong> {detailPoke.weight}</p>
      <p><strong>Types:</strong> {detailPoke.type && detailPoke.type.join(", ")}</p>      
      
     
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

</div>
  );
};

export default DetailPage;