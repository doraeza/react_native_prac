import { StatusBar } from 'expo-status-bar';
import React, { lazy, Suspense, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { QueryClient, QueryClientProvider } from "react-query";
import Fallback from './src/screens/fallback';
const queryClient = new QueryClient();
import { NavigationContainer } from '@react-navigation/native';
import MainStack from './src/navigations/MainStack';
import {Provider as ReduxProvider}  from 'react-redux';
import appReducer from './src/store/reducers';
import { configureStore } from '@reduxjs/toolkit';

export default function App() {
  const store = configureStore({
    reducer: appReducer,
  });

  return (
    <ReduxProvider store={store}>
      <QueryClientProvider client={queryClient}>
        <Suspense fallback={<Fallback />} >
          <NavigationContainer>
              <MainStack />
          </NavigationContainer>
        </Suspense>
      </QueryClientProvider>
    </ReduxProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
// import App from './src/App';

// export default App;