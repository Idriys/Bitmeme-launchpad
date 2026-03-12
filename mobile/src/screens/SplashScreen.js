import React from 'react';
import { View, Text, ActivityIndicator, Image } from 'react-native';

export default function SplashScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' }}>
      <Image
        source={require('../assets/logo.png')}
        style={{ width: 120, height: 120, marginBottom: 20 }}
      />
      <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#3B82F6' }}>Bitmeme</Text>
      <Text style={{ fontSize: 14, color: '#666', marginTop: 10 }}>Bitcoin Meme Coin Launchpad</Text>
      <ActivityIndicator size="large" color="#3B82F6" style={{ marginTop: 30 }} />
    </View>
  );
}
