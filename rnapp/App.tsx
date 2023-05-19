import { StatusBar } from 'expo-status-bar';
import { lazy, Suspense } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { QueryClient, QueryClientProvider } from "react-query";
import Test2 from './src/components/test2';
import Navigation from './src/navigations';
const queryClient = new QueryClient();
const Test = lazy(() => import('./src/components/test'));

export default function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <View style={styles.container}>
        <Text>Open up App.tsx to staaart working on your app!</Text>
        <StatusBar style="auto" />
        <Suspense fallback={<Test2 />} >
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
