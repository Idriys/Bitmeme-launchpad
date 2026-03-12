import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Bitmeme</Text>
        <Text style={styles.subtitle}>Bitcoin Meme Coin Launchpad</Text>
      </View>

      <View style={styles.statsContainer}>
        <View style={styles.statBox}>
          <Text style={styles.statValue}>150+</Text>
          <Text style={styles.statLabel}>Active Launchs</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statValue}>$2.5B</Text>
          <Text style={styles.statLabel}>Total Raised</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statValue}>50K+</Text>
          <Text style={styles.statLabel}>Users</Text>
        </View>
      </View>

      <TouchableOpacity 
        style={styles.primaryButton}
        onPress={() => navigation.navigate('Explore')}
      >
        <Text style={styles.primaryButtonText}>Explore Launchpads</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.secondaryButton}
        onPress={() => navigation.navigate('Dashboard')}
      >
        <Text style={styles.secondaryButtonText}>Go to Dashboard</Text>
      </TouchableOpacity>

      <View style={styles.featuresContainer}>
        <Text style={styles.sectionTitle}>Key Features</Text>
        <View style={styles.feature}>
          <Text style={styles.featureIcon}>🚀</Text>
          <Text style={styles.featureText}>Fast & Easy Launch</Text>
        </View>
        <View style={styles.feature}>
          <Text style={styles.featureIcon}>🔒</Text>
          <Text style={styles.featureText}>Secure Smart Contracts</Text>
        </View>
        <View style={styles.feature}>
          <Text style={styles.featureIcon}>💰</Text>
          <Text style={styles.featureText}>Transparent Presales</Text>
        </View>
        <View style={styles.feature}>
          <Text style={styles.featureIcon}>📊</Text>
          <Text style={styles.featureText}>Real-time Analytics</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5'
  },
  header: {
    backgroundColor: '#3B82F6',
    padding: 30,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5
  },
  subtitle: {
    fontSize: 14,
    color: '#e0e0e0'
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 20,
    marginHorizontal: 10
  },
  statBox: {
    alignItems: 'center',
    flex: 1
  },
  statValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#3B82F6'
  },
  statLabel: {
    fontSize: 11,
    color: '#666',
    marginTop: 5
  },
  primaryButton: {
    backgroundColor: '#3B82F6',
    margin: 10,
    padding: 15,
    borderRadius: 8,
    alignItems: 'center'
  },
  primaryButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16
  },
  secondaryButton: {
    backgroundColor: '#fff',
    margin: 10,
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#3B82F6'
  },
  secondaryButtonText: {
    color: '#3B82F6',
    fontWeight: 'bold',
    fontSize: 16
  },
  featuresContainer: {
    padding: 20
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15
  },
  feature: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8
  },
  featureIcon: {
    fontSize: 24,
    marginRight: 10
  },
  featureText: {
    fontSize: 14,
    color: '#333'
  }
});
