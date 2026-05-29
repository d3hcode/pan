import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { View } from "react-native-web";
import { Entypo, FontAwesome } from '@expo/vector-icons';
 
const Stack = createStackNavigator();

 export default function App(){
  return(
    <View style={ estilos.container }>
      <Text style={ estilos.texto }>Casa (home)</Text>
      <Entypo name="home" size={ 24 } color="black" />

      <Text style={ estilos.texto }>Usuário (user)</Text>
      <FontAwesome name="user" size={ 24 } color="black" />
    </View>


  );
 }

 