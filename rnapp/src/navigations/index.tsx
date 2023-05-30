import React, { useEffect } from 'react'
import MainStack from './MainStack(not used)'
import * as SplashScreen from 'expo-splash-screen'
import MainStackBottomStyle from './MainStackBottomStyle';

function sleep (ms:number) {
    return new Promise(
      resolve => setTimeout(resolve, ms)
    );
  }
   
  async function delay_splash() {
      await SplashScreen.preventAutoHideAsync();
      await sleep(3000);
      await SplashScreen.hideAsync();    
  };
const Navigation = () => {
    delay_splash()
  
    // useEffect(() => {
    //     SplashScreen.hide()
    //   }, [])
      
  return (
    //  <MainStack />
     <MainStackBottomStyle />
  );
};

export default Navigation;