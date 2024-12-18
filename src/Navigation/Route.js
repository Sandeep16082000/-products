
import { NavigationContainer } from "@react-navigation/native";
import 'react-native-gesture-handler';

import { } from 'react-native';
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Login from "../Screen/Login";
import Home from "../Screen/Home";
import AddProduct from "../Screen/AddProduct";

const stack = createNativeStackNavigator();
const Route = () => {
  return (
    <NavigationContainer>
      <stack.Navigator screenOptions={{ headerShown: false }}>
        <stack.Screen name="Login" component={Login} />
        <stack.Screen name="Home" component={Home} />
        <stack.Screen name="AddProduct" component={AddProduct}/>
      </stack.Navigator>
    </NavigationContainer>
  )
};
export default Route;