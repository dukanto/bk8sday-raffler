import styles from '../styles/Winner.module.css'
const Winner = function(props) {
  console.log(props)
  return (
    <div className={styles.card}>
      <h2>{props.name}</h2>
      <p>{props.email}</p>
    </div>
  );
}

export default Winner;