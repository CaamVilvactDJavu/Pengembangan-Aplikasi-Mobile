import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Search from "./pages/Pencarian/index.js";
import { NavigationContainer } from "@react-navigation/native";
import { Component } from "react";
import SearchResult from "./pages/HasilPencarian/index.js";

const options = { headerShown: false };
const Stack = createNativeStackNavigator();

class Navigator extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Search" screenOptions={options}>
          <Stack.Screen component={Search} name="Search" />
          <Stack.Screen component={SearchResult} name="SearchResult" />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default Navigator;
