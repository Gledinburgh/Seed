
import { useEffect } from 'react';
import { GeneralContext } from '../../Context/GeneralContext';
import styles from '../../styles/Layout.module.css';


export default function Title() {
  const title = GeneralContext().title;

  useEffect(() => {
    console.log('UseEffect: Title')
  }, [])

  return (
    <div className={styles.title}>
      {title ? title : "Main Layout Default Title"}
    </div>
  )
}
