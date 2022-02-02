
import Head from 'next/head';
import { useEffect } from "react";



export default function PageHead({ favicon, title, description }) {


  useEffect(() => {
    console.log("useEffect:", "PageHead");
  }, [favicon])

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href={favicon} />
      </Head>
    </>
  )
}