// Calculator.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, } from 'react-native';

const Calculator = () => {
    const [input, setInput] = useState('');
    const [result, setResult] = useState('');

    const handlePress = () => {
        try {
            setResult(eval(input).toString());
        } catch (error) {
            setResult('Error');
        }
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                value={input}
                onChangeText={(text) => setInput(text)}
                placeholder="Enter expression"
                keyboardType="numeric"
            />
            <Button title="Calculate" onPress={handlePress} />
            <Text style={styles.result}>{result}</Text>
        </View>
    );
};

const styles = StyleSheet.create({

    button: {
        borderRadius: 50,
    },
    container: {
        padding: 20,
        backgroundColor: "#112A46",
        marginTop: 80,
        marginBottom: 40,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 3,
        borderRadius: 50,
        marginBottom: 10,
        paddingLeft: 10,

    },
    result: {
        marginTop: 10,
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default Calculator;
