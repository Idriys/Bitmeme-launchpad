import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import axios from 'axios';

export default function LaunchpadsScreen({ navigation }) {
  const [launchpads, setLaunchpads] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchLaunchpads();
  }, []);

  const fetchLaunchpads = async () => {
    try {
      const response = await axios.get('http://your-backend-url/api/launchpad/list');
      setLaunchpads(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching launchpads:', error);
      setLoading(false);
    }
  };

  const renderLaunchpad = ({ item }) => (
    <TouchableOpacity 
      style={styles.card}
      onPress={() => navigation.navigate('LaunchpadDetail', { id: item.id })}
    >
      <View style={styles.cardHeader}>
        <Text style={styles.cardTitle}>{item.name}</Text>
        <Text style={styles.cardStatus}>{item.status}</Text>
      </View>
      <Text style={styles.cardDescription}>{item.description}</Text>
      <View style={styles.cardFooter}>
        <Text style={styles.progress}>${item.raised}/${item.target}</Text>
        <View style={styles.progressBar}>
          <View style={[styles.progressFill, { width: `${(item.raised / item.target) * 100}%` }]} />
        </View>
      </View>
    </TouchableOpacity>
  );

  if (loading) {
    return (
      <View style={[styles.container, { justifyContent: 'center', alignItems: 'center' }]}>
        <ActivityIndicator size="large" color="#3B82F6" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={launchpads}
        renderItem={renderLaunchpad}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={{ padding: 10 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5'
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 15,
    marginBottom: 10,
    marginHorizontal: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333'
  },
  cardStatus: {
    backgroundColor: '#3B82F6',
    color: '#fff',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    fontSize: 11,
    fontWeight: 'bold'
  },
  cardDescription: {
    fontSize: 13,
    color: '#666',
    marginBottom: 10
  },
  cardFooter: {
    marginTop: 10
  },
  progress: {
    fontSize: 12,
    color: '#999',
    marginBottom: 5
  },
  progressBar: {
    height: 6,
    backgroundColor: '#e0e0e0',
    borderRadius: 3,
    overflow: 'hidden'
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#3B82F6'
  }
});
