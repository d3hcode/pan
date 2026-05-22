
import React from "react";
 import { NavigationContainer } from "@react-navigation/native";
 import { createStackNavigator } from "@react-navigation/stack";

 import TelaInicial from "./componentes/TelaInicial";
 import Tela2 from "./componentes/Tela2";
 import Tela3 from "./componentes/Tela3";
 import Tela4 from "./componentes/Tela4";
import { View } from "react-native-web";

 const Stack = createStackNavigator();

 export default function App(){
  return(
<NavigationContainer>
<Stack.Navigator>
 
 <Stack.Screen name="TelaInicial" component={TelaInicial}/>
  <Stack.Screen name="Tela2" component={Tela2}/>
  <Stack.Screen name="Tela3" component={Tela3}/>
  <Stack.Screen name="Tela4" component={Tela4}/>

</Stack.Navigator>
  
</NavigationContainer>

  );
 }

 