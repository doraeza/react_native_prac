import React, { useEffect } from 'react'
import MainStack from './MainStack'
import * as SplashScreen from 'expo-splash-screen'

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
     <MainStack />
  );
};

export default Navigation;