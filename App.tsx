import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { SafeAreaView as AndroidSafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import FlashMessage from 'react-native-flash-message';
import { store } from './src/redux/store';
import { RootStack } from './src/navigation/RootStack';

export default function App() {
  return (
    <AndroidSafeAreaView style={styles.container}>
      <SafeAreaView style={styles.container}>
        <Provider store={store}>
          <NavigationContainer>
            <RootStack />
            <FlashMessage position='bottom' />
          </NavigationContainer>
        </Provider>
      </SafeAreaView>
    </AndroidSafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
