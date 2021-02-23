import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import ScanScreen from './screens/ScanScreen';

export default function App() {
  return (
    <ScanScreen/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
