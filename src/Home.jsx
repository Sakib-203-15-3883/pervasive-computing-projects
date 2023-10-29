import React, { useState } from 'react';
import { View, Text, ImageBackground, Image, TextInput,TouchableOpacity,FlatList } from 'react-native';
import { deviceWidth, deviceHeight } from './Dimensions';
import Icon from 'react-native-vector-icons/Ionicons';
import Cards from './Cards';

const Home = (props) => {

let [city,setCity] = useState("");

  const cities = [
    {
      name:"Dhaka",
      image:require('../assets/images/dark1.jpg')

    },
    {
      name:"New Delhi",
      image:require("../assets/images/image3.jpg")
    },
    {
      name:"London",
      image:require("../assets/images/image4.jpg")
    },
    {
      name:"Moscow",
      image:require("../assets/images/image2.jpg")
    }
  ]





  return (

    <View>

      {/* Background image  */}


      <ImageBackground
        source={require('../assets/images/dark2.jpg')}
        style={{
          height: deviceHeight,
          width: deviceWidth,
        }}
        imageStyle={{ opacity: 0.9, backgroundColor: 'black' }}
      />



      {/* For header icon and image  */}


      <View style={{
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

        <View style={{
          paddingHorizontal: 30,
          marginTop: 50,
          rowGap: 10,
        }}>
          <Text style={{ fontSize: 30, color: "white" }} >Hello Good People </Text>

          <Text style={{
            fontSize: 18,
            color: "white",
            fontWeight: "bold",


          }} >

           Get weather details by city name

          </Text>

        </View>

        {/* Search part : For a input field  and a search icon */}

        <View style={{
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          borderRadius: 30,
          borderWidth: 3,
          borderColor: "white",
          marginTop: 20,


        }}>
          < TextInput
            placeholder='Search City'
            placeholderTextColor="white"
            style={{ paddingHorizontal: 10, color: "white" ,fontWeight:"bold",fontSize:15}}

            value = {city}
            onChangeText={(value)=>{setCity(value)}}

          />

          <TouchableOpacity onPress={() => props.navigation.navigate('Details',{name:city})}>
          < Icon name="search" size={28} color="white" />

          </TouchableOpacity>
        </View>

         {/* saved location */}


        <Text style={{color:"white",fontSize:27, paddingHorizontal:10,marginTop:220,marginBottom:20,fontWeight:"bold",display:"flex",textAlign:"center"}}> Locations </Text>

        <FlatList
        horizontal

        data={cities} renderItem={({item})=>{
          return(
            <Cards name={item.name} image={item.image}
            navigation={props.navigation}
            />
          )
        }}
        
        />


      </View>
    </View>
  );
};

export default Home;
