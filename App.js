import { Image } from 'expo-image';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={estilos.container}>
      <View style={estilos.card}>
        <Image
          style={estilos.imagem}
          source="https://i.pinimg.com/736x/04/6a/07/046a07d96625333916e31bcc0b1ba064.jpg"       
        />
      </View>
      <View style={estilos.infos}>

      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#03500dff',
    alignItems: 'center',
    paddingTop: 10
  },
  card:{
    width: 250,
    height: 250,
    borderColor: '#000',
    borderWidth: 5,
    borderStyle: 'solid',
    borderRadius: '50%',
    padding:10,
    zIndex:1
  },
  imagem:{
    width: '100%',
    height: '100%',
    borderRadius: '50%'
  },
  infos:{
    width: '90%',
    height: 400,
    backgroundColor: '#430979ff',
    marginTop: -125,
    zIndex: 0
  }
});