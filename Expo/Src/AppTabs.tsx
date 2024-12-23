import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { useContext } from "react";
import Center from "./Center";
import { Button, Text } from "react-native";
import { AppParamList } from "./AppParamList";
import { AuthContext } from "./AuthProvider";

const Tabs = createBottomTabNavigator<AppParamList>();

function Home() {
  const { logout } = useContext(AuthContext);
  return (
    <Center>
      <Text>Home</Text>
      <Button title="Logout" onPress={() => logout()} />
    </Center>
  );
}
function Search() {
  return (
    <Center>
      <Text>Search</Text>
    </Center>
  );
}

const AppTabs = () => {
  return (
    <Tabs.Navigator>
      <Tabs.Screen name="Home" component={Home} />
      <Tabs.Screen name="Search" component={Search} />
    </Tabs.Navigator>
  );
};

export default AppTabs;
