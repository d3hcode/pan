import React from 'react';
import { View, Button, Image, Text } from 'react-native';
import { StyleSheet } from 'react-native';

export default function TelaInicial (props) {
  return (
    <View style={styles.container}>
      <Text>Eu amo caféeeeeee</Text>
      <Text style={styles.titulo}>Marial Coffee</Text>

      <Text style={styles.textos}>
        Os principais filmes da franquia estão divididos em e trilogias. Clique no botão a seguir para conferir.
      </Text>

      <Button title="Ver 1ª Trilogia" onPress = { () => props.navigation.navigate("Tela2") } color="#372d00" />
      <Button title="Ver 2ª Trilogia" onPress = { () => props.navigation.navigate("Tela3") } color="#372d00" />
      <Button title="Ver 3ª Trilogia" onPress = { () => props.navigation.navigate("Tela4") } color="#372d00" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3E9DC",
    justifyContent: "center",
    alignItems: "center",
  },

  titulo: {
    color: "#C08552",
    fontSize: 24,
    fontFamily: "Playfair",
  },

  textos: {
    color: "#C08552",
    fontSize: 16,
  },
});

