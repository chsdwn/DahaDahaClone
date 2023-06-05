import React from 'react';
import { View } from 'react-native';
import RenderHtml, { MixedStyleDeclaration } from 'react-native-render-html';

type IProps = {
  html: string;
};

export const CarouselButton = ({ html }: IProps) => {
  return (
    <View>
      <RenderHtml
        source={{ html }}
        contentWidth={100}
        tagsStyles={tagsStyles}
      />
    </View>
  );
};

const tagsStyles = {
  p: {
    fontFamily: 'Helvetica',
    fontWeight: '700',
    fontSize: 14,
    textAlign: 'center',
  },
} as Readonly<Record<string, MixedStyleDeclaration>>;
