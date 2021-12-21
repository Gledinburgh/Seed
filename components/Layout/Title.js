
import { useEffect } from 'react';
import { GeneralContext } from '../../Context/GeneralContext';
import styles from '../../styles/Layout.module.css';


export default function Title() {
  const title = GeneralContext().title;


  useEffect(() => {
    console.log('UseEffect: Title')
  }, [])

  if (title === "home") return null;
  if (!title) title = "Main Layout Default Title";

  return (
    <div className={styles.title}>
      <h1 className={styles["title-text"]} >
        {title}
      </ h1>
    </div>
  )
}
