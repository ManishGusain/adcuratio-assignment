import { useEffect, useState } from 'react';
import { View } from 'react-native';
import Splash from './src/screens/onboarding/Splash';
import BottomTabs from './src/navigator/BottomNav';


export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowSplash(prev => !prev);
    }, 2000);
  }, []);

  return (
    <View style={{ flex: 1 }}>
      {
        showSplash ?
          <Splash />
          :
          <BottomTabs />
      }
    </View>
  );
}
