import React from 'react';
import { StyleSheet, View } from 'react-native';
import dayjs from 'dayjs';

import { Text } from '@/components';
import { theme } from '@/config/theme';

type IProps = {
  date: string;
};

export const CarouselRemainingDaysBadge = ({ date }: IProps) => {
  const [day, month, year] = date.split('.').map((value) => Number(value));
  const remaining = dayjs(new Date(year, month - 1, day)).diff(
    Date.now(),
    'day',
  );

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{`son ${remaining} gün`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    right: 8,
    bottom: 8,
    backgroundColor: theme.darkGray,
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 26,
  },
  text: {
    color: theme.white,
  },
});
