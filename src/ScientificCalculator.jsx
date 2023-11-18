import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';

const ScientificCalculator = () => {
  const [input, setInput] = useState('');

  const handlePress = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  const handleClear = () => {
    setInput('');
  };

  const handleCalculate = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput('Error');
    }
  };

  const handleSqrt = () => {
    try {
      setInput(Math.sqrt(eval(input)).toString());
    } catch (error) {
      setInput('Error');
    }
  };

  const handlePower = () => {
    try {
      setInput(Math.pow(eval(input), 2).toString());
    } catch (error) {
      setInput('Error');
    }
  };

  const handleSin = () => {
    try {
      setInput(Math.sin((eval(input) * Math.PI) / 180).toString());
    } catch (error) {
      setInput('Error');
    }
  };

  const handleCos = () => {
    try {
      setInput(Math.cos((eval(input) * Math.PI) / 180).toString());
    } catch (error) {
      setInput('Error');
    }
  };

  const handleTan = () => {
    try {
      setInput(Math.tan((eval(input) * Math.PI) / 180).toString());
    } catch (error) {
      setInput('Error');
    }
  };

  const handleBackspace = () => {
    setInput((prevInput) => prevInput.slice(0, -1));
  };

  return (
    <ScrollView style={styles.container}>
      <TextInput
        style={styles.input}
        value={input}
        editable={false}
        placeholder="0"
        placeholderTextColor="#888"
      />
      <View style={styles.buttonRow}>
        <Button title="7" onPress={() => handlePress('7')} />
        <Button title="8" onPress={() => handlePress('8')} />
        <Button title="9" onPress={() => handlePress('9')} />
        <Button title="C" onPress={handleClear} color="#FF4F4F" />
      </View>
      <View style={styles.buttonRow}>
        <Button title="4" onPress={() => handlePress('4')} />
        <Button title="5" onPress={() => handlePress('5')} />
        <Button title="6" onPress={() => handlePress('6')} />
        <Button title="/" onPress={() => handlePress('/')} color="#FF9F4F" />
      </View>
      <View style={styles.buttonRow}>
        <Button title="1" onPress={() => handlePress('1')} />
        <Button title="2" onPress={() => handlePress('2')} />
        <Button title="3" onPress={() => handlePress('3')} />
        <Button title="-" onPress={() => handlePress('-')} color="#FF9F4F" />
      </View>
      <View style={styles.buttonRow}>
        <Button title="0" onPress={() => handlePress('0')} />
        <Button title="." onPress={() => handlePress('.')} />
        <Button title="=" onPress={handleCalculate} color="#4FFF80" />
        <Button title="+" onPress={() => handlePress('+')} color="#FF9F4F" />
      </View>
      <View style={styles.advancedButtonRow}>
        <Button title="√" onPress={handleSqrt} color="#4FFF80" />
        <Button title="x²" onPress={handlePower} color="#4FFF80" />
        <Button title="sin" onPress={handleSin} color="#4FFF80" />
        <Button title="cos" onPress={handleCos} color="#4FFF80" />
        <Button title="tan" onPress={handleTan} color="#4FFF80" />
        <Button title="⌫" onPress={handleBackspace} color="#FF4F4F" />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#282c34',
  },
  input: {
    height: 40,
    borderColor: '#61dafb',
    borderWidth: 1,
    marginBottom: 10,
    textAlign: 'right',
    paddingRight: 10,
    color: '#FFF',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  advancedButtonRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
});

export default ScientificCalculator;
