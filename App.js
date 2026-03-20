import { Image } from 'expo-image';
import { StyleSheet, Text, View } from 'react-native';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

export default function App() {
  const size_icons = 38
  const color_icons = 'black'
  return (
    <View style={estilos.container}>
      <View style={estilos.card}>
        <Image
          style={estilos.imagem}
          source="https://i.pinimg.com/736x/04/6a/07/046a07d96625333916e31bcc0b1ba064.jpg"
        />
      </View>

      <View style={estilos.infos}>
        <View style={estilos.social}>
          <FontAwesome5 name="facebook" size={38} color="black" />
          <FontAwesome5 name="instagram" size={38} color="black" />
          <FontAwesome5 name="whatsapp" size={38} color="black" />
          <FontAwesome5 name="github" size={38} color="black" />
          <FontAwesome5 name="tiktok" size={38} color="black" />
        </View>
      </View>
      <Image style={estilos.imagem2}
        source="https://i.pinimg.com/736x/ba/87/a8/ba87a83d3b2a0fc3f29818427214239d.jpg"
      />

      <Image style={estilos.imagem2}
        source="https://i.pinimg.com/736x/ec/81/18/ec81185cbebdb6643d4e40f5646907bf.jpg"
      />
      <Image style={estilos.imagem2}
        source="hhttps://i.pinimg.com/736x/1e/13/3d/1e133d7dd4767b11645f1f65b9d25139.jpg"
      />
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#508858ff',
    alignItems: 'center',
    paddingTop: 10
  },
  card: {
    width: 250,
    height: 250,
    borderColor: '#000000ff',
    borderWidth: 5,
    borderStyle: 'solid',
    borderRadius: '50%',
    padding: 10,
    zIndex: 1
  },
  imagem: {
    width: '100%',
    height: '100%',
    borderRadius: '50%'
  },

  imagem2: {
    borderColor: '#e9d3d3ff',
    borderWidth: 5,
    borderStyle: 'solid',
    width: '30%',
    height: '20%',
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 5
    marginTop: 10,
  },


  infos: {
    width: '90%',
    backgroundColor: '#98a386ff',
    marginTop: -125,
    zIndex: 0
  },

  social: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 125,
    padding: 20
  }
})