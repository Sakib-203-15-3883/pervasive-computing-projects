// src/components/Portfolio.js
import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import ProjectCard from './components/ProjectCard';
import PersonalInfo from "./components/PersonalInfo"

const Portfolio = () => {
    const projects = [
        {
          title: 'Brike Breaker Game ',
          description: 'This game allows users to play on any device through the browser. Mobile users can utilize touch input via virtual buttons, while laptop and desktop users can use keyboard input.',
          image: 'https://placekitten.com/300/150',
          github: 'https://github.com/yourusername/project1',
          live: 'https://www.example.com/project1',
          youtube: 'https://www.youtube.com/watch?v=yourvideoid',
        },
        // Add more projects as needed
        {
            title: 'Tic tac toe game ',
            description: 'This is a simple implementation of the Tic Tac Toe game in Vanilla JavaScript. It allows two players to play the game on a web browser.',
            image: 'https://placekitten.com/300/150',
            github: 'https://github.com/yourusername/project1',
            live: 'https://www.example.com/project1',
            youtube: 'https://www.youtube.com/watch?v=yourvideoid',
          },

          {
            title: 'FullStack Blog App',
            description: 'Built an app that allows users to upload posts along with an image, search for content, read others posts,Delete own posts and real time comment functionality. Also, it contains some functionalities like authentication, and dark mode.',
            image: 'https://placekitten.com/300/150',
            github: 'https://github.com/yourusername/project1',
            live: 'https://www.example.com/project1',
            youtube: 'https://www.youtube.com/watch?v=yourvideoid',
          },
      ];


     
      
  return (
    <ScrollView contentContainerStyle={styles.container}>
      
   
      <View style={styles.projectsContainer}>
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor:"#D9DFE1",
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  projectsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});

export default Portfolio;
