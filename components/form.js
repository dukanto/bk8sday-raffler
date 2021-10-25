import { useState } from 'react'
import styles from '../styles/Form.module.css'

const Form = function(props) {
  const [amount, setAmount] = useState(1);

  const doRaffle = async () => {
    const res = await fetch('/api/winners/' + amount);
    props.parentCallback(res.json());
  }

  return (
  <form href="" className={styles.raffle}>
    <p>
      <input
        type="number"
        value={amount}
        className={styles.input}
        onChange={e => { setAmount(e.currentTarget.value); }}
      />
      Winner(s)
    </p>
    <p>
      <a className={styles.button} onClick={doRaffle}>Raffle time!</a>
    </p>
  </form>
  )
}

export default Form;