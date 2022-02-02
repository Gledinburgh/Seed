import { Row, Col, Carousel, Image } from 'antd';
import { useRef } from 'react';
import { LeftOutlined, RightOutlined } from '@ant-design/icons'


import styles from '../../styles/Portfolio.module.css';


export default function Gallery({ imagePaths }) {

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

        <button onClick={() => prev()} className={styles["left-arrow"]} > <LeftOutlined /></button>
        <button onClick={next} className={styles["right-arrow"]} ><RightOutlined /></button>
        <Carousel
          ref={sliderRef}
          className={styles.carousel}>
          {
            imagePaths.map((image) => {
              return (
                <div key={image.src}>
                  <Image
                    className={styles["carousel-image"]}
                    src={image.src}
                    alt={image.alt}
                  />
                </div>
              )
            })
          }
        </Carousel>

      </div >
    </>

  )

}
