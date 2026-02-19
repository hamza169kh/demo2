import React from 'react';
import { StyleSheet, View } from 'react-native';
import type { ReactNode } from 'react';
import { colors, radius, spacing } from '../theme';

interface CardProps {
  children: ReactNode;
}

export function Card({ children }: CardProps): JSX.Element {
  return <View style={styles.card}>{children}</View>;
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.md,
    padding: spacing.md,
    marginBottom: spacing.md,
  },
});
