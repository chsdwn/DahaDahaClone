import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { TagButton } from './TagButton';
import {
  promotionsSliceActions,
  selectActiveTag,
} from '../store/promotionsSlice';
import { IPromotionTag } from '../types';

type IProps = {
  tags?: IPromotionTag[];
};

export const TagButtonsList = ({ tags = [] }: IProps) => {
  const dispatch = useDispatch();
  const activeTag = useSelector(selectActiveTag);

  const handleTagButtonPress = (tag?: IPromotionTag) => {
    dispatch(promotionsSliceActions.changeActiveTag(tag || null));
  };

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
      >
        {tags.length > 0 && (
          <TagButton
            title="Fırsat Bul"
            onPress={() => handleTagButtonPress()}
            separate
          />
        )}
        {tags.length > 0 &&
          tags.map((tag, index) => (
            <TagButton
              key={tag.Id}
              title={tag.Name}
              imageUrl={tag.IconUrl}
              onPress={() => handleTagButtonPress(tag)}
              active={activeTag?.Id === tag.Id}
              separate={tags.length !== index + 1}
            />
          ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  contentContainer: {
    paddingHorizontal: 16,
  },
});
