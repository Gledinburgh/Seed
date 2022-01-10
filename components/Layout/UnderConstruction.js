
import Image from 'next/image';

export default function UnderConstruction() {
  return (
    <div style={{ zIndex: 1, height: "80vh" }}>

      <h1 style={{ marginTop: "10vh", width: "100%", "zIndex": 3, position: "absolute", "text-align": "center" }}>
        This page is Under Construction!
      </h1>
      <Image
        style={{ zIndex: 1, position: "absolute" }}
        src={`/under-construction.png`}
        layout="fill"
        objectFit="cover"
      />
    </div>
  )
}