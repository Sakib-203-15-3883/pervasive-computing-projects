// src/components/PersonalInfo.js
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';


const PersonalInfo = () => {
    
const personalInfo = {
    name: 'Sakibul Islam Shakib',
    
    bio: 'A passionate developer',
    location: 'Dhaka, Bangladesh',
    email: 'islam15.3883@diu.edu.bd',
  };
  return (
    <View style={styles.container}>
      
      <Text style={styles.name}>{personalInfo.name}</Text>
      <Text style={styles.bio}>{personalInfo.bio}</Text>
      <Text style={styles.details}>{personalInfo.location}</Text>
      <Text style={styles.details}>{personalInfo.email}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#6F7476',
    borderRadius: 8,
    margin: 16,
  },
 
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    color:"white"
  },
  bio: {
    fontSize: 16,
    marginBottom: 8,
    color:"white"
  },
  details: {
    fontSize: 14,
    color: '#555',
    marginBottom: 8,
    color:"white"
  },
});

export default PersonalInfo;
