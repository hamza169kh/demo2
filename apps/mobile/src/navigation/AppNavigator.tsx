import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { QuranReaderScreen } from '../screens/Quran/QuranReaderScreen';
import { PrayerScreen } from '../screens/Prayer/PrayerScreen';
import { RamadanCountdownScreen } from '../screens/Ramadan/RamadanCountdownScreen';
import { ReadingTrackerScreen } from '../screens/Tracker/ReadingTrackerScreen';
import { AiCompanionScreen } from '../screens/Chat/AiCompanionScreen';

const Stack = createNativeStackNavigator();

export function AppNavigator(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="QuranReader">
        <Stack.Screen name="QuranReader" component={QuranReaderScreen} />
        <Stack.Screen name="PrayerTimes" component={PrayerScreen} />
        <Stack.Screen name="RamadanCountdown" component={RamadanCountdownScreen} />
        <Stack.Screen name="ReadingTracker" component={ReadingTrackerScreen} />
        <Stack.Screen name="AiCompanion" component={AiCompanionScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
