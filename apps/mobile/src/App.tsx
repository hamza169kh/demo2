import React from 'react';
import { AppNavigator } from './navigation/AppNavigator';
import { initializeOfflineSchema } from './services/sqlite';

initializeOfflineSchema();

export default function App(): JSX.Element {
  return <AppNavigator />;
}
