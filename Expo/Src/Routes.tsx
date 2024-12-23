import { NavigationContainer } from "@react-navigation/native";

import React, { useContext, useEffect, useState } from "react";
import { ActivityIndicator } from "react-native";
import Center from "./Center";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthContext } from "./AuthProvider";
import AppTabs from "./AppTabs";
import AuthStack from "./AuthStack";

const Routes = () => {
  const { user, login, logout } = useContext(AuthContext);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AsyncStorage.getItem("user")
      .then((userString) => {
        if (userString) {
          login();
        } else {
          setLoading(false);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  if (loading) {
    return (
      <Center>
        <ActivityIndicator size={"small"} />
      </Center>
    );
  }

  return (
    <NavigationContainer>
      {user ? <AppTabs /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default Routes;
