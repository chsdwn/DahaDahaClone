import React from 'react';
import { ActivityIndicator, StyleSheet } from 'react-native';

import { Layout } from '.';

export const Loading = () => {
  return (
    <Layout style={styles.container}>
      <ActivityIndicator size="large" />
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
