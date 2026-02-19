import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { Card } from '../../components/Card';
import { Screen } from '../../components/Screen';
import { SectionTitle } from '../../components/SectionTitle';
import { colors, spacing } from '../../theme';

export function RamadanCountdownScreen(): JSX.Element {
  return (
    <Screen>
      <SectionTitle title="Ramadan Countdown" />
      <Card>
        <Text style={styles.label}>Time until Iftar</Text>
        <Text style={styles.timer}>01:14:22</Text>
      </Card>
      <Card>
        <Text style={styles.label}>Time until Suhoor Ends</Text>
        <Text style={styles.timer}>09:53:01</Text>
      </Card>
    </Screen>
  );
}

const styles = StyleSheet.create({
  label: { color: colors.textSecondary, fontSize: 13 },
  timer: { color: colors.warning, fontSize: 30, fontWeight: '800', marginTop: spacing.sm },
});
