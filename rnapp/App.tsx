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
import MainStackBottomStyle from './src/navigations/MainStackBottomStyle';

export default function App() {
  const store = configureStore({
    reducer: appReducer,
  });

  return (
    <ReduxProvider store={store}>
      <QueryClientProvider client={queryClient}>
        <Suspense fallback={<Fallback />} >
          <NavigationContainer>
              <MainStackBottomStyle />
              {/* <MainStack /> */}
          </NavigationContainer>
        </Suspense>
      </QueryClientProvider>
    </ReduxProvider>
  );
}
