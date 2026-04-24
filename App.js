import { Image } from 'expo-image';
import { StyleSheet, Text, View } from 'react-native';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

export default function App() {
  const size_icons = 38
  const color_icons = 'black'
  return (
    <View style={estilos.container}>
      <View style={estilos.card}>
        <Image //foto de perfil
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
      </View >

      <View style={estilos.fotos}> 
         <Text style={estilos.textolinha}>_______________________________________________________________________________________</Text>
      <Image style={estilos.imagem2}// fotos da maomao01
        source="https://i.pinimg.com/736x/ba/87/a8/ba87a83d3b2a0fc3f29818427214239d.jpg"
      />
      <Image style={estilos.imagem3}//fotos da maomao02
        source="https://i.pinimg.com/736x/ec/81/18/ec81185cbebdb6643d4e40f5646907bf.jpg"
      />
      <Image style={estilos.imagem4} //fotos da maomao03
        source="https://i.pinimg.com/736x/23/7a/95/237a95635a5fe191c8a346c72d85cc95.jpg"
      />
      <Text style={estilos.textolinha}>__________________________________________________________________________________________</Text>
      <Image style={estilos.imagem5} //fotos da maomao04
        source="https://i.pinimg.com/736x/1a/75/d6/1a75d6c9ae2c2caabadbf0a8d3f89ac9.jpg"
      />
      <Image style={estilos.imagem6} //fotos da maomao04
        source="https://i.pinimg.com/736x/2b/1d/0a/2b1d0aea846d77d2e4878ea1442f7253.jpg"
      />
      <Image style={estilos.imagem7} //fotos da maomao04
        source="https://i.pinimg.com/736x/f5/a8/28/f5a828a168234888a8d1d8335abbd0e6.jpg"
      />
       <Text  style={estilos.textolinha}>__________________________________________________________________________</Text>
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffffff',
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

  textolinha: {
    color: '#000000ff',
    fontSize: 10,
    height:'flex', '1':
    minHeight, 20:
    marginTop, 5:
    textAlign, 'center'
  },

  imagem: {
    width: '100%',
    height: '100%',
    borderRadius: '50%'
  },


  fotos: {    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    width: '100%',
    height: '80%',
    padding: 10,
    margin:5 
  },
  imagem2: {
    borderColor: '#000000ff',
    borderWidth: 2,
    borderStyle: 'solid',
    width: '30%',
    height: '20%',
    padding: 10,
    marginTop: 20 

  },
   imagem3: {
   borderColor: '#000000ff',
    borderWidth: 2,
    borderStyle: 'solid',
    width: '30%',
    height: '20%',
    padding: 10,
    marginTop: 20

  },
   imagem4: {
    borderColor: '#000000ff',
    borderWidth: 2,
    borderStyle: 'solid',
    width: '30%',
    height: '20%',
    padding: 10,
    marginTop: 20

  }, imagem5: {
    borderColor: '#000000ff',
    borderWidth: 2,
    borderStyle: 'solid',
    width: '30%',
    height: '20%',
    padding: 10,
    marginTop: 20

  },
 imagem6: {
    borderColor: '#000000ff',
    borderWidth: 2,
    borderStyle: 'solid',
    width: '30%',
    height: '20%',
    padding: 10,
    marginTop: 20

  },
   imagem7: {
    borderColor: '#000000ff',
    borderWidth: 2,
    borderStyle: 'solid',
    width: '30%',
    height: '20%',
    padding: 10,
    marginTop: 20

  },

  infos: {
    width: '90%',
    backgroundColor: '#80a057ff',
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