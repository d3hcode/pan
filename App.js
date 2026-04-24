import { Image } from 'expo-image';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

export default function App() {
  const size_icons = 38
  const color_icons = 'black'
  return (
        <ScrollView>
    <View style={estilos.container}>
      <View style={estilos.card}>
        <Image //foto de perfil
          style={estilos.imagem}
          source="https://i.pinimg.com/736x/04/6a/07/046a07d96625333916e31bcc0b1ba064.jpg"
        />
      </View>


      <View style={estilos.infos}>
        <View style={estilos.social}>
          <FontAwesome5 name="facebook" size={38} color="darkgreen" />
          <FontAwesome5 name="instagram" size={38} color="darkgreen" />
          <FontAwesome5 name="whatsapp" size={38} color="darkgreen" />
          <FontAwesome5 name="github" size={38} color="darkgreen" />
          <FontAwesome5 name="tiktok" size={38} color="darkgreen" />
        </View>
      </View >

      <View style={estilos.fotos}>
        <Text style={estilos.textolinha}>___________________________________ <Text style={estilos.textolinha1}>AMIGOS</Text>  ____________________________________</Text>
        <Image style={estilos.imagem5} //fotos da maomao04
          source="https://i.pinimg.com/736x/16/28/1f/16281ff998dba7ce040fd2ca4a93581e.jpg"
        />
        <Image style={estilos.imagem6} //fotos da maomao04
          source="https://i.pinimg.com/736x/60/d4/ae/60d4ae076420a1805397d29c05ec7788.jpg"
        />
        <Image style={estilos.imagem7} //fotos da maomao04
          source="https://i.pinimg.com/736x/63/22/d0/6322d0d1fa14032a81367467911bb3e6.jpg"
        />


        <Image style={estilos.imagem2}// fotos da maomao01
          source="https://i.pinimg.com/736x/ba/87/a8/ba87a83d3b2a0fc3f29818427214239d.jpg"
        />
        <Image style={estilos.imagem3}//fotos da maomao02
          source="https://i.pinimg.com/736x/ec/81/18/ec81185cbebdb6643d4e40f5646907bf.jpg"
        />
        <Image style={estilos.imagem2}// fotos da maomao01
          source="https://i.pinimg.com/736x/ba/87/a8/ba87a83d3b2a0fc3f29818427214239d.jpg"
        />
        <Image style={estilos.imagem3}//fotos da maomao02
          source="https://i.pinimg.com/736x/ec/81/18/ec81185cbebdb6643d4e40f5646907bf.jpg"
        />
        <Image style={estilos.imagem2}// fotos da maomao01
          source="https://i.pinimg.com/736x/ba/87/a8/ba87a83d3b2a0fc3f29818427214239d.jpg"
        />
        <Image style={estilos.imagem3}//fotos da maomao02
          source="https://i.pinimg.com/736x/ec/81/18/ec81185cbebdb6643d4e40f5646907bf.jpg"
        />
        <Image style={estilos.imagem2}// fotos da maomao01
          source="https://i.pinimg.com/736x/ba/87/a8/ba87a83d3b2a0fc3f29818427214239d.jpg"
        />
        <Image style={estilos.imagem3}//fotos da maomao02
          source="https://i.pinimg.com/736x/ec/81/18/ec81185cbebdb6643d4e40f5646907bf.jpg"
        />

      </View>
    </View>
      </ScrollView>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#bbddafff',
    alignItems: 'center',
    paddingTop: 10
  },
  card: {
    width: 250,
    height: 250,
    borderColor: '#0b6421ff',
    borderWidth: 5,
    borderStyle: 'solid',
    borderRadius: '50%',
    padding: 10,
    zIndex: 1
  },

  textolinha: {
    color: '#000000ff',
    fontSize: 10,
    height: 'flex', '1': 1,
    marginTop: 5,
    textAlign: 'center',
    minHeight: 20
  },

  textolinha1: {
    color: '#000000ff',
    fontSize: 19,
    height: 'flex', '1': 1,
    marginTop: 5,
    textAlign: 'center',
    minHeight: 20,
    fontFamily: 'Arial',
  },

  imagem: {
    width: '100%',
    height: '100%',
    borderRadius: '50%'
  },


  fotos: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    width: '100%',
    height: '80%',
    padding: 10,
    margin: 5
  },
  imagem2: {
    borderColor: '#000000ff',
    borderWidth: 1,
    borderStyle: 'solid',
    width: '50%',
    height: '40%',
    padding: 10,
    marginTop: 20,

  },
  imagem3: {
    borderColor: '#000000ff',
    borderWidth: 1,
    borderStyle: 'solid',
    width: '50%',
    height: '40%',
    padding: 10,
    marginTop: 20

}, imagem5: {
  borderColor: '#000000ff',
  borderWidth: 1,
  borderStyle: 'solid',
  width: '30%',
  height: '20%',
  padding: 10,
  marginTop: 10,
  borderRadius: '50%'

},
  imagem6: {
  borderColor: '#000000ff',
  borderWidth: 1,
  borderStyle: 'solid',
  width: '30%',
  height: '20%',
  padding: 10,
  marginTop: 10,
  borderRadius: '48%'

},

  imagem7: {
  borderColor: '#000000ff',
  borderWidth: 1,
  borderStyle: 'solid',
  width: '30%',
  height: '20%',
  padding: 10,
  marginTop: 10,
  borderRadius: '50%'

},

  infos: {
  width: '90%',
  backgroundColor: '#ffffffff',
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