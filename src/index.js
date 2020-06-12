import 'react-native-gesture-handler';
import * as React from 'react';

import { StateProvider } from './store/context';

import Router from './routes';

export default function App() {
  return (
    <StateProvider>
      <Router />
    </StateProvider>
  );
}
