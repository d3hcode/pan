import React from 'react';
import { View, Button, Image, Text } from 'react-native';
import { StyleSheet } from 'react-native';

export default function TelaInicial (props) {
  return (
    <View style={styles.container}>
      
      <View style={styles.container02} >
      <Text style={styles.textos}>SOBRE NÓS</Text>
      <Text style={styles.textos}>
        A Marial Coffee é uma cafeteria 
        que tem como objetivo proporcionar uma 
        experiência única aos amantes de café.</Text>
      <Text style={styles.textos}>
        Fundada em 2020, a Marial Coffee se destaca
         por oferecer uma variedade de cafés especiais, 
         preparados com grãos de alta qualidade e técnicas<Text style={styles.textos}> 
         de barista. Além disso, a cafeteria valoriza a sustentabilidade, utilizando práticas eco-friendly e apoiando produtores locais. Com um ambiente acolhedor e moderno, a Marial Coffee é o lugar perfeito para desfrutar de um café delicioso e relaxar com amigos ou trabalhar em um espaço inspirador.
      </Text>
      </Text>
        </View>
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
 container02: {
    backgroundColor: "#412402",
    padding: 20,
    borderRadius: 10,
    width: 500,
    height: 500,

    alignItems: "center",
},

  textos: {
    color: "#ffffffff",
    fontSize: 14,
    fontFamily: "Playfair",
    marginBottom: 20,
    padding: 10,

  },


  
});

