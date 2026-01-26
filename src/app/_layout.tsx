import { Slot } from 'expo-router';
import { Amplify } from 'aws-amplify';
import config from '../aws-exports.js';
import React from 'react';
import { ShuttleProvider } from '../context/ShuttleContext';

Amplify.configure(config);

export default function RootLayout() {
  return (
    <ShuttleProvider>
      <Slot />
    </ShuttleProvider>
  );
}
