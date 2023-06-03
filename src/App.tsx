import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';

export const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <View>
        <Text
          style={{
            fontFamily: 'Helvetica',
            fontWeight: '700',
            fontSize: 32,
            textAlign: 'center',
          }}
        >
          Kaizen Case
        </Text>
        <Text
          style={{
            fontFamily: 'Helvetica',
            fontWeight: '400',
            fontSize: 16,
            textAlign: 'center',
          }}
        >
          Kaizen Tech
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
