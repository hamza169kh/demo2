import React from 'react';
import { ScrollView, Text, View } from 'react-native';

export function QuranReaderScreen(): JSX.Element {
  return (
    <ScrollView>
      <View>
        <Text>Qur’an Reader (Uthmani)</Text>
        <Text>Surah List + Ayah Scroll + Bookmark + Highlight Note</Text>
      </View>
    </ScrollView>
  );
}
