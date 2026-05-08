import react from "react";
 import { NavigationContainer } from "@react-navigation/native";
 import { createStackNavigator } from "@react-navigation/stack";

 import tela1 from "./componentes/tela1";
 import tela2 from "./componentes/tela2";
 import tela3 from "./componentes/tela3";
 import tela4 from "./componentes/tela4";

 const Stack = createStackNavigator();

 export default function app(){
  return(
<NavigationContainer>
<Stack.Navigator>
 
 <Stack.Screen name="tela1" component={tela1}/>
  <Stack.Screen name="tela2" component={tela2}/>
  <Stack.Screen name="tela3" component={tela3}/>
  <Stack.Screen name="tela4" component={tela4}/>

</Stack.Navigator>
  
</NavigationContainer>


  );
 }

 