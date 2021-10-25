import Winner from "./winner";
import styles from "../styles/Winners.module.css"

const WinnerList = function(props) {
  const winners = props.winners;

  return (
    <div id="winners" className={styles.winners}>
      {winners.length > 0 ? (
        winners.map((w, index) => {
          return <Winner name={w.name} email={w.email} fallback={w.fallback} key={index} />
        })
      ) : (
        <div>
          No winners yet!
        </div>
      )}
    </div>
  )
}

export default WinnerList;