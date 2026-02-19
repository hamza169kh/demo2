import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { colors, spacing } from '../theme';

interface SectionTitleProps {
  title: string;
}

export function SectionTitle({ title }: SectionTitleProps): JSX.Element {
  return <Text style={styles.title}>{title}</Text>;
}

const styles = StyleSheet.create({
  title: {
    color: colors.textPrimary,
    fontSize: 20,
    fontWeight: '700',
    marginBottom: spacing.md,
  },
});
