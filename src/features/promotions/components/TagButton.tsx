import React from 'react';
import {
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import { Text } from '@/components';
import { Search } from '@/components/icons';
import { theme } from '@/config/theme';

type IProps = {
  title: string;
  imageUrl?: string;
  active?: boolean;
  separate?: boolean;
  onPress: () => void;
};

export const TagButton = ({
  title,
  imageUrl,
  active = false,
  separate = false,
  onPress,
}: IProps) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View
        style={[
          styles.iconContainer,
          {
            borderColor: active ? theme.red : theme.lighterGray,
            marginRight: separate ? 6 : 0,
          },
        ]}
      >
        {imageUrl && (
          <View style={styles.imageContainer}>
            <Image style={styles.image} source={{ uri: imageUrl }} />
          </View>
        )}
        {!imageUrl && (
          <View style={styles.iconFallbackContainer}>
            <Search width={12} height={12} color={theme.white} />
          </View>
        )}
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    height: 36,
    borderRadius: 8,
    borderWidth: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 6,
  },
  imageContainer: {
    borderRadius: 8,
    overflow: 'hidden',
  },
  image: {
    width: 22,
    height: 22,
  },
  iconFallbackContainer: {
    borderRadius: 8,
    backgroundColor: theme.red,
    padding: 6,
    width: 22,
    height: 22,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: theme.darkGray,
    fontSize: 12,
    marginLeft: 8,
    paddingRight: 4,
  },
});
