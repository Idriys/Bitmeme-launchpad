import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import axios from 'axios';

export default function LaunchpadDetailScreen({ route, navigation }) {
  const { id } = route.params;
  const [launchpad, setLaunchpad] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchLaunchpadDetail();
  }, [id]);

  const fetchLaunchpadDetail = async () => {
    try {
      const response = await axios.get(`http://your-backend-url/api/launchpad/${id}`);
      setLaunchpad(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching launchpad details:', error);
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <View style={[styles.container, { justifyContent: 'center', alignItems: 'center' }]}>
        <ActivityIndicator size="large" color="#3B82F6" />
      </View>
    );
  }

  if (!launchpad) {
    return (
      <View style={[styles.container, { justifyContent: 'center', alignItems: 'center' }]}>
        <Text style={{ fontSize: 16, color: '#666' }}>Launchpad not found</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{launchpad.name}</Text>
        <Text style={styles.tokenSymbol}>{launchpad.tokenSymbol}</Text>
      </View>

      <View style={styles.infoCard}>
        <Text style={styles.sectionTitle}>Project Overview</Text>
        <Text style={styles.description}>{launchpad.description}</Text>
      </View>

      <View style={styles.infoCard}>
        <Text style={styles.sectionTitle}>Presale Information</Text>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Start Date:</Text>
          <Text style={styles.value}>{launchpad.startDate}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.label}>End Date:</Text>
          <Text style={styles.value}>{launchpad.endDate}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Soft Cap:</Text>
          <Text style={styles.value}>{launchpad.softCap} BTC</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Hard Cap:</Text>
          <Text style={styles.value}>{launchpad.hardCap} BTC</Text>
        </View>
      </View>

      <View style={styles.infoCard}>
        <Text style={styles.sectionTitle}>Progress</Text>
        <View style={styles.progressContainer}>
          <View style={styles.progressBar}>
            <View style={[styles.progressFill, { width: `${(launchpad.raised / launchpad.hardCap) * 100}%` }]} />
          </View>
          <Text style={styles.progressText}>${launchpad.raised}/${launchpad.hardCap}</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.participateButton}>
        <Text style={styles.participateButtonText}>Participate in Presale</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.viewWebsiteButton}>
        <Text style={styles.viewWebsiteButtonText}>Visit Website</Text>
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
    alignItems: 'center'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff'
  },
  tokenSymbol: {
    fontSize: 14,
    color: '#e0e0e0',
    marginTop: 5
  },
  infoCard: {
    backgroundColor: '#fff',
    margin: 10,
    padding: 15,
    borderRadius: 8,
    marginBottom: 10
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10
  },
  description: {
    fontSize: 14,
    color: '#666',
    lineHeight: 22
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0'
  },
  label: {
    fontSize: 13,
    color: '#999'
  },
  value: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#333'
  },
  progressContainer: {
    marginTop: 10
  },
  progressBar: {
    height: 8,
    backgroundColor: '#e0e0e0',
    borderRadius: 4,
    overflow: 'hidden',
    marginBottom: 8
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#3B82F6'
  },
  progressText: {
    fontSize: 12,
    color: '#666'
  },
  participateButton: {
    backgroundColor: '#3B82F6',
    margin: 10,
    padding: 15,
    borderRadius: 8,
    alignItems: 'center'
  },
  participateButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16
  },
  viewWebsiteButton: {
    backgroundColor: '#fff',
    margin: 10,
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#3B82F6',
    marginBottom: 30
  },
  viewWebsiteButtonText: {
    color: '#3B82F6',
    fontWeight: 'bold',
    fontSize: 16
  }
});
