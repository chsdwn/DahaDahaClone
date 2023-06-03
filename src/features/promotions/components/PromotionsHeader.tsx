import React, { useState } from 'react';
import { TouchableWithoutFeedback, View } from 'react-native';

import { DahaDaha, Profile } from '@/components/icons';
import { theme } from '@/config/theme';
import { Text } from '@/components';

export const PromotionsHeader = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const toggleLoggedIn = () => setLoggedIn((prev) => !prev);

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <DahaDaha height={40} />
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        {!loggedIn && (
          <TouchableWithoutFeedback onPress={toggleLoggedIn}>
            <View
              style={{
                borderRadius: 20,
                backgroundColor: theme.red,
                padding: 10,
                paddingHorizontal: 16,
                marginRight: 8,
              }}
            >
              <Text bold style={{ color: theme.white }}>
                Giriş Yap
              </Text>
            </View>
          </TouchableWithoutFeedback>
        )}
        <TouchableWithoutFeedback onPress={toggleLoggedIn}>
          <View
            style={{
              width: 40,
              height: 40,
              borderRadius: 20,
              backgroundColor: loggedIn ? theme.red : theme.darkGray,
              justifyContent: 'center',
              alignItems: 'center',
              position: 'relative',
            }}
          >
            {loggedIn && (
              <View
                style={{
                  position: 'absolute',
                  right: 0,
                  top: 0,
                  height: 12,
                  width: 12,
                  borderRadius: 6,
                  borderWidth: 2,
                  borderColor: theme.white,
                  backgroundColor: theme.green,
                }}
              />
            )}
            <Profile color={theme.white} width={18} height={18} />
          </View>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};
