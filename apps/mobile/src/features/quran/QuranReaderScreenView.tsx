import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { Screen } from '../../components/Screen';
import { Card } from '../../components/Card';
import { SectionTitle } from '../../components/SectionTitle';
import { colors, spacing } from '../../theme';

const ayat = [
  {
    id: '1',
    reference: '1:1',
    uthmani: 'بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ',
    translation: 'In the name of Allah, the Most Compassionate, Most Merciful.',
  },
  {
    id: '2',
    reference: '1:2',
    uthmani: 'الْحَمْدُ لِلّٰهِ رَبِّ الْعَالَمِينَ',
    translation: 'All praise is for Allah—Lord of all worlds.',
  },
];

export function QuranReaderScreenView(): JSX.Element {
  return (
    <Screen>
      <SectionTitle title="Qur’an Reader" />
      <Card>
        <Text style={styles.meta}>Surah Al-Fatihah • Juz 1 • Page 1</Text>
      </Card>
      <FlatList
        data={ayat}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Card>
            <Text style={styles.reference}>{item.reference}</Text>
            <Text style={styles.uthmani}>{item.uthmani}</Text>
            <Text style={styles.translation}>{item.translation}</Text>
            <View style={styles.actions}>
              <Text style={styles.action}>🔖 Bookmark</Text>
              <Text style={styles.action}>🖍 Highlight</Text>
              <Text style={styles.action}>📝 Note</Text>
            </View>
          </Card>
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  meta: { color: colors.textSecondary, fontSize: 13 },
  reference: { color: colors.accent, fontWeight: '700', marginBottom: spacing.sm },
  uthmani: {
    color: colors.textPrimary,
    fontSize: 24,
    textAlign: 'right',
    lineHeight: 42,
    marginBottom: spacing.sm,
  },
  translation: { color: colors.textSecondary, fontSize: 14, lineHeight: 22 },
  actions: { flexDirection: 'row', gap: spacing.md, marginTop: spacing.md },
  action: { color: colors.textPrimary, fontSize: 12 },
});
