import styles from '../styles/Winner.module.css'
const Winner = function(props) {

  return (
    <div className={styles.card + ' ' + (props.fallback ? styles.fallback : '')}>
      <h2>{props.name}</h2>
      <p>{props.email}</p>
    </div>
  );
}

export default Winner;