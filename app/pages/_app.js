import '../styles/globals.scss'
import { AppProvider } from '../context/context'

import { createReactClient, studioProvider, LivepeerConfig } from '@livepeer/react';
 
const client = createReactClient({
  provider: studioProvider({ apiKey: 'ff08fa66-d221-4c80-ac2c-c8b0e79ba9b6' }),
});

const MyApp = ({ Component, pageProps }) => {
  return (
    <AppProvider>
      <LivepeerConfig client={client}>
        <Component {...pageProps} />
      </LivepeerConfig>
    </AppProvider>
  )
}

export default MyApp