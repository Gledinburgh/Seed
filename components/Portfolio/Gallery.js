import { Row, Col, Carousel, Image } from 'antd';


import styles from '../../styles/Portfolio.module.css';


export default function Gallery() {

  return (
    <div className={styles["carousel-wrapper"]}>
      <button className={styles["left-arrow"]} > L</button>
      <button className={styles["right-arrow"]} >R </button>
      <Carousel className={styles.carousel}>
        <div className={styles["carousel-image-wrapper"]}>

        </div>
        <div className={styles["carousel-image-wrapper"]}>
          <Image
            className={styles["carousel-image"]}
            src={"/Placeholder_1.jpg"}
          />
        </div>
        <div>
          <h3 >3</h3>
        </div>
        <div>
          <h3 >4</h3>
        </div>
        <div>
          <h3 >5</h3>
        </div>
        <div>
          <h3 >6</h3>
        </div>
      </Carousel>

    </div>

  )

}
