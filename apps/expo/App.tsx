import { NativeNavigation } from 'app/navigation/native'
import { Provider } from 'app/provider'

import LeapReactNative from 'leap-react-native'
import LeapCreatorReactNative from 'leap-creator-react-native'
import { Platform } from 'react-native'
import { useEffect } from 'react'

const WHATFIX_API_KEY = ''
export default function App() {
  useEffect(() => {
    Platform.select({
      android: () => {
        LeapReactNative.start(WHATFIX_API_KEY)
        LeapCreatorReactNative.start(WHATFIX_API_KEY)
      },
    })()
  }, [])

  return (
    <Provider>
      <NativeNavigation />
    </Provider>
  )
}
