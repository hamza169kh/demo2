import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { QuranReaderScreenView } from '../quran/QuranReaderScreenView';
import { PrayerScreenView } from '../prayer/PrayerScreenView';
import { RamadanCountdownScreenView } from '../ramadan/RamadanCountdownScreenView';
import { ReadingTrackerScreenView } from '../tracker/ReadingTrackerScreenView';
import { AiCompanionScreenView } from '../chat/AiCompanionScreenView';
import { colors } from '../../theme';

const Stack = createNativeStackNavigator();

const appTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: colors.bg,
    card: colors.surface,
    text: colors.textPrimary,
    border: colors.border,
    primary: colors.accent,
  },
};

export function AppNavigatorView(): JSX.Element {
  return (
    <NavigationContainer theme={appTheme}>
      <Stack.Navigator
        initialRouteName="QuranReader"
        screenOptions={{
          headerStyle: { backgroundColor: colors.surface },
          headerTintColor: colors.textPrimary,
          headerTitleStyle: { fontWeight: '700' },
        }}
      >
        <Stack.Screen name="QuranReader" component={QuranReaderScreenView} options={{ title: 'Qur’an' }} />
        <Stack.Screen name="PrayerTimes" component={PrayerScreenView} options={{ title: 'Prayer' }} />
        <Stack.Screen
          name="RamadanCountdown"
          component={RamadanCountdownScreenView}
          options={{ title: 'Ramadan' }}
        />
        <Stack.Screen
          name="ReadingTracker"
          component={ReadingTrackerScreenView}
          options={{ title: 'Tracker' }}
        />
        <Stack.Screen name="AiCompanion" component={AiCompanionScreenView} options={{ title: 'AI Companion' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
