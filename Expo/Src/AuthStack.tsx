import { createStackNavigator } from "@react-navigation/stack";
import React, { useContext } from "react";
import { AuthNavRoute, AuthParamList } from "./AuthParamList";
import Center from "./Center";
import { Button, Text } from "react-native";
import { AuthContext } from "./AuthProvider";

const Stack = createStackNavigator<AuthParamList>();

function Login({ navigation, route }: AuthNavRoute<"Login">) {
  const { login } = useContext(AuthContext);
  return (
    <Center>
      <Text>Hello World</Text>
      <Button
        title="Go To Register"
        onPress={() => navigation.navigate("SignUp")}
      />
      <Button title="Log Me In" onPress={() => login()} />
    </Center>
  );
}
function SignUP({ navigation }: AuthNavRoute<"SignUp">) {
  return (
    <Center>
      <Text>Register</Text>
      <Button
        title="Go To Login"
        onPress={() => navigation.navigate("Login")}
      />
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </Center>
  );
}
const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerTitle: "نسجيل الدخول" }}
      />
      <Stack.Screen name="SignUp" component={SignUP} />
    </Stack.Navigator>
  );
};

export default AuthStack;
