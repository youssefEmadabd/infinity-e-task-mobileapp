import * as React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  Login,
  Profile,
  Register
} from "./src/screens/index";
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Profile" title="profile" component={Profile} />
        <Stack.Screen name="Register" title="Register" component={Register} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
