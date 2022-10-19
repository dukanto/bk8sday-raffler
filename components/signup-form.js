import { useState } from 'react'
import styles from '../styles/Form.module.css'

const SignUpForm = function() {
  const [registered, setRegistered] = useState(undefined);
  const [error, setError] = useState(undefined);
  const [mail, setMail] = useState("");
  const [name, setName] = useState("");

  const signup = (e) => {
    e.preventDefault();
    const data = { name: name, email: mail};
    fetch('/api/participants', {
      method: 'POST',
      body: JSON.stringify(data)
    }).then((r) => {
      return r.json()
    }).then((r) => {
      if(r.msg) {
        setError({message: r.msg})
      } else {
        console.log(r)
        setRegistered(r)
      }
    }).catch((e) => {
      setError({message: r.msg})
    });
  }

  return (
    (registered !== undefined) ? (
      <div className={styles.success}>
      <h1>Thank you</h1>
      <p className={styles.registered}> You have been registered as {registered.name} &lt;{registered.email}&gt; </p>
      </div>
    ) : (
      <form href="" className={styles.raffle} onSubmit={signup}>
      <p>
        <label htmlFor="email" className={styles.label}>Email Address</label>
        <input
          type="email"
          id="email"
          value={mail}
          className={styles.input}
          onChange={e => { setMail(e.currentTarget.value); }}
          placeholder="john.doe@gmail.com"
          required
        />
      </p>
      <p>
        <label htmlFor="name" className={styles.label}>Name</label>
        <input
          type="text"
          id="name"
          value={name}
          className={styles.input}
          onChange={e => { setName(e.currentTarget.value); }}
          placeholder="John Doe"
          required
        />
      </p>
      {error && (
      <div className={styles.error}>
        <h3>Something went wrong</h3>
        <p>Please, try again</p>
        <p className='small'><strong>Received Error:</strong><br/>{error.message}</p>
      </div>)}
      <p>
        <button type="submit" className={styles.button}>Sign Me Up!</button>
      </p>
    </form>
    )
  )
}

export default SignUpForm;
