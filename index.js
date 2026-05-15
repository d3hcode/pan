import React from "react";
 import { NavigationContainer } from "@react-navigation/native";
 import { createStackNavigator } from "@react-navigation/stack";

 import TelaInicial from "./componentes/TelaInicial";
 import Tela2 from "./componentes/Tela2";
 import Tela3 from "./componentes/Tela3";
 import Tela4 from "./componentes/Tela4";

 const Stack = CreateStackNavigator();

 export default function app(){
  return(
<NavigationContainer>
<Stack.Navigator>
 
 <Stack.Screen name="Tela Inicial" component={TelaInicial}/>
  <Stack.Screen name="Tela 2" component={Tela2}/>
  <Stack.Screen name="Tela 3" component={Tela3}/>
  <Stack.Screen name="Tela 4" component={Tela4}/>

</Stack.Navigator>
  
</NavigationContainer>


  );
 }

 