import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Card } from '../../components/Card';
import { Screen } from '../../components/Screen';
import { SectionTitle } from '../../components/SectionTitle';
import { colors, spacing } from '../../theme';

export function ReadingTrackerScreen(): JSX.Element {
  return (
    <Screen>
      <SectionTitle title="Reading Tracker" />
      <Card>
        <Text style={styles.meta}>30-Day Plan • Day 10</Text>
        <Text style={styles.progress}>Progress: 33%</Text>
        <View style={styles.barTrack}>
          <View style={styles.barFill} />
        </View>
      </Card>
      <Card>
        <Text style={styles.meta}>Today’s target</Text>
        <Text style={styles.pages}>Read 20 pages</Text>
      </Card>
    </Screen>
  );
}

const styles = StyleSheet.create({
  meta: { color: colors.textSecondary, fontSize: 13 },
  progress: { color: colors.textPrimary, marginTop: spacing.sm, fontSize: 20, fontWeight: '700' },
  barTrack: {
    marginTop: spacing.md,
    backgroundColor: colors.surfaceSoft,
    height: 10,
    borderRadius: 20,
  },
  barFill: {
    width: '33%',
    height: 10,
    borderRadius: 20,
    backgroundColor: colors.accent,
  },
  pages: { color: colors.accent, marginTop: spacing.sm, fontSize: 24, fontWeight: '700' },
});
