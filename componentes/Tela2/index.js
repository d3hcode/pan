import React from 'react';
import { View, Button, Image, Text } from 'react-native';
import { StyleSheet } from 'react-native';

export default function TelaInicial (props) {
  return (
    <View style={styles.container}>
      <Image source={require("../../assets/coffe01.jpg")} style={{ width: 230, height: 230, marginBottom: 10, borderRadius: 50 }} />
      <Text style={styles.textos}>Café Creme</Text>
      <Image source={require("../../assets/coffe02.jpg")} style={{ width: 230, height: 230, marginBottom: 10, borderRadius: 50 }} />
      <Text style={styles.textos}>Café Latte</Text>
      <Image source={require("../../assets/coffe03.jpg")} style={{ width: 230, height: 230, marginBottom: 10, borderRadius: 50 }} />
      <Text style={styles.textos}>Café Expresso</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ede1d5",
    justifyContent: "center",
    alignItems: "center",
  },


  textos: {
    color: "#493309ff",
    fontSize: 31,
    fontFamily: "Playfair",
    marginBottom: 20,

  },


  
});

