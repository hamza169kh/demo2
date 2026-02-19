import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { Card } from '../../components/Card';
import { Screen } from '../../components/Screen';
import { SectionTitle } from '../../components/SectionTitle';
import { colors, radius, spacing } from '../../theme';

export function AiCompanionScreen(): JSX.Element {
  return (
    <Screen>
      <SectionTitle title="AI Companion" />
      <Card>
        <Text style={styles.answer}>
          Fasting in Ramadan is prescribed for believers as stated in Qur’an 2:183.
        </Text>
        <View style={styles.citations}>
          <Text style={styles.citation}>Qur’an 2:183</Text>
          <Text style={styles.citation}>Ibn Kathir 2:183</Text>
        </View>
      </Card>
      <TextInput
        style={styles.input}
        placeholder="Ask a question..."
        placeholderTextColor={colors.textSecondary}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  answer: { color: colors.textPrimary, fontSize: 15, lineHeight: 22 },
  citations: { flexDirection: 'row', gap: spacing.sm, marginTop: spacing.md },
  citation: {
    color: colors.accent,
    fontSize: 12,
    backgroundColor: colors.surfaceSoft,
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
    borderRadius: radius.sm,
  },
  input: {
    color: colors.textPrimary,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.surface,
    borderRadius: radius.md,
    padding: spacing.md,
  },
});
