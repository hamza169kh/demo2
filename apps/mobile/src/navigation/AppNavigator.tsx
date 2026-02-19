import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { QuranReaderScreen } from '../screens/Quran/QuranReaderScreen';
import { PrayerScreen } from '../screens/Prayer/PrayerScreen';
import { RamadanCountdownScreen } from '../screens/Ramadan/RamadanCountdownScreen';
import { ReadingTrackerScreen } from '../screens/Tracker/ReadingTrackerScreen';
import { AiCompanionScreen } from '../screens/Chat/AiCompanionScreen';
import { colors } from '../theme';

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

export function AppNavigator(): JSX.Element {
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
        <Stack.Screen name="QuranReader" component={QuranReaderScreen} options={{ title: 'Qur’an' }} />
        <Stack.Screen name="PrayerTimes" component={PrayerScreen} options={{ title: 'Prayer' }} />
        <Stack.Screen
          name="RamadanCountdown"
          component={RamadanCountdownScreen}
          options={{ title: 'Ramadan' }}
        />
        <Stack.Screen
          name="ReadingTracker"
          component={ReadingTrackerScreen}
          options={{ title: 'Tracker' }}
        />
        <Stack.Screen name="AiCompanion" component={AiCompanionScreen} options={{ title: 'AI Companion' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
