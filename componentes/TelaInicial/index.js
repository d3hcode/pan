import React from 'react';
import { View, Button, Image, Text } from 'react-native';
// import logo from '../../assets/gatoIcon.jpg';
 import styles from '../styles';

export default function TelaInicial (props) {
  return (
    <View>
      <Text>Star Wars ordem cronológica</Text>
      <Text style={styles.titulo}>Meu Título Aqui</Text>

      <Text style={styles.textos}>
        Os principais filmes da franquia estão divididos em e trilogias. Clique no botão a seguir para conferir.
      </Text>

      <Button title="Ver 1ª Trilogia" onPress = { () => props.navigation.navigate("tela2") } color="#372d00" />
      <Button title="Ver 2ª Trilogia" onPress = { () => props.navigation.navigate("tela3") } color="#372d00" />
      <Button title="Ver 3ª Trilogia" onPress = { () => props.navigation.navigate("tela4") } color="#372d00" />
    </View>
  )

export default function TelaInicial() {
  return (
    // A View é como uma "caixa". O estilo container define o fundo.
    <View style={styles.container}>
      <Text style={styles.texto}>Minha Tela Roxa!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Faz a View ocupar a tela inteira
    backgroundColor: '#6A0DAD', // Aqui você coloca o código da cor roxa
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    color: '#fff', // Texto branco para contrastar com o roxo
    fontSize: 20,
  }
});
}