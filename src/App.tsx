import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';

import { theme } from './config/theme';
import { Home } from './routes';
import { store } from './store';

export const App = () => {
  return (
    <NavigationContainer>
      <GestureHandlerRootView style={styles.container}>
        <Provider store={store}>
          <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={theme.white} barStyle="dark-content" />
            <Home />
          </SafeAreaView>
        </Provider>
      </GestureHandlerRootView>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
