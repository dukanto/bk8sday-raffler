import { useState } from 'react'
import styles from '../styles/Form.module.css'

const Form = function(props) {
  const [amount, setAmount] = useState('');

  const doRaffle = async () => {
    const res = await fetch('/api/winners/' + amount);
    props.parentCallback(res.json());
  }

  return (
  <div href="" className={styles.raffle}>
    Choose the amount of winners
    <input
        type="number"
        value={amount}
        onChange={e => { setAmount(e.currentTarget.value); }}
    />
    <a onClick={doRaffle}>Do your magic!</a>
  </div>
  )
}

export default Form;