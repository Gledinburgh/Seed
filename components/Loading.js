
import styles from '../styles/Explore.module.css';
import { useEffect, useState } from "react";

export default function Loading({ loading }) {

  const [display, setDisplay] = useState(false)

  useEffect(() => {
    if (loading) setDisplay('block');
    if (!loading) setDisplay('none');
  }, [loading])

  return (

    <div className={styles.fullsize} style={{ "display": display }}>
      <span className={styles.spin}>☺</span>
    </div>
  )

}