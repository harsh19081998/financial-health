import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { SplashScreen } from 'expo-splash-screen';

const LoadingScreen = () => {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // Pre-load fonts, images, or other data here
        await performInitialSetup();
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the splash screen to hide
        setAppIsReady(true); 
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = async () => {
    if (appIsReady) {
      // This tells the splash screen to hide immediately!
      await SplashScreen.hideAsync();
    }
  };

  if (!appIsReady) {
    return null;
  }

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LoadingScreen;