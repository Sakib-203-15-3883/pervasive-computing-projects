// Question.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Question = ({ question, options, onSelect }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.question}>{question}</Text>
      <View style={styles.optionsContainer}>
        {options.map((option, index) => (
          <View key={index} style={styles.option}>
            <Button title={option} onPress={() => onSelect(option)} />
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
     // Add vertical space between questions
  },
  question: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    
  },
  optionsContainer: {
    marginTop: 15,
    
  },
  option: {
    marginBottom: 10,
     // Add space between options
  },
});

export default Question;
