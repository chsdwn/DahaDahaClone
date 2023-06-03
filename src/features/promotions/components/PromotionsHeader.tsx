import React, { useState } from 'react';
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native';

import { Text } from '@/components';
import { DahaDaha, Profile } from '@/components/icons';
import { theme } from '@/config/theme';

export const PromotionsHeader = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const toggleLoggedIn = () => setLoggedIn((prev) => !prev);

  return (
    <View style={styles.container}>
      <DahaDaha height={40} />

      <View style={styles.profileContainer}>
        {!loggedIn && (
          <TouchableWithoutFeedback onPress={toggleLoggedIn}>
            <View style={styles.loginBtn}>
              <Text bold style={styles.loginBtnTitle}>
                Giriş Yap
              </Text>
            </View>
          </TouchableWithoutFeedback>
        )}
        <TouchableWithoutFeedback onPress={toggleLoggedIn}>
          <View
            style={[
              styles.profileIconBtn,
              { backgroundColor: loggedIn ? theme.red : theme.darkGray },
            ]}
          >
            <Profile color={theme.white} width={18} height={18} />
            {loggedIn && <View style={styles.loggedInIndicator} />}
          </View>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    paddingBottom: 0,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  loginBtn: {
    borderRadius: 20,
    backgroundColor: theme.red,
    padding: 10,
    paddingHorizontal: 16,
    marginRight: 8,
  },
  loginBtnTitle: {
    color: theme.white,
  },
  profileIconBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  loggedInIndicator: {
    position: 'absolute',
    right: 0,
    top: 0,
    height: 12,
    width: 12,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: theme.white,
    backgroundColor: theme.green,
  },
});
