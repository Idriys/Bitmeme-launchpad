import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';

export default function DashboardScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.greeting}>Welcome Back!</Text>
        <Text style={styles.userName}>Bitcoin Investor</Text>
      </View>

      <View style={styles.statsContainer}>
        <View style={styles.statCard}>
          <Text style={styles.statLabel}>Portfolio Value</Text>
          <Text style={styles.statValue}>$12,500</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statLabel}>Total Gained</Text>
          <Text style={[styles.statValue, { color: '#10b981' }]}>+$2,100</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Your Investments</Text>
        <View style={styles.investmentCard}>
          <View style={styles.investmentHeader}>
            <Text style={styles.investmentName}>MemeToken</Text>
            <Text style={styles.investmentAmount}>0.5 BTC</Text>
          </View>
          <Text style={styles.investmentDate}>Invested on Jan 15, 2024</Text>
          <View style={styles.investmentFooter}>
            <Text style={styles.currentValue}>Current Value: $18,000</Text>
            <Text style={[styles.gain, { color: '#10b981' }]}>+$3,000 (+20%)</Text>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Watchlist</Text>
        <View style={styles.investmentCard}>
          <View style={styles.investmentHeader}>
            <Text style={styles.investmentName}>SatoshiMeme</Text>
            <Text style={styles.investmentStatus}>Coming Soon</Text>
          </View>
          <Text style={styles.investmentDate}>Launches on Feb 1, 2024</Text>
          <TouchableOpacity style={styles.watchButton}>
            <Text style={styles.watchButtonText}>Set Reminder</Text>
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity style={styles.logoutButton}>
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>
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
    padding: 20,
    paddingTop: 40
  },
  greeting: {
    fontSize: 14,
    color: '#e0e0e0'
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 5
  },
  statsContainer: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    marginVertical: 15,
    gap: 10
  },
  statCard: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3
  },
  statLabel: {
    fontSize: 12,
    color: '#999'
  },
  statValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#3B82F6',
    marginTop: 5
  },
  section: {
    paddingHorizontal: 10,
    marginBottom: 20
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10
  },
  investmentCard: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10
  },
  investmentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8
  },
  investmentName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333'
  },
  investmentAmount: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#3B82F6'
  },
  investmentStatus: {
    backgroundColor: '#fbbf24',
    color: '#fff',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    fontSize: 11
  },
  investmentDate: {
    fontSize: 12,
    color: '#999',
    marginBottom: 10
  },
  investmentFooter: {
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
    paddingTop: 10
  },
  currentValue: {
    fontSize: 12,
    color: '#666'
  },
  gain: {
    fontSize: 12,
    fontWeight: 'bold',
    marginTop: 5
  },
  watchButton: {
    backgroundColor: '#3B82F6',
    paddingVertical: 10,
    borderRadius: 6,
    alignItems: 'center',
    marginTop: 10
  },
  watchButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14
  },
  logoutButton: {
    backgroundColor: '#ef4444',
    marginHorizontal: 10,
    marginBottom: 40,
    padding: 15,
    borderRadius: 8,
    alignItems: 'center'
  },
  logoutButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16
  }
});
