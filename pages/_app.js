import '../styles/globals.css';
import { GeneralContextWrapper } from '../Context/GeneralContext';

import MainLayout from '../components/Layout/MainLayout.js';

function MyApp({ Component, pageProps }) {


  return (
    <GeneralContextWrapper>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </GeneralContextWrapper>
  )
}

export default MyApp
