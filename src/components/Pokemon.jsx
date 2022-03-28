import styles from "./Pokemon.module.css";

const Pokemon = ({ id, name, img }) => {
  return (
    <div className={styles.container}>
      <div className={styles.img}>
        <img src={img} alt={name} />
      </div>
      <div className={styles.nameContainer}>
        <h2>{name}</h2>
        <h1>#{id}</h1>
      </div>
    </div>
  );
};

export default Pokemon;
