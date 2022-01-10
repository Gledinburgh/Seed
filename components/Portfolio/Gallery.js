import { Row, Col, Carousel, Image } from 'antd';
import { useRef } from 'react'


import styles from '../../styles/Portfolio.module.css';


export default function Gallery() {

  const sliderRef = useRef();

  const next = () => {
    sliderRef.current.next()
  }
  const prev = () => {
    sliderRef.current.prev()
  }


  return (
    <>
      <div id="gallery" style={{ height: "5vh" }}></div>
      <div className={styles["carousel-wrapper"]}>

        <button onClick={() => prev()} className={styles["left-arrow"]} > L</button>
        <button onClick={next} className={styles["right-arrow"]} >R </button>
        <Carousel
          ref={sliderRef}
          className={styles.carousel}>


          <Image
            className={styles["carousel-image"]}
            src={"/Placeholder_1.jpg"}
          />
          <div>
            <Image
              className={styles["carousel-image"]}
              src={"/Placeholder_2.jpg"}
            />
          </div>
          <div>
            <Image
              className={styles["carousel-image"]}
              src={"/Placeholder_3.jpg"}
            />
          </div>
          <div>
            <Image
              className={styles["carousel-image"]}
              src={"/Placeholder_1.jpg"}
            />
          </div>
          <div>
            <Image
              className={styles["carousel-image"]}
              src={"/Placeholder_2.jpg"}
            />
          </div>
        </Carousel>

      </div >
    </>

  )

}
