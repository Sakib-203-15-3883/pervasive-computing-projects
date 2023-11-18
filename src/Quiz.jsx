// Quiz.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Question from './Question';

const Quiz = ({ questions }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswer = (selectedOption) => {
    if (selectedOption === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Quiz completed
      alert(`Quiz completed! Your score: ${score}`);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.questionNumber}>
        Question {currentQuestion + 1} of {questions.length}
      </Text>
      <Text style={styles.score}>Score: {score}</Text>
      <Question
        question={questions[currentQuestion].question}
        options={questions[currentQuestion].options}
        onSelect={handleAnswer}
        optionContainerStyle={styles.optionContainer}
      />
      {currentQuestion === questions.length - 1 && (
        <Button title="Restart Quiz" onPress={restartQuiz} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'navy', // Background color set to navyblue
  },
  questionNumber: {
    fontSize: 16,
    color: 'white',
    marginBottom: 10,
  },
  score: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white',
     // Text color set to white for better contrast
  },
  optionContainer: {
    marginTop: 10,
   // Add a margin between options
  },
});

export default Quiz;
