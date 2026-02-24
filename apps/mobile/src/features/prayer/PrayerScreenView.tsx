import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Card } from '../../components/Card';
import { Screen } from '../../components/Screen';
import { SectionTitle } from '../../components/SectionTitle';
import { colors, spacing } from '../../theme';

const schedule = [
  ['Fajr', '04:31'],
  ['Sunrise', '05:47'],
  ['Dhuhr', '12:07'],
  ['Asr', '15:33'],
  ['Maghrib', '18:24'],
  ['Isha', '19:39'],
];

export function PrayerScreenView(): JSX.Element {
  return (
    <Screen>
      <SectionTitle title="Prayer Times" />
      <Card>
        <Text style={styles.next}>Next Prayer: Maghrib</Text>
        <Text style={styles.countdown}>01:14:22</Text>
      </Card>
      {schedule.map(([name, time]) => (
        <Card key={name}>
          <View style={styles.row}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.time}>{time}</Text>
          </View>
        </Card>
      ))}
    </Screen>
  );
}

const styles = StyleSheet.create({
  next: { color: colors.textSecondary, fontSize: 13 },
  countdown: { color: colors.accent, fontSize: 28, fontWeight: '700', marginTop: spacing.xs },
  row: { flexDirection: 'row', justifyContent: 'space-between' },
  name: { color: colors.textPrimary, fontSize: 16, fontWeight: '600' },
  time: { color: colors.textSecondary, fontSize: 16 },
});
