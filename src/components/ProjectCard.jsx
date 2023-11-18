// src/components/ProjectCard.js
import React from 'react';
import { View, Text, Image, TouchableOpacity, Linking, StyleSheet } from 'react-native';

const ProjectCard = ({ project }) => {
  const openLink = (url) => {
    Linking.openURL(url).catch((err) => console.error("Couldn't open link", err));
  };

  return (
    <TouchableOpacity style={styles.card} onPress={() => openLink(project.live)}>
      <Image source={{ uri: project.image }} style={styles.image} />
      <View style={styles.cardContent}>
        <Text style={styles.title}>{project.title}</Text>
        <Text style={styles.description}>{project.description}</Text>
        <View style={styles.links}>
          {project.github && (
            <TouchableOpacity onPress={() => openLink(project.github)} style={styles.linkButton}>
              <Text style={styles.linkText}>GitHub</Text>
            </TouchableOpacity>
          )}
          {project.live && (
            <TouchableOpacity onPress={() => openLink(project.live)} style={styles.linkButton}>
              <Text style={styles.linkText}>Live</Text>
            </TouchableOpacity>
          )}
          {project.youtube && (
            <TouchableOpacity onPress={() => openLink(project.youtube)} style={styles.linkButton}>
              <Text style={styles.linkText}>YouTube</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    margin: 8,
    overflow: 'hidden',
    elevation: 2,
  },
  image: {
    height: 150,
    resizeMode: 'cover',
  },
  cardContent: {
    padding: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color:"black"
  },
  description: {
    fontSize: 16,
    color: '#555',
    marginBottom: 8,
  },
  links: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap:40,
  },
  linkButton: {
    backgroundColor: '#00f',
    padding: 8,
    borderRadius: 4,
    marginTop: 8,
  },
  linkText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default ProjectCard;
