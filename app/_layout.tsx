import { useEffect } from 'react';
import { Stack } from 'expo-router/stack';
import { StatusBar } from 'expo-status-bar';
import * as SplashScreen from 'expo-splash-screen';
import { LogBox } from 'react-native';

// Ignore specific warnings
LogBox.ignoreLogs([
  'Warning: Failed prop type',
  'Metro has encountered an error',
  'Unable to resolve module',
]);

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  useEffect(() => {
    async function prepare() {
      try {
        // Pre-load any resources or data here
        await new Promise(resolve => setTimeout(resolve, 1000)); // Minimum splash screen time
      } catch (e) {
        console.warn(e);
      } finally {
        // Hide splash screen
        await SplashScreen.hideAsync();
        // Tell the framework we're ready
        window.frameworkReady?.();
      }
    }

    prepare();
  }, []);

  return (
    <>
      <Stack screenOptions={{ 
        headerShown: false,
        animation: 'fade',
      }}>
        <Stack.Screen 
          name="login" 
          options={{ 
            headerShown: false,
            animation: 'fade',
          }} 
        />
        <Stack.Screen 
          name="(tabs)" 
          options={{ 
            headerShown: false,
            animation: 'fade',
          }} 
        />
        <Stack.Screen 
          name="+not-found" 
          options={{ 
            headerShown: false,
            animation: 'fade',
          }} 
        />
      </Stack>
      <StatusBar style="auto" />
    </>
  );
}