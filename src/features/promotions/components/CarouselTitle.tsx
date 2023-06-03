import React from 'react';
import { StyleSheet, View } from 'react-native';
import RenderHtml, { MixedStyleDeclaration } from 'react-native-render-html';

import { theme } from '@/config/theme';

type IProps = {
  html: string;
};

export const CarouselTitle = ({ html }: IProps) => {
  return (
    <View style={styles.container}>
      <RenderHtml
        source={{ html }}
        contentWidth={250}
        tagsStyles={tagsStyles}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 30,
  },
});

const tagsStyles = {
  p: {
    fontFamily: 'Helvetica',
    fontWeight: '700',
    fontSize: 14,
    textAlign: 'center',
    color: theme.darkGray,
  },
} as Readonly<Record<string, MixedStyleDeclaration>>;
