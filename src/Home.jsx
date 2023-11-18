import React, { useState } from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
  ScrollView, // Import ScrollView
} from 'react-native';
import Quiz from './Quiz';
import { deviceWidth, deviceHeight } from './Dimensions';
import Icon from 'react-native-vector-icons/Ionicons';
import Cards from './Cards';
import Calculator from './Calculator';
import ScientificCalculator from './ScientificCalculator'
import Portfolio from "./Portfolio"
import PersonalInfo from "./components/PersonalInfo"


const questions = [
  {
    question: 'What does the === operator do in JavaScript?',
    options: ['a) Checks if two values are equal in value and type.', 'b) Assigns a value to a variable.', 'c) Checks if two values are equal in value but not necessarily in type.'],
    correctAnswer: 'a) Checks if two values are equal in value and type.',
  },
  {
    question: 'What is the purpose of the Array.map method in JavaScript?',
    options: ['a) To filter elements in an array.', 'b) To create a new array with the results of calling a provided function on every element in the array.', 'c) To sort the elements of an array.'],
    correctAnswer: 'b) To create a new array with the results of calling a provided function on every element in the array.',
  },
  {
    question: 'What is the purpose of the Array.reduce method in JavaScript?',
    options: ['a) To create a new array with the results of calling a provided function on every element in the array.', 'b) To filter elements in an array based on a provided condition.', 'c) To reduce the array to a single value.'],
    correctAnswer: 'c) To reduce the array to a single value.',
  },
  {
    question: 'What is the role of the Promise object in JavaScript?',
    options: ['a) Promises can only be rejected, not resolved.', 'b) Promises represent a value that may be available now, in the future, or never.', 'Madrid'],
    correctAnswer: 'b) Promises represent a value that may be available now, in the future, or never.',
  },
  
  // Add more questions as needed
];

















const Home = (props) => {
  let [city, setCity] = useState('');

  
  const cities = [
    {
      name: 'Dhaka',
      image: require('../assets/images/dark1.jpg'),
    },
    {
      name: 'New Delhi',
      image: require('../assets/images/image3.jpg'),
    },
    {
      name: 'London',
      image: require('../assets/images/image4.jpg'),
    },
    {
      name: 'Moscow',
      image: require('../assets/images/image2.jpg'),
    },
  ];

  return (
    <ScrollView>

<Text style={{ color: "black", fontSize: 26, fontWeight: "bold", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", marginTop: 30,  marginBottom:20,}}>Weather App</Text>
      {/* Wrap your entire content in ScrollView */}
      <View>
        {/* Background image */}
        <ImageBackground
          source={require('../assets/images/dark2.jpg')}
          style={{
            height: deviceHeight,
            width: deviceWidth,
          }}
          imageStyle={{ opacity: 0.9, backgroundColor: 'black' }}
        />

        {/* For header icon and image */}
        <View
          style={{
            position: 'absolute',
            paddingVertical: 20,
            paddingHorizontal: 15,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: deviceWidth - 30,
            }}>
            <Icon name="menu" size={46} color="white" />
            <Image
              source={require('../assets/images/profile-image.jpg')}
              style={{ height: 46, width: 46, borderRadius: 50 }}
            />
          </View>

          {/* For  features section */}
          <View
            style={{
              paddingHorizontal: 30,
              marginTop: 50,
              rowGap: 10,
            }}>
            <Text style={{ fontSize: 30, color: 'white' }}>
              Hello Good People
            </Text>

            <Text
              style={{
                fontSize: 18,
                color: 'white',
                fontWeight: 'bold',
              }}>
              Get weather details by city name
            </Text>


          </View>

          {/* Search part: For an input field and a search icon */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'center',
              borderRadius: 30,
              borderWidth: 3,
              borderColor: 'white',
              marginTop: 20,
            }}>
            <TextInput
              placeholder="Search City"
              placeholderTextColor="white"
              style={{
                paddingHorizontal: 10,
                color: 'white',
                fontWeight: 'bold',
                fontSize: 15,
              }}
              value={city}
              onChangeText={(value) => {
                setCity(value);
              }}
            />

            <TouchableOpacity
              onPress={() => props.navigation.navigate('Details', { name: city })}>
              <Icon name="search" size={28} color="white" />
            </TouchableOpacity>
          </View>

          {/* Saved location */}
          <Text
            style={{
              color: 'white',
              fontSize: 27,
              paddingHorizontal: 10,
              marginTop: 180,
              marginBottom: 10,
              fontWeight: 'bold',
              display: 'flex',
              textAlign: 'center',
            }}>
            Locations
          </Text>

          <FlatList
            horizontal
            data={cities}
            renderItem={({ item }) => {
              return (
                <Cards
                  name={item.name}
                  image={item.image}
                  navigation={props.navigation}
                />
              );
            }}
          />

        </View>

      </View>


      <Text style={{ color: "black", fontSize: 26, fontWeight: "bold", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", marginTop: 20, marginBottom: 20, }}>Quiz App</Text>


     
      
      <Quiz questions={questions}   />


      <Text style={{ color: "black", fontSize: 26, fontWeight: "bold", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", marginTop: 20, marginBottom: 20, }}>scientific calculator</Text>


      <ScientificCalculator/>


      <Text style={{ color: "black", fontSize: 26, fontWeight: "bold", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", marginTop: 20, marginBottom: 20, }}>Profile App </Text>
      <PersonalInfo />
      <Text style={{ color: "black", fontSize: 26, fontWeight: "bold", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", marginTop: 20, marginBottom: -40, }}>Some of my Projects</Text>
      <Portfolio  />



      <Text style={{ color: "black", fontSize: 26, fontWeight: "bold", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", marginTop: 20, marginBottom: -40, }}>Basic Claculator</Text>




    


      <Calculator />



    </ScrollView>
  );
};

export default Home;
