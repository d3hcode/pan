import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={estilos.contanier}>
      <View style={estilos.area1}>
        <Text style={estilos.font}>S</Text>
        <Text style={estilos.font}>B</Text>
          <Text style={estilos.font}>B</Text>
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  contanier:{
    flex: 1,
    backgroundColor: '#4955c4ff',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  font:{
    fontSize: 80,
    color: '#fff',
    backgroundColor: '#3f9aa7ff',
    margin: 10,
    

    
  },
  area1:{    
    width: 370,
    backgroundColor: '#135886ff',
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
});
