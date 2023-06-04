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
      <button className={styles.lastOne} id="resultado" onClick={handleClick}>
        DESCRIPTION
      </button>
    </div>
    <div className={styles.secondD}>
      <p><strong>Tipo:</strong> {detailPoke.type && detailPoke.type.join(", ")}</p>
      <p><strong>Altura:</strong> {detailPoke.height}</p>
      <p><strong>Peso:</strong> {detailPoke.weight}</p>
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