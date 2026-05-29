import React from 'react';
import { View, Button, Image, Text } from 'react-native';
import { StyleSheet } from 'react-native';

export default function TelaInicial (props) {
  return (
    <View style={styles.container}>
      <Image source={require("../../assets/bear.jpg")} style={{ width: 280, height: 280, marginBottom: 20, borderRadius: 900 }} />
      <Text style={styles.titulo}>Marial Coffee</Text>

      <Text style={styles.textos}>
        コーヒー
      </Text>

      <Button title="PEDIR AGORA" onPress = { () => props.navigation.navigate("Tela2") } color="#412402" />
      <Button title="      LOGIN      " onPress = { () => props.navigation.navigate("Tela3") } color="#412402" />
      <Button title="      SOBRE      " onPress = { () => props.navigation.navigate("Tela4") } color="#412402" />
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

  titulo: {
    color: "#412402",
    fontSize: 60,
    fontFamily: "Playfair",
    padding: 10, },

  textos: {
    color: "#493309ff",
    fontSize: 30,
    fontFamily: "Playfair",
    marginBottom: 20,

  },


  
});

