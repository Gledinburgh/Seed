import '../styles/globals.css';
import { GeneralContextWrapper } from '../Context/GeneralContext';
import { useEffect, useState } from 'react';
import { useRouter } from "next/router";

import MainLayout from '../components/Layout/MainLayout.js';
import Loading from '../components/Loading.js';

function MyApp({ Component, pageProps }) {

  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {

    const handleStart = (url) => {
      url !== router.pathname ? setLoading(true) : setLoading(false);
    };

    const handleComplete = (url) => {
      setLoading(false)
    }

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete)

  }, [router])

  return (
    <GeneralContextWrapper>
      <Loading loading={loading} />
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </GeneralContextWrapper>
  )
}

export default MyApp
