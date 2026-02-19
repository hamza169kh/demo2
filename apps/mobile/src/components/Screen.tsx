import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import type { ReactNode } from 'react';
import { colors, spacing } from '../theme';

interface ScreenProps {
  children: ReactNode;
}

export function Screen({ children }: ScreenProps): JSX.Element {
  return <SafeAreaView style={styles.root}>{children}</SafeAreaView>;
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.bg,
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.md,
  },
});
