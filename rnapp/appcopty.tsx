import { StatusBar } from 'expo-status-bar';
import { lazy, Suspense } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { QueryClient, QueryClientProvider } from "react-query";
import Fallback from './src/screens/fallback';
import Navigation from './src/navigations';
const queryClient = new QueryClient();
const Test = lazy(() => import('./src/components/test'));
import { NavigationContainer } from '@react-navigation/native';
import MainStack from './src/navigations/MainStack(not used)';

export default function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <View style={styles.container}>
        <Text>Open up App.tsx to staaart working on your app!</Text>
        <Text>Open up App.tsx to staaart working on your app!</Text>
        <StatusBar style="auto" />
        <Suspense fallback={<Fallback />} >
        {/* <Test /> */}
        <Navigation />
        </Suspense>
      </View>
    </QueryClientProvider>
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